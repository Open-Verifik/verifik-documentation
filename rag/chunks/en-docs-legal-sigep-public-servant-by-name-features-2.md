---
id: "en-docs-legal-sigep-public-servant-by-name-features-2"
title: "Colombia — SIGEP lookup by full name — Features"
sourcePath: "docs/legal/sigep-public-servant-by-name.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/name"
sourceAnchor: "Features"
slug: "/legal/sigep-public-servant-by-name"
url: "https://docs.verifik.co/legal/sigep-public-servant-by-name"
---

# Colombia — SIGEP lookup by full name
**API path(s):** /v2/co/sigep/name

## Features

- **Directory search**: Name-based lookup against the SIGEP web directory.
- **Rich rows**: Entity, role, email, phone, and location when published.
- **Profile links**: Official Función Pública URLs when present.

## Use cases

- **Discovery**: Find officials or contractors when you do not have an ID number.
- **Contact and verification**: Retrieve published contact metadata for due diligence or transparency workflows.

### Notes

- **`fullName`** is required; omitting it typically yields **409** `MissingParameter`.
- **200** with an empty **`records`** array and a **`legend`** message is possible when no directory matches are returned.
- The upstream SIGEP service may occasionally be unavailable; errors are surfaced as **409** with `Endpoint_out_of_service` when applicable.
