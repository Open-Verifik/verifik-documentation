---
id: "es-docs-es-validaciones-de-identidad-venezuela-que-valida-esta-api"
title: "Ciudadano Venezolano — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/venezuela.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "ve"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/cedula?"
  - "/v2/ve/cedula?documentnumber=10000001"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/venezuela"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/venezuela"
---

# Ciudadano Venezolano
**API path(s):** /v2/ve/cedula, /v2/ve/cedula?, /v2/ve/cedula?documentnumber=10000001

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

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentNumber` | string | Sí      | Número de cédula nacional (CCVE). Se eliminan puntos y espacios. No envíes `documentType`. |
