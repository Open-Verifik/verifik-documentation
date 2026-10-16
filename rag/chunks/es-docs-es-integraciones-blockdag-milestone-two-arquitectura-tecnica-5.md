---
id: "es-docs-es-integraciones-blockdag-milestone-two-arquitectura-tecnica-5"
title: "BlockDAG Hito 2: Servicio de Nombres — Arquitectura Técnica"
sourcePath: "docs-es/integraciones/blockdag-milestone-two.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica"
---

# BlockDAG Hito 2: Servicio de Nombres

## Arquitectura Técnica

### Sistema de Servicio de Nombres

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 2                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   UI App Demo    │     │                 Servicio Nombres Central                │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Interfaz     │ │────▶│ │ Motor       │  │ Flujo       │  │ Procesamiento   │   │
│ │ Búsqueda     │ │     │ │ Resolución  │  │ Registro    │  │ Pagos           │   │
│ │ Nombres      │ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│ └──────────────┘ │     │                                                          │
│                  │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ ┌──────────────┐ │     │ │ Verificador │  │ Captura     │  │ Integración     │   │
│ │ Dashboard    │ │────▶│ │ Disponibilidad│ │ Biométrica  │  │ Token BDAG      │   │
│ │ Registro    │ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│ └──────────────┘ │     │                                                          │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Capa Almacenamiento                  │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Registro    │  │ Almacenamiento│  │ Registros       │   │
                         │ │ Nombres     │  │ Metadatos    │  │ Pagos           │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Red BlockDAG                              │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Generación  │  │ Procesamiento│  │ Integración      │   │
                         │ │ Direcciones │  │ Transacciones│  │ Contratos        │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
