---
id: "es-docs-es-integraciones-blockdag-milestone-four-arquitectura-tecnica-6"
title: "BlockDAG Hito 4: Despliegue de Producción — Arquitectura Técnica"
sourcePath: "docs-es/integraciones/blockdag-milestone-four.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica"
---

# BlockDAG Hito 4: Despliegue de Producción

## Arquitectura Técnica

### Sistema de Producción

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 4                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   Herramientas    │     │                 Plataforma Producción                     │
│   Comunitarias    │     │                                                          │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Dashboard    │ │────▶│ │ Despliegue  │  │ Monitoreo   │  │ Plataforma      │   │
│ │ Analíticas   │ │     │ │ Mainnet     │  │ y Registro  │  │ Documentación   │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Características│ │────▶│ │ Integración │  │ Integración │  │ Extensión       │   │
│ │ Comunitarias │ │     │ │ Ecosistema  │  │ App Móvil   │  │ Navegador       │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Mainnet BlockDAG                        │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Contratos   │  │ Procesamiento│  │ Infraestructura │   │
                         │ │ Inteligentes│  │ Transacciones│  │ Red             │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
