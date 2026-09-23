---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-dea-respuesta-3"
title: "Verificación de Antecedentes DEA — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-dea.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "dea"
  - "dea?fullname=mateo"
  - "dea?fullname=mateo%20verifik"
  - "verificacion-antecendentes"
endpoints:
  - "/v2/dea"
  - "/v2/dea?fullname=mateo"
  - "/v2/dea?fullname=mateo%20verifik"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-dea"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-dea"
---

# Verificación de Antecedentes DEA
**API path(s):** /v2/dea, /v2/dea?fullname=mateo, /v2/dea?fullname=mateo%20verifik

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
    "foundInDEA": true,
    "urlDEA": "https://www.dea.gov/fugitives/ismael-zambada-garcia"
  },
  "signature": {
    "dateTime": "June 28, 2022 11:41 AM",
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

- **Verificación de Base de Datos DEA**: Realizar verificaciones en tiempo real contra la lista de vigilancia de la Administración de Control de Drogas de Estados Unidos
- **Múltiples Métodos de Consulta**: Buscar por tipo de documento/número o nombre completo
- **Datos de Identidad Completos**: Retorna nombre completo, primer nombre, apellido e información del documento
- **Detección de Coincidencias**: Indica si la persona se encuentra en la base de datos de la DEA con referencia de URL directa
- **Respuesta Estructurada**: Formato de datos organizado para fácil integración
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Error Handling**: Respuestas de error comprensivas para varios escenarios
