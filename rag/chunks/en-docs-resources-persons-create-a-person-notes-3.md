---
id: "en-docs-resources-persons-create-a-person-notes-3"
title: "Create a Person — Notes"
sourcePath: "docs/resources/persons/create-a-person.mdx"
locale: "en"
category: "resources"
tags:
  - "face-recognition"
  - "resources"
endpoint: "/v2/face-recognition/persons"
sourceAnchor: "Notes"
slug: "/resources/create-a-person"
url: "https://docs.verifik.co/resources/create-a-person"
---

# Create a Person
**API path(s):** /v2/face-recognition/persons

## Notes

- `images` must be raw base64 strings; very short payloads may be rejected (e.g. `412:only_images_in_base64`).
- Successful responses typically include Verifik envelope fields `id`, `data`, and `signature`; the exact `data` shape matches your environment and [The Person Object](/resources/the-person-object).
- `collections` is often required in practice so the person is enrolled in at least one face collection for search and verification.
