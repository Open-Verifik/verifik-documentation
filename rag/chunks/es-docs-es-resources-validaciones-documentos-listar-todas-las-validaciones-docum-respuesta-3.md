---
id: "es-docs-es-resources-validaciones-documentos-listar-todas-las-validaciones-docum-respuesta-3"
title: "Listar todas las Validaciones de Documentos — Respuesta"
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
sourceAnchor: "Respuesta"
slug: "/resources/listar-todas-las-validaciones-documentos"
url: "https://docs.verifik.co/verifik-es/resources/listar-todas-las-validaciones-documentos"
---

# Listar todas las Validaciones de Documentos
**API path(s):** /v2/document-validations, /v2/document-validations?page=1&perpage=10&populates[]=appregistration&populates[]=projectflow&where_status=active&where_documenttype=driver_license&where_validationmethod=ocr

## Respuesta

```json
{
    "data": [
        {
            "_id": "document_validation_123456789",
            "age": "25",
            "appRegistration": {
                "_id": "reg_123456789",
                "email": "user@example.com",
                "status": "completed"
            },
            "backUrl": "https://example.com/back",
            "client": "client_123456789",
            "country": "US",
            "createdAt": "2024-01-15T10:30:00Z",
            "documentData": {
                "firstName": "John",
                "lastName": "Doe",
                "documentNumber": "123456789",
                "birthDate": "1999-01-15"
            },
            "documentType": "driver_license",
            "frontUrl": "https://example.com/front",
            "project": "project_123456789",
            "projectFlow": {
                "_id": "flow_123456789",
                "name": "Example Flow",
                "type": "onboarding"
            },
            "status": "ACTIVE",
            "updatedAt": "2024-01-15T10:32:00Z",
            "validationResults": {
                "documentAuthenticity": "passed",
                "dataConsistency": "passed"
            }
        }
    ],
    "pagination": {
        "page": 1,
        "perPage": 10,
        "total": 1,
        "pages": 1
    },
    "signature": {
        "dateTime": "April 11, 2023 12:25 PM",
        "message": "Certified by Verifik.co"
    }
}
```

  
  

```json
{
    "error": "Invalid query parameters",
    "message": "INVALID_PARAMETERS"
}
```

### Características
- **Listado completo**: Recupera todas las validaciones de documentos de tu cuenta
- **Paginación avanzada**: Controla la página y los elementos por página
- **Filtrado completo**: Filtra por estado, tipo de documento, método de validación y más
- **Población de datos**: Incluye información relacionada como registros de aplicación y flujos de proyecto
- **Múltiples estados**: Filtra por diferentes estados de validación
- **Tipos de documento**: Soporte para licencias de conducir, pasaportes y cédulas nacionales
- **Métodos de validación**: OCR, manual, escaneo y más
- **Múltiples lenguajes**: Soporte para JavaScript, Python, PHP y Go
- **Información detallada**: Incluye datos del documento, resultados de validación y marcas de tiempo
- **Validation Methods**: OCR, manual, scanning, and more
- **Multiple Languages**: Support for JavaScript, Python, PHP, and Swift
- **Detailed Information**: Includes document data, validation results, and timestamps
