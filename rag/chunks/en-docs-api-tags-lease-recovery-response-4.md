---
id: "en-docs-api-tags-lease-recovery-response-4"
title: "Lease Recovery — Response"
sourcePath: "docs/api/tags/lease-recovery.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-recovery"
sourceAnchor: "Response"
---

# Lease Recovery
**API path(s):** /api/sessions, /api/tags/lease-recovery

Recover a tag using an existing ZelfProof from a previously leased tag. This endpoint allows you to create a new tag with the same wallet data from a previous tag.

## Response

```json
{
  "validationError": "zelfProof is required\n"
}
```

```json
{
  "message": "tag_already_exists",
  "code": "Conflict"
}
```

```json
{
  "error": "validation_error",
  "message": "Invalid ZelfProof data"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "error": "internal_error",
  "message": "An unexpected error occurred"
}
```
