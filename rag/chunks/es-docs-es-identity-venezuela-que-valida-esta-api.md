---
id: "es-docs-es-identity-venezuela-que-valida-esta-api"
title: "Ciudadano venezolano (CCVE) — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/venezuela.mdx"
locale: "es"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoint: "/v2/ve/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/venezuela"
url: "https://docs.verifik.co/verifik-es/identidad/venezuela"
---

# Ciudadano venezolano (CCVE)
**API path(s):** /v2/ve/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos venezolanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número de Documento**: Soporta documentos de identidad venezolanos (CCVE).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de documento.
-   **Detalles Personales Opcionales**: Puede incluir fecha de nacimiento, género y estado civil cuando estén disponibles.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/ve/cedula
```

Esta ruta devuelve datos de identidad para **ciudadanos venezolanos** con documento nacional **CCVE** (*Cédula de Identidad*). Envía el número de cédula como **`documentNumber`**; la API resuelve el registro y devuelve nombres estructurados para **KYC**, onboarding y control de fraude. Para **residentes extranjeros**, usa [`GET /v2/ve/foreigner-id`](/verifik-es/identidad/venezuela-foreigner-id) (CEVE).

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |
