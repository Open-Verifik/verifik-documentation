---
id: "es-docs-es-resources-creditos-recuperar-un-registro-credito-respuesta-2"
title: "Recuperar un Registro de Crédito — Respuesta"
sourcePath: "docs-es/resources/creditos/recuperar-un-registro-credito.mdx"
locale: "es"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoints:
  - "/v2/credits/credit_123456789"
  - "/v2/credits/{id}"
sourceAnchor: "Respuesta"
slug: "/resources/recuperar-un-registro-credito"
url: "https://docs.verifik.co/verifik-es/resources/recuperar-un-registro-credito"
---

# Recuperar un Registro de Crédito
**API path(s):** /v2/credits/credit_123456789, /v2/credits/{id}

## Respuesta

```json
{
  "success": true,
  "data": {
    "_id": "credit_123456789",
    "amount": 1000,
    "status": "approved",
    "category": "purchase",
    "client": {
      "_id": "client_123456789",
      "name": "Example Client",
      "email": "client@example.com"
    },
    "superAdmin": {
      "_id": "admin_123456789",
      "name": "Admin User",
      "email": "admin@verifik.co"
    },
    "description": "Compra de crédito para uso de API",
    "transactionId": "txn_123456789",
    "paymentMethod": "credit_card",
    "currency": "USD",
    "exchangeRate": 1.0,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

  
  

```json
{
  "error": "Registro de crédito no encontrado",
  "message": "CREDIT_RECORD_NOT_FOUND"
}
```

  
  

```json
{
  "error": "No autorizado",
  "message": "UNAUTHORIZED"
}
```
