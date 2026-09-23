---
id: "es-docs-es-resources-validaciones-documentos-listar-todas-las-validaciones-docum-endpoint"
title: "Listar todas las Validaciones de Documentos — Endpoint"
sourcePath: "docs-es/resources/validaciones-documentos/listar-todas-las-validaciones-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-validations"
  - "document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr"
  - "resources"
endpoints:
  - "/v2/document-validations"
  - "/v2/document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr"
sourceAnchor: "Endpoint"
slug: "/resources/listar-todas-las-validaciones-documentos"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-documentos"
---

# Listar todas las Validaciones de Documentos
**API path(s):** /v2/document-validations, /v2/document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr

## Endpoint

**GET** `https://api.verifik.co/v2/document-validations`

Este endpoint te permite obtener un listado de todas las Validaciones de Documentos dentro de la API de Verifik. Úsalo para obtener una vista detallada de múltiples validaciones, incluyendo su estado, proyecto asociado, métodos de validación y más.

### Encabezados

#### Content-Type

Tipo: String  
Requerido: Sí

`application/json`

#### Authorization

Tipo: String  
Requerido: Sí

`Bearer `

### Parámetros de Consulta

#### `page`

Tipo: number  
Requerido: No

Especifica el número de página para la paginación, comenzando desde 1.

#### `perPage`

Tipo: number  
Requerido: No

Define la cantidad de elementos por página para la paginación.

#### `populates[]`

Tipo: string  
Requerido: No

Realiza populate del campo especificado, transformando referencias por id en objetos completos. Opciones disponibles: `appRegistration`, `projectFlow`

#### `where_status`

Tipo: string  
Requerido: No

Condición para filtrar por estado. Opciones: ASSESSING, ACTIVE, FAILED, NEEDS_MANUAL_VERIFICATION, NOT_FOUND, EXPIRED, ACTIVE_BUT_UNVERIFIED

#### `where_documentType`

Tipo: string  
Requerido: No

Filtra por tipo de documento (por ejemplo, "driver_license", "passport", "national_id")

#### `where_validationMethod`

Tipo: string  
Requerido: No

Filtra por método de validación. Opciones: MANUAL, OCR, SCAN_PROMPT, SCAN_STUDIO

#### `where_type`

Tipo: string  
Requerido: No

Filtra por tipo de validación. Opciones: validation, login, signup, ocr, demo

#### `where_inputMethod`

Tipo: string  
Requerido: No

Filtra por método de ingreso. Opciones: CAMERA, FILE_UPLOAD, NOT_SET
