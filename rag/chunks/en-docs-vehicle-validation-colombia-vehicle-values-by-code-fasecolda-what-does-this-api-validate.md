---
id: "en-docs-vehicle-validation-colombia-vehicle-values-by-code-fasecolda-what-does-this-api-validate"
title: "Vehicle Values by Code — What does this API validate?"
sourcePath: "docs/vehicle-validation/colombia/vehicle-values-by-code-fasecolda.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/values-by-code"
sourceAnchor: "What does this API validate?"
slug: "/vehicle-validation/colombia/vehicle-values-by-code-fasecolda"
url: "https://docs.verifik.co/vehicle-validation/colombia/vehicle-values-by-code-fasecolda"
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

### Service URL

```
https://api.verifik.co/v2/co/fasecolda/values-by-code
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `codeFasecolda` | string  | Yes      | Specific code that Fasecolda has to identify vehicles and their characteristics. |
