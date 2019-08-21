require('dotenv').config();

/**
 * Reset wilayas data by re-inserting data from the results/WilayaList.json
 */

// Connect to db
const MongoManager = require('../config/db');
const { showCollections, eraseData, insertData } = require('./utils');

MongoManager.connect();

const connection = MongoManager.getConnection();

connection.on('open', async () => {
  console.log('--- Clearing data ---');
  await showCollections(connection);

  // Delete data
  try {
    await eraseData(connection, 'wilayas');
  } catch (error) {
    console.log('[X] Deleting data failed');
  }

  // Inserting data
  try {
    await insertData();
  } catch (error) {
    console.error(error);
    console.log('[X] Data insertion failed');
  }

  console.log('');

  await showCollections(connection);
  connection.close();
});
