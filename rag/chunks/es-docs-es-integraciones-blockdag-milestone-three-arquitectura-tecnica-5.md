---
id: "es-docs-es-integraciones-blockdag-milestone-three-arquitectura-tecnica-5"
title: "BlockDAG Hito 3: Características Avanzadas — Arquitectura Técnica"
sourcePath: "docs-es/integraciones/blockdag-milestone-three.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica"
---

# BlockDAG Hito 3: Características Avanzadas

## Arquitectura Técnica

### Sistema de Características Avanzadas

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 3                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   SDKs           │     │                 Características Avanzadas               │
│   Desarrollador  │     │                                                          │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ JavaScript   │ │────▶│ │ Autenticación│  │ Marco       │  │ Auditorías      │   │
│ │ SDK          │ │     │ │ 2FA         │  │ DID         │  │ Seguridad       │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ React Native │ │────▶│ │ Verificación│  │ Gestión     │  │ Pruebas         │   │
│ │ SDK          │ │     │ │ Biométrica  │  │ Identidad   │  │ Penetración     │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Infraestructura Central              │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Servicio    │  │ Procesamiento│  │ Capa            │   │
                         │ │ Nombres     │  │ Pagos       │  │ Almacenamiento  │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---
