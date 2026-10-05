---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-by-name-request-2"
title: "Colombia — Búsqueda de ciudadano por nombre (SCCRC) — Request"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen-by-name.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/by-name"
sourceAnchor: "Request"
slug: "/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-por-nombre"
---

# Colombia — Búsqueda de ciudadano por nombre (SCCRC)
**API path(s):** /v2/co/cedula/by-name

Consulta el registro civil de nacimiento (**SCCRC**) de la **Registraduría Nacional del Estado Civil** usando **nombres**, **sexo** y **fecha de nacimiento**. A diferencia de [ciudadano colombiano por documento](/identity-validation/colombia/colombian-citizen), este endpoint es una **búsqueda inversa** y puede devolver **múltiples coincidencias**.
Úsalo cuando conoces atributos de identidad personal pero no el NUIP/CC, o cuando necesitas confirmar posibles hallazgos en el registro antes de una verificación por documento.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/cedula/by-name", {
	params: {
		primerNombre: "MARIA",
		primerApellido: "LOPEZ",
		sexo: "FEMENINO",
		fecha: "15/03/1990",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula/by-name"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
	"primerNombre": "MARIA",
	"primerApellido": "LOPEZ",
	"sexo": "FEMENINO",
	"fecha": "15/03/1990",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"matches": [
			{
				"documentType": "CC",
				"documentNumber": "10000001",
				"firstName": "MARIA ELENA",
				"lastName": "LOPEZ GARCIA",
				"fullName": "MARIA ELENA LOPEZ GARCIA",
				"arrayName": ["MARIA", "ELENA", "LOPEZ", "GARCIA"],
				"sexo": "FEMENINO",
				"serial": "0031010001",
				"oficina": "NOTARIA UNICA - BOGOTA D.C.",
				"expeditionPlace": "NOTARIA UNICA - BOGOTA D.C.",
				"fecha": "15/03/1990",
				"dateOfBirth": "15/03/1990",
				"recordType": "REGISTRO CIVIL DE NACIMIENTO"
			}
		],
		"recordType": "REGISTRO CIVIL DE NACIMIENTO"
	},
	"signature": {
		"dateTime": "July 20, 2026 12:00 PM",
		"message": "Certified by Verifik.co"
	}
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
	"message": "missing primerNombre"
}
```

## Características

- **Búsqueda inversa** contra el registro de nacimiento **SCCRC** de la Registraduría
- La respuesta siempre tiene forma **`{ matches: [...] }`** (revisa cada hallazgo)
- El segundo nombre / apellido opcionales mejoran la precisión
- **GET** y **POST** comparten el mismo handler
