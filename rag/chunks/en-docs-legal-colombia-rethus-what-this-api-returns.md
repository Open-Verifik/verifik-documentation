---
id: "en-docs-legal-colombia-rethus-what-this-api-returns"
title: "Colombia — RETHUS (health professionals registry) — What this API returns"
sourcePath: "docs/legal/colombia-rethus.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/cedula/rethus"
sourceAnchor: "What this API returns"
slug: "/legal/colombia-rethus"
url: "https://docs.verifik.co/legal/colombia-rethus"
---

# Colombia — RETHUS (health professionals registry)
**API path(s):** /v2/co/cedula/rethus

## What this API returns

Verifik confirms identity against **RETHUS** (*Registro Único Nacional de Talento Humano en Salud*) using **`documentType`** and **`documentNumber`**. The flow first resolves the person via the Colombian citizen lookup, then queries RETHUS for **registry status**, **academic** qualifications, and **social security / benefit (SSO)** rows when the source returns them.

Use this endpoint for **credentialing**, **compliance**, and **workforce** checks where RETHUS data is permitted.

## What this API returns

- **Identity** fields from the underlying citizen match (name parts, document type/number)
- **`rethus.status`** — registry status text from the RETHUS result grid
- **`rethus.academic`** — array of academic/professional rows (type, degree origin, profession, dates, entity, etc.) when present
- **`rethus.dataSSO`** — benefit / modality / entity rows when present
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/rethus
```

Same fields may be sent in a **`POST`** JSON body. **`GET`** uses **query parameters** as below.

Query-only summary: **`documentType`**, **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`PPT`**. |
| `documentNumber` | string | yes | Document number without spaces or punctuation (length **5–15**). |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/rethus", {
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

url = "https://api.verifik.co/v2/co/cedula/rethus"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
