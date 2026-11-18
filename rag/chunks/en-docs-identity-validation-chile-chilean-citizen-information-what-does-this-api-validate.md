---
id: "en-docs-identity-validation-chile-chilean-citizen-information-what-does-this-api-validate"
title: "Chilean Citizen Information — What does this API validate?"
sourcePath: "docs/identity-validation/chile/chilean-citizen-information.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "cl"
  - "identity-validation"
sourceAnchor: "What does this API validate?"
slug: "/identity-validation/chile/chilean-citizen-information"
url: "https://docs.verifik.co/identity-validation/chile/chilean-citizen-information"
---

# Chilean Citizen Information

## What does this API validate?

Verifik's Identity Verification API helps you authenticate Chilean citizens using the Unique National Role (RUN). It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

## What does this API validate?

Our API connects directly with official records to validate:

-   **Full Name & RUN/RUT**: Supports *Rol Único Nacional* (RUN) or *Rol Único Tributario* (RUT). These are two terms for the same identification number used in Chile.
-   **Identity Match**: Confirms that the name provided matches the RUN/RUT number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

## API reference

The HTTP reference for Chile identity verification lives in **[Identity Verification in Chile](/identity/chile)**. This page defers to that guide so `AppFeature.docs` ingests a single canonical definition per locale.

### Notes on RUN vs RUT

-   Provide RUN/RUT without spaces or separators.
-   **RUN vs RUT**: In Chile, RUN (Rol Único Nacional) and RUT (Rol Único Tributario) are two terms that refer to the same identification number. The Chilean government uses both terms interchangeably:
  - **RUN** is the term used by the Civil Registry (Registro Civil) for personal identification
  - **RUT** is the term used by the Internal Revenue Service (Servicio de Impuestos Internos) for tax purposes
  - Both terms identify the same unique number assigned to Chilean citizens and residents. You can use either `RUN` or `RUT` as the `documentType` parameter - both will work identically.

---
