---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-desencriptar-notas-7"
title: "Desencriptar HumanID — Notas"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-desencriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Notas"
slug: "/biometrics/humanID-desencriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-desencriptar"
---

# Desencriptar HumanID
**API path(s):** /v2/human-id/decrypt

## Notas

- El campo `identifier` contiene el identificador único usado al crear la prueba
- `metadata` contiene los datos privados que se almacenaron con la prueba
- `publicData` contiene los datos públicos que se almacenaron con la prueba
- `faceCropBase64` contiene una versión recortada de la imagen facial verificada
- `difficulty` indica el nivel de dificultad de verificación (`EASY`, `MEDIUM`, `HARD`)
- `charged` indica si se cobraron créditos por esta verificación
- `requiredLiveness` indica si se requería detección de vitalidad para esta prueba
- Los créditos se cobran típicamente mensualmente para usuarios activos en lugar de por verificación
- El proceso de verificación compara la nueva imagen facial contra la prueba encriptada sin acceder a los datos biométricos originales
