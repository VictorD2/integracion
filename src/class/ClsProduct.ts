import { FieldPacket, RowDataPacket } from 'mysql2';
import IProduct from '@interfaces/IProduct';
import ClsBDConexion from './ClsBDConexion';

/* eslint-disable @typescript-eslint/no-explicit-any */
class ClsProduct {
  static async getProducts(query: any): Promise<{ cantidad: number; products: IProduct[] }> {
    const { limit, page, filter } = query;
    const limite = Number(limit);
    const pagina = Number(page);
    const filtro = filter as string;
    let sqlCount = '';
    let sqlProduct = '';
    if (filtro !== '' && filtro !== undefined) {
      sqlCount = `SELECT COUNT(*) as 'cantidad' FROM productos WHERE nombre like '%${filtro}%'`;
      sqlProduct = `SELECT 
      id_producto 'id',
      nombre 'name',
      categoria 'category',
      marca 'brand',
      precio_Venta 'price' 
      FROM productos WHERE nombre like '%${filtro}%' limit ${limite} offset ${(pagina - 1) * limite}`;
      const [resCount]: [RowDataPacket[], FieldPacket[]] = await ClsBDConexion.conn.query(sqlCount);
      const [resProducts]: [RowDataPacket[], FieldPacket[]] = await ClsBDConexion.conn.query(sqlProduct);
      return { cantidad: resCount[0].cantidad, products: resProducts as IProduct[] };
    }
    sqlCount = `SELECT COUNT(*) as 'cantidad' FROM productos`;
    sqlProduct = `SELECT 
    id_producto 'id',
    nombre 'name',
    categoria 'category',
    marca 'brand',
    precio_Venta 'price' 
    FROM productos limit ${limite} offset ${(pagina - 1) * limite}`;
    const [resCount]: [RowDataPacket[], FieldPacket[]] = await ClsBDConexion.conn.query(sqlCount);
    const [resProducts]: [RowDataPacket[], FieldPacket[]] = await ClsBDConexion.conn.query(sqlProduct);
    return { cantidad: resCount[0].cantidad, products: resProducts as IProduct[] };
  }
}

export default ClsProduct;
