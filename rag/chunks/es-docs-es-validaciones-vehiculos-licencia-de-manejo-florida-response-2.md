---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-florida-response-2"
title: "Licencia de Manejo Florida — Response"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-florida.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "usa"
  - "validaciones-vehiculos"
endpoints:
  - "/v2/usa/florida/driver-license"
  - "/v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0"
sourceAnchor: "Response"
slug: "/validaciones-vehiculos/licencia-de-manejo-florida"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-florida"
---

# Licencia de Manejo Florida
**API path(s):** /v2/usa/florida/driver-license, /v2/usa/florida/driver-license?documentnumber=b123-456-78-910-0

## Response

```json
{
    "data": {
        "designations": "None on Record",
        "documentNumber": "B123-456-78-910-0",
        "endorsements": "None on Record",
        "restrictions": "None on Record",
        "status": "As of February 26, 2024, at 12:11 AM, Florida driver license number B123-456-78-910-0 is Valid. This license is a Class E with an expiration date of 12/28/2026."
    },
    "signature": {
        "dateTime": "March 12, 2024 8:15 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "XUXSL"
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
    "message": "documentType must be one of: [DNIAR]"
}
```

### Características

-   **Validación de Estado de Licencia**: Validar el estado actual de las licencias de manejo de Florida
-   **Información Completa**: Obtener restricciones, endosos y designaciones
-   **Fecha de Vencimiento**: Recuperar información de vencimiento de la licencia
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Datos en Tiempo Real**: Acceso a información actual de la licencia desde registros oficiales
