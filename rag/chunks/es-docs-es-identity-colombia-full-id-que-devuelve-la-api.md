---
id: "es-docs-es-identity-colombia-full-id-que-devuelve-la-api"
title: "Colombia — Cédula con datos extendidos (CC) — Qué devuelve la API"
sourcePath: "docs-es/identity/colombia-full-id.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "Qué devuelve la API"
slug: "/identidad/colombia-full-id"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-full-id"
---

# Colombia — Cédula con datos extendidos (CC)
**API path(s):** /v2/co/cedula/extra

## Qué devuelve la API

Verifik devuelve **datos extendidos** de la **Cédula de Ciudadanía (CC)** emparejando **número** y **fecha de expedición** con fuentes oficiales. Suele incluir **nombre**, **expedición**, **fecha y lugar**, **fecha de nacimiento**, **género** y **estado vital** cuando la fuente los provee.

Los datos son **sensibles**; úsalos solo donde la ley y tu política lo permitan.

## Qué devuelve la API

- **Identidad** (partes del nombre, tipo y número de documento)
- **Expedición** (fecha y lugar coherentes con la consulta)
- **Campos personales** como **fecha de nacimiento**, **género** y **estado vital** cuando existan
- Respuesta **firmada**; puede haber **caché**

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/cedula/extra
```

La misma integración está disponible como **`POST`** con cuerpo JSON con los mismos campos. En **`GET`** usa **parámetros de query** como abajo.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| nombre | tipo | requerido | descripción |
| --- | --- | --- | --- |
| `documentType` | string | sí | Debe ser **`CC`**. |
| `documentNumber` | string | sí | Número de CC sin espacios ni puntuación. |
| `date` | string | sí | **Fecha de expedición** del documento en **`DD/MM/AAAA`**. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/extra", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
		date: "10/10/2020",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula/extra"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789", "date": "10/10/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
