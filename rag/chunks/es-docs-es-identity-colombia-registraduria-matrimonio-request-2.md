---
id: "es-docs-es-identity-colombia-registraduria-matrimonio-request-2"
title: "Colombia — Registro civil de matrimonio (SCCRC) — Request"
sourcePath: "docs-es/identity/colombia-registraduria-matrimonio.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoint: "/v2/co/registraduria/matrimonio"
sourceAnchor: "Request"
slug: "/identity/colombia-registraduria-matrimonio"
url: "https://docs.verifik.co/verifik-es/identity/colombia-registraduria-matrimonio"
---

# Colombia — Registro civil de matrimonio (SCCRC)
**API path(s):** /v2/co/registraduria/matrimonio

Consulta el **registro civil de matrimonio** (*registro civil de matrimonio*) de la **Registraduría Nacional del Estado Civil** (**SCCRC**).
Proporciona **un** modo de búsqueda:
1. **`documentNumber` + `sexo`** — búsqueda por documento (un solo registro)
2. **`primerNombre` + `primerApellido` + `sexo` + `fecha`** — búsqueda por nombre (puede devolver **`matches`**)
3. **`serial`** — búsqueda por serial (un solo registro)

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/registraduria/matrimonio", {
	params: {
		documentNumber: "10000001",
		sexo: "MASCULINO",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/registraduria/matrimonio"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "10000001", "sexo": "MASCULINO"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "10000001",
		"firstName": "JUAN CARLOS",
		"lastName": "PEREZ GOMEZ",
		"fullName": "JUAN CARLOS PEREZ GOMEZ",
		"arrayName": ["JUAN", "CARLOS", "PEREZ", "GOMEZ"],
		"sexo": "MASCULINO",
		"serial": "0042012345",
		"oficina": "NOTARIA UNICA - BOGOTA D.C.",
		"fecha": "20/06/2015",
		"recordType": "REGISTRO CIVIL DE MATRIMONIO"
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
	"message": "Provide serial, or documentNumber+sexo, or name fields with sexo and fecha"
}
```

## Características

- Tres modos de búsqueda: **documento**, **nombre** o **serial**
- El modo nombre puede devolver **`matches`**; documento/serial devuelven un solo objeto
- **GET** y **POST** comparten el mismo handler

## Casos de uso

- Confirmar un hallazgo del **registro de matrimonio** para KYC / cumplimiento
- Resolver seriales de matrimonio vinculados a un documento conocido
- Filtrado por nombre cuando solo hay datos biográficos
