---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-fbi-respuesta-3"
title: "Verificación de Antecedentes FBI — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-fbi.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "fbi"
  - "verificacion-antecendentes"
endpoint: "/v2/fbi"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-fbi"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-fbi"
---

# Verificación de Antecedentes FBI
**API path(s):** /v2/fbi

## Respuesta

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "80251972",
    "fullName": "WILVER VILLEGAS PALOMINO",
    "firstName": "WILVER",
    "lastName": "VILLEGAS PALOMINO",
    "arrayName": ["WILVER", "VILLEGAS", "PALOMINO"],
    "foundInFBI": true,
    "urlFBI": "https://www.fbi.gov/wanted/cei/wilver-villegas-palomino-"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:36 PM",
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

### Características

- **Verificación de Base de Datos FBI**: Realizar verificaciones en tiempo real contra la base de datos del FBI
- **Múltiples Métodos de Consulta**: Buscar por tipo de documento/número o nombre completo
- **Datos de Identidad Completos**: Retorna nombre completo, primer nombre, apellido e información del documento
- **Detección de Coincidencias**: Indica si la persona se encuentra en la base de datos del FBI con referencia de URL directa
- **Respuesta Estructurada**: Formato de datos organizado para fácil integración
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios
