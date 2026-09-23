---
id: "en-docs-background-check-europol-background-check-api-reference"
title: "Europol Background Check — API Reference"
sourcePath: "docs/background-check/europol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "europol"
  - "europol?fullname=mateo"
  - "europol?fullname=mateo%20verifik"
  - "background-check"
endpoints:
  - "/v2/europol"
  - "/v2/europol?fullname=mateo"
  - "/v2/europol?fullname=mateo%20verifik"
sourceAnchor: "API Reference"
slug: "/background-check/international/europol-background-check"
url: "https://docs.verifik.co/background-check/international/europol-background-check"
---

# Europol Background Check
**API path(s):** /v2/europol, /v2/europol?fullname=mateo, /v2/europol?fullname=mateo%20verifik

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/europol
```

Check Europol criminal-records data in real time using `documentType` with `documentNumber`, or `fullName` alone. Responses indicate whether a match exists and may include a direct Europol reference URL when found.

**Note:** Dates (date of birth or expedition date) must be in `dd/mm/yyyy` format.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

:::info
For the complete list of supported **Document Types** and their specific mandatory parameters, please visit the [Document Types](/background-check/document-types) guide.
:::

| Name             | Type   | Required | Description                                                                                       |
| ---------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| `documentType`   | string | No       | The document type that you want to request.                                                       |
| `documentNumber` | string | No       | Document number to consult, without spaces or points.                                             |
| `fullName`       | string | No       | Instead of documentType and documentNumber, you can pass the name directly of the person/business. |

### Use Cases

- **Fraud prevention:** Identify individuals flagged in Europol's criminal database before sensitive transactions.
- **Identity verification:** Validate that supplied personal data is legitimate.
- **Compliance:** Support KYC and AML checks in banking, finance, and real estate.
