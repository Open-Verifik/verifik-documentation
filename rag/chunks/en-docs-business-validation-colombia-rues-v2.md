---
id: "en-docs-business-validation-colombia-rues-v2"
title: "Colombia — RUES business lookup (v2, legacy) — Which endpoint should I use? (v2)"
sourcePath: "docs/business-validation/colombia-rues-v2.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/rues"
sourceAnchor: "Which endpoint should I use? (v2)"
slug: "/business-validation/colombia-rues-v2"
url: "https://docs.verifik.co/business-validation/colombia-rues-v2"
---

# Colombia — RUES business lookup (v2, legacy)
**API path(s):** /v2/co/rues

## Which endpoint should I use? (v2)

Validates a Colombian business in **RUES** using **NIT** via the legacy **v2** API. Returns essential registration data. For a **full** dossier on v2, use `GET /v2/co/rues/complete`. For new integrations, prefer [RUES business lookup (v3)](/business-validation/colombia-rues-v3).

## Which endpoint should I use? (v2)

| | **`GET /v2/co/rues`** (this API) | **`GET /v2/co/rues/complete`** |
| --- | --- | --- |
| **Purpose** | Quick validation by NIT | **Complete** business information |
| **Parameter** | `nit` | `nit` |
| **Catalog pricing** | Lower (e.g. **0.2** / **0.3** SmartCheck) | Higher (e.g. **0.3** / **0.4** SmartCheck) |

### Endpoint

```
GET https://api.verifik.co/v2/co/rues
```

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `nit` | string | Yes | Company tax ID (NIT), without spaces or punctuation. |

### Notes

- **Legacy:** prefer **v3** ([basic](/business-validation/colombia-rues-v3) / [complete](/business-validation/rues-complete-v3)) for new projects.
- For **full** RUES data on v2, use **`GET /v2/co/rues/complete`**.

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rues", {
	params: { nit: "900265177" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

### Response

  

```json
{
	"data": {},
	"signature": { "dateTime": "…", "message": "Certified by Verifik.co" }
}
```
