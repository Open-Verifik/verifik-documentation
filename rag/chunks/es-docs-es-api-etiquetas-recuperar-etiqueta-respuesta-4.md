---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-respuesta-4"
title: "Recuperación de una Etiqueta — Respuesta"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-recovery"
sourceAnchor: "Respuesta"
---

# Recuperación de una Etiqueta
**API path(s):** /api/sessions, /api/tags/lease-recovery

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

## Respuesta

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
