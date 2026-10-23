---
id: "en-docs-vehicle-validation-canada-ontario-plate-api-reference"
title: "\\U0001F1E8\\U0001F1E6 Canada - Ontario Plate Expiry — API Reference"
sourcePath: "docs/vehicle-validation/canada/ontario-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ca"
  - "vehicle-validation"
endpoint: "/v2/ca/ontario/plate"
sourceAnchor: "API Reference"
slug: "/vehicle-validation/canada/ontario-plate"
url: "https://docs.verifik.co/vehicle-validation/canada/ontario-plate"
---

# \U0001F1E8\U0001F1E6 Canada - Ontario Plate Expiry
**API path(s):** /v2/ca/ontario/plate

## API Reference

Check Ontario licence plate sticker expiry using the **plate number** and **vehicle permit number** (green card / vehicle registration document issued by Ontario).

Typical response fields: `expired`, `plateNumber`, `permitNumber`, `expiryDate`, and `success`. The `expired` flag is `true` when `expiryDate` is before the current time.

Use this service to quickly confirm plate sticker validity against the Ontario government registry. Ideal for fleet onboarding, compliance checks, and vehicle verification.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/ca/ontario/plate
```

Send a GET request with **`plate`** and **`permitNumber`** query parameters.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Ontario passenger plate in **ABCD123** format (4 letters + 3 digits, entered without spaces). | `BKTR456` |
| `permitNumber` | string | **Yes** | Vehicle permit number from the Ontario registration document (8 characters). | `N9166001` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ca/ontario/plate", {
  params: { plate: "BKTR456", permitNumber: "N9166001" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ca/ontario/plate"
params = {"plate": "BKTR456", "permitNumber": "N9166001"}
headers = {"Accept": "application/json", "Authorization": "Bearer "}
response = requests.get(url, params=params, headers=headers)
print(response.text)
```
