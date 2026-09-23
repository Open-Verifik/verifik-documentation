---
id: "es-docs-es-api-etiquetas-vista-previa-zelfproof-notas-2"
title: "Vista Previa de ZelfProof — Notas"
sourcePath: "docs-es/api/etiquetas/vista-previa-zelfproof.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Notas"
---

# Vista Previa de ZelfProof

Obtener una vista previa de un ZelfProof antes del descifrado para ver sus datos públicos y requisitos.

## Notas

- El parámetro `zelfProof` debe contener los datos completos del ZelfProof codificados en base64
- El parámetro `verifierKey` es opcional y solo se requiere si el ZelfProof fue creado con una clave verificadora
- El campo `passwordLayer` indica si el ZelfProof requiere una contraseña para el descifrado
- El campo `publicData` contiene direcciones de wallet para blockchains soportados
- El campo `requireLiveness` indica si se requiere verificación de vivacidad
