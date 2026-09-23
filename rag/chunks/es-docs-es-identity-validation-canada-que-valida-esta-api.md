---
id: "es-docs-es-identity-validation-canada-que-valida-esta-api"
title: "Validación de Licencias de Conducir en Canadá — ¿Qué valida esta API?"
sourcePath: "docs-es/identity-validation/canada.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "ca"
  - "identity-validation"
endpoints:
  - "/v2/ca/british-columbia/driver-license"
  - "/v2/ca/british-columbia/driver-license?documentnumber=1123456&lastname=hello"
  - "/v2/ca/ontario/driver-license"
  - "/v2/ca/ontario/driver-license?documentnumber=s123456789123456"
sourceAnchor: "¿Qué valida esta API?"
slug: "/identity-validation/canada"
url: "https://docs.verifik.co/verifik-es/identity-validation/canada"
---

# Validación de Licencias de Conducir en Canadá
**API path(s):** /v2/ca/british-columbia/driver-license, /v2/ca/british-columbia/driver-license?documentnumber=1123456&lastname=hello, /v2/ca/ontario/driver-license, /v2/ca/ontario/driver-license?documentnumber=s123456789123456

## ¿Qué valida esta API?

La API de Verificación de Licencias de Conducir de Verifik te ayuda a autenticar licencias de conducir canadienses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de licencias de conducir emitidas en las provincias de Columbia Británica y Ontario.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Número de Licencia de Conducir**: Verifica la autenticidad de números de licencias de conducir.
-   **Estado de la Licencia**: Confirma si la licencia está actualmente válida.
-   **Coincidencia de Identidad**: Para Columbia Británica, valida que el apellido coincida con el registro de la licencia.

Al verificar estos detalles, puedes tener la certeza de que la licencia de conducir es auténtica y válida, reduciendo significativamente el riesgo de fraude.

Los servicios de validación de identidad canadiense incluyen verificación de licencias de conducir para las provincias de Columbia Británica y Ontario. Estos servicios te permiten verificar la autenticidad y validez de las licencias de conducir emitidas en estas provincias canadienses.

## Provincias Soportadas

| Provincia | Endpoint | Descripción |
|----------|----------|-------------|
| **Columbia Británica** | `/v2/ca/british-columbia/driver-license` | Verificar licencias de conducir de BC con número de documento y apellido |
| **Ontario** | `/v2/ca/ontario/driver-license` | Verificar licencias de conducir de Ontario con número de documento |
