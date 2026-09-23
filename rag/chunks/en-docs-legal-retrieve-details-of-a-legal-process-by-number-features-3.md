---
id: "en-docs-legal-retrieve-details-of-a-legal-process-by-number-features-3"
title: "Retrieve Details of a Legal Process by Number — Features"
sourcePath: "docs/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/proceso"
sourceAnchor: "Features"
slug: "/legal/retrieve-details-of-a-legal-process-by-number"
url: "https://docs.verifik.co/legal/retrieve-details-of-a-legal-process-by-number"
---

# Retrieve Details of a Legal Process by Number
**API path(s):** /v2/co/rama/proceso

## Features

- **Case file detail**: Court, matter type, class, and timeline fields from Rama Judicial.
- **Parties**: Demandantes, demandados, and related subjects when available.
- **Actuaciones**: Chronological procedural steps with annotations.

## Use Cases

- **Case monitoring**: Follow a known `llaveProceso` after listing processes for a person or company.
- **Due diligence**: Pull structured court data for a specific file number.

### Notes

- **`processNumber`** is a **path** segment, not a query parameter (some clients may label it `processNumber` in forms).
- **409** responses usually mean a missing or invalid `processNumber` (including shorter than 7 characters).
