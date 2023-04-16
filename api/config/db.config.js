const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/iron.booking';

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Succescully connected to the database ${MONGODB_URI}`))
  .catch((error) => console.error('An error ocurred while trying to connect to the database'))