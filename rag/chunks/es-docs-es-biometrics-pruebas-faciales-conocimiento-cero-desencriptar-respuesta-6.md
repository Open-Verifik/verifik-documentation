---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-desencriptar-respuesta-6"
title: "Desencriptar HumanID — Respuesta"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-desencriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Respuesta"
slug: "/biometrics/humanID-desencriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-desencriptar"
---

# Desencriptar HumanID
**API path(s):** /v2/human-id/decrypt

## Respuesta

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access Forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"humanID\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```
