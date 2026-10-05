---
id: "en-docs-london-stock-exchange-integration-colombia-37-comptroller-s-certificate-api-15"
title: "Colombia — Verifik public API — 37. Comptroller's Certificate API"
sourcePath: "docs/london-stock-exchange-integration/colombia.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "co"
  - "london-stock-exchange-integration"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "37. Comptroller's Certificate API"
slug: "/london-stock-exchange-integration/colombia"
url: "https://docs.verifik.co/london-stock-exchange-integration/colombia"
---

# Colombia — Verifik public API
**API path(s):** /v2/co/cedula/extra

## 37. Comptroller's Certificate API

**Location in the collection:** v2 › co › comptroller › certificate › Comptroller's Certificate API

**What it does (summary):**

The Comptroller's Certificate API allows you to verify a certificate of good conduct issued by the Comptroller's Office of Colombia. Simply provide the document type and number, and the API will return the lookup date and a base64-encoded PDF of the certificate. 

The API response is certified by Verifik.co to ensure the authenticity of the data. Use this API to quickly and easily confirm the good conduct of a Colombian company or individual.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329662
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| documentType | CC | (Required) Document type. Valid parameters: CC, CE, PA, PEP.  |
| documentNumber | 1121329662 | (Required) Document number of the person to be consulted, without spaces or periods. |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/co/contraloria/certificado?documentType=CC&documentNumber=1121329662" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "CC",

        "documentNumber": "1121329662",

        "searchDate": "2026-04-09T15:18:28.537Z",

        "pdfBase64": "data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PC9UeXBlL1hPYmplY3QvU3VidHlwZS9JbWFnZS9XaWR0aCAyNTAvSGVpZ2h0IDI1NC9GaWx0ZXIvRENURGVjb2RlL0NvbG9yU3BhY2UvRGV2aWNlUkdCL0JpdHNQZXJDb21wb25lbnQgOC9MZW5ndGggMzMyMj4+c3RyZWFtCv/Y/+AAEEpGSUYAAQEBAEgASAAA/9sAQwAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwgICAgICAgICAg/9sAQwEHBwcNDA0YEBAYGhURFRogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg/8AAEQgA/gD6AwERAAIRAQMRAf/EABsAAQACAwEBAAAAAAAAAAAAAAABBQIDBAYI/8QALhAAAgEDBAEEAQQCAgMAAAAAAAECAwQRBRIhMUETIjJRQgYjYXEUMxVSQ4Gx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqkAAAAAAAAAAAMgYSqpAY+tnoDH1JsCG6oGFS69L5gRG/pvyBsV1B+QNirQYGSmgMgAAAAAAAAAAAAAAAAAAAAAAEOSXYGqVZ9RWQMcSfbwBO1L+QGV9AMgSmwKD9QympRwwKeNat4kBsjd14+QOilq1aHfIFhR1vPy4AsKGoUZ/lyB2wq7gM8oCQAAAAAAAAAAAAAAAAABqlW8RAwUW+ZATwugGQIAAAJQFD+ovlECmj0BIDAEYAmNSrDmLA77TWa1J+95QF5a6tRrpc4YHfComBmAAAAAAAAAAAAAABEpJdgaJSlUfHQE+2KAjkAAAnAD2rtga53VCHckBqepWy8gUuuXdOs47AKpdATlAAJAZAjbkApTg8xYFrp+tTi1Co+APQULqNRZT4A6E8gSAAAAAAAAAAAIlJRWQNHM3l9ATnwugIAASkBrq3FCkvfICtr65l7aMc/yBoS1K4eeYpgboaLcz5nUA3rQo+ZAZLQqPkDGWgUX0By1f02/wAWBwXGj3NLpZA4pRnHiSwBCaYEsABDiB12eo1aEsN+0D0ljfQrR4YHeAAAAAAAAAAQ2ksgc/NSXPxAyb8ICAAE8RW6XQFTeaxmXpW6zIDXQ0q5uXurvCYFrbaXb0ellgdail0BIAAAAAQ0n2By3GmW9btAUt9oE4ZlRAp5RnTltmuQAACMAb7O7nb1V9AersbuNammgOwAAAAAAAABoqS3SwugD4WEBAACKlSFKDnN4SApbi7uNQqejQyqf2BZ6fpNG2jmS3VPsCwAAAAAAAAAAAACv1HSaNzB4WJgeWurWtaVHCa9v2Br7/oABHgDt0q+lQqqLftA9XQrKcU10BuAAAAAABrqz2rjsDXFbVnyAAAJyjTg5y6QFJVnX1O49OHFFdgXVnY0bWmowXPlgdIAAAAjKAjegG9AN6AyyAAAAAHPeWNG5puM1z9geSv7CtZVnx+34YHMBIEPvIF3o+pdU5sD0MJbo5AyAAAAEN4QGj5T3eAD5YACf7Aqb6tUuqyoUvj5AtbKzp21JRiufLA6AAADGU0gOardxj28AcVbVILpgcstYkBj/wAxMDOGrvyB10tThLtgdtK6jJccgb1JMDIAAA5r2zp3NFwkufDA8fcW07aq6cv/AEBqAkCac3TqKSA9Xpd36tJAWIAAAA11ZYWAMFwgIAAc19W2U8LsB
… (respuesta recortada)
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

    "code": "MissingParameter",

    "message": "documentNumber maximum length exceeded.\n"

}
```

---
