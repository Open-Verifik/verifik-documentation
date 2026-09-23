---
id: "es-docs-es-identity-colombia-procuraduria-parameters-2"
title: "Colombia — Consulta de ciudadano vía Procuraduría — Parameters"
sourcePath: "docs-es/identity/colombia-procuraduria.mdx"
locale: "es"
category: "identity"
tags:
  - "co"
  - "identity"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/procuraduria"
  - "/v2/co/procuraduria/antecedentes"
sourceAnchor: "Parameters"
slug: "/identity/colombia-procuraduria"
url: "https://docs.verifik.co/verifik-es/identity/colombia-procuraduria"
---

# Colombia — Consulta de ciudadano vía Procuraduría
**API path(s):** /v2/co/cedula, /v2/co/procuraduria, /v2/co/procuraduria/antecedentes

Valida un número de documento colombiano y extrae **nombres** de la **Procuraduría General de la Nación**. Esta fuente oficial soporta *Cédula de ciudadanía* (**CC**), *Cédula de extranjería* (**CE**), *Permiso Especial de Permanencia* (**PEP**), *NIT* y *Permiso por Protección Temporal* (**PPT**).
A diferencia de [ciudadano por documento](/identity-validation/colombia/colombian-citizen) (`/v2/co/cedula`), este endpoint usa **solo Procuraduría** — **no** intenta DIAN, ADRES ni Registraduría. A diferencia de [antecedentes disciplinarios](/background-check/colombia-disciplinary-records-attorneys-office) (`/v2/co/procuraduria/antecedentes`), **no** devuelve `antecedentes` ni `legend`.

## Parameters

| name | type | required | description | Examples |
| --- | --- | --- | --- | --- |
| `documentType` | string | yes | Uno de **`CC`**, **`CE`**, **`PPT`**, **`NIT`**, **`PEP`** | `CE` |
| `documentNumber` | string | yes | Número de documento, solo dígitos | `688925` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/procuraduria", {
	params: {
		documentType: "CE",
		documentNumber: "688925",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/procuraduria"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CE", "documentNumber": "688925"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
	"data": {
		"documentType": "CE",
		"documentNumber": "688925",
		"firstName": "JUAN SEBASTIAN",
		"lastName": "RAIGOSA GALLEGO",
		"fullName": "JUAN SEBASTIAN RAIGOSA GALLEGO",
		"arrayName": ["JUAN", "SEBASTIAN", "RAIGOSA", "GALLEGO"]
	},
	"signature": {
		"dateTime": "August 25, 2026 12:00 PM",
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
	"message": "documentType must be one of: [CC,CE,PPT,NIT,PEP]"
}
```

## Características

- Consulta de **nombres** directa en Procuraduría
- Soporta **CC**, **CE**, **PPT**, **NIT**, **PEP**
- Sin antecedentes disciplinarios (`antecedentes`, `legend`)
- **GET** y **POST** comparten el mismo handler
