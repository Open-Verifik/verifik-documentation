---
id: "en-docs-identity-phone-lookup-api-reference"
title: "Global - Phone Lookup — API Reference"
sourcePath: "docs/identity/phone-lookup.mdx"
locale: "en"
category: "identity"
tags:
  - "look-ups"
  - "identity"
endpoint: "/v2/look-ups/phone"
sourceAnchor: "API Reference"
slug: "/identity/phone-lookup"
url: "https://docs.verifik.co/identity/phone-lookup"
---

# Global - Phone Lookup
**API path(s):** /v2/look-ups/phone

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/look-ups/phone
```

The Phone Lookup service resolves a worldwide mobile or landline number to the **listed owner name** and related profile fields when the source has a match. Send **`countryCode`** (numeric calling code) and **`phone`** (national number, no country prefix) via **GET** (query) or **POST** (JSON body). A successful `data` object includes `name`, `phone`, `countryCode`, and may include `score`, `gender`, `about`, `jobTitle`, `companyName`, `phones`, `addresses`, `internetAddresses`, `imId`, `access`, and `enhanced`. Use it for onboarding, fraud screening, and contact verification — not for OTP ownership proof.

To send an SMS or WhatsApp one-time code instead, see [Phone Validations](/resources/phone-validations).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type   | Required | Description                                                                 |
| -------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `countryCode`  | string | Yes      | Numeric calling code, not ISO2. Example: `57` for Colombia, `1` for the United States. |
| `phone`        | string | Yes      | National number of the line to look up, without the country prefix, spaces, or punctuation. |

### Request

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/look-ups/phone",
  params: { countryCode: "57", phone: "3006094511" },
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

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ""
headers = {}
conn.request("GET", "/v2/look-ups/phone?countryCode=57&phone=3006094511", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```
