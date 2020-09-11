const ajv = require('ajv')()
const jsonData = require('../data/WilayaList.json');
const jsonSchema = require('../data/WilayaList.schema.json');

const validateJsonData = ajv.compile(jsonSchema)

if (!validateJsonData(jsonData)) {
  console.error(validateJsonData.errors);
  process.exit(1)
} else {
  console.log('JSON Data is Valid!');
}
