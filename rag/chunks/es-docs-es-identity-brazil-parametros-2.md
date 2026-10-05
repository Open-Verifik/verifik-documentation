---
id: "es-docs-es-identity-brazil-parametros-2"
title: "Ciudadano Brasileño — Parámetros"
sourcePath: "docs-es/identity/brazil.mdx"
locale: "es"
category: "identity"
tags:
  - "br"
  - "identity"
endpoint: "/v2/br/cedula"
sourceAnchor: "Parámetros"
slug: "/identidad/brasil"
url: "https://docs.verifik.co/verifik-es/identidad/brasil"
---

# Ciudadano Brasileño
**API path(s):** /v2/br/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos brasileños usando el Cadastro de Pessoas Físicas (CPF). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CPF`. |
| `documentNumber` | string | Sí      | Número CPF (con o sin separadores). |
| `dateOfBirth` | string | Sí      | Fecha de nacimiento en formato `DD/MM/YYYY`. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/br/cedula", {
  params: { documentType: "CPF", documentNumber: "012.345.678-01", dateOfBirth: "17/02/2002" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/br/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CPF", "documentNumber": "012.345.678-01", "dateOfBirth": "17/02/2002"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "arrayName": [
      "RAISSA",
      "LARA",
      "ROCHA",
      "ALVES",
      "FERREIRA"
    ],
    "dateOfBirth": "2002-02-17",
    "documentNumber": "01916658601",
    "documentType": "CPF",
    "firstName": "RAISSA LARA ROCHA",
    "fullName": "RAISSA LARA ROCHA ALVES FERREIRA",
    "lastName": "ALVES FERREIRA"
  },
  "signature": {
    "dateTime": "October 8, 2025 6:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "AMARG"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

```json
{
  "code": "MissingParameter", 
  "message": "missing documentNumber\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "missing dateOfBirth\n"
}
```

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CPF]"
}
```

```json
{
  "code": "MissingParameter",
  "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```
