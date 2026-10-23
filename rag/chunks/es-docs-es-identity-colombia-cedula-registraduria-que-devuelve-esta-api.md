---
id: "es-docs-es-identity-colombia-cedula-registraduria-que-devuelve-esta-api"
title: "Colombia — Consulta de ciudadano vía Registraduría (SCCRC) — Qué devuelve esta API"
sourcePath: "docs-es/identity/colombia-cedula-registraduria.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/registraduria"
sourceAnchor: "Qué devuelve esta API"
slug: "/identity/colombia-cedula-registraduria"
url: "https://docs.verifik.co/verifik-es/identity/colombia-cedula-registraduria"
---

# Colombia — Consulta de ciudadano vía Registraduría (SCCRC)
**API path(s):** /v2/co/cedula/registraduria

## Qué devuelve esta API

Consulta un registro civil de **nacimiento** (*registro civil de nacimiento*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**) usando el número de **cédula (CC)**.

A diferencia de [ciudadano por documento](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), este endpoint usa **solo Registraduría** — **no** intenta Procuraduría ni DIAN. Úsalo para aislar el comportamiento de SCCRC en modo documento.

## Qué devuelve esta API

- **`documentNumber`**, **`documentType`**
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** cuando aplica
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- Respuesta **firmada** por Verifik

## Referencia de la API

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/registraduria
```

Úsalo cuando necesites una consulta **SCCRC solo por documento**. También disponible como **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de query** como abajo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentType` | string | yes | Debe ser **`CC`** | `CC` |
| `documentNumber` | string | yes | Número de cédula colombiana | `1032386359` |

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
