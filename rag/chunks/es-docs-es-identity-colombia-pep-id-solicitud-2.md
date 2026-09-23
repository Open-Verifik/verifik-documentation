---
id: "es-docs-es-identity-colombia-pep-id-solicitud-2"
title: "Colombia — PEP (Permiso Especial de Permanencia) — Solicitud"
sourcePath: "docs-es/identity/colombia-pep-id.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/pep"
sourceAnchor: "Solicitud"
slug: "/identidad/colombia-id-pep"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-id-pep"
---

# Colombia — PEP (Permiso Especial de Permanencia)
**API path(s):** /v2/co/foreigner-id/pep

Verifik valida registros de **PEP** publicados por **Migración Colombia** para KYC, elegibilidad y cumplimiento.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/foreigner-id/pep", {
	params: {
		documentNumber: "123456789",
		expeditionDate: "10/10/2024",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/foreigner-id/pep"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "expeditionDate": "10/10/2024"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"arrayName": ["MATEO", "VERIFIK"],
		"documentNumber": "123456789012345",
		"documentType": "PEP",
		"expirationDate": "08/08/2018",
		"firstName": "MATEO",
		"fullName": "MATEO VERIFIK",
		"identification": "17609583",
		"lastName": "VERIFIK",
		"status": "VENCIDO"
	},
	"signature": {
		"dateTime": "August 22, 2023 8:02 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "tnlkb"
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
	"message": "expeditionDate must be a valid date in DD/MM/YYYY format"
}
```

## Características

- **Consulta oficial de PEP** contra el flujo de Migración Colombia
- **Vigencia y fechas** cuando la fuente las devuelve

## Casos de uso

- **Empleo, banca y servicios** para connacionales venezolanos con PEP en Colombia
- **Programas humanitarios** que requieran acreditar estancia

### Notas

- **`expeditionDate`** debe estar en **`DD/MM/AAAA`**; formatos incorrectos suelen devolver **409**.
- **`GET`** y **`POST`** comparten el mismo manejador; usa **`POST`** si prefieres JSON en el cuerpo.
- Cambios en el portal o indisponibilidad pueden producir **404** / **500**.
