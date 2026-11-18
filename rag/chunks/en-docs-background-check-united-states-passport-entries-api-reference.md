---
id: "en-docs-background-check-united-states-passport-entries-api-reference"
title: "United States - Passport & U.S. entries — API Reference"
sourcePath: "docs/background-check/united-states-passport-entries.mdx"
locale: "en"
category: "background-check"
tags:
  - "passport"
  - "background-check"
endpoint: "/v2/passport/us/entries"
sourceAnchor: "API Reference"
slug: "/background-check/united-states-passport-entries"
url: "https://docs.verifik.co/background-check/united-states-passport-entries"
---

# United States - Passport & U.S. entries
**API path(s):** /v2/passport/us/entries

## API Reference

Use this endpoint to request **passport-linked U.S. travel history** (entries and exits) for screening and compliance workflows. Provide the traveler’s identity fields and passport identifiers as query parameters.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/passport/us/entries
```

Submit `firstName`, `lastName`, `dateOfBirth`, `passportNumber`, and `passportCountry` as query parameters. Date format should match your integration contract (commonly `YYYY-MM-DD` or `dd/mm/yyyy`).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `firstName` | string | **Yes** | Traveler’s first name as on the passport. |
| `lastName` | string | **Yes** | Traveler’s last name as on the passport. |
| `dateOfBirth` | string | **Yes** | Date of birth (use the format agreed for your project). |
| `passportNumber` | string | **Yes** | Machine-readable passport number. |
| `passportCountry` | string | **Yes** | Issuing country of the passport (ISO code or country name, per integration). |

### Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/passport/us/entries",
  params: {
    firstName: "JOHN",
    lastName: "DOE",
    dateOfBirth: "1990-01-15",
    passportNumber: "P12345678",
    passportCountry: "CO",
  },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

```python

params = urllib.parse.urlencode({
    "firstName": "JOHN",
    "lastName": "DOE",
    "dateOfBirth": "1990-01-15",
    "passportNumber": "P12345678",
    "passportCountry": "CO",
})
conn = http.client.HTTPSConnection("api.verifik.co")
conn.request("GET", f"/v2/passport/us/entries?{params}", "", {})
res = conn.getresponse()
print(res.read().decode("utf-8"))
```
