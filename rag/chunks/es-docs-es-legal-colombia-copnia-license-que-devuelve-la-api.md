---
id: "es-docs-es-legal-colombia-copnia-license-que-devuelve-la-api"
title: "Colombia — COPNIA matrícula profesional por número — Qué devuelve la API"
sourcePath: "docs-es/legal/colombia-copnia-license.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/copnia/matricula"
sourceAnchor: "Qué devuelve la API"
slug: "/legal/colombia-copnia-license"
url: "https://docs.verifik.co/verifik-es/legal/colombia-copnia-license"
---

# Colombia — COPNIA matrícula profesional por número
**API path(s):** /v2/co/copnia/matricula

## Qué devuelve la API

Verifik consulta **COPNIA** (*Consejo Profesional Nacional de Ingeniería*) con un solo **`licenseNumber`** (matrícula). Úsalo cuando ya tienes el número de registro y necesitas el titular y el estado.

## Qué devuelve la API

- Campos de **identidad**: `documentType`, `documentNumber`, `firstName`, `lastName`, `fullName`, `arrayName`
- Campos de matrícula en el mismo objeto: **`licenseNumber`**, **`licenseStatus`**, **`licenseType`**, **`profession`**, **`resolutionDate`**, **`resolutionNumber`**
- Respuesta **firmada** por Verifik (sin arreglo `licenses[]`)

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/co/copnia/matricula
```

Envía **`licenseNumber`** como **parámetro de consulta**. El manejador devuelve la persona y los seis campos de la matrícula en el mismo objeto. Un valor típico es `091132-0839078 CNDC` (6–40 caracteres).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `licenseNumber` | string | Sí | Número de matrícula COPNIA, **6–40** caracteres. Se permiten espacios. | `091132-0839078 CNDC` |

### Solicitud

  

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
