import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'], // Jangan gunakan '*' di produksi, ganti dengan origin yang diperbolehkan
      },
    },
  });

  server.route(routes);

  try {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

init();
