const xmlify = require('xmlify');

const WilayaPresenter = {
  /**
   * Return an Express HTTP repsonse with a status code
   * @param {Object} res Express reponse object
   * @param {Object} data Data to return
   * @param {String} format Response type (example: xml, json) default: JSON
   * @param {Number} statusCode HTTP Status code
   */
  presentResponse: (res, data, format, xmlRootName, statusCode = 200) => {
    switch (format) {
      case 'xml':
        res.type('application/xml');
        return res.status(statusCode).send(xmlify(data, xmlRootName));

      default:
        return res.status(statusCode).json({ data });
    }
  },
  presentArrayResponse: (res, data, format, xmlRootName, statusCode = 200) => {
    switch (format) {
      case 'xml':
        // eslint-disable-next-line no-case-declarations
        const xmlResponse = xmlify(Array.from(data), { root: xmlRootName });

        res.type('application/xml');
        return res.status(statusCode).send(xmlResponse);

      default:
        return res.status(statusCode).json({ data });
    }
  },
};

module.exports = WilayaPresenter;
