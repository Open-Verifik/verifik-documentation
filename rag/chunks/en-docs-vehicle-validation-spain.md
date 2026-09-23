---
id: "en-docs-vehicle-validation-spain"
title: "Spain — API Reference"
sourcePath: "docs/vehicle-validation/spain.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "es"
  - "vehicle-validation"
endpoints:
  - "/v2/es/vehicle"
  - "/v2/es/vehicle?plate=5684ccd"
sourceAnchor: "API Reference"
slug: "/vehicle-validation/spain"
url: "https://docs.verifik.co/vehicle-validation/spain"
---

# Spain
**API path(s):** /v2/es/vehicle, /v2/es/vehicle?plate=5684ccd

## API Reference

## API Reference

### Endpoint

```
https://api.verifik.co/v2/es/vehicle
```

Returns vehicle information for a Spanish registration plate, including fields such as make, model, year, and vehicle type when a match exists.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name    | Type   | Required | Description                           |
| ------- | ------ | -------- | ------------------------------------- |
| `plate` | string | Yes      | License plate to query (no spaces).   |

### Request

  

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/es/vehicle",
  params: { plate: "5684CCD" },
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

  
  

```bash
curl -X GET "https://api.verifik.co/v2/es/vehicle?plate=5684CCD" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer "
```

### Response

  

```json
{
  "data": {
    "plate": "5684CCD",
    "brand": "MAKE",
    "model": "MODEL",
    "year": "2020",
    "vehicleType": "SEDAN"
  },
  "signature": {
    "dateTime": "April 8, 2026 11:00 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "VHCL1"
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
  "message": "plate format invalid."
}
```

## Use cases

- **Insurance & underwriting**: confirm vehicle attributes from plate
- **Marketplaces & logistics**: validate fleet or listed vehicles
- **Compliance**: support checks tied to registered vehicles in Spain
