---
id: "es-docs-es-integraciones-blockdag-arquitectura-online-6"
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

#### Diagrama de Flujo del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                ARQUITECTURA ONLINE                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   Dispositivo    │     │                 Backend Zelf (Docker)                   │
│   del Usuario    │     │                                                          │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │   Cámara     │ │────▶│ │   API       │  │ Encriptación│  │   Controlador   │   │
│ │   Captura    │ │     │ │  Gateway    │  │   Motor     │  │   Almacenamiento│   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │        │               │                    │           │
│ ┌──────────────┐ │     │        ▼               ▼                    ▼           │
│ │  Respuesta   │ │◄────│ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │  ZelfProof   │ │     │ │ Validación  │  │ Generador   │  │ Integración     │   │
│ │  Encriptada  │ │     │ │ Middleware  │  │ Prueba ZK   │  │ IPFS/Arweave   │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                            │
                                            ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │               Almacenamiento Externo                     │
                         │                                                          │
                         │ ┌─────────────┐        ┌─────────────────────────────┐   │
                         │ │    IPFS     │        │         Arweave             │   │
                         │ │  Red        │◄──────▶│        Red                  │   │
                         │ └─────────────┘        └─────────────────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

#### Detalles de Componentes

**1. Capa de Dispositivo del Usuario**

* **Captura de Cámara**: Detección facial y procesamiento de imagen
* **Validación Local**: Verificaciones básicas de calidad de imagen
* **Manejo de Respuesta**: Recibe ZelfProof del backend

**2. Backend Zelf (Contenedor Docker)**

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            CONTENEDOR DOCKER                                        │
│                                                                                     │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐  │
│  │   API Gateway   │    │  Servicios      │    │     Capa de Almacenamiento     │  │
│  │                 │    │  Centrales      │    │                                 │  │
│  │ • Límite de     │    │ • Procesamiento │    │ • Cliente IPFS                  │  │
│  │   Velocidad     │    │   Facial        │    │ • Cliente Arweave               │  │
│  │ • Control de    │    │ • Gen Prueba ZK │    │ • Índice de Metadatos           │  │
│  │   Autenticación │    │ • Encriptación  │    │ • Sistemas de Respaldo          │  │
│  │ • Validación    │    │ • Servicio de   │    │                                 │  │
│  │   de Entrada    │    │   Nombres       │    │                                 │  │
│  │ • Formato de    │    │ • Gen Billetera │    │                                 │  │
│  │   Respuesta     │    │                 │    │                                 │  │
│  └─────────────────┘    └─────────────────┘    └─────────────────────────────────┘  │
│           │                       │                          │                      │
│           └───────────────────────┼──────────────────────────┘                      │
│                                   │                                                 │
│  ┌─────────────────────────────────┼─────────────────────────────────────────────┐  │
│  │                     Cola de Mensajes / Bus de Eventos                        │  │
│  └─────────────────────────────────────────────────────────────────────────────--┘  │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**3. Almacenamiento Externo**
