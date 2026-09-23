---
id: "en-docs-legal-colombia-adres-what-this-api-returns"
title: "Colombia — ADRES (BDUA affiliation) — What this API returns"
sourcePath: "docs/legal/colombia-adres.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/adres"
sourceAnchor: "What this API returns"
slug: "/legal/colombia-adres"
url: "https://docs.verifik.co/legal/colombia-adres"
---

# Colombia — ADRES (BDUA affiliation)
**API path(s):** /v2/co/adres

## What this API returns

Verifik queries **ADRES** (*Administradora de los Recursos del Sistema General de Seguridad Social en Salud*) / **BDUA** affiliation status using **`documentType`** and **`documentNumber`**.

Use this endpoint when you need **EPS affiliation**, **regime**, and **status** from ADRES/BDUA. It is **not** the same as [`GET /v2/co/afiliaciones`](/legal/verify-colombian-affiliations), which returns a broader RUAF/SISPRO social-security bundle (EPS, ARL, pension, cajas, cesantías) and requires a document issue **`date`**.

## What this API returns

- **Identity** fields when present (`firstName`, `lastName`, `fullName`, `arrayName`, document type/number)
- **Location** (`department`, `municipality`) when returned by the source
- **`affiliations`** — array of affiliation rows with `status`, `entity` (EPS), `regime`, `effectiveDate`, `endDate`, `affiliationType`
- A **signed** Verifik response

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/adres
```

This endpoint is **GET-only** (query parameters).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | One of **`CC`**, **`CE`**, **`PA`**, **`PE`**, **`PEP`**, **`PPT`**. |
| `documentNumber` | string | yes | Document number without spaces or punctuation. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/adres", {
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

url = "https://api.verifik.co/v2/co/adres"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
