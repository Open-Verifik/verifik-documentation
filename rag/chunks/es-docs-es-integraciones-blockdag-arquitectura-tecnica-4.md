---
id: "es-docs-es-integraciones-blockdag-arquitectura-tecnica-4"
title: "BlockDAG — Arquitectura Técnica"
sourcePath: "docs-es/integraciones/blockdag.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica"
---

# BlockDAG

## Arquitectura Técnica

#### Componentes del Sistema

1. **Motor de Encriptación Biométrica**
   * Detección y procesamiento facial
   * Generación de pruebas ZK usando o1js
   * Encriptación local (nunca sube datos biométricos)
2. **Capa de Integración BlockDAG**
   * Generación de billeteras para direcciones BlockDAG
   * Firma y verificación de transacciones
   * Soporte de tokens nativos
3. **Almacenamiento Distribuido**
   * IPFS para almacenamiento de pruebas encriptadas
   * Arweave opcional para archivado permanente
   * Indexación de metadatos para búsquedas rápidas
4. **API Gateway (Versión online > Instancia de Node : Contenedor Docker)**
   * Endpoints RESTful para todas las operaciones para la versión online
   * Control de límites de velocidad y seguridad
   * Paquetes SDK para integración fácil

#### Arquitectura de Seguridad

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Dispositivo   │    │   Backend Zelf   │    │   Red BlockDAG  │
│   del Usuario   │    │                  │    │                 │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ Escaneo     │ │───▶│ │ Gen Prueba   │ │───▶│ │ Registro    │ │
│ │ Facial      │ │    │ │ ZK (Sin Datos│ │    │ │ de Nombre   │ │
│ │ (Local)     │ │    │ │ Biométricos) │ │    │ │ Almacenado  │ │
│ └─────────────┘ │    │ └──────────────┘ │    │ └─────────────┘ │
│                 │    │                  │    │                 │
│ ┌─────────────┐ │    │ ┌──────────────┐ │    │ ┌─────────────┐ │
│ │ Recuperación│ │◄───│ │ Almacenamiento│ │◄───│ │ Sistema     │ │
│ │ Encriptada  │ │    │ │ IPFS &       │ │    │ │ Verificación│ │
│ └─────────────┘ │    │ │ Recuperación │ │    │ └─────────────┘ │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

***
