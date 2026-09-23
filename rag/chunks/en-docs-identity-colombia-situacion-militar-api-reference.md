---
id: "en-docs-identity-colombia-situacion-militar-api-reference"
title: "Colombia — Military service status — API Reference"
sourcePath: "docs/identity/colombia-situacion-militar.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/situacion-militar"
sourceAnchor: "API Reference"
slug: "/identity/colombia-situacion-militar"
url: "https://docs.verifik.co/identity/colombia-situacion-militar"
---

# Colombia — Military service status
**API path(s):** /v2/co/situacion-militar

## API Reference

Verifik’s **Military service status** endpoint retrieves a person’s **situación militar** (military situation) for Colombian citizens identified by **Cédula de Ciudadanía (CC)**. Use it for onboarding, workforce eligibility, or compliance checks where military obligation status is required.

The integration queries official Colombian military sources. Only **`documentType=CC`** is supported; other ID types are rejected at validation.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/situacion-militar
```

Send **`documentType`** and **`documentNumber`** as **query** parameters. **`documentType`** must be **`CC`** (Cédula de Ciudadanía). **`documentNumber`** is the citizen’s ID number without spaces or separators, as registered.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                                                 |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Must be `CC`. The API does not accept CE, PPT, or other document types here. |
| `documentNumber` | string | Yes      | Number of the Cédula de Ciudadanía to query.                                 |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/situacion-militar", {
	params: { documentType: "CC", documentNumber: "1121329661" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/situacion-militar"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1121329661"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```bash
curl -sS "https://api.verifik.co/v2/co/situacion-militar?documentType=CC&documentNumber=1121329661" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $VERIFIK_TOKEN"
```
