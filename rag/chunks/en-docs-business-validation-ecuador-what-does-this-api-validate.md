---
id: "en-docs-business-validation-ecuador-what-does-this-api-validate"
title: "Ecuadorian Business Verification — What does this API validate?"
sourcePath: "docs/business-validation/ecuador.mdx"
locale: "en"
category: "business-validation"
tags:
  - "ec"
  - "business-validation"
endpoints:
  - "/v2/ec/company"
  - "/v3/ec/company"
sourceAnchor: "What does this API validate?"
slug: "/business-validation/ecuador"
url: "https://docs.verifik.co/business-validation/ecuador"
---

# Ecuadorian Business Verification
**API path(s):** /v2/ec/company, /v3/ec/company

## What does this API validate?

Verifik's Business Verification API helps you authenticate Ecuadorian companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet regulatory requirements.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Legal name & RUCEC**: Supports *Registro Único de Contribuyentes del Ecuador* (RUCEC).
-   **Business information**: Returns business name, status, taxpayer type, regime, main economic activity, accounting and withholding flags, contributor dates, and legal representatives.
-   **Company match**: Confirms that the company information matches the RUCEC number.

By verifying these details, you can reduce fraud risk and support compliance workflows.

## API Reference

### Endpoint

```
GET https://api.verifik.co/v3/ec/company
```

Look up an Ecuadorian company using **`documentType`** `RUCEC` and **`documentNumber`** (13 digits, no separators). Returns registration-oriented fields—including economic activity, regime, and legal representatives—to support **KYB**, **vendor screening**, and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name             | Type   | Required | Description                                           | Example         |
| ---------------- | ------ | -------- | ----------------------------------------------------- | --------------- |
| `documentType`   | string | Yes      | Document type. Allowed value: `RUCEC`.                | `RUCEC`         |
| `documentNumber` | string | Yes      | 13-digit RUCEC without spaces or periods.             | `1793197955001` |
