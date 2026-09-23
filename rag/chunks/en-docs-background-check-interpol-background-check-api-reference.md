---
id: "en-docs-background-check-interpol-background-check-api-reference"
title: "Interpol Background Check — API Reference"
sourcePath: "docs/background-check/interpol-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "interpol"
  - "background-check"
endpoint: "/v2/interpol"
sourceAnchor: "API Reference"
slug: "/background-check/international/interpol-background-check"
url: "https://docs.verifik.co/background-check/international/interpol-background-check"
---

# Interpol Background Check
**API path(s):** /v2/interpol

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/interpol
```

Use this endpoint to search Interpol-linked criminal background information for a natural or legal person using `documentType` and `documentNumber`, or `fullName` alone. Successful responses return identity fields and match details when a record exists; the service is intended for secure, authorized law enforcement and security use cases.

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
| `documentType`   | string | No       | Document type that you want to request                                                            |
| `documentNumber` | string | No       | Document number to consult, without spaces or points                                              |
| `fullName`       | string | No       | Instead of documentType and documentNumber, you can pass the name directly of the person/business |

### Use Cases

- **Criminal background verification:** Hiring, security clearances, or legal compliance, including international records.
- **Law enforcement:** Authorized agencies screening against Interpol data.
