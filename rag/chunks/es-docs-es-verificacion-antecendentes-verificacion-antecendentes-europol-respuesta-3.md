---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-europol-respuesta-3"
title: "Verificación de Antecedentes Europol — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-europol.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "europol"
  - "verificacion-antecendentes"
endpoint: "/v2/europol"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-europol"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-europol"
---

# Verificación de Antecedentes Europol
**API path(s):** /v2/europol

## Respuesta

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "fullName": "MATEO VERIFIK",
    "firstName": "MATEO",
    "lastName": "VERIFIK",
    "arrayName": ["MATEO", "VERIFIK"],
    "foundInEuropol": true,
    "urlEuropol": "https://eumostwanted.eu/es#/es/node/162"
  },
  "signature": {
    "dateTime": "June 28, 2022 12:40 PM",
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

### Características

- **Verificación de Base de Datos Europol**: Realizar verificaciones en tiempo real contra la base de datos de registros criminales de Europol
- **Múltiples Métodos de Consulta**: Buscar por tipo de documento/número o nombre completo
- **Datos de Identidad Completos**: Retorna nombre completo, primer nombre, apellido e información del documento
- **Detección de Coincidencias**: Indica si la persona se encuentra en la base de datos de Europol con referencia de URL directa
- **Respuesta Estructurada**: Formato de datos organizado para fácil integración
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios
