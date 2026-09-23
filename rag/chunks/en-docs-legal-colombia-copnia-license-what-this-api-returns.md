---
id: "en-docs-legal-colombia-copnia-license-what-this-api-returns"
title: "Colombia — COPNIA professional license by matrícula — What this API returns"
sourcePath: "docs/legal/colombia-copnia-license.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia/matricula"
sourceAnchor: "What this API returns"
slug: "/legal/colombia-copnia-license"
url: "https://docs.verifik.co/legal/colombia-copnia-license"
---

# Colombia — COPNIA professional license by matrícula
**API path(s):** /v2/co/copnia/matricula

## What this API returns

Verifik queries **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) using a single **`licenseNumber`** (matrícula). Use this when you already have the registration number and need the holder and license status.

## What this API returns

- **Identity** fields: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`
- Flattened license fields: **`licenseNumber`**, **`licenseStatus`**, **`licenseType`**, **`profession`**, **`resolutionDate`**, **`resolutionNumber`**
- A **signed** Verifik response (no `licenses[]` array)

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/copnia/matricula
```

Send **`licenseNumber`** as a **query** parameter. The handler returns the person and the six license fields on the same object. Typical values look like `091132-0839078 CNDC` (6–40 characters after trim).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `licenseNumber` | string | Yes | COPNIA registration number (matrícula), **6–40** characters. Spaces are allowed. | `091132-0839078 CNDC` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/copnia/matricula", {
	params: {
		licenseNumber: "091132-0839078 CNDC",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/copnia/matricula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"licenseNumber": "091132-0839078 CNDC"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
