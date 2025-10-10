---
id: listar-todos-los-registros-de-credito
title: Listar Todos los Registros de Crédito
description: Recuperar una lista de todos los registros de crédito con filtrado opcional y paginación
---

# Listar Todos los Registros de Crédito

**GET** `https://api.verifik.co/v2/credits`

Recuperar una lista de registros de Crédito en el sistema de Verifik. Este endpoint devuelve un array de objetos de crédito, cada uno conteniendo información detallada sobre transacciones de crédito, balances y cuentas de cliente asociadas.

## Headers

| Nombre         | Valor              |
| -------------- | ------------------ |
| Content-Type   | `application/json` |
| Authorization | `Bearer <token>`   |

## Parámetros de Consulta

| Parámetro        | Tipo   | Descripción                                                                                    |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `page`           | number | Especifica el número de página para paginación, comenzando desde 1.                            |
| `perPage`        | number | Define el número de elementos por página para paginación.                                      |
| `populates[]`    | string | Puebla el campo especificado, transformando referencias ObjectId en objetos completos. Opciones disponibles: `client`, `superAdmin` |
| `where_status`   | string | Condición where para filtrar por estado. Opciones: `approved`, `pending`, `failed`, `postPaid` |
| `where_category` | string | Condición where para filtrar por categoría. Opciones: `purchase`, `usage` |
| `where_client`   | string | Filtrar por ID de cliente específico |

## Ejemplo de Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/credits",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    page: 1,
    perPage: 20,
    "populates[]": ["client"],
    where_status: "approved",
    where_category: "purchase"
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
  "data": [
    {
      "_id": "credit_123456789",
      "amount": 1000,
      "status": "approved",
      "category": "purchase",
      "client": {
        "_id": "client_123456789",
        "name": "Cliente Ejemplo",
        "email": "cliente@ejemplo.com"
      },
      "description": "Compra de créditos para uso de API",
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

## Respuestas de Error

```json
{
  "success": false,
  "error": "Parámetros de consulta inválidos",
  "code": "INVALID_PARAMETERS"
}
```
