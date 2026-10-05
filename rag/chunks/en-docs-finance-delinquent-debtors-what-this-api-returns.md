---
id: "en-docs-finance-delinquent-debtors-what-this-api-returns"
title: "Colombia — Delinquent debtors (BDME) — What this API returns"
sourcePath: "docs/finance/delinquent-debtors.mdx"
locale: "en"
category: "finance"
tags:
  - "co"
  - "finance"
endpoint: "/v2/co/deudoresmorosos"
sourceAnchor: "What this API returns"
slug: "/finance/delinquent-debtors"
url: "https://docs.verifik.co/finance/delinquent-debtors"
---

# Colombia — Delinquent debtors (BDME)
**API path(s):** /v2/co/deudoresmorosos

## What this API returns

Verifik queries **BDME** (*Base de Datos de Morosos*), the Colombian **delinquent debtors bulletin** published by **Contaduría General de la Nación** (via the official **BDME** web portal), using **`documentType`** and **`documentNumber`**. The integration returns a **status** line and **reporting** fields when the source responds with a match.

Use this for **credit risk**, **onboarding**, and **compliance** checks where BDME consultation is allowed.

## What this API returns

- **`documentType`** / **`documentNumber`** echoed from the request
- **`status`** — bulletin state text from the upstream response
- **`reportingEntity`**, **`reportedName`**, **`city`**, **`phone`** — fields parsed from the BDME payload when present
- A **signed** Verifik wrapper (`data` + `signature`)

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/deudoresmorosos
```

Query-only **GET**; pass **`documentType`** and **`documentNumber`**. There is **no** `POST` route for this path in the current backend.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | Document category. Use **`CC`**, **`CE`**, **`PA`**, **`NIT`**, or **`PPT`** (maps to BDME identification types in the integration). |
| `documentNumber` | string | yes | ID number **without** spaces or punctuation. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/deudoresmorosos", {
	params: {
		documentType: "NIT",
		documentNumber: "800096561",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/deudoresmorosos"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "800096561"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
