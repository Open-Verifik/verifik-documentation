---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-endpoint"
title: "Encriptar HumanID — Endpoint"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-encriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar"
---

# Encriptar HumanID
**API path(s):** /v2/human-id/encrypt

## Endpoint

```
POST https://api.verifik.co/v2/human-id/encrypt
```

Crea un HumanID (credencial verificable) encriptando metadatos y almacenándolos en IPFS. HumanAuthn usa cifrado de [zelf.world](https://zelf.world). El campo de producto de Verifik es `humanID`.

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
