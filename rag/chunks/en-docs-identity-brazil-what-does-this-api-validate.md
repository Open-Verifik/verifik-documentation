---
id: "en-docs-identity-brazil-what-does-this-api-validate"
title: "Brazilian Citizen — What does this API validate?"
sourcePath: "docs/identity/brazil.mdx"
locale: "en"
category: "identity"
tags:
  - "br"
  - "identity"
endpoint: "/v2/br/cedula"
sourceAnchor: "What does this API validate?"
slug: "/identity/brazil"
url: "https://docs.verifik.co/identity/brazil"
---

# Brazilian Citizen
**API path(s):** /v2/br/cedula

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Brazilian citizens using the Cadastro de Pessoas Físicas (CPF). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & CPF Number**: Supports *Cadastro de Pessoas Físicas* (CPF).
-   **Identity Match**: Confirms that the name provided matches the CPF number.
-   **Date of Birth Verification**: Validates the date of birth matches the official records.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/br/cedula
```

Confirms a Brazilian natural person’s **CPF** against official sources. Provide **CPF**, **date of birth** in `DD/MM/YYYY`, and the document number with or without separators; when the data matches, the response returns normalized name parts and identifiers. Built for **KYC**, **fraud prevention**, and **regulated onboarding**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `CPF`. |
| `documentNumber` | string | Yes      | CPF number (with or without separators). |
| `dateOfBirth` | string | Yes      | Date of birth in `DD/MM/YYYY` format. |
