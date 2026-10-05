---
id: "es-docs-es-recursos-documentos-de-validacion-el-objeto-de-validacion-de-document-objeto-de-ejemplo-2"
title: "El Objeto de Validación de Documentos — Objeto de Ejemplo"
sourcePath: "docs-es/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos.mdx"
locale: "es"
category: "recursos"
tags:
  - "recursos"
sourceAnchor: "Objeto de Ejemplo"
slug: "/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos"
url: "https://docs.verifik.co/verifik-es/recursos/documentos-de-validacion/el-objeto-de-validacion-de-documentos"
---

# El Objeto de Validación de Documentos

## Objeto de Ejemplo

```json
{
  "_id": "document_validation_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "status": "validated",
  "documentType": "passport",
  "documentNumber": "123456789",
  "documentImage": "base64_encoded_image",
  "verificationResults": {
    "isValid": true,
    "confidence": 0.95,
    "extractedData": {
      "firstName": "John",
      "lastName": "Doe",
      "dateOfBirth": "1990-01-15",
      "nationality": "US"
    }
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z",
  "validatedAt": "2024-01-15T10:32:00Z"
}
```

### Características

- **Verificación de Documentos**: Valida documentos oficiales como pasaportes, licencias de conducir y cédulas de identidad
- **Extracción de Datos**: Extrae automáticamente información del documento
- **Detección de Fraude**: Detecta documentos falsificados o manipulados
- **Rastreo de Estado**: Monitorea el progreso de la validación en tiempo real
- **Integración con Flujos**: Se integra con flujos de proyecto para procesos automatizados
