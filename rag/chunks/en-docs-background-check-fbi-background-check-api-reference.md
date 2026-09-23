---
id: "en-docs-background-check-fbi-background-check-api-reference"
title: "FBI Background Check — API Reference"
sourcePath: "docs/background-check/fbi-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "fbi"
  - "background-check"
endpoint: "/v2/fbi"
sourceAnchor: "API Reference"
slug: "/background-check/international/fbi-background-check"
url: "https://docs.verifik.co/background-check/international/fbi-background-check"
---

# FBI Background Check
**API path(s):** /v2/fbi

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/fbi
```

Search FBI-published records using `documentType` and `documentNumber`, or `fullName`. When a match exists, the response can include identity fields and a public FBI URL for the subject.

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

- **Identity verification:** Validate documents against FBI-published information.
- **Compliance:** Support screening for sensitive roles or transactions.
- **Fraud prevention:** Confirm identities before establishing relationships.
