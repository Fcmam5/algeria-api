const rp = require('request-promise');

const URL =
  'https://raw.githubusercontent.com/iladan0/Wilayas-Algeria/master/geoData.geojson';

(async () => {
  const rs = await rp(URL).json();
  const wilayas = rs.features
    .map(({ properties: { city_code, name, name_ber } }) => ({
      mattricule: city_code,
      name,
      name_ber,
    }))
    // TODO: delete me
    .filter((w) => w.mattricule)
    .sort((a, b) => a.mattricule - b.mattricule);

  console.log(JSON.stringify(wilayas, null, 2));
})();
