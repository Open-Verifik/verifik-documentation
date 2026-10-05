---
id: "es-docs-es-identity-validation-united-states-ssn-verification-social-security-nu-que-valida-esta-api"
title: "Verificación de SSN en Estados Unidos — ¿Qué valida esta API?"
sourcePath: "docs-es/identity-validation/united-states/ssn-verification-social-security-number.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "us"
  - "usa"
  - "identity-validation"
endpoint: "/v2/usa/ssn"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identity-validation/united-states/ssn-verification-social-security-number"
url: "https://docs.verifik.co/verifik-es/identity-validation/united-states/ssn-verification-social-security-number"
---

# Verificación de SSN en Estados Unidos
**API path(s):** /v2/usa/ssn

## ¿Qué valida esta API?

La API de Verificación de SSN de Verifik te ayuda a autenticar Números de Seguro Social (SSN) emitidos en Estados Unidos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de Números de Seguro Social.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Número SSN**: Verifica la autenticidad de Números de Seguro Social.
-   **Estado Emisor**: Identifica qué estado emitió el SSN.
-   **Primer Año Emitido**: Retorna el año cuando el SSN fue emitido por primera vez.
-   **Estado de Validez**: Confirma si el SSN es válido y activo.

Al verificar estos detalles, puedes tener la certeza de que el Número de Seguro Social es auténtico y válido, reduciendo significativamente el riesgo de fraude.

### Endpoint

```
GET https://api.verifik.co/v2/usa/ssn
```

Valida un Número de Seguro Social (SSN) de EE. UU. Pasando el SSN como parámetro de consulta `documentNumber` (tal como figura en el documento).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Sí** | SSN a consultar, debe escribirse exactamente como aparece en el documento. | `123-45-678` |
