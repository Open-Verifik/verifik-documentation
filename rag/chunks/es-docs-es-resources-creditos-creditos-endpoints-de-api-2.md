---
id: "es-docs-es-resources-creditos-creditos-endpoints-de-api-2"
title: "Créditos — Endpoints de API"
sourcePath: "docs-es/resources/creditos/creditos.mdx"
locale: "es"
category: "resources"
tags:
  - "credits"
  - "resources"
endpoint: "/v2/credits"
sourceAnchor: "Endpoints de API"
slug: "/resources/creditos"
url: "https://docs.verifik.co/verifik-es/resources/creditos"
---

# Créditos
**API path(s):** /v2/credits

## Endpoints de API

#### Listar Todos los Registros de Crédito
```http
GET https://api.verifik.co/v2/credits
```

#### Recuperar un Registro de Crédito
```http
GET https://api.verifik.co/v2/credits/{creditId}
```

### Estructura del Objeto Crédito

### API Endpoints

#### List All Credit Records
```http
GET https://api.verifik.co/v2/credits
```

#### Retrieve a Credit Record
```http
GET https://api.verifik.co/v2/credits/{creditId}
```

### Estructura del Objeto Crédito

```json
{
  "id": "credit_123456789",
  "amount": 1000,
  "used": 250,
  "remaining": 750,
  "expiresAt": "2024-12-31T23:59:59Z",
  "service": "smartcheck",
  "description": "Créditos de verificación SmartCheck",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Tipos de Créditos

- **Créditos SmartCheck**: Para verificación de identidad y documentos
- **Créditos SmartAccess**: Para acceso seguro y autenticación
- **Créditos SmartEnroll**: Para inscripción e incorporación de usuarios
- **Créditos API**: Para uso directo de API
- **Créditos Biométricos**: Para servicios de verificación biométrica

### Gestión de Créditos

#### Compra de Créditos
Los créditos se pueden comprar a través del panel de Verifik o mediante integración API con su sistema de facturación.

#### Seguimiento de Uso
Todo el uso de créditos se rastrea en tiempo real y puede ser monitoreado a través de:
- Analíticas del panel
- Endpoints de API
- Notificaciones por webhook

#### Expiración
Los créditos tienen fechas de expiración para asegurar un uso activo y prevenir la acumulación de créditos no utilizados.
