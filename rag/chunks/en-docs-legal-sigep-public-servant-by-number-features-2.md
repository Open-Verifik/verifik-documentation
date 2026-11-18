---
id: "en-docs-legal-sigep-public-servant-by-number-features-2"
title: "Colombia — SIGEP lookup by document — Features"
sourcePath: "docs/legal/sigep-public-servant-by-number.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/sigep/number"
sourceAnchor: "Features"
slug: "/legal/sigep-public-servant-by-number"
url: "https://docs.verifik.co/legal/sigep-public-servant-by-number"
---

# Colombia — SIGEP lookup by document
**API path(s):** /v2/co/sigep/number

## Features

- **Directory rows**: Position, entity, email, phone, and location when published.
- **Profile link**: Official SIGEP / Función Pública URL when available.
- **Legend**: May explain empty directory results while the citizen record exists.

## Use cases

- **Transparency and vendor checks**: Confirm public-sector or contractor listings tied to an ID.
- **KYB / compliance**: Support due diligence on individuals linked to government work.

### Notes

- **`documentType`** must be **`CC`** or **`NIT`** for this endpoint (some UIs may show more labels; the API enforces these two).
- If the directory has **no rows**, the response may still be **200** with an empty **`records`** array and a **`legend`** message.
