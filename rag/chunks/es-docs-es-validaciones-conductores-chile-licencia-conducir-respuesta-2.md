---
id: "es-docs-es-validaciones-conductores-chile-licencia-conducir-respuesta-2"
title: "🇨🇱 Chile - Licencia de Conducir — Respuesta"
sourcePath: "docs-es/validaciones-conductores/chile-licencia-conducir.mdx"
locale: "es"
category: "validaciones-conductores"
tags:
  - "cl"
  - "validaciones-conductores"
endpoints:
  - "/v2/cl/driver-license"
  - "/v2/cl/driver-license?documentnumber=12345678"
sourceAnchor: "Respuesta"
slug: "/validaciones-conductores/chile-licencia-conducir"
url: "https://docs.verifik.co/verifik-es/validaciones-conductores/chile-licencia-conducir"
---

# 🇨🇱 Chile - Licencia de Conducir
**API path(s):** /v2/cl/driver-license, /v2/cl/driver-license?documentnumber=12345678

Este servicio consulta una licencia de conducir chilena por número (cuerpo del RUN). Hoy solo cubre **Municipalidad de Santiago** (`tramites.munistgo.cl`). Licencias de otras comunas (por ejemplo Ñuñoa) responden **404** aunque el número sea válido. Eso es cobertura, no una caída del servicio.

## Respuesta

```json
{
  "data": {
    "RUT": "12.345.678-9",
    "address": "PEDRO LEON UGALDE 1825",
    "class": "B",
    "controlDate": "23/08/2009",
    "documentNumber": "012345678",
    "lastControlDate": "15/07/2003",
    "lastName": "VERIFIK",
    "license": "CA-12345678",
    "municipality": "SANTIAGO",
    "names": "MATEO",
    "procedure": "DUPLICADO",
    "restrictions": ".USAR LENTES O DE CONTACTO. "
  },
  "signature": {
    "dateTime": "November 2, 2023 3:12 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1tm6q"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

Un **404** significa que esta licencia no está en el portal municipal de Santiago. No es una caída del servicio. Licencias de otras comunas quedan fuera de alcance hasta que exista una fuente nacional o de esa comuna.

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

## Características

- **Validación de RUT**: Verificar números de identificación tributaria chilenos
- **Información de Clase de Licencia**: Obtener detalles de clase de licencia (A, B, C, etc.)
- **Fechas de Control**: Acceder a fechas de control de licencia y último control
- **Información del Conductor**: Recuperar nombres, direcciones y municipio del conductor
- **Restricciones de Licencia**: Obtener información sobre restricciones de conducción
- **Información de Procedimiento**: Acceder a detalles de procedimiento de licencia (duplicado, renovación, etc.)
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información actual y actualizada de licencias de conducir
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
- **Respuestas Estructuradas**: Respuestas JSON bien formateadas con verificación de firma
- **Portal municipal de Santiago**: Resuelve licencias emitidas por Municipalidad de Santiago; otras comunas responden 404
