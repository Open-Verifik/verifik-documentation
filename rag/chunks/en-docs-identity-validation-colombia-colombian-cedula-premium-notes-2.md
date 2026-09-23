---
id: "en-docs-identity-validation-colombia-colombian-cedula-premium-notes-2"
title: "Colombia — National ID premium lookup (CC) — Notes"
sourcePath: "docs/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/premium"
sourceAnchor: "Notes"
slug: "/identity-validation/colombia/colombian-cedula-premium"
url: "https://docs.verifik.co/identity-validation/colombia/colombian-cedula-premium"
---

# Colombia — National ID premium lookup (CC)
**API path(s):** /v2/co/cedula/premium

**Purpose:** confirm a **Colombian *Cédula de Ciudadanía* (CC)** against official sources and return a **structured identity record** suitable for KYC and compliance workflows—not a binary pass/fail on the number alone. The response reflects **how the name is recorded**, **date of birth**, **place and date of issue**, and—where provided by sources—**gender** and **alive status**, with a **signed certification** block in the response. **Submit only the document number**; the **issue date is resolved server-side** (no `documentType` or issue date in the request). Record depth matches [**cédula extra**](/identity/colombia-full-id). Credit consumption is **higher** than the [**basic cédula endpoint**](/identity-validation/colombia/colombian-citizen) because of additional resolution steps.

## Notes

- **CC only** — there is no `documentType` on this route; the flow always treats the number as **CC** (see controller).
- Prefer **digits only** in `documentNumber` (spaces and separators are stripped server-side).
- For **PPT**, **CE**, or other types, use the appropriate dedicated endpoints—not this one.

### Direct premium vs dynamic pricing

This page documents the **explicit premium endpoint** (`/v2/co/cedula/premium`). Calling it directly always uses **premium pricing**.

**Dynamic pricing** applies when you call the standard [**basic cédula endpoint**](/identity-validation/colombia/colombian-citizen#dynamic-pricing) (`/v2/co/cedula`) and Dynamic Query automatically escalates to an extended verification path. When that escalation returns **HTTP 200**, you are charged the same **premium tier** as this route—not the standard tier. See the [SLA — Dynamic pricing (billing)](/legal/service-level-agreement#dynamic-pricing-billing) for billing rules.

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/premium", {
	params: { documentNumber: "1234567890" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```javascript

const { data } = await axios.post(
	"https://api.verifik.co/v2/co/cedula/premium",
	{ documentNumber: "1234567890" },
	{
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
	}
);
console.log(data);
```

### Response

  

Example shape (illustrative placeholders, not real individuals):

```json
{
	"data": {
		"arrayName": ["GIVEN", "MIDDLE", "PATERNAL", "MATERNAL"],
		"dateOfBirth": "1990-05-20",
		"documentNumber": "1234567890",
		"documentType": "CC",
		"expeditionDate": "2015-08-12",
		"expeditionPlace": {
			"municipio": "Example Municipality",
			"departamento": "Example Department"
		},
		"firstName": "GIVEN MIDDLE",
		"fullName": "GIVEN MIDDLE PATERNAL MATERNAL",
		"gender": "HOMBRE",
		"isAlive": true,
		"lastName": "PATERNAL MATERNAL"
	},
	"signature": {
		"dateTime": "April 21, 2026 9:34 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "XXXXX"
}
```

Field names and presence may match upstream and official data availability.

  
  

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

Returned when upstream sources do not yield a match or required data (e.g. expedition resolution fails).

  
  

```json
{
	"code": "MissingParameter",
	"message": "documentNumber maximum length: 10\n"
}
```

Validation uses **5–10** characters for `documentNumber`; other Joi messages may appear for missing or invalid input.
