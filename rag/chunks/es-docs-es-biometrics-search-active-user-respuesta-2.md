---
id: "es-docs-es-biometrics-search-active-user-respuesta-2"
title: "Búsqueda Facial 1:N (Usuario Activo) — Respuesta"
sourcePath: "docs-es/biometrics/search-active-user.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "face-recognition"
endpoint: "/v2/face-recognition/search-active-user"
sourceAnchor: "Respuesta"
slug: "/buscar-usuario-activo"
url: "https://docs.verifik.co/verifik-es/buscar-usuario-activo"
---

# Búsqueda Facial 1:N (Usuario Activo)
**API path(s):** /v2/face-recognition/search-active-user

## Respuesta

```json
{
  "id": "SAU01",
  "data": [
    { "id": "person_id", "score": 0.93 }
  ],
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "January 16, 2024 3:44 PM"
  }
}
```

  
  

```json
{
  "message": "\"os\" is required",
  "code": "MissingParameter"
}
```

### Notas

- No se realiza detección de vitalidad; usa cuando ya confías en el contexto de captura.
