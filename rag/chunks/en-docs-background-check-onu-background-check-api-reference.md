---
id: "en-docs-background-check-onu-background-check-api-reference"
title: "UN Background Check — API Reference"
sourcePath: "docs/background-check/onu-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "onu"
  - "background-check"
endpoint: "/v2/onu"
sourceAnchor: "API Reference"
slug: "/background-check/international/onu-background-check"
url: "https://docs.verifik.co/background-check/international/onu-background-check"
---

# UN Background Check
**API path(s):** /v2/onu

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/onu
```

Query the United Nations sanctions list to see whether a person or entity appears using `documentType` and `documentNumber`, or `fullName`. Use the results for global compliance, KYC, and AML workflows when screening counterparties.

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

- **International compliance:** Verify individuals and entities against UN sanctions before onboarding or transactions.
- **Risk assessment:** Reduce financial and reputational exposure from sanctioned parties.
- **Regulatory programs:** Support banking, finance, and insurance KYC/AML requirements.
