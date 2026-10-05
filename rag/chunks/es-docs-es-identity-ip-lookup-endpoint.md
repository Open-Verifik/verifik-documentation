---
id: "es-docs-es-identity-ip-lookup-endpoint"
title: "🌐 Consulta de Geoubicación IP — Endpoint"
sourcePath: "docs-es/identity/ip-lookup.mdx"
locale: "es"
category: "identity"
tags:
  - "ip-lookup"
  - "identity"
endpoint: "/v2/ip-lookup"
sourceAnchor: "Endpoint"
slug: "/identity/ip-lookup"
url: "https://docs.verifik.co/verifik-es/identity/ip-lookup"
---

# 🌐 Consulta de Geoubicación IP
**API path(s):** /v2/ip-lookup

## Endpoint

```
https://api.verifik.co/v2/ip-lookup
```

El servicio de **Consulta de Geoubicación IP** geolocaliza una **dirección IPv4 o IPv6** y devuelve país, región, ciudad, ISP/ASN, coordenadas y zona horaria. Úselo para **detección de fraude**, **control de acceso** y **puntuación de riesgo**.

Campos habituales: **`country`**, **`countryCode`**, **`region`**, **`regionName`**, **`city`**, **`zip`**, **`lat`**, **`lon`**, **`timezone`**, **`isp`**, **`org`**, **`as`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | string | Yes | Dirección IPv4 o IPv6 a geolocalizar. |

### Solicitud

  

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

### Respuesta

  

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
