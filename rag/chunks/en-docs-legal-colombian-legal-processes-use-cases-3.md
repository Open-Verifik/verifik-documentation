---
id: "en-docs-legal-colombian-legal-processes-use-cases-3"
title: "Colombia — Judicial processes — Use Cases"
sourcePath: "docs/legal/colombian-legal-processes.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/procesos"
  - "/v2/co/rama/procesos?documenttype=cc&documentnumber=123456789"
sourceAnchor: "Use Cases"
slug: "/legal/colombian-legal-processes"
url: "https://docs.verifik.co/legal/colombian-legal-processes"
---

# Colombia — Judicial processes
**API path(s):** /v2/co/rama/procesos, /v2/co/rama/procesos?documenttype=cc&documentnumber=123456789

Verifik’s **Judicial processes** endpoint returns a **list of legal processes** from Colombia’s judicial system for a given **CC** (natural person) or **NIT** (company). Typical fields include process dates, last action, court office (**despacho**), department, and **sujetosProcesales**, with **pagination** when there are many matches.

## Use Cases

- **Legal research** and litigation background on people or businesses
- **Due diligence** and compliance in Colombia

### Notes

- **`documentType`** must be **`CC`** or **`NIT`** (validated by the API).
- Source lookups use **name-based** judicial queries; occasional **misses or empty lists** are possible even with valid IDs.
