---
id: "es-docs-es-validacion-empresarial-chilean-respuesta-2"
title: "🇨🇱 Chile - Validación Empresarial — Respuesta"
sourcePath: "docs-es/validacion-empresarial/chilean.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "cl"
  - "validacion-empresarial"
endpoints:
  - "/v2/cl/company"
  - "/v2/cl/company?documenttype=rut&documentnumber=212957739"
sourceAnchor: "Respuesta"
slug: "/validacion-empresarial/chilean"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/chilean"
---

# 🇨🇱 Chile - Validación Empresarial
**API path(s):** /v2/cl/company, /v2/cl/company?documenttype=rut&documentnumber=212957739

Este servicio te permite recuperar información sobre una empresa en Chile proporcionando su tipo de documento y número. La respuesta del servicio contendrá el nombre de la empresa, su categoría comercial, subcategoría y actividad. Además, este servicio te proporcionará una lista de servicios para los cuales la empresa está autorizada a trabajar.

## Respuesta

```json
{
  "data": {
    "activities": "Contribuyente presenta Inicio de Actividades: SI",
    "currentEconomicActivities": [
      {
        "activity": "ELABORACION DE PRODUCTOS DE PANADERIA Y PASTELERIA",
        "code": "107100",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      },
      {
        "activity": "VENTA AL POR MENOR DE ALIMENTOS EN COMERCIOS ESPECIALIZADOS (ALMACENES",
        "code": "472101",
        "category": "Primera",
        "affectIVA": "Si",
        "date": "05-09-2014"
      }
    ],
    "documentNumber": "76409396",
    "documentType": "RUT",
    "fullRUT": "76409396-8",
    "name": "PANADERIA R&M SPA",
    "stampedDocuments": [],
    "startDate": "05-09-2014"
  },
  "signature": {
    "dateTime": "September 4, 2023 3:07 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "azbnj"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "No existe contribuyente asociado a la CUIT ingresada"
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
  "message": "documentType must be one of: [RUT]"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [RUT]"
}
```

## Características

- **Recuperación de Información Empresarial**: Obtener datos completos de empresas del registro empresarial chileno
- **Validación de RUT**: Verificar números RUT (Rol Único Tributario) de empresas chilenas
- **Actividades Económicas**: Recuperar actividades económicas detalladas y categorías comerciales
- **Autorización Empresarial**: Obtener lista de servicios para los cuales la empresa está autorizada
- **Historial de Actividades**: Acceder a actividades económicas históricas con fechas y códigos
- **Estado IVA**: Verificar si la empresa afecta IVA para cada actividad
- **Información de Fecha de Inicio**: Obtener fecha de inicio de la empresa y estado de iniciación de actividades
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información empresarial actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
