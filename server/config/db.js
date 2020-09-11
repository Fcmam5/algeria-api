const mongoose = require('mongoose');
const logger = require("./logger");

const { DB_URL } = process.env;

// When the connection is disconnected
mongoose.connection.on('disconnected', () =>
  logger.error(`The database "${DB_URL}" has disconnected!`)
);

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.warn(
      `The database "${DB_URL}" disconnected through app termination`
    );
    process.exit(-1);
  });
});

const MongoManager = {
  connect: async dbUri => {
    try {
      await mongoose.connect(dbUri || DB_URL, { useNewUrlParser: true });
      logger.info(` Database connected: ${DB_URL}`);
    } catch (error) {
      logger.error(error);
    }
  },
  getConnection: () => mongoose.connection,
};

module.exports = MongoManager;
