---
id: "es-docs-es-integraciones-blockdag-milestone-one-arquitectura-tecnica-3"
title: "BlockDAG Hito 1: Fundación — Arquitectura Técnica"
sourcePath: "docs-es/integraciones/blockdag-milestone-one.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica"
---

# BlockDAG Hito 1: Fundación

## Arquitectura Técnica

### Componentes del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 1                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   SDK Zelf       │     │                 Integración BlockDAG                     │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Gen Billetera│ │────▶│ │ Generación  │  │ Formato     │  │ Funciones       │   │
│ │ (BlockDAG)   │ │     │ │ Direcciones │  │ Direcciones │  │ Validación      │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ ZK Face      │ │────▶│ │ Adaptación  │  │ Compatibilidad│ │ Motor           │   │
│ │ Proof Gen    │ │     │ │ Pruebas     │  │ BlockDAG    │  │ Optimización    │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Capa API                             │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Endpoint    │  │ Endpoint    │  │ Endpoint        │   │
                         │ │ Búsqueda    │  │ Arrendamiento│  │ Desencriptación │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Capa Almacenamiento                     │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Configuración│  │ Esquema     │  │ Sistema         │   │
                         │ │ Nodo IPFS   │  │ Metadatos   │  │ Indexación      │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
