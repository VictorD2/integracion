import { Pool } from 'mysql2/promise';
import { write } from '@lib/helpers';
import connect from '@src/database';

/*
  Description: This class is for DataBase Connection
*/
class ClsBDConexion {
  // for querys
  public conn!: Pool;

  public flag: number;

  constructor() {
    this.flag = 0;
  }

  /*
    Description: The porpuse of this method is for to connect to DataBase
  */
  async connectBD() {
    try {
      if (this.flag === 0) return;
      this.conn = await connect();
      await this.conn.getConnection();
      write('Database connected', 'green');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      write(`Code: ${error.code}`, 'red');
      write(`Message: ${error.sqlMessage}`, 'red');
    }
  }

  /*
    Description: The porpuse of this method is to end the connection to DataBase by Sequelize
  */

  async endConnection() {
    await this.conn.end();
    write('Database closed', 'red');
  }
}

export default new ClsBDConexion();
