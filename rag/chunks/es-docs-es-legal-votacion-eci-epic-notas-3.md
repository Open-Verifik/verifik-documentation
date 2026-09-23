---
id: "es-docs-es-legal-votacion-eci-epic-notas-3"
title: "India — EPIC: mesa y lugar de votación | Verifik — Notas"
sourcePath: "docs-es/legal/votacion-eci-epic.mdx"
locale: "es"
category: "legal"
tags:
  - "in"
  - "legal"
endpoints:
  - "/v2/in/epic"
  - "/v2/in/epic/votacion"
  - "/v2/in/epic](../epic-eci"
sourceAnchor: "Notas"
slug: "/legal/votacion-eci-epic"
url: "https://docs.verifik.co/verifik-es/legal/votacion-eci-epic"
---

# India — EPIC: mesa y lugar de votación | Verifik
**API path(s):** /v2/in/epic, /v2/in/epic/votacion, /v2/in/epic](../epic-eci

Este endpoint devuelve **dónde vota** el elector: asignación a **asamblea (AC)**, **distrito**, **parte** (sección de votación), **edificio** y datos de ubicación asociados a un **EPIC** válido de **10 caracteres**. Complementa la [API de solo nombres](../epic-eci) cuando necesitas **logística, soporte o comprobación de padrón** por lugar de votación.

## Notas

- `documentNumber` debe ser un EPIC de **10 caracteres**; fallos de validación pueden devolver `409`.
- Algunos campos pueden ser `null` según el estado o la fuente. Trata el `404` para EPIC no encontrados o no servidos.
- **Solo nombres del votante:** usa [GET /v2/in/epic](../epic-eci).

---

## Casos de uso frecuentes

- **Mesa de ayuda electoral**: Indicar AC, sección, edificio y dirección a partir del EPIC.
- **Operaciones de campo** y logística el día de la votación o en campañas de información.

## Fuentes oficiales y fiabilidad

Verifik normaliza datos electorales alineados con la ECI. Los resultados dependen del registro en el momento de la consulta; maneja siempre el `404` con claridad hacia el usuario final.

## Ventajas clave

- **Misma seguridad y modelo** que el resto de API Verifik: JSON homogéneo y bloque `signature` en aciertos.
- **Complementa la consulta de nombres** cuando el caso de negocio exige **ubicación y mesa**, no solo identidad.

## Cumplimiento y seguridad

Protege el token de `Authorization` y evita registrar EPICs en analítica pública. Cumple retención y ley local de datos. El borde de la API de Verifik usa cifrado en tránsito (TLS).

## Sobre Verifik

Verifik unifica acceso a servicios de identidad y registro a nivel global, con un marco de seguridad coherente para tu stack.
