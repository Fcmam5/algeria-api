require('dotenv').config();
/**
 * Reset wilayas data by re-inserting data from the results/WilayaList.json
 */

// Connect to db
const logger = require('../config/logger');
const MongoManager = require('../config/db');
const { showCollections, eraseData, insertData } = require('./utils');

MongoManager.connect();

const connection = MongoManager.getConnection();

connection.on('open', async () => {
  logger.info('--- Clearing data ---');
  await showCollections(connection);

  // Delete data
  try {
    await eraseData(connection, 'wilayas');
  } catch (error) {
    logger.info('[X] Deleting data failed');
  }

  // Inserting data
  try {
    await insertData();
  } catch (error) {
    console.error(error);
    logger.info('[X] Data insertion failed');
  }

  await showCollections(connection);
  connection.close();
});
