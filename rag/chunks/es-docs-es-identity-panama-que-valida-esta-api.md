---
id: "es-docs-es-identity-panama-que-valida-esta-api"
title: "Ciudadano Panameño — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/panama.mdx"
locale: "es"
category: "identity"
tags:
  - "pa"
  - "identity"
endpoint: "/v2/pa/cedula"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/panama"
url: "https://docs.verifik.co/verifik-es/identidad/panama"
---

# Ciudadano Panameño
**API path(s):** /v2/pa/cedula

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos panameños. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API valida:

-   **Nombre Completo y Número CCPA**: Soporta *Cédula de Identidad Personal* (CCPA) para ciudadanos y residentes.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CCPA.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/pa/cedula
```

Validación de identidad para personas en **Panamá** con la **CCPA** (*Cédula de Identidad Personal*). Envías **`documentType`** (`CCPA`), **`documentNumber`** normalizado. Pensada para **KYC**, onboarding y reducción de fraude en flujos totalmente automatizados por HTTPS.

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CCPA`. |
| `documentNumber` | string | Sí      | Cédula panameña completa tras la normalización (ver **[Formatos aceptados para `documentNumber`](#formatos-aceptados-para-documentnumber)** abajo). |
