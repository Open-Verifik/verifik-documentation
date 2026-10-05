---
id: "en-docs-vehicle-validation-colombia-fasecolda-vehicle-by-code-what-does-this-api-validate"
title: "Vehicle Values by Code — What does this API validate?"
sourcePath: "docs/vehicle-validation/colombia/fasecolda-vehicle-by-code.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/values-by-code"
sourceAnchor: "What does this API validate?"
slug: "/vehicle-validation/colombia-fasecolda-vehicle-by-code"
url: "https://docs.verifik.co/vehicle-validation/colombia-fasecolda-vehicle-by-code"
---

# Vehicle Values by Code
**API path(s):** /v2/co/fasecolda/values-by-code

## What does this API validate?

Verifik's Fasecolda Vehicle Values by Code API helps you retrieve comprehensive vehicle information using Fasecolda codes. It's designed to streamline your vehicle verification processes, provide accurate valuations, and ensure you have complete vehicle data.

We built this integration for businesses that need a fast, secure, and automated way to access vehicle information and values using Fasecolda codes.

## What does this API validate?

Our API connects directly with official Fasecolda records to validate:

-   **Vehicle Information by Code**: Supports Fasecolda codes to identify vehicles and their characteristics.
-   **Comprehensive Vehicle Data**: Returns vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes.
-   **Vehicle Values**: Provides historical values for different model years and conditions.

By verifying these details, you can access complete vehicle information and accurate valuations, significantly helping with vehicle transactions and assessments.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/values-by-code
```

Get commercial **values and technical attributes** for a vehicle from Fasecolda using the **`codeFasecolda`** query parameter (Fasecolda’s catalog code for a make/model/variant).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `codeFasecolda` | string | Yes | Fasecolda code identifying the vehicle configuration. |
