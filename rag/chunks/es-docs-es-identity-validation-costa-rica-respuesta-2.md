---
id: "es-docs-es-identity-validation-costa-rica-respuesta-2"
title: "Ciudadano Costarricense — Respuesta"
sourcePath: "docs-es/identity-validation/costa-rica.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "cr"
  - "identity-validation"
endpoint: "/v2/cr/cedula"
sourceAnchor: "Respuesta"
slug: "/identity-validation/costa-rica"
url: "https://docs.verifik.co/verifik-es/identity-validation/costa-rica"
---

# Ciudadano Costarricense
**API path(s):** /v2/cr/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos costarricenses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

```json
{
  "data": {
    "documentType": "CCCR",
    "documentNumber": "010000001",
    "firstName": "MARIA ELENA",
    "lastName": "LOPEZ GARCIA",
    "fullName": "MARIA ELENA LOPEZ GARCIA"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 27, 2026 3:00 PM"}
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```
