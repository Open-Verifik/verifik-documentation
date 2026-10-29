---
id: "en-docs-identity-ip-lookup-endpoint"
title: "🌐 IP Geolocation Lookup — Endpoint"
sourcePath: "docs/identity/ip-lookup.mdx"
locale: "en"
category: "identity"
tags:
  - "ip-lookup"
  - "identity"
endpoint: "/v2/ip-lookup"
sourceAnchor: "Endpoint"
slug: "/identity/ip-lookup"
url: "https://docs.verifik.co/identity/ip-lookup"
---

# 🌐 IP Geolocation Lookup
**API path(s):** /v2/ip-lookup

## Endpoint

```
https://api.verifik.co/v2/ip-lookup
```

The IP Geolocation Lookup service geolocates an **IPv4 or IPv6 address** and returns country, region, city, ISP/ASN, coordinates, and timezone data. Use it for **fraud screening**, **access control**, and **risk scoring** when IP context is allowed in your workflow.

Typical fields include **`country`**, **`countryCode`**, **`region`**, **`regionName`**, **`city`**, **`zip`**, **`lat`**, **`lon`**, **`timezone`**, **`isp`**, **`org`**, and **`as`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | string | Yes | IPv4 or IPv6 address to geolocate. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ip-lookup", {
  params: { ip: "8.8.8.8" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ip-lookup"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"ip": "8.8.8.8"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "country": "United States",
    "countryCode": "US",
    "region": "CA",
    "regionName": "California",
    "city": "Mountain View",
    "zip": "94043",
    "lat": 37.4056,
    "lon": -122.0775,
    "timezone": "America/Los_Angeles",
    "isp": "Google LLC",
    "org": "Google Public DNS",
    "as": "AS15169 Google LLC"
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
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
  "message": "\"ip\" is required"
}
```
