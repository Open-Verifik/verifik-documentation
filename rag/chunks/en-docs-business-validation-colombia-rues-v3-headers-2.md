---
id: "en-docs-business-validation-colombia-rues-v3-headers-2"
title: "Colombia — RUES business lookup (v3) — Headers"
sourcePath: "docs/business-validation/colombia-rues-v3.mdx"
locale: "en"
category: "business-validation"
tags:
  - "business-validation"
endpoint: "/api/co/rues"
sourceAnchor: "Headers"
slug: "/business-validation/colombia-rues-v3"
url: "https://docs.verifik.co/business-validation/colombia-rues-v3"
---

# Colombia — RUES business lookup (v3)
**API path(s):** /api/co/rues

Verifik queries **RUES** (*Registro Único Empresarial y Social*) for a Colombian legal entity using **`NIT`**, a **registry category**, and returns a **normalized basic record** for that category (commercial registry, RUP proponent, tourism, non-profits, etc.). This is the **lighter** **`/v3/co/rues`** integration; use **`/v3/co/rues-complete`** when you need the **full** dossier (representatives, economic activities, establishments, and more).

## Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | yes | Must be **`NIT`**. |
| `documentNumber` | string | yes | Tax ID digits (punctuation is stripped server-side). |
| `category` | string | no | RUES line to query. One of **`RM`**, **`PROP`**, **`RUNEOL`**, **`RNT`**, **`ESAL`**, **`ESOL`**, **`JUEGOS`**, **`EXTRANJERAS`**. Defaults to **`RM`** if omitted. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v3/co/rues", {
	params: {
		documentType: "NIT",
		documentNumber: "800096561",
		category: "RM",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v3/co/rues"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "800096561", "category": "RM"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"businessName": "EXAMPLE SAS",
		"documentNumber": "800096561",
		"documentType": "NIT",
		"fullNit": "800096561-7",
		"location": "…",
		"organizationType": "…",
		"status": "ACTIVA",
		"category": "RM",
		"registration": "…",
		"chamberCode": "…"
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
	"message": "documentType must be [NIT]"
}
```
