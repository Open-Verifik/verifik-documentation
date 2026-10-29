---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-codigo-qr-notas-6"
title: "Encriptar HumanID Código QR — Notas"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar-codigo-qr.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt-qr-code"
sourceAnchor: "Notas"
slug: "/biometrics/humanID-encriptar-codigo-qr"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar-codigo-qr"
---

# Encriptar HumanID Código QR
**API path(s):** /v2/human-id/encrypt-qr-code

## Notas

- El campo `humanIDQR` contiene una imagen PNG de código QR codificada en base64
- El código QR puede mostrarse directamente en aplicaciones o guardarse como archivo de imagen
- Los datos IPFS incluyen metadatos sobre la prueba almacenada y claves de datos públicos
- Se deducen créditos por la creación de la prueba (típicamente 0.84 créditos)
- El `identifier` debe ser solo alfanumérico (sin espacios ni caracteres especiales)
- `publicData` y `metadata` deben contener solo pares clave-valor de string
- Los códigos QR son ideales para compartir sin conexión y aplicaciones móviles
- El código QR contiene los mismos datos de prueba encriptados que el endpoint de encriptación regular
