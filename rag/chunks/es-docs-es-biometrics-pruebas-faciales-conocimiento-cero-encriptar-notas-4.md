---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-notas-4"
title: "Encriptar HumanID — Notas"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Notas"
slug: "/biometrics/humanID-encriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar"
---

# Encriptar HumanID
**API path(s):** /v2/human-id/encrypt

## Notas

- El token `humanID` contiene la prueba facial encriptada y debe almacenarse de forma segura
- Los datos IPFS incluyen metadatos sobre la prueba almacenada y claves de datos públicos
- Se deducen créditos por la creación de la prueba (típicamente 0.84 créditos)
- El `identifier` debe ser solo alfanumérico (sin espacios ni caracteres especiales)
- `publicData` y `metadata` deben contener solo pares clave-valor de string
- La detección de vitalidad puede habilitarse para seguridad adicional
- La protección con contraseña añade una capa extra de seguridad a la prueba
