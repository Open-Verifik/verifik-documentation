---
id: "es-docs-es-identity-colombia-ppt-solicitud-2"
title: "Colombia — PPT (Permiso de Protección Temporal) — Solicitud"
sourcePath: "docs-es/identity/colombia-ppt.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/foreigner-id/ppt"
sourceAnchor: "Solicitud"
slug: "/identidad/colombia-ppt"
url: "https://docs.verifik.co/verifik-es/identidad/colombia-ppt"
---

# Colombia — PPT (Permiso de Protección Temporal)
**API path(s):** /v2/co/foreigner-id/ppt

Validación del **PPT** ante **Migración Colombia** para KYC, programas sociales y cumplimiento.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/foreigner-id/ppt", {
	params: {
		documentNumber: "123456789",
		expeditionDate: "07/03/2022",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/foreigner-id/ppt"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "123456789", "expeditionDate": "07/03/2022"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"arrayName": ["JUAN", "MIGUEL", "CAMERO", "MORALES"],
		"documentNumber": "2081381",
		"documentType": "PPT",
		"expeditionDate": "07/03/2022",
		"expirationDate": "30/05/2031",
		"firstName": "JUAN MIGUEL",
		"fullName": "JUAN MIGUEL CAMERO MORALES",
		"lastName": "CAMERO MORALES",
		"status": "VIGENTE"
	},
	"signature": {
		"dateTime": "May 13, 2025 11:52 PM",
		"message": "Certified by Verifik.co"
	},
	"id": "JD24J"
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

- Consulta de **PPT** ante Migración Colombia
- Campos de **vigencia** y fechas cuando la fuente los expone

## Casos de uso

- Programas de asistencia y empleo que requieran estado migratorio
- Onboarding financiero sujeto a verificación de PPT

### Notas

- **`expeditionDate`** debe estar en **`DD/MM/AAAA`**.
- **`GET`** y **`POST`** comparten la misma lógica.
- Cambios en el portal pueden producir **404** / **500**.
