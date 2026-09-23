---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-solicitud-6"
title: "Ciudadano Colombiano — Solicitud"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/procuraduria"
sourceAnchor: "Solicitud"
slug: "/validacion-identidad/colombia/ciudadano-colombiano"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/ppt, /v2/co/procuraduria

## Solicitud

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/cedula",
	params: { documentType: "CC", documentNumber: "123456789" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
};

const { data } = await axios.request(options);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {
    "documentType": "CC",
    "documentNumber": "123456789"
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"firstName": "Juan",
		"lastName": "Pérez",
		"fullName": "Juan Pérez"
	},
	"signature": {
		"message": "Certified by Verifik.co",
		"dateTime": "January 16, 2024 3:44 PM"
	},
	"id": "AB123"
}
```

  
  

```json
{
	"message": "Document not found",
	"code": "DOCUMENT_NOT_FOUND"
}
```

  
  

```json
{
	"message": "Authentication required",
	"code": "UNAUTHORIZED"
}
```
