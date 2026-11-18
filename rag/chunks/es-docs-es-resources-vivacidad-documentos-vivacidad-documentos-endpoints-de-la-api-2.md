---
id: "es-docs-es-resources-vivacidad-documentos-vivacidad-documentos-endpoints-de-la-api-2"
title: "Vivacidad de Documentos — Endpoints de la API"
sourcePath: "docs-es/resources/vivacidad-documentos/vivacidad-documentos.mdx"
locale: "es"
category: "resources"
tags:
  - "document-liveness"
  - "resources"
endpoint: "/v2/document-liveness"
sourceAnchor: "Endpoints de la API"
slug: "/resources/vivacidad-documentos"
url: "https://docs.verifik.co/verifik-es/resources/vivacidad-documentos"
---

# Vivacidad de Documentos
**API path(s):** /v2/document-liveness

## Endpoints de la API

#### Crear una Vivacidad de Documento

`POST https://api.verifik.co/v2/document-liveness`

#### Listar todas las Vivacidades de Documento

`GET https://api.verifik.co/v2/document-liveness`

#### Recuperar una Vivacidad de Documento

`GET https://api.verifik.co/v2/document-liveness/{livenessId}`

### Estructura del Objeto de Vivacidad de Documento

```json
{
  "id": "liveness_123456789",
  "documentId": "doc_123456789",
  "status": "completed",
  "results": {
    "screenReplay": {
      "detected": false,
      "confidence": 0.95,
      "score": 0.05
    },
    "printedCopy": {
      "detected": false,
      "confidence": 0.98,
      "score": 0.02
    },
    "portraitSubstitution": {
      "detected": false,
      "confidence": 0.97,
      "score": 0.03
    },
    "digitalManipulation": {
      "detected": false,
      "confidence": 0.96,
      "score": 0.04
    }
  },
  "overallScore": 0.96,
  "riskLevel": "low",
  "createdAt": "2024-01-15T10:30:00Z",
  "completedAt": "2024-01-15T10:32:00Z"
}
```

### Casos de uso

* **Prevención de fraude** - Detecta y previene intentos de fraude documental
* **Cumplimiento normativo** - Cumple con requisitos regulatorios de verificación de documentos
* **Gestión de riesgos** - Evalúa niveles de riesgo de autenticidad de documentos
* **Seguridad** - Mejora la seguridad general del sistema mediante detección avanzada
