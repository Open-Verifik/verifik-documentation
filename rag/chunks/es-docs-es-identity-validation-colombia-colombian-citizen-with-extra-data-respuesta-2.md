---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-with-extra-data-respuesta-2"
title: "Ciudadano Colombiano con Datos Extendidos — Respuesta"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen-with-extra-data.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula/extra"
sourceAnchor: "Respuesta"
slug: "/validacion-identidad/colombia/ciudadano-colombiano-con-datos-extra"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-con-datos-extra"
---

# Ciudadano Colombiano con Datos Extendidos
**API path(s):** /v2/co/cedula/extra

## Respuesta

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": [
      "MATEO",
      "VERIFIK"
    ],
    "expeditionDate": "2022-05-10T00:00:00.000Z",
    "expeditionPlace": {
      "municipio": "BOGOTA D.C.",
      "departamento": "BOGOTA"
    },
    "dateOfBirth": "1999-05-07T00:00:00.000Z",
    "gender": "HOMBRE",
    "isAlive": true
  },
  "signature": {
    "dateTime": "August 23, 2022 11:42 AM",
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [CC]"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "date format required: DD/MM/YYYY\n"
}
```

### Notas

- Este endpoint requiere la fecha de emisión del documento (parámetro `date`) en formato DD/MM/YYYY
- Solo se soporta el tipo de documento `CC` (Cédula de Ciudadanía)
- Devuelve información personal sensible incluyendo fecha de nacimiento, género y estado de vida
- Usar responsablemente y asegurar cumplimiento con regulaciones de protección de datos
