---
id: "en-docs-background-check-dea-background-check-api-reference"
title: "DEA Background Check — API Reference"
sourcePath: "docs/background-check/dea-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "dea"
  - "background-check"
endpoint: "/v2/dea"
sourceAnchor: "API Reference"
slug: "/background-check/international/dea-background-check"
url: "https://docs.verifik.co/background-check/international/dea-background-check"
---

# DEA Background Check
**API path(s):** /v2/dea

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/dea
```

Screen individuals or entities against the U.S. Drug Enforcement Administration (DEA) watchlist using `documentType` and `documentNumber`, or `fullName`. The API returns whether a match was found and, when applicable, a URL to the official DEA record.

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

- **Regulatory compliance:** Screen for DEA-related flags under U.S. federal rules.
- **Fraud prevention:** Identify risk tied to controlled-substance enforcement records.
- **KYC and AML:** Support healthcare, pharma, logistics, and finance programs.
