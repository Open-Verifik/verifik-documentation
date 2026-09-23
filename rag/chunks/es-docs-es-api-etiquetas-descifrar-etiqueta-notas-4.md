---
id: "es-docs-es-api-etiquetas-descifrar-etiqueta-notas-4"
title: "Descifrar Etiqueta — Notas"
sourcePath: "docs-es/api/etiquetas/descifrar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoint: "/api/tags/decrypt"
sourceAnchor: "Notas"
---

# Descifrar Etiqueta
**API path(s):** /api/tags/decrypt

Descifrar un ZelfProof para acceder a datos de wallet y metadatos usando verificación biométrica facial.

## Notas

- **Verificación Biométrica**: El parámetro `faceBase64` debe contener la misma imagen facial utilizada durante el cifrado original
- **Seguridad de Contraseña**: El parámetro `password` debe coincidir con la contraseña utilizada durante el cifrado original
- **Datos Sensibles**: El campo `metadata` contiene información sensible incluyendo frases mnemónicas - manejar con cuidado
- **Almacenamiento IPFS**: Los datos descifrados se almacenan en IPFS y son accesibles a través de las URLs proporcionadas
- **Soporte de Dominio**: Soporta múltiples dominios incluyendo "zelf", "avax", "bdag", etc.
- **Expiración**: Las etiquetas pueden tener fechas de expiración como se muestra en el campo `expiresAt`
- **Código QR**: El `zelfProofQRCode` puede ser utilizado para acceso offline al ZelfProof

## Consideraciones de Seguridad

- Siempre usar HTTPS al hacer solicitudes
- Almacenar tokens JWT de forma segura y rotarlos regularmente
- Nunca registrar o exponer datos sensibles del campo `metadata`
- Asegurar que las imágenes faciales se capturen de forma segura y no se almacenen de forma insegura
- Usar contraseñas fuertes para el cifrado de ZelfProof
