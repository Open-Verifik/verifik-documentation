---
id: "es-docs-es-identity-uruguay-que-valida-esta-api"
title: "Ciudadano Uruguayo — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/uruguay.mdx"
locale: "es"
category: "identity"
tags:
  - "uy"
  - "identity"
endpoints:
  - "/v2/uy/cedula"
  - "/v2/uy/cedula?"
  - "/v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/uruguay"
url: "https://docs.verifik.co/verifik-es/identidad/uruguay"
---

# Ciudadano Uruguayo
**API path(s):** /v2/uy/cedula, /v2/uy/cedula?, /v2/uy/cedula?documenttype=ccuy&documentnumber=123456789&dateofbirth=20/02/1978

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos uruguayos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CCUY**: Soporta *Cédula de Ciudadanía Uruguaya* (CCUY).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CCUY.
-   **Verificación de Fecha de Nacimiento**: Valida que la fecha de nacimiento coincida con los registros oficiales.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/uy/cedula
```

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CCUY`. |
| `documentNumber` | string | Sí      | Número de documento. |
| `dateOfBirth` | string | Sí      | Fecha de nacimiento en formato `DD/MM/YYYY`. |
