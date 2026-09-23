---
id: "en-docs-business-validation-united-states-what-does-this-api-validate"
title: "United States Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/united-states.mdx"
locale: "en"
category: "business-validation"
tags:
  - "us"
  - "usa"
  - "business-validation"
endpoint: "/v2/usa/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/united-states"
url: "https://docs.verifik.co/business-validation/united-states"
---

# United States Business Verification
**API path(s):** /v2/usa/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate US companies using official government data from SEC EDGAR. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official SEC EDGAR records to validate:

-   **Company Name & Information**: Supports US company lookups by business name.
-   **Business Information**: Returns company name, CIK, EIN, addresses, entity type, exchanges, tickers, SIC codes, and more.
-   **Company Match**: Confirms that the company information matches official SEC records.

By verifying these details, you can be confident that the company you're dealing with is legitimate and properly registered, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
POST https://api.verifik.co/v2/usa/company
```

Look up a U.S. company by full or partial business name using SEC EDGAR data. Send `business` in the JSON body of a `POST` request.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `business` | string  | Yes      | Full or partial company name. |
