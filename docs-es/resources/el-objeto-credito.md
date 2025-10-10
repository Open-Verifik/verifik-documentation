---
id: el-objeto-credito
title: El Objeto Crédito
description: El objeto Crédito representa transacciones de crédito y balances dentro de tu cuenta Verifik
---

# El Objeto Crédito

El objeto Crédito representa transacciones de crédito y balances dentro de tu cuenta Verifik. Este objeto rastrea compras de créditos, uso y operaciones administrativas.

## Atributos

**`amount`** - Number - Opcional

El número de créditos (por defecto: 0).

**`status`** - String - Opcional

El estado de la transacción de crédito con valores posibles:

* `approved` - Transacción de crédito aprobada
* `pending` - Transacción de crédito pendiente
* `failed` - Transacción de crédito fallida
* `postPaid` - Transacción de crédito post-pagada

Por defecto: null.

**`category`** - String - Opcional

La categoría del crédito con valores posibles:

* `purchase` - Transacción de compra de crédito
* `usage` - Transacción de uso de crédito

Por defecto: usage.

**`client`** - ObjectId - Opcional

Referencia al modelo Cliente, vinculando créditos a una cuenta de cliente específica. Por defecto: null.

**`superAdmin`** - ObjectId - Opcional

Referencia al modelo SuperAdmin para supervisión administrativa. Por defecto: null.

**`description`** - String - Opcional

Descripción de la transacción de crédito.

**`transactionId`** - String - Opcional

Identificador único para la transacción de crédito.

**`paymentMethod`** - String - Opcional

Método de pago utilizado para la compra de créditos (ej., "credit_card", "bank_transfer").

**`currency`** - String - Opcional

Código de moneda para la transacción (ej., "USD", "EUR").

**`exchangeRate`** - Number - Opcional

Tipo de cambio aplicado a la transacción.

**`createdAt`** - Date - Requerido

Marca de tiempo cuando se creó el registro de crédito.

**`updatedAt`** - Date - Requerido

Marca de tiempo cuando se actualizó por última vez el registro de crédito.

## Ejemplo de Objeto

```json
{
  "_id": "credit_123456789",
  "amount": 1000,
  "status": "approved",
  "category": "purchase",
  "client": "client_123456789",
  "superAdmin": "admin_123456789",
  "description": "Compra de créditos para uso de API",
  "transactionId": "txn_123456789",
  "paymentMethod": "credit_card",
  "currency": "USD",
  "exchangeRate": 1.0,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```
