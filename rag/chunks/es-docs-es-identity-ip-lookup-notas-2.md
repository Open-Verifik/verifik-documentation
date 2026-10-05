---
id: "es-docs-es-identity-ip-lookup-notas-2"
title: "🌐 Consulta de Geoubicación IP — Notas"
sourcePath: "docs-es/identity/ip-lookup.mdx"
locale: "es"
category: "identity"
tags:
  - "ip-lookup"
  - "identity"
endpoint: "/v2/ip-lookup"
sourceAnchor: "Notas"
slug: "/identity/ip-lookup"
url: "https://docs.verifik.co/verifik-es/identity/ip-lookup"
---

# 🌐 Consulta de Geoubicación IP
**API path(s):** /v2/ip-lookup

## Notas

- **Sandbox:** `8.8.8.8` devuelve fila demo EE.UU.; `192.168.100.1`–`192.168.100.10` devuelven fixtures Colombia; `192.168.100.99` → **404**.
- La **disponibilidad** upstream puede variar; caídas pueden devolver **5xx**.
- Trate los resultados como señales de **red/ubicación** según sus políticas de privacidad y fraude.
