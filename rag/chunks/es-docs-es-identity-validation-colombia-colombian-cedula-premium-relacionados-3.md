---
id: "es-docs-es-identity-validation-colombia-colombian-cedula-premium-relacionados-3"
title: "Colombia — Cédula nacional premium (CC) — Relacionados"
sourcePath: "docs-es/identity-validation/colombia/colombian-cedula-premium.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/cedula/premium"
sourceAnchor: "Relacionados"
slug: "/validacion-identidad/colombia/cedula-premium-cc"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/cedula-premium-cc"
---

# Colombia — Cédula nacional premium (CC)
**API path(s):** /v2/co/cedula, /v2/co/cedula/premium

**Finalidad:** **verificar** una **Cédula de Ciudadanía (CC)** frente a **fuentes oficiales** y devolver un **registro de identidad estructurado** para procesos de KYC y cumplimiento, no un simple sí/no sobre el número. Incluye **cómo figura el nombre**, **fecha de nacimiento**, **lugar y fecha de expedición** y, cuando las fuentes lo aportan, **género** e **indicación de supervivencia**, con un bloque de **certificación firmada**. Se **envía únicamente el número**; la **fecha de expedición se resuelve en el servidor** (sin tipo de documento ni fecha en la petición). El detalle equivale a [**cédula extra**](../../identity/colombia-full-id.mdx). El consumo de **créditos** es **superior** al de la [**consulta básica**](./colombian-citizen.mdx) por los pasos de resolución adicionales.

## Relacionados

- [Ciudadano colombiano (básico)](./colombian-citizen.mdx) — `GET/POST /v2/co/cedula`
- Documentación canónica (EN): [National ID premium (CC)](https://docs.verifik.co/identity-validation/colombia/colombian-cedula-premium)
