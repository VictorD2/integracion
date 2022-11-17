/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import boom from '@hapi/boom';
import ClsProduct from '@class/ClsProduct';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cantidad, products } = await ClsProduct.getProducts(req.query);
    return res.json({ success: 'Datos obtenidos', cantidad, products }).status(200);
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};

export const ejemplo2 = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const solicitudes = await ClsSolicitud.getNews();
    return res.json({ success: 'Datos obtenidos' }).status(200);
  } catch (error: any) {
    return next(boom.badRequest(error.message));
  }
};
