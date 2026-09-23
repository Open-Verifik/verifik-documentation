---
id: "en-docs-certificates-colombia-ministerio-trabajo-certificados-v3-what-this-api-returns"
title: "Colombia — Ministry of Labor certificates (v3) — What this API returns"
sourcePath: "docs/certificates/colombia-ministerio-trabajo-certificados-v3.mdx"
locale: "en"
category: "certificates"
tags:
  - "co"
  - "certificates"
endpoints:
  - "/v2/co/ministerio-de-trabajo/certificados"
  - "/v3/co/ministerio-de-trabajo/certificados"
sourceAnchor: "What this API returns"
slug: "/certificates/colombia-ministerio-trabajo-certificados-v3"
url: "https://docs.verifik.co/certificates/colombia-ministerio-trabajo-certificados-v3"
---

# Colombia — Ministry of Labor certificates (v3)
**API path(s):** /v2/co/ministerio-de-trabajo/certificados, /v3/co/ministerio-de-trabajo/certificados

## What this API returns

This endpoint returns **Ministry of Labor** certificate information for a Colombian individual, including data associated with **height / occupational safety** training (*curso de alturas*), sourced from Verifik’s **Bogotá microservice**. The **v3** handler returns the **full microservice payload** and exposes certificate rows under **`records`** (mapped from the upstream `constances` field).

Use it for **employment compliance**, **contractor onboarding**, and **workplace safety** checks where this registry is allowed.

## What this API returns

- **`records`** — list of certificate / constance rows returned by the integration (renamed from upstream `constances`)
- Any **additional fields** returned by the microservice on `data` (structure may evolve with the source)
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados
```

**GET** with **query parameters** only for this route (**no** `POST` on the v3 router). The legacy **`v2`** path uses the same parameter names with a different response shape; see Notes.

Query summary: **`documentType`**, **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`PPT`**, **`PA`**. |
| `documentNumber` | string | yes | Document number **without** spaces or punctuation. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
