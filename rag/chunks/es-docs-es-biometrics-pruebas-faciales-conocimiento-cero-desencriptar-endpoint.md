---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-desencriptar-endpoint"
title: "Desencriptar HumanID — Endpoint"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-desencriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-desencriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-desencriptar"
---

# Desencriptar HumanID
**API path(s):** /v2/human-id/decrypt

## Endpoint

```
POST https://api.verifik.co/v2/human-id/decrypt
```

Verifica un HumanID comparándolo contra una nueva imagen facial. HumanAuthn usa cifrado de [zelf.world](https://zelf.world). El campo de producto de Verifik es `humanID`.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `faceBase64` | string | Sí | Imagen facial codificada en Base64 para verificación |
| `livenessLevel` | string | No | Nivel de detección de vitalidad (`REGULAR`, `SOFT`, `HARDENED`) |
| `os` | string | Sí | Sistema operativo (`DESKTOP`, `ANDROID`, `IOS`) |
| `password` | string | No | Contraseña si la prueba estaba protegida con contraseña |
| `humanID` | string | Sí | El token de prueba facial encriptada a verificar |
| `verifierKey` | string | No | Clave de verificador para validación adicional |
