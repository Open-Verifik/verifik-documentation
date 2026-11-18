---
id: "en-docs-identity-colombia-registraduria-serial-what-this-api-returns"
title: "Colombia — Civil registry lookup by serial (SCCRC) — What this API returns"
sourcePath: "docs/identity/colombia-registraduria-serial.mdx"
locale: "en"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/serial"
sourceAnchor: "What this API returns"
slug: "/identity/colombia-registraduria-serial"
url: "https://docs.verifik.co/identity/colombia-registraduria-serial"
---

# Colombia — Civil registry lookup by serial (SCCRC)
**API path(s):** /v2/co/registraduria/serial

## What this API returns

Locate a **birth civil registry** record (*registro civil de nacimiento*) from **Registraduría Nacional del Estado Civil** (**SCCRC**) using the **serial** printed on the registry document.

This complements [citizen by document](/identity-validation/colombia/colombian-citizen) and [lookup by name](/identity-validation/colombia/colombian-citizen-by-name) when you already have the civil-registry serial.

## What this API returns

- **`documentNumber`**, **`documentType`** — NUIP/CC when present
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** when available
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- A **signed** Verifik response wrapper

## API reference

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/serial
```

Use this endpoint when you have the **civil registry serial** and need the linked identity fields. The same integration is available as **`POST`** with a JSON body. **`GET`** uses **query parameters** as shown below.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `serial` | string | yes | Civil registry serial (up to **10** digits; leading zeros allowed) | `0031058170` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/registraduria/serial", {
	params: {
		serial: "0031058170",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/registraduria/serial"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"serial": "0031058170"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
