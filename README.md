# Algeria API

A list of Algerian Wilayas, Dairas and Baladyahs.

## Features

* Exposes a RESTful API
* GraphQL Endpoint
* JSON Files
  * Postal codes by wilaya [LINK](LINK)
  * Wilayas list (with Dairas and Baladiyahs lists) [LINK](LINK)

## API Documentation

* Get Wilaya's details: `GET https://localhost:3000/api/v1/:matricule` example `GET https://localhost:3000/api/v1/31`
* Get postal codes by Wilaya
* Get wilaya by postal codes
* Get Wilaya by phone code

## TODOs & Future Improvements/Features

* Match each postal code withe its provinces
* Add long/latt cordinates
* Add XML File
* sqlite ?

## About this project

* Based on the super initiative: [mohsenuss91/AlgerianAdministrativeDivision](https://github.com/mohsenuss91/AlgerianAdministrativeDivision)
* Postal codes and Dairas list are collected by crawling the [Algérie Poste](https://www.poste.dz/) and [Interior ministry](http://www.interieur.gov.dz/) websites, the scripts I used are in [tools/](./tools/README.md)