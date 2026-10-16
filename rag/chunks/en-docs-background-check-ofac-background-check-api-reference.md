---
id: "en-docs-background-check-ofac-background-check-api-reference"
title: "OFAC Background Check — API Reference"
sourcePath: "docs/background-check/ofac-background-check.mdx"
locale: "en"
category: "background-check"
tags:
  - "ofac"
  - "background-check"
endpoint: "/v2/ofac"
sourceAnchor: "API Reference"
slug: "/background-check/international/ofac-background-check"
url: "https://docs.verifik.co/background-check/international/ofac-background-check"
---

# OFAC Background Check
**API path(s):** /v2/ofac

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/ofac
```

Check whether a person or entity appears on the U.S. Treasury Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) and Blocked Persons List using `documentType` with `documentNumber`, or `fullName`. Use results for sanctions compliance, trade screening, and KYC/AML workflows.

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

- **Sanctions compliance:** Avoid dealing with blocked parties subject to OFAC enforcement.
- **Risk mitigation:** Reduce penalties from U.S. and international trade rules.
- **KYC and AML:** Strengthen customer screening in banking, insurance, and real estate.
