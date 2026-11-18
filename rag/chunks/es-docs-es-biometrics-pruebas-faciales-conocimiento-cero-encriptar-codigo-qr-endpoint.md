---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-codigo-qr-endpoint"
title: "Encriptar HumanID Código QR — Endpoint"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar-codigo-qr.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-encriptar-codigo-qr"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar-codigo-qr"
---

# Encriptar HumanID Código QR
**API path(s):** /v2/human-id/encrypt-qr-code

## Endpoint

```
POST https://api.verifik.co/v2/human-id/encrypt-qr-code
```

Crea un HumanID y lo encapsula en un código QR. HumanAuthn usa cifrado de [zelf.world](https://zelf.world). El campo de producto de Verifik es `humanIDQR`.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `faceBase64` | string | Sí | Imagen facial codificada en Base64 |
| `requireLiveness` | boolean | Sí | Si requiere detección de vitalidad |
| `livenessLevel` | string | Sí | Nivel de detección de vitalidad (`REGULAR`, `SOFT`, `HARDENED`) |
| `os` | string | Sí | Sistema operativo (`DESKTOP`, `ANDROID`, `IOS`) |
| `identifier` | string | Sí | Identificador único (solo alfanumérico, sin espacios ni caracteres especiales) |
| `publicData` | object | Sí | Datos públicos a almacenar con la prueba (pares clave-valor de string) |
| `metadata` | object | Sí | Metadatos privados (pares clave-valor de string) |
| `password` | string | No | Contraseña opcional para seguridad adicional |
| `referenceFaceBase64` | string | No | Cara de referencia para comparación |
| `tolerance` | string | No | Nivel de tolerancia (`REGULAR`, `SOFT`, `HARDENED`) |
| `verifierKey` | string | No | Clave de verificador para validación adicional |
| `storageProvider` | string | No | Guardar en IPFS o devolver sin persistencia de Verifik (`ipfs`, `none`). Por defecto `ipfs` |
| `livenessDetectionPriorCreation` | boolean | No | Habilitar detección de vitalidad antes de la creación de la prueba |
