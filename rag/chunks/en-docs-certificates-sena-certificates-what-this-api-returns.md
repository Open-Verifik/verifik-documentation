---
id: "en-docs-certificates-sena-certificates-what-this-api-returns"
title: "Colombia — SENA Certificates — What this API returns"
sourcePath: "docs/certificates/sena-certificates.mdx"
locale: "en"
category: "certificates"
tags:
  - "co"
  - "certificates"
endpoint: "/v2/co/sena/certificados"
sourceAnchor: "What this API returns"
slug: "/certificates/sena-certificates"
url: "https://docs.verifik.co/certificates/sena-certificates"
---

# Colombia — SENA Certificates
**API path(s):** /v2/co/sena/certificados

## What this API returns

This endpoint returns **SENA** (Servicio Nacional de Aprendizaje) **training and certification records** for a Colombian individual, sourced from the official SENA digital certificate portal. Each row describes a program title, certification type, completion date, and a link to download the digital certificate when available.

Use it for **employment screening**, **skills verification**, and **education compliance** checks where this registry is allowed.

## What this API returns

- An **array of certificate rows** under **`data`**, each with fields such as **`record`**, **`title`**, **`type`**, **`program`**, **`certificationDate`**, **`certificationSignature`**, and **`certificateDownload`**
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/sena/certificados
```

**GET** with **query parameters** only.

Query summary: **`documentType`**, **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`TI`**, **`CE`**, **`PA`**, **`RC`**, **`PEP`**. |
| `documentNumber` | string | yes | Document number **without** spaces or punctuation. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sena/certificados", {
	params: {
		documentType: "CC",
		documentNumber: "1234567890",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/sena/certificados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1234567890"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
