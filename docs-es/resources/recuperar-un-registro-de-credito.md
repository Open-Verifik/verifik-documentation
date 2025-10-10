---
id: recuperar-un-registro-de-credito
title: Recuperar un Registro de Crédito
description: Recuperar un registro de crédito específico usando su identificador único
---

# Recuperar un Registro de Crédito

**GET** `https://api.verifik.co/v2/credits/{id}`

Recuperar un registro de crédito específico por su identificador único. Este endpoint devuelve información detallada sobre una transacción de crédito individual incluyendo su estado, cantidad e información del cliente asociada.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization | `Bearer <token>`   |

## Parámetros de Ruta

| Nombre | Tipo   | Requerido | Descripción                                                      |
| ------ | ------ | --------- | ---------------------------------------------------------------- |
| `id`   | string | **Sí**    | El identificador único del registro de crédito que deseas recuperar. |

## Parámetros de Consulta

| Nombre          | Tipo  | Descripción                                                                                    |
| --------------- | ----- | ---------------------------------------------------------------------------------------------- |
| `populates[]`  | array | Array opcional de datos relacionados para incluir. Opciones disponibles: `client`, `superAdmin`. |

## Ejemplo de Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/credits/credit_123456789",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "superAdmin"]
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

## Ejemplo de Response

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
      "name": "Cliente Ejemplo",
      "email": "cliente@ejemplo.com"
    },
    "superAdmin": {
      "_id": "admin_123456789",
      "name": "Usuario Admin",
      "email": "admin@verifik.co"
    },
    "description": "Compra de créditos para uso de API",
    "transactionId": "txn_123456789",
    "paymentMethod": "credit_card",
    "currency": "USD",
    "exchangeRate": 1.0,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

## Respuestas de Error

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
