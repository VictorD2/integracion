import App from '@src/app';
import ClsDBConexion from '@class/ClsBDConexion';

async function main() {
  try {
    ClsDBConexion.flag = 1;
    await ClsDBConexion.connectBD();
    const app = new App();
    await app.listen();
  } catch (error) {
    console.log(error);
  }
}

main();
