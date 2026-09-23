---
id: "es-docs-es-validaciones-vehiculos-licencia-de-manejo-ontario-response-2"
title: "Licencia de Manejo Ontario — Response"
sourcePath: "docs-es/validaciones-vehiculos/licencia-de-manejo-ontario.md"
locale: "es"
category: "validaciones-vehiculos"
tags:
  - "ca"
  - "validaciones-vehiculos"
endpoints:
  - "/v2/ca/ontario/driver-license"
  - "/v2/ca/ontario/driver-license?documentnumber=s123456789123456"
sourceAnchor: "Response"
slug: "/validaciones-vehiculos/licencia-de-manejo-ontario"
url: "https://docs.verifik.co/verifik-es/validaciones-vehiculos/licencia-de-manejo-ontario"
---

# Licencia de Manejo Ontario
**API path(s):** /v2/ca/ontario/driver-license, /v2/ca/ontario/driver-license?documentnumber=s123456789123456

## Response

```json
{
  "data": {
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
    "signature": {
        "dateTime": "March 12, 2024 3:47 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "8X9FD"
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
    "message": "missing documentNumber\n"
}
```

### Características

-   **Verificación de Estado de Licencia**: Obtener rápidamente información esencial sobre las licencias de manejo de Ontario
-   **Parámetro Simple**: Solo requiere número de documento para verificación
-   **Número de Verificación**: Obtener el número de verificación asociado para validación adicional
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Swift y PHP
-   **Cumplimiento Regulatorio**: Perfecto para fines de identificación y regulatorios
