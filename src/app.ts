import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import * as http from 'http';
import IndexRoutes from '@routes/index.routes';
import ProductRoutes from '@routes/product.routes';
import { boomErrorHandler, errorHandler, logErrors } from '@lib/helpers';
import ClsDBConexion from '@class/ClsBDConexion';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User {
      vendedorId: number;
      rol: string;
    }
  }
}

class App {
  private app: Application;

  private server!: http.Server;

  private port?: number | string;

  constructor(port?: number | string) {
    this.port = port;
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  async closeApp() {
    this.server.close();
    await ClsDBConexion.endConnection();
  }

  getApi() {
    return this.app;
  }

  // Settings
  async settings() {
    dotenv.config();
    this.app.set('port', this.port || Number(process.env.PORT) || 4000);
  }

  // Middlewares
  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(express.static(path.join(__dirname, '/public')));
    this.app.use(express.static(path.join(__dirname, '/public/out')));
  }

  // Routes
  routes() {
    this.app.use('/api/v1/product', ProductRoutes);
    this.app.use(IndexRoutes);
    this.app.use(logErrors);
    this.app.use(boomErrorHandler);
    this.app.use(errorHandler);
  }

  async listen() {
    this.server = await this.app.listen(this.app.get('port'));
    console.log('Server on port ', this.app.get('port'));
    return this.server;
  }
}

export default App;
