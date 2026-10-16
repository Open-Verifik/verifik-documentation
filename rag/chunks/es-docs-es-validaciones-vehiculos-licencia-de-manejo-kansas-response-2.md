---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-kansas-response-2"
title: "Licencia de Manejo Kansas — Response"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-kansas.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "usa"
  - "validaciones-vehiculos"
endpoint: "/v2/usa/kansas/driver-license"
sourceAnchor: "Response"
slug: "/validaciones-vehiculos/licencia-de-manejo-kansas"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-kansas"
---

# Licencia de Manejo Kansas
**API path(s):** /v2/usa/kansas/driver-license

## Response

```json
{
  "data": {
    "cdlStatus": "",
    "currentCredentialInformation": [
      {
        "credentialType": "Driver's License",
        "issueDate": "03/04/2020",
        "expirationDate": "01/29/2026"
      }
    ],
    "dateOfBirth": "29/1/1974",
    "dlNumber": "K02884565",
    "dlStatus": "Valid",
    "documentNumber": "K12345678",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "systemGeneratedDl": "N"
  },
  "signature": {
    "dateTime": "January 19, 2024 4:36 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1Q8UH"
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
    "message": "missing documentNumber\n. missing dateOfBirth\n. missing firstName\n. missing lastName\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

### Características

-   **Validación Completa de Licencia**: Validar estado, restricciones, endosos y designaciones
-   **Múltiples Parámetros Requeridos**: Número de documento, fecha de nacimiento, nombre y apellido
-   **Información Detallada de Licencia**: Obtener fecha de emisión, fecha de vencimiento y tipo de credencial
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Cumplimiento Estatal**: Esencial para verificar credenciales de manejo y asegurar el cumplimiento
