---
id: "en-docs-business-validation-colombia-rues-complete-v2"
title: "Colombia — RUES complete lookup (v2, legacy) — Which endpoint should I use? (v2)"
sourcePath: "docs/business-validation/colombia-rues-complete-v2.mdx"
locale: "en"
category: "business-validation"
tags:
  - "co"
  - "business-validation"
endpoint: "/v2/co/rues/complete"
sourceAnchor: "Which endpoint should I use? (v2)"
slug: "/business-validation/colombia-rues-complete-v2"
url: "https://docs.verifik.co/business-validation/colombia-rues-complete-v2"
---

# Colombia — RUES complete lookup (v2, legacy)
**API path(s):** /v2/co/rues/complete

## Which endpoint should I use? (v2)

Retrieves **complete** Colombian business information from the RUES registry by **NIT** (legacy **v2** API). Includes more detail than `GET /v2/co/rues`. For new integrations, use [RUES Complete (v3)](/business-validation/rues-complete-v3).

## Which endpoint should I use? (v2)

| | **`GET /v2/co/rues`** | **`GET /v2/co/rues/complete`** (this API) |
| --- | --- | --- |
| **Purpose** | Basic summary | **Full** dossier (representatives, activities, etc.) |
| **Parameter** | `nit` | `nit` |
| **Catalog pricing** | Lower | Higher because more official data is aggregated |

### Endpoint

```
GET https://api.verifik.co/v2/co/rues/complete
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

- **Pricing:** costs more than **`GET /v2/co/rues`** due to additional RUES detail in one response.
- **Legacy:** prefer **v3** [complete](/business-validation/rues-complete-v3) for new integrations.

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/rues/complete", {
	params: { nit: "1121329661" },
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
