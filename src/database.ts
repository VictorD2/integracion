import { createPool } from 'mysql2/promise';
import config from '@config/config';

async function connect() {
  const connection = await createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port,
    connectionLimit: 10,
    multipleStatements: true,
  });
  return connection;
}

export default connect;