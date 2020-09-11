# Algeria API

[![Known Vulnerabilities](https://snyk.io/test/github/Fcmam5/algeria-api/badge.svg)](https://snyk.io/test/github/Fcmam5/algeria-api) [![Mutation testing badge](https://img.shields.io/endpoint?style=flat&url=https://badge-api.stryker-mutator.io/github.com/Fcmam5/algeria-api/develop)](https://dashboard.stryker-mutator.io/reports/github.com/Fcmam5/algeria-api/develop)

This is another Algerian administrative areas repository :smiley:. In this project we provide a structured JSON and XML data that can be found in [results/WilayaList.json](./data/WilayaList.json) and [results/WilayaList.XML](./data/WilayaList.XML) or through our API: [https://algeria-api.herokuapp.com/api/v1/]()

## Features

* Exposes a RESTful API
* JSON Files
  * Postal codes by wilaya [results/postal-codes-results.json](./data/postal-codes-results.json)
  * Wilayas list (with Dairas and Baladiyahs lists) [results/WilayaList.json](./data/WilayaList.json)

## API Documentation

Find the full API documentation [here](https://documenter.getpostman.com/view/6370698/SW12ywmH?version=latest) (*Will be moved to a SWAGGER documentation*).

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

The wilaya models are auto-generated by crawling and by using the fine work of [mohsenuss91/AlgerianAdministrativeDivision](https://github.com/mohsenuss91/AlgerianAdministrativeDivision). If you want to contribute more by adding, correcting or improving the results... Please create an issue so we can discuss it, and then you just need to update the results on [results/WilayaList.json](./data/WilayaList.json)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Acknowledgments

* [mohsenuss91/AlgerianAdministrativeDivision](https://github.com/mohsenuss91/AlgerianAdministrativeDivision)
* [AbderrahmeneDZ/Wilaya-Of-Algeria/Wilaya_Of_Algeria.json](https://github.com/AbderrahmeneDZ/Wilaya-Of-Algeria/blob/master/Wilaya_Of_Algeria.json)
* Postal codes and Dairas list are collected by crawling the [Algérie Poste](https://www.poste.dz/) and [Interior ministry](http://www.interieur.gov.dz/) websites, the scripts I used are in [tools/](./tools/README.md)
