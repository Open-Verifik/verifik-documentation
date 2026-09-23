---
id: "es-docs-es-certificados-sena-certificados-que-devuelve-esta-api"
title: "Colombia — Certificados SENA — Qué devuelve esta API"
sourcePath: "docs-es/certificados/sena-certificados.mdx"
locale: "es"
category: "certificados"
tags:
  - "co"
  - "certificados"
endpoint: "/v2/co/sena/certificados"
sourceAnchor: "Qué devuelve esta API"
slug: "/certificados/sena-certificados"
url: "https://docs.verifik.co/verifik-es/certificados/sena-certificados"
---

# Colombia — Certificados SENA
**API path(s):** /v2/co/sena/certificados

## Qué devuelve esta API

Este endpoint devuelve **registros de formación y certificación del SENA** (Servicio Nacional de Aprendizaje) para una persona en Colombia, obtenidos del portal oficial de certificados digitales del SENA. Cada fila describe el título del programa, el tipo de certificación, la fecha de expedición y un enlace para descargar el certificado digital cuando esté disponible.

Úselo para **verificación laboral**, **validación de competencias** y **cumplimiento educativo** cuando este registro esté permitido.

## Qué devuelve esta API

- Un **arreglo de filas de certificados** en **`data`**, con campos como **`record`**, **`title`**, **`type`**, **`program`**, **`certificationDate`**, **`certificationSignature`** y **`certificateDownload`**
- Una respuesta **firmada** por Verifik

## Referencia de la API

### Endpoint

```
GET https://api.verifik.co/v2/co/sena/certificados
```

**GET** con **parámetros de consulta** únicamente.

Resumen de consulta: **`documentType`**, **`documentNumber`**.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| nombre | tipo | requerido | descripción |
| --- | --- | --- | --- |
| `documentType` | string | sí | Uno de **`CC`**, **`TI`**, **`CE`**, **`PA`**, **`RC`**, **`PEP`**. |
| `documentNumber` | string | sí | Número de documento **sin** espacios ni puntuación. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sena/certificados", {
	params: {
		documentType: "CC",
		documentNumber: "1234567890",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/sena/certificados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "1234567890"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
