---
id: "es-docs-es-legal-colombia-rethus-que-devuelve-la-api"
title: "Colombia — RETHUS (registro de talento humano en salud) — Qué devuelve la API"
sourcePath: "docs-es/legal/colombia-rethus.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/cedula/rethus"
sourceAnchor: "Qué devuelve la API"
slug: "/legal/colombia-rethus"
url: "https://docs.verifik.co/verifik-es/legal/colombia-rethus"
---

# Colombia — RETHUS (registro de talento humano en salud)
**API path(s):** /v2/co/cedula/rethus

## Qué devuelve la API

Verifik valida la identidad y consulta **RETHUS** (*Registro Único Nacional de Talento Humano en Salud*) con **`documentType`** y **`documentNumber`**. El flujo resuelve primero el ciudadano y luego RETHUS para **estado del registro**, **formación académica** y filas de **prestaciones / seguridad social (SSO)** cuando la fuente las devuelve.

## Qué devuelve la API

- Campos de **identidad** del ciudadano emparejado
- **`rethus.status`** — texto de estado en la grilla RETHUS
- **`rethus.academic`** — títulos / formación cuando existan
- **`rethus.dataSSO`** — prestaciones, modalidades y entidades cuando existan
- Respuesta **firmada** por Verifik

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/rethus
```

Los mismos campos pueden enviarse en **`POST`** con cuerpo JSON. **`GET`** usa **parámetros de consulta** como abajo.

Resumen: **`documentType`**, **`documentNumber`**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `documentType` | string | sí | Uno de **`CC`**, **`CE`**, **`PPT`**. |
| `documentNumber` | string | sí | Número sin espacios ni signos (**5–15** caracteres). |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/rethus", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula/rethus"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
