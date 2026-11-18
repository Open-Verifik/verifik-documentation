---
id: "es-docs-es-resources-creditos-el-objeto-credito-descripcion-general"
title: "El Objeto Crédito — Descripción General"
sourcePath: "docs-es/resources/creditos/el-objeto-credito.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción General"
slug: "/resources/el-objeto-credito"
url: "https://docs.verifik.co/verifik-es/resources/el-objeto-credito"
---

# El Objeto Crédito

## Descripción General

El objeto Crédito representa transacciones de crédito y saldos dentro de su cuenta de Verifik. Este objeto rastrea compras de crédito, uso y operaciones administrativas.

### Atributos

#### `amount`
Tipo: Number  
Requerido: No

El número de créditos (predeterminado: 0).

#### `status`
Tipo: String  
Requerido: No

El estado de la transacción de crédito con valores posibles:

* `approved` - Transacción de crédito aprobada
* `pending` - Transacción de crédito pendiente
* `failed` - Transacción de crédito fallida
* `postPaid` - Transacción de crédito pospago

Predeterminado: null.

#### `category`
Tipo: String  
Requerido: No

La categoría del crédito con valores posibles:

* `purchase` - Transacción de compra de crédito
* `usage` - Transacción de uso de crédito

Predeterminado: usage.

#### `client`
Tipo: string (reference id)  
Requerido: No

Referencia al modelo de Cliente, vinculando créditos a una cuenta de cliente específica. Predeterminado: null.

#### `superAdmin`
Tipo: string (reference id)  
Requerido: No

Referencia al modelo de SuperAdmin para supervisión administrativa. Predeterminado: null.

#### `description`
Tipo: String  
Requerido: No

Descripción de la transacción de crédito.

#### `transactionId`
Tipo: String  
Requerido: No

Identificador único para la transacción de crédito.

#### `paymentMethod`
Tipo: String  
Requerido: No

Método de pago utilizado para la compra de crédito (por ejemplo, "credit_card", "bank_transfer").

#### `currency`
Tipo: String  
Requerido: No

Código de moneda para la transacción (por ejemplo, "USD", "EUR").

#### `exchangeRate`
Tipo: Number  
Requerido: No

Tasa de cambio aplicada a la transacción.

#### `createdAt`
Tipo: Date  
Requerido: Sí

Marca de tiempo cuando se creó el registro de crédito.

#### `updatedAt`
Tipo: Date  
Requerido: Sí

Marca de tiempo cuando se actualizó el registro de crédito por última vez.
