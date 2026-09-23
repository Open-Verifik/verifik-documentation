---
id: "es-docs-es-legal-salud"
title: "Salud (Colombia) — Colombia — Cobertura de API"
sourcePath: "docs-es/legal/salud.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/afiliaciones"
  - "/v2/co/cedula/rethus"
sourceAnchor: "Colombia — Cobertura de API"
slug: "/legal/salud"
url: "https://docs.verifik.co/verifik-es/legal/salud"
---

# Salud (Colombia)
**API path(s):** /v2/co/afiliaciones, /v2/co/cedula/rethus

## Colombia — Cobertura de API

## Colombia — Cobertura de API

- **[Colombia — RETHUS (registro de talento humano en salud)](/legal/colombia-rethus)** — `GET /v2/co/cedula/rethus` con **tipo de documento** (CC, CE, PPT) y **número de documento**.

- **[Colombia — Afiliaciones de salud y seguridad social](./verificar-afiliaciones-colombianas.mdx)** — `GET /v2/co/afiliaciones` (EPS, ARL, pensión, cajas de compensación, cesantías) con **`documentType`**, **`documentNumber`** y **`date`** (`DD/MM/AAAA`).

## Casos de uso

- **Verificación** y **habilitación** de personal de salud (RETHUS)
- **Empleo** y **prestaciones** (afiliaciones / RUAF)
