import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',

    routes: {
      // penyebab permintaan ditolak oleh cors adalah ketika kita memiliki 2 origin atau lebih yang berbeda, sehingga kita perlu mengaturnya disini
      cors: {
        origin: ['*'], // Origin yang diperbolehkan
        // headers: ['Accept', 'Authorization', 'Content-Type', 'If-None-Match'],
        // credentials: true, // Pastikan cookie dapat dikirim jika diperlukan
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
