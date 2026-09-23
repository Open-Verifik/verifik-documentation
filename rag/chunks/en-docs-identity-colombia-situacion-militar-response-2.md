---
id: "en-docs-identity-colombia-situacion-militar-response-2"
title: "Colombia — Military service status — Response"
sourcePath: "docs/identity/colombia-situacion-militar.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/situacion-militar"
sourceAnchor: "Response"
slug: "/identity/colombia-situacion-militar"
url: "https://docs.verifik.co/identity/colombia-situacion-militar"
---

# Colombia — Military service status
**API path(s):** /v2/co/situacion-militar

Verifik’s **Military service status** endpoint retrieves a person’s **situación militar** (military situation) for Colombian citizens identified by **Cédula de Ciudadanía (CC)**. Use it for onboarding, workforce eligibility, or compliance checks where military obligation status is required.
The integration queries official Colombian military sources. Only **`documentType=CC`** is supported; other ID types are rejected at validation.

## Response

```json
{
	"data": {
		"adress": "Example address or guidance text from the source",
		"documentNumber": "1121329661",
		"documentType": "CC",
		"fullName": "LASTNAME FIRSTNAME",
		"place": "Place text from the military record",
		"remissSince": "Date or status text when applicable",
		"state": "Military situation or classification text"
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "April 20, 2026 10:00 AM"
	},
	"id": "ABC12"
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
	"message": "Validation error (e.g. missing query parameter or documentType not CC)."
}
```

  

Field names and string values follow the upstream source; `adress` is spelled as returned by the API.

### Notes

- Only **`CC`** is valid for **`documentType`**. If a client or Explorer UI lists other document types, sending anything other than **`CC`** still results in validation failure (**409**).
- Responses are derived from live consultation of official systems; availability and field population may vary by record.
