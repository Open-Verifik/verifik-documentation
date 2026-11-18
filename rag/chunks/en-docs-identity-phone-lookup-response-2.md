---
id: "en-docs-identity-phone-lookup-response-2"
title: "Global - Phone Lookup — Response"
sourcePath: "docs/identity/phone-lookup.mdx"
locale: "en"
category: "identity"
tags:
  - "look-ups"
  - "identity"
endpoint: "/v2/look-ups/phone"
sourceAnchor: "Response"
slug: "/identity/phone-lookup"
url: "https://docs.verifik.co/identity/phone-lookup"
---

# Global - Phone Lookup
**API path(s):** /v2/look-ups/phone

## Response

```json
{
  "data": {
    "about": "",
    "access": "",
    "addresses": [],
    "companyName": {},
    "countryCode": "57",
    "enhanced": "",
    "gender": "",
    "imId": "",
    "internetAddresses": [],
    "jobTitle": "",
    "name": "JANE DOE",
    "phone": "3006094511",
    "phones": [],
    "score": 0.9
  },
  "signature": {
    "dateTime": "March 13, 2024 10:48 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

```json
{
  "code": "MissingParameter",
  "message": "countryCode|phone is missing"
}
```

```json
{
  "code": "Conflict",
  "message": "Endpoint out of service."
}
```

### Notes

- **GET** and **POST** are both supported. POST accepts the same fields in a JSON body.
- `countryCode` is the **numeric calling code** (for example `57`), not an ISO2 country code such as `CO`.
- Send `phone` as the **national number only** — do not prefix the country code again.
- Profile fields beyond `name`, `phone`, and `countryCode` are optional; the source may omit them.
- There are no sandbox fixtures for this route. Lookups hit the live source. Temporary outages return **409** with `Endpoint out of service.`
- A **404** means no listing was found (or the calling code is unknown). Paying clients are **not charged** for 404s.
- This endpoint does **not** prove the caller owns the handset. For OTP verification, use [Phone Validations](/resources/phone-validations).
