---
id: "en-docs-resources-credits-the-credit-object-overview"
title: "The Credit Object — Overview"
sourcePath: "docs/resources/credits/the-credit-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/credits/the-credit-object"
url: "https://docs.verifik.co/resources/credits/the-credit-object"
---

# The Credit Object

## Overview

The Credit object represents credit transactions and balances within your Verifik account. This object tracks credit purchases, usage, and administrative operations.

### Attributes

#### `amount`
Type: Number  
Required: No

The number of credits (default: 0).

#### `status`
Type: String  
Required: No

The status of the credit transaction with possible values:

* `approved` - Credit transaction approved
* `pending` - Credit transaction pending
* `failed` - Credit transaction failed
* `postPaid` - Post-paid credit transaction

Default: null.

#### `category`
Type: String  
Required: No

The category of the credit with possible values:

* `purchase` - Credit purchase transaction
* `usage` - Credit usage transaction

Default: usage.

#### `client`
Type: string (reference id)  
Required: No

Reference to the Client model, linking credits to a specific client account. Default: null.

#### `superAdmin`
Type: string (reference id)  
Required: No

Reference to the SuperAdmin model for administrative oversight. Default: null.

#### `description`
Type: String  
Required: No

Description of the credit transaction.

#### `transactionId`
Type: String  
Required: No

Unique identifier for the credit transaction.

#### `paymentMethod`
Type: String  
Required: No

Payment method used for credit purchase (e.g., "credit_card", "bank_transfer").

#### `currency`
Type: String  
Required: No

Currency code for the transaction (e.g., "USD", "EUR").

#### `exchangeRate`
Type: Number  
Required: No

Exchange rate applied to the transaction.

#### `createdAt`
Type: Date  
Required: Yes

Timestamp when the credit record was created.

#### `updatedAt`
Type: Date  
Required: Yes

Timestamp when the credit record was last updated.
