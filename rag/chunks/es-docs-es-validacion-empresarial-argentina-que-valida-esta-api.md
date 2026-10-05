---
id: "es-docs-es-validacion-empresarial-argentina-que-valida-esta-api"
title: "Verificación Empresarial Argentina — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-empresarial/argentina.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ar"
  - "validacion-empresarial"
endpoint: "/v2/ar/company"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-empresarial/argentina"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/argentina"
---

# Verificación Empresarial Argentina
**API path(s):** /v2/ar/company

## ¿Qué valida esta API?

La API de Verificación Empresarial de Verifik te ayuda a autenticar empresas argentinas usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYB (Conozca a su Empresa), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la legitimidad de compañías, socios o proveedores.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Razón Social y Número de CUIT**: Soporta *Código Único de Identificación Tributaria* (CUIT).
-   **Información Empresarial**: Devuelve razón social, forma jurídica, fecha de contrato y actividades económicas.
-   **Actividades Económicas**: Proporciona códigos y descripciones de actividades principales y secundarias.
-   **Coincidencia de Empresa**: Confirma que la información de la empresa coincide con el número de CUIT.

Al verificar estos detalles, puedes tener la certeza de que la empresa con la que tratas es legítima y está debidamente registrada, reduciendo significativamente el riesgo de fraude y asegurando el cumplimiento.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/ar/company
```

Consulta una empresa argentina con **`documentType`** `CUIT` y **`documentNumber`**. Devuelve campos de registro para **KYB**, **evaluación de proveedores** y **cumplimiento**.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Permitido: `CUIT`. |
| `documentNumber` | string | Yes | CUIT de 11 dígitos sin separadores. |
