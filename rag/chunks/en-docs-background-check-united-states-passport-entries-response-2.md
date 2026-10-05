---
id: "en-docs-background-check-united-states-passport-entries-response-2"
title: "United States - Passport & U.S. entries — Response"
sourcePath: "docs/background-check/united-states-passport-entries.mdx"
locale: "en"
category: "background-check"
tags:
  - "passport"
  - "background-check"
endpoint: "/v2/passport/us/entries"
sourceAnchor: "Response"
slug: "/background-check/united-states-passport-entries"
url: "https://docs.verifik.co/background-check/united-states-passport-entries"
---

# United States - Passport & U.S. entries
**API path(s):** /v2/passport/us/entries

Use this endpoint to request **passport-linked U.S. travel history** (entries and exits) for screening and compliance workflows. Provide the traveler’s identity fields and passport identifiers as query parameters.

## Response

```json
{
  "data": {},
  "signature": {
    "dateTime": "October 10, 2025 7:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "EXAMPLE"
}
```

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

### Notes

- **Availability** of this product may be restricted; confirm with your account team before production use.
- **Field formats** (especially `dateOfBirth`) must follow the contract used by your Verifik integration.
