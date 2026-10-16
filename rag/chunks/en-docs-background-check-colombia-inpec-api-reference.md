---
id: "en-docs-background-check-colombia-inpec-api-reference"
title: "Colombia - INPEC Prison Records Check — API Reference"
sourcePath: "docs/background-check/colombia-inpec.mdx"
locale: "en"
category: "background-check"
tags:
  - "co"
  - "background-check"
endpoint: "/v2/co/inpec"
sourceAnchor: "API Reference"
slug: "/background-check/colombia-inpec"
url: "https://docs.verifik.co/background-check/colombia-inpec"
---

# Colombia - INPEC Prison Records Check
**API path(s):** /v2/co/inpec

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/inpec
```

The INPEC Prison Records Check service allows verification of the current incarceration status of individuals in facilities managed by the Colombian National Penitentiary and Prison Institute (INPEC). This API endpoint validates whether a person is currently deprived of liberty in any INPEC-administered detention center and provides detailed information about their legal status, admission type, prison location, and unique identification number within the penitentiary system.

This service is designed for judicial authorities, law enforcement agencies, state control bodies, and authorized organizations that need to verify the current status of individuals within the Colombian penitentiary system for legal, security, or due diligence purposes.

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
| `documentType`   | string | Yes      | Document type. Valid parameters: CC, CE.                                    |
| `documentNumber` | string | Yes      | Document number of the person to consult, without spaces or periods.         |
| `firstSurname`   | string | Yes      | First surname of the person to consult.                                     |
