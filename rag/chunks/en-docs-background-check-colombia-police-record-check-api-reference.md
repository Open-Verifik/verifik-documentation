---
id: "en-docs-background-check-colombia-police-record-check-api-reference"
title: "Colombia - Colombian Police Record Check — API Reference"
sourcePath: "docs/background-check/colombia-police-record-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoints:
  - "/v2/co/policia/consultar"
  - "/v2/co/policia/rnmc"
sourceAnchor: "API Reference"
slug: "/background-check/colombia-police-record-check"
url: "https://docs.verifik.co/background-check/colombia-police-record-check"
---

# Colombia - Colombian Police Record Check
**API path(s):** /v2/co/policia/consultar, /v2/co/policia/rnmc

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/policia/consultar
```

The Colombian Police Record Check verifies whether a person has pending matters with Colombian judicial authorities, in accordance with Article 248 of the Colombian Constitution. Send **`documentType`** and **`documentNumber`** via **GET** (query) or **POST** (JSON body). A successful `data` object includes `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`, and `details`. Use this for hiring, onboarding, and due-diligence background checks.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/background-check/document-types) guide.
:::

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Valid values: **CC**, **CE**, **PPT**, **PA**, **DP**. **DP** is Documento Diplomático. **PPT** is accepted; the Policía portal maps it like a passport. |
| `documentNumber` | string | Yes      | Document number of the person to consult, without spaces or points.         |

This endpoint does **not** take a `date` parameter (unlike [RNMC](/background-check/colombia-police-compliance-corrective-measures)).
