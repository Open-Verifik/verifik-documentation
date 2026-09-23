---
id: "es-docs-es-resources-creditos-listar-todos-los-registros-credito-respuesta-2"
title: "Listar Todos los Registros de Crédito — Respuesta"
sourcePath: "docs-es/resources/creditos/listar-todos-los-registros-credito.mdx"
locale: "es"
category: "resources"
tags:
  - "credits"
  - "credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase"
  - "resources"
endpoints:
  - "/v2/credits"
  - "/v2/credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase"
sourceAnchor: "Respuesta"
slug: "/resources/listar-todos-los-registros-credito"
url: "https://docs.verifik.co/verifik-es/resources/listar-todos-los-registros-credito"
---

# Listar Todos los Registros de Crédito
**API path(s):** /v2/credits, /v2/credits?page=1&perpage=20&populates[]=client&where_status=approved&where_category=purchase

## Respuesta

```json
{
  "success": true,
  "data": [
    {
      "_id": "credit_123456789",
      "amount": 1000,
      "status": "approved",
      "category": "purchase",
      "client": {
        "_id": "client_123456789",
        "name": "Example Client",
        "email": "client@example.com"
      },
      "description": "Compra de crédito para uso de API",
      "transactionId": "txn_123456789",
      "paymentMethod": "credit_card",
      "currency": "USD",
      "exchangeRate": 1.0,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 1,
    "pages": 1
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```
