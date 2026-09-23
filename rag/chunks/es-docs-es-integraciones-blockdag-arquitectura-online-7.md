---
id: "es-docs-es-integraciones-blockdag-arquitectura-online-7"
title: "BlockDAG — Arquitectura Online"
sourcePath: "docs-es/integraciones/blockdag.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Online"
---

# BlockDAG

## Arquitectura Online

* **Red IPFS**: Almacenamiento distribuido para pruebas encriptadas
* **Red Arweave**: Almacenamiento de archivo permanente
* **Redundancia**: Replicación multiplataforma

#### Endpoints API (Modo Online)

```javascript
// Flujo completo del servicio de nombres
POST /zelf-name-service/v2/lease
{
  "zelfName": "john.blockdag",
  "faceBase64": "datos_cara_encriptada",
  "type": "create",
  "duration": "1",
  "password": "contraseña_opcional"
}

// Servicio completo de desencriptación
POST /zelf-name-service/v2/decrypt
{
  "zelfName": "john.blockdag",
  "faceBase64": "datos_cara_encriptada",
  "password": "contraseña_opcional"
}

// Búsqueda con procesamiento de backend
POST /zelf-name-service/v2/search
{
  "zelfName": "john.blockdag",
  "environment": "both"
}
```
