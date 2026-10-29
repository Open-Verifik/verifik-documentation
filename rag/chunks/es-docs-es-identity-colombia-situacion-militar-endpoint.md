---
id: "es-docs-es-identity-colombia-situacion-militar-endpoint"
title: "Colombia — Situación militar — Endpoint"
sourcePath: "docs-es/identity/colombia-situacion-militar.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/situacion-militar"
sourceAnchor: "Endpoint"
slug: "/identity/colombia-situacion-militar"
url: "https://docs.verifik.co/verifik-es/identity/colombia-situacion-militar"
---

# Colombia — Situación militar
**API path(s):** /v2/co/situacion-militar

## Endpoint

```
GET https://api.verifik.co/v2/co/situacion-militar
```

Consulta la **situación militar** con **`documentType=CC`** y el número de cédula. Solo se acepta **CC** (Cédula de Ciudadanía).

### Encabezados

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name             | Type   | Required | Description                                        |
| ---------------- | ------ | -------- | -------------------------------------------------- |
| `documentType`   | string | Sí       | Debe ser `CC`. No se aceptan CE, PPT u otros tipos. |
| `documentNumber` | string | Sí       | Número de la cédula a consultar.                    |

### Solicitud

  

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

### Respuesta

  

```json
{
	"data": {
		"adress": "Texto de dirección o guía según la fuente",
		"documentNumber": "1121329661",
		"documentType": "CC",
		"fullName": "APELLIDO NOMBRE",
		"place": "Texto de lugar del registro",
		"remissSince": "Fecha o texto de estado si aplica",
		"state": "Texto de situación militar"
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "April 20, 2026 10:00 AM"
	},
	"id": "ABC12"
}
```

  
  

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

  
  

```json
{
	"code": "MissingParameter",
	"message": "Error de validación (parámetro faltante o documentType distinto de CC)."
}
```

  

El campo `adress` se escribe tal como lo devuelve la API.
