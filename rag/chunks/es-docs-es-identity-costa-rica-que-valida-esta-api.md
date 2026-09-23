---
id: "es-docs-es-identity-costa-rica-que-valida-esta-api"
title: "Ciudadano costarricense (CCCR) — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/costa-rica.mdx"
locale: "es"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoints:
  - "/v2/cr/cedula"
  - "/v2/cr/cedula?"
  - "/v2/cr/cedula?documenttype=cccr&documentnumber=010000001"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identidad/costa-rica"
url: "https://docs.verifik.co/verifik-es/identidad/costa-rica"
---

# Ciudadano costarricense (CCCR)
**API path(s):** /v2/cr/cedula, /v2/cr/cedula?, /v2/cr/cedula?documenttype=cccr&documentnumber=010000001

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos costarricenses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número CCCR**: Soporta *Cédula de Identidad Costarricense* (CCCR).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número CCCR.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v2/cr/cedula
```

Este endpoint verifica la **CCCR** (*Cédula de Identidad Costarricense*) frente a fuentes oficiales. Envía **`documentType`** con valor `CCCR` y el **`documentNumber`** (cédula sin espacios) en una solicitud GET; la respuesta incluye nombres estructurados para **KYC**, onboarding y control de fraude.

### Encabezados

| Nombre          | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo    | Requerido | Descripción                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Sí      | Tipo de documento. Valor permitido: `CCCR`. |
| `documentNumber` | string | Sí      | Número de cédula sin espacios. |

Los clientes de sandbox pueden usar los números de documento `010000001`–`010000010` (canónico `10000001`–`10000010`) para perfiles de demostración estables; `090040401` devuelve 404; `090040402` devuelve la respuesta de "requiere renovación" que se muestra a continuación.
