---
id: "en-docs-vehicle-validation-colombia-fasecolda-values-by-plate-what-does-this-api-validate"
title: "Vehicle Values by Plate — What does this API validate?"
sourcePath: "docs/vehicle-validation/colombia/fasecolda-values-by-plate.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/values-by-plate"
sourceAnchor: "What does this API validate?"
slug: "/vehicle-validation/colombia-fasecolda-values-by-plate"
url: "https://docs.verifik.co/vehicle-validation/colombia-fasecolda-values-by-plate"
---

# Vehicle Values by Plate
**API path(s):** /v2/co/fasecolda/values-by-plate

## What does this API validate?

Verifik's Fasecolda Vehicle Values by Plate API helps you retrieve comprehensive vehicle information using license plates. It's designed to streamline your vehicle verification processes, provide accurate valuations, and ensure you have complete vehicle data.

We built this integration for businesses that need a fast, secure, and automated way to access vehicle information and values using license plates.

## What does this API validate?

Our API connects directly with official Fasecolda records to validate:

-   **Vehicle Information by Plate**: Supports Colombian vehicle license plates.
-   **Comprehensive Vehicle Data**: Returns vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes.
-   **Vehicle Values**: Provides historical values for different model years and conditions.

By verifying these details, you can access complete vehicle information and accurate valuations, significantly helping with vehicle transactions and assessments.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v2/co/fasecolda/values-by-plate
```

The Fasecolda Vehicle Value Inquiry service provides comprehensive information about vehicles registered in Colombia. You can access detailed data including vehicle class, brand, model, year, estimated value, load capacity, fuel type, and other key attributes. Pass the license **`plate`** as a **query** parameter (no spaces or periods).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Plate to consult without spaces or periods. |
