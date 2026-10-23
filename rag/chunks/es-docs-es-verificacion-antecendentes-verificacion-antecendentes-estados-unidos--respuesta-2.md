---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-estados-unidos--respuesta-2"
title: "Estados Unidos - Pasaporte y entradas/salidas a EE. UU. — Respuesta"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "passport"
  - "verificacion-antecendentes"
endpoint: "/v2/passport/us/entries"
sourceAnchor: "Respuesta"
slug: "/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-estados-unidos-entradas-pasaporte"
---

# Estados Unidos - Pasaporte y entradas/salidas a EE. UU.
**API path(s):** /v2/passport/us/entries

Utiliza este endpoint para solicitar **historial de viajes a EE. UU.** vinculado al pasaporte (entradas y salidas) en flujos de cumplimiento y screening. Proporciona los datos del viajero y del pasaporte como parámetros de consulta.

## Respuesta

```json
{
  "data": {},
  "signature": {
    "dateTime": "October 10, 2025 7:10 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "EJEMPLO"
}
```

### Notas

- La **disponibilidad** de este producto puede estar restringida; confirma con tu equipo de cuenta antes de producción.
- Los **formatos de campo** (especialmente `dateOfBirth`) deben seguir el contrato de tu integración Verifik.
