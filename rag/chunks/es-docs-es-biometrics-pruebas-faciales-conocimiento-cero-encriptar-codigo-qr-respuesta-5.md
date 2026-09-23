---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-codigo-qr-respuesta-5"
title: "Encriptar HumanID Código QR — Respuesta"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar-codigo-qr.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Respuesta"
slug: "/biometrics/humanID-encriptar-codigo-qr"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar-codigo-qr"
---

# Encriptar HumanID Código QR
**API path(s):** /v2/human-id/encrypt-qr-code

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
  "message": "\"faceBase64\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```
