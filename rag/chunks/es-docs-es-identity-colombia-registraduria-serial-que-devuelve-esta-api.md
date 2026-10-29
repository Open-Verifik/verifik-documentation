---
id: "es-docs-es-identity-colombia-registraduria-serial-que-devuelve-esta-api"
title: "Colombia — Consulta de registro civil por serial (SCCRC) — Qué devuelve esta API"
sourcePath: "docs-es/identity/colombia-registraduria-serial.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/serial"
sourceAnchor: "Qué devuelve esta API"
slug: "/identity/colombia-registraduria-serial"
url: "https://docs.verifik.co/verifik-es/identity/colombia-registraduria-serial"
---

# Colombia — Consulta de registro civil por serial (SCCRC)
**API path(s):** /v2/co/registraduria/serial

## Qué devuelve esta API

Localiza un registro civil de **nacimiento** (*registro civil de nacimiento*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**) usando el **serial** impreso en el documento del registro.

Complementa [ciudadano por documento](/identity-validation/colombia/colombian-citizen) y [búsqueda por nombre](/identity-validation/colombia/colombian-citizen-by-name) cuando ya tienes el serial del registro civil.

## Qué devuelve esta API

- **`documentNumber`**, **`documentType`** — NUIP/CC cuando está presente
- **`firstName`**, **`lastName`**, **`fullName`**, **`arrayName`**
- **`sexo`**, **`serial`**
- **`oficina`** / **`expeditionPlace`**, **`fecha`** / **`dateOfBirth`** cuando están disponibles
- **`recordType`** — `REGISTRO CIVIL DE NACIMIENTO`
- Un wrapper de respuesta Verifik **firmado**

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/registraduria/serial
```

Usa este endpoint cuando tienes el **serial del registro civil** y necesitas los campos de identidad vinculados. La misma integración está disponible como **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de consulta** como se muestra abajo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `serial` | string | yes | Serial del registro civil (hasta **10** dígitos; se permiten ceros a la izquierda) | `0031058170` |

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
