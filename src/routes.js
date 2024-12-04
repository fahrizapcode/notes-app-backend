import {
  addNoteHandler,
  getlAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} from './handler.js';

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getlAllNotesHandler,
    options: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id},',
    handler: deleteNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  },
];

export default routes;
