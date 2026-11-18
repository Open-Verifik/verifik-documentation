---
id: "en-docs-identity-colombia-cedula-registraduria-what-this-api-returns"
title: "Colombia — Citizen lookup via Registraduría (SCCRC) — What this API returns"
sourcePath: "docs/identity/colombia-cedula-registraduria.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/registraduria"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-cedula-registraduria"
url: "https://docs.verifik.co/identity/colombia-cedula-registraduria"
---

# Colombia — Citizen lookup via Registraduría (SCCRC)
**API path(s):** /v2/co/cedula/registraduria

## What this API returns

Look up a **birth civil registry** record (*registro civil de nacimiento*) from **Registraduría Nacional del Estado Civil** (**SCCRC**) using a Colombian **cédula (CC)** document number.

Unlike [citizen by document](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), this endpoint hits **Registraduría only** — it does **not** try Procuraduría or DIAN. Use it to isolate SCCRC document-mode behavior.

## What this API returns

- **`documentNumber`**, **`documentType`**
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** when available
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/registraduria
```

Use this endpoint when you need a **document-only SCCRC** lookup. The same integration is available as **`POST`** with a JSON body. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentType` | string | yes | Must be **`CC`** | `CC` |
| `documentNumber` | string | yes | Colombian cédula number | `1032386359` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/registraduria", {
	params: {
		documentType: "CC",
		documentNumber: "1032386359",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula/registraduria"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1032386359"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
