---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-vista-previa-endpoint"
title: "Vista Previa HumanID — Endpoint"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-vista-previa.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/preview"
sourceAnchor: "Endpoint"
slug: "/biometrics/humanID-vista-previa"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-vista-previa"
---

# Vista Previa HumanID
**API path(s):** /v2/human-id/preview

## Endpoint

```
POST https://api.verifik.co/v2/human-id/preview
```

Examina un HumanID para ver sus metadatos y configuración sin verificación biométrica. HumanAuthn usa cifrado de [zelf.world](https://zelf.world). El campo de producto de Verifik es `humanID`.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `humanID` | string | Sí | El token de prueba facial encriptada a examinar |
| `verifierKey` | string | No | Clave de verificador para validación adicional |
