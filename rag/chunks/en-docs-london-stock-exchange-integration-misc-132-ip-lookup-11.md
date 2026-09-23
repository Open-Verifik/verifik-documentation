---
id: "en-docs-london-stock-exchange-integration-misc-132-ip-lookup-11"
title: "Other — Verifik public API — 132. IP Lookup"
sourcePath: "docs/london-stock-exchange-integration/misc.mdx"
locale: "en"
category: "london-stock-exchange-integration"
tags:
  - "usa"
  - "london-stock-exchange-integration"
endpoint: "/v2/usa/vehicle"
sourceAnchor: "132. IP Lookup"
slug: "/london-stock-exchange-integration/misc"
url: "https://docs.verifik.co/london-stock-exchange-integration/misc"
---

# Other — Verifik public API
**API path(s):** /v2/usa/vehicle

## 132. IP Lookup

**Location in collection:** v2 › ip-lookup › IP Lookup

**What it does (summary):**

The IP Lookup API leverages advanced geolocation services to provide accurate latitude and longitude coordinates for the given IP address. Additionally, it retrieves the country, region, and city details, enabling you to understand the physical location of the IP's origin.

ISP details, such as the ISP name and host domain, are valuable for identifying the internet service provider that controls the IP address.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/ip-lookup?ip=54.196.228.28
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| ip | 54.196.228.28 |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/ip-lookup?ip=54.196.228.28" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "ip": "54.196.228.28"

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

## 133. /v2/tin/validate

**Location in collection:** v2 › /v2/tin/validate › /v2/tin/validate

**What it does (summary):**

The Argentine National Identity Document (DNI) verification API allows developers to verify the authenticity of an Argentine identity document (Documento Nacional de Identidad, or DNI) by providing the DNI number. The API returns information such as the person's full name, the first and last name separately, and the DNI number.

This information can be used for various purposes, such as verifying the identity of a customer or validating information provided by a user.

**Query type:** `GET`

**Example full address** (with example values):

```
https://api.verifik.co/v2/tin/validate?msCode=ES&tinNumber=819128Y
```

**Parameters in the address (after the `?`):**

| Name | Example value | Notes |
| --- | --- | --- |
| msCode | EN |  |
| tinNumber | 819128Y |  |

**Common headers:**

| Name | Example value |
| --- | --- |
| Accept | application/json |

**Example with the `curl` tool (for those who request it from your technical team):**

```bash
curl -X GET "https://api.verifik.co/v2/tin/validate?msCode=ES&tinNumber=819128Y" \
  -H "Accept: application/json"
```

**Answer examples saved by Postman:**

- **HTTP 200 (OK)**

```json
{

    "data": {

        "documentType": "CC",

        "documentNumber": "00000000",

        "valid": true,

        "message": "Document images processed successfully."

    },

    "signature": {

        "dateTime": "April 8, 2026 11:00 PM",

        "message": "Certified by Verifik.co"

    },

    "id": "VLD1"

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

    "code": "MissingParameter",

    "message": "Invalid or missing image payload."

}
```

---
