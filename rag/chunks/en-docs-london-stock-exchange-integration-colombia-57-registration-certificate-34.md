---
id: "en-docs-london-stock-exchange-integration-colombia-57-registration-certificate-34"
title: "Colombia — Verifik public API — 57. Registration Certificate"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "57. Registration Certificate"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 57. Registration Certificate

**Location in the collection:** v2 › co › registration › certificate › Certificate of Registration

**What it does (summary):**

The Certificate of Registration API provides a programmatic way to verify the validity of a Colombian ID document and obtain the certificate status. This API uses the document number and date to query the National Registry of Civil Status database and returns a response in JSON format with the status of the certificate, any possible notifications or exceptions, and the base64-encoded PDF file of the certificate.

This API can be used by institutions, companies or people in Colombia that need to verify the authenticity of a Colombian identity document or certificate.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/registraduria/certificado?documentNumber=112132966&date=16/07/2007
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentNumber | 112132966 | (Required) Document number of the person to be consulted, without spaces or periods. |
| date | 07/16/2007 | (Required) Date of issue of the ID to consult. Valid format: DD/MM/YYYY |
| date | 05/12/1977 |  |
| documentNumber | 77006438 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/registraduria/certificado?documentNumber=112132966&date=16/07/2007" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentNumber": "112132966",

        "date": "16/07/2007"

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "GNRC1"

}
```

- **HTTP 404 (Not Found)**

```json
{

    "code": "NotFound",

    "message": "Record not found."

}
```

- **HTTP 409 (Conflict)**

```json
{

    "code": "Conflict",

    "message": "Endpoint out of service."

}
```

---
