---
id: "es-docs-es-identity-chile-taxpayer-notas-2"
title: "Chile — Consulta de contribuyente (RUT) — Notas"
sourcePath: "docs-es/identity/chile-taxpayer.mdx"
locale: "es"
category: "identity"
tags:
  - "cl"
  - "identity"
endpoints:
  - "/v2/cl/cedula"
  - "/v2/cl/taxpayer"
sourceAnchor: "Notas"
slug: "/identidad/chile-taxpayer"
url: "https://docs.verifik.co/verifik-es/identidad/chile-taxpayer"
---

# Chile — Consulta de contribuyente (RUT)
**API path(s):** /v2/cl/cedula, /v2/cl/taxpayer

Usa este endpoint cuando necesites datos **orientados al contribuyente** para un **RUT** chileno (no el flujo de cédula del registro civil). Complementa **[Verificación de identidad en Chile](/verifik-es/identidad/chile)** (`v2/cl/cedula`), pensado para **RUN / registro civil**.

## Notas

- Prefiere **`v2/cl/cedula`** para coincidencia **RUN / registro civil**; usa **`v2/cl/taxpayer`** cuando la fuente de verdad sea el **contribuyente RUT**.
