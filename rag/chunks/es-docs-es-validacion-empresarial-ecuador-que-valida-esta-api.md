---
id: "es-docs-es-validacion-empresarial-ecuador-que-valida-esta-api"
title: "Verificación Empresarial Ecuatoriana — ¿Qué valida esta API?"
sourcePath: "docs-es/validacion-empresarial/ecuador.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "ec"
  - "validacion-empresarial"
endpoints:
  - "/v2/ec/company"
  - "/v3/ec/company"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validacion-empresarial/ecuador"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/ecuador"
---

# Verificación Empresarial Ecuatoriana
**API path(s):** /v2/ec/company, /v3/ec/company

## ¿Qué valida esta API?

La API de Validación Empresarial de Verifik autentica empresas ecuatorianas con datos oficiales del gobierno. Está diseñada para agilizar procesos KYB (Know Your Business), prevenir fraude y cumplir requisitos regulatorios.

Construimos esta integración para negocios que necesitan confirmar de forma rápida, segura y automatizada la legitimidad de empresas, socios o proveedores.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Razón social y RUCEC**: admite el *Registro Único de Contribuyentes del Ecuador* (RUCEC).
-   **Información empresarial**: devuelve razón social, estado, tipo de contribuyente, régimen, actividad económica principal, flags contables y de retención, fechas del contribuyente y representantes legales.
-   **Coincidencia**: confirma que la información corresponde al número RUCEC.

Al verificar estos datos reduces el riesgo de fraude y apoyas flujos de cumplimiento.

## Referencia de la API

### Endpoint

```
GET https://api.verifik.co/v3/ec/company
```

Consulta una empresa ecuatoriana con **`documentType`** `RUCEC` y **`documentNumber`** (13 dígitos, sin separadores). Devuelve campos de registro—incluida actividad económica, régimen y representantes legales—para **KYB**, **evaluación de proveedores** y **cumplimiento**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name             | Type   | Required | Description                                      | Example         |
| ---------------- | ------ | -------- | ------------------------------------------------ | --------------- |
| `documentType`   | string | Yes      | Tipo de documento. Valor permitido: `RUCEC`.     | `RUCEC`         |
| `documentNumber` | string | Yes      | RUCEC de 13 dígitos sin espacios ni puntos.      | `1793197955001` |
