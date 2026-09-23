---
id: "es-docs-es-identity-colombia-ce-solicitud-2"
title: "Colombia — CE (Cédula de Extranjería) — Solicitud"
sourcePath: "docs-es/identity/colombia-ce.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ce"
sourceAnchor: "Solicitud"
slug: "/identidad/colombia-ce"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-ce"
---

# Colombia — CE (Cédula de Extranjería)
**API path(s):** /v2/co/foreigner-id/ce

Verifik valida registros de **CE** publicados por **Migración Colombia** para KYC, elegibilidad y cumplimiento.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/foreigner-id/ce", {
	params: {
		documentNumber: "987654321",
		expeditionDate: "15/06/2020",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/foreigner-id/ce"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "987654321", "expeditionDate": "15/06/2020"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"documentNumber": "987654321",
		"documentType": "CE",
		"expirationDate": "15/06/2030",
		"firstName": "MARIA",
		"fullName": "MARIA EJEMPLO PEREZ",
		"lastName": "EJEMPLO PEREZ",
		"status": "VIGENTE"
	},
	"signature": {
		"dateTime": "April 20, 2026 10:00 AM",
		"message": "Certified by Verifik.co"
	},
	"id": "CE01A"
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

- **Consulta oficial de CE** ante Migración Colombia
- **Vigencia y fechas** cuando la fuente las devuelve

## Casos de uso

- **Onboarding** de residentes extranjeros con CE colombiana
- **Banca, empleo y cumplimiento** que requieran confirmar estado migratorio

### Notas

- **`expeditionDate`** debe estar en **`DD/MM/AAAA`**; formatos incorrectos suelen devolver **409**.
- **`GET`** y **`POST`** comparten el mismo manejador; usa **`POST`** si prefieres JSON en el cuerpo.
- Cambios en el portal o indisponibilidad pueden producir **404** / **500**.
