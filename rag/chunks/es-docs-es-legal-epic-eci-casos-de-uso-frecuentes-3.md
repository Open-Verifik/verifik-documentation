---
id: "es-docs-es-legal-epic-eci-casos-de-uso-frecuentes-3"
title: "India — EPIC (Votante) consulta de nombres | Verifik — Casos de uso frecuentes"
sourcePath: "docs-es/legal/epic-eci.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic/votacion"
sourceAnchor: "Casos de uso frecuentes"
slug: "/legal/epic-eci"
url: "https://docs.verifik.co/verifik-es/legal/epic-eci"
---

# India — EPIC (Votante) consulta de nombres | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic/votacion

Verifik ofrece un único **endpoint REST** para consultar la **información de nombre** vinculada a un **EPIC** (número de *Elector's Photo Identity Card* en India) a partir de datos alineados con la **Comisión Electoral de India (ECI)**. Úsalo en flujos de KYC, onboarding o cumplimiento que requieran comprobar que un número de Voter ID devuelve datos de nombre coherentes con el padrón.

## Casos de uso frecuentes

- **Programas KYC** que deben contrastar Voter ID con nombres y familiar devueltos.
- **Servicios a ciudadanos** que requieren validar un EPIC antes de emitir credenciales o accesos.
- **Sector financiero y cumplimiento** donde la identidad electoral forma parte de la estrategia de riesgo.

## Fuentes oficiales y fiabilidad

Verifik enruta peticiones a fuentes electorales de confianza para ofrecer datos alineados con el comportamiento de búsqueda de la ECI. Todo el tránsito usa TLS; trata los EPIC como **datos personales sensibles** en logs y almacenamiento.

## Ventajas clave

- **Integración sencilla**: un GET con `documentNumber` y el encabezado `Authorization` estándar.
- **Respuesta estructurada**: arrays de nombre y campos en escritura local cuando el origen los provee.
- **Certificación Verifik**: el bloque `signature` en respuestas correctas apoya trazas de auditoría.

## Cumplimiento y seguridad

Utiliza siempre HTTPS. Protege tokens, rota claves y cumple la normativa de protección de datos de tu jurisdicción. La plataforma Verifik está diseñada para alta disponibilidad y acceso monitorizado.

## Sobre Verifik

Verifik ofrece APIs de identidad, cumplimiento y prevención del fraude en múltiples países, con un único modelo de integración y seguridad.
