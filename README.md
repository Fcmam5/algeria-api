# Algeria API

[![Known Vulnerabilities](https://snyk.io/test/github/Fcmam5/algeria-api/badge.svg)](https://snyk.io/test/github/Fcmam5/algeria-api) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FFcmam5%2Falgeria-api%2Fmaster)](https://stryker-mutator.github.io)

A list of Algerian Wilayas, Dairas and Baladyahs.

## Features

* Exposes a RESTful API
* GraphQL Endpoint
* JSON Files
  * Postal codes by wilaya [results/postal-codes-results.json](./results/postal-codes-results.json)
  * Wilayas list (with Dairas and Baladiyahs lists) [results/WilayaList.json](./results/WilayaList.json)

## API Documentation

* Get a list of all Wilayas `GET https://localhost:3000/api/v1/wilaya`
* Get Wilaya's details: `GET https://localhost:3000/api/v1/wilaya/matricule/:matricule`, example:

  ```bash
  ~: curl -X GET -i http://localhost:3000/api/v1/wilaya/matricule/31

  # Response
  {
    "data": {
      "mattricule": 31,
      "name": "Oran",
      "name_ar": "وهران",
      "name_en": "Oran",
      "phoneCodes": [
        41
      ],
      "postalCodes": [
        31000,
        31001,
        ...
        31117,
        31118
      ],
      "dairats": [
        {
          "name": "AIN TURK",
          "name_ar": "AIN TURK",
          "name_en": "AIN TURK",
          "baladyiats": []
        },
        {
          "name": "ARZEW",
          "name_ar": "ARZEW",
          "name_en": "ARZEW",
          "baladyiats": []
        },
        ...
      ]
    }
  }
  ```
* Get the adjacent (nearby wilayas)
  * Only wilaya codes `/wilaya/adjacence/:matricule`
  * Wilaya names `/wilaya/adjacence/:matricule/names` example response:

  ````json
      {
      "data": {
        "names": [
          {
            "mattricule": 46,
            "name": "Ain Temouchent",
            "name_ar": "عين تموشنت",
            "name_en": "Ain Temouchent"
          },
          {
            "mattricule": 22,
            "name": "Sidi Bel Abbes",
            "name_ar": "سيدي بلعباس",
            "name_en": "Sidi Bel Abbes"
          },
          {
            "mattricule": 29,
            "name": "Mascara",
            "name_ar": "معسكر",
            "name_en": "Mascara"
          },
          {
            "mattricule": 27,
            "name": "Mostaganem",
            "name_ar": "مستغانم",
            "name_en": "Mostaganem"
          }
        ],
        "mattricules": [
          46,
          22,
          29,
          27
        ]
      }
    }
  ````
  * Short format (only wilaya names in a language and their codes)

    ```json
      {
        "data": {
          "names": [
            "عين تموشنت",
            "سيدي بلعباس",
            "معسكر",
            "مستغانم"
          ],
          "mattricules": [
            46,
            22,
            29,
            27
          ]
        }
      }
    ```

* You can get an XML result by adding a `format=xml` query parameter, example:
  * GET: `http://localhost:3000/api/v1/wilaya/matricule/31?format=xml` will return:

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <wilaya>
    <phoneCodes>
      <phoneCode>41</phoneCode>
    </phoneCodes>
    <postalCodes>
      <postalCode>31000</postalCode>
      <postalCode>31001</postalCode>
      ...
      <postalCode>31118</postalCode>
    </postalCodes>
    <adjacentWilayas>
      <adjacentWilaya>46</adjacentWilaya>
      <adjacentWilaya>22</adjacentWilaya>
      <adjacentWilaya>29</adjacentWilaya>
      <adjacentWilaya>27</adjacentWilaya>
    </adjacentWilayas>
    <mattricule>31</mattricule>
    <name>Oran</name>
    <nameAr>وهران</nameAr>
    <nameEn>Oran</nameEn>
    <dairats>
      <dairat>
        <baladyiats>
          <baladyiat>
            <code>3101</code>
            <name>ORAN</name>
            <nameAr>وهران</nameAr>
  ```

* Get postal codes by Wilaya
* Get wilaya by postal codes
* Get Wilaya by phone code


Find the full documentation [here](https://documenter.getpostman.com/view/6370698/SW12ywmH?version=latest).

## TODOs & Future Improvements/Features

* Add Tamazight Translation
* Build a dashboard to manage/correct data
* Match each postal code withe its provinces
* Add long/latt cordinates
* sqlite ?

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with us before making a change. And also, please make sure to read our [guidelines for contributing](CONTRIBUTING.md)

### Improving the API (new features, bug fixes...)

:pencil: :whale: :globe_with_meridians: :building_construction: :bug: :zap: :construction_worker: :sparkles:

If you want to work on the API server, just pull this repository then run `npm install`

To run the development server

```
npm run server:dev
# or
yarn server:dev
```

To run in Docker

```
npm run docker:prod
# Or
yarn docker:prod
```

### Improving the Wilayas List (translations, corrections...)

:pencil: :globe_with_meridians: :building_construction: :bug: :zap: :construction_worker: :sparkles:

The wilaya models are auto-generated by crawling and by using the fine work of [mohsenuss91/AlgerianAdministrativeDivision](https://github.com/mohsenuss91/AlgerianAdministrativeDivision). If you want to contribute more by adding, correcting or improving the results... Please create an issue so we can discuss it, and then you just need to update the results on [results/WilayaList.json](./results/WilayaList.json)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Acknowledgments

* [mohsenuss91/AlgerianAdministrativeDivision](https://github.com/mohsenuss91/AlgerianAdministrativeDivision)
* [AbderrahmeneDZ/Wilaya-Of-Algeria/Wilaya_Of_Algeria.json](https://github.com/AbderrahmeneDZ/Wilaya-Of-Algeria/blob/master/Wilaya_Of_Algeria.json)
* Postal codes and Dairas list are collected by crawling the [Algérie Poste](https://www.poste.dz/) and [Interior ministry](http://www.interieur.gov.dz/) websites, the scripts I used are in [tools/](./tools/README.md)
