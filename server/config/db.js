const mongoose = require('mongoose');

const { DB_URL } = process.env;

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.error(`The database "${DB_URL}" has disonnected!`));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(`The database "${DB_URL}" disconnected through app termination`);
    process.exit(-1);
  });
});

const MongoManager = {
  connect: () => {
    mongoose.connect(DB_URL, { useNewUrlParser: true })
      .then((db) => {
        console.log('\x1b[32m', ` Database connected: ${DB_URL}`);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getConnection: () => mongoose.connection,
};

module.exports = MongoManager;
