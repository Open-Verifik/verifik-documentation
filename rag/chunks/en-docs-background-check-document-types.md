---
id: "en-docs-background-check-document-types"
title: "Document Types and Parameters - Criminal Records — Mandatory Parameters by Document Type"
sourcePath: "docs/background-check/document-types.mdx"
locale: "en"
category: "background-check"
tags:
  - "background-check"
sourceAnchor: "Mandatory Parameters by Document Type"
slug: "/background-check/document-types"
url: "https://docs.verifik.co/background-check/document-types"
---

# Document Types and Parameters - Criminal Records

## Mandatory Parameters by Document Type

Below are the supported document types (`documentType`) for **criminal record** queries and the additional mandatory parameters depending on the document type.

## Mandatory Parameters by Document Type

To perform a query, `documentType` and `documentNumber` (or `fullName`) are generally required. However, certain document types require additional parameters such as `dateOfBirth` or `expeditionDate`.

| Document Type (`documentType`) | Description / Country | Additional Required Parameters |
| :--- | :--- | :--- |
| **General**  `CC`, `NIT`, `CCVE`, `CCEC`,  `DNI`, `DNIAR`, `DNIHN`, `CCCR`,  `CIC`, `CIE`, `RUN`, `CURP`, `CUI`,  `CUIT`, `RUCEC`, `FME`, `RUC`,  `RUT`, `CNPJ` | Various (Colombia, Argentina, Mexico, Chile, Ecuador, etc.) | **None**  Request: `documentType` + `documentNumber` |
| **With Date of Birth**  `CCPA`, `CI`, `CPF`, `DUI`, `CCUY` | Panama, Uruguay, Brazil, El Salvador, Paraguay | **`dateOfBirth`**  Request: `documentType` + `documentNumber` + `dateOfBirth` |
| **With Expedition Date**  `CE`, `PPT`, `PEP` | Colombia (Foreigner ID, PPT, PEP) | **`expeditionDate`**  Request: `documentType` + `documentNumber` + `expeditionDate` |

:::info
If `fullName` (Full Name) is provided, validation of `documentType` and `documentNumber` might be skipped depending on the specific endpoint, but for precise search by document, respect the rules above.
:::

## Complete List of Supported Types

* **CC**: Citizenship Card (Colombia)
* **CE**: Foreigner ID (Colombia)
* **PEP**: Special Stay Permit (Colombia)
* **NIT**: Tax Identification Number (Colombia)
* **CCVE**: Identity Card (Venezuela)
* **CCEC**: Citizenship Card (Ecuador)
* **DNI**: National Identity Document
* **DNIAR**: DNI (Argentina)
* **DNIHN**: DNI (Honduras)
* **CCCR**: Identity Card (Costa Rica)
* **CIC**: Identity Card (Costa Rica)
* **CIE**: Identity Card (Foreigner)
* **RUN**: National Unique Role (Chile)
* **CURP**: Unique Population Registry Code (Mexico)
* **CUI**: Unique Identification Code (Guatemala)
* **CCPA**: Identity Card (Panama) - *Requires Date of Birth*
* **CI**: Identity Card (Various) - *Requires Date of Birth*
* **CPF**: Individual Taxpayer Registry (Brazil) - *Requires Date of Birth*
* **DUI**: Unique Identity Document (El Salvador) - *Requires Date of Birth*
* **CCUY**: Identity Card (Uruguay) - *Requires Date of Birth*
* **CUIT**: Unique Tax Identification Code (Argentina)
* **RUCEC**: RUC (Ecuador)
* **FME**: Electronic Mercantile Folio
* **RUC**: Unique Taxpayer Registry
* **RUT**: Unique Tax Role
* **CNPJ**: National Registry of Legal Entities (Brazil)
* **PPT**: Temporary Protection Permit (Colombia) - *Requires Expedition Date*
