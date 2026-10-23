---
id: "es-docs-es-integraciones-blockdag-mitigacion-de-riesgos-8"
title: "BlockDAG — Mitigación de Riesgos"
sourcePath: "docs-es/integraciones/blockdag.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Mitigación de Riesgos"
---

# BlockDAG

## Mitigación de Riesgos

#### Riesgos Técnicos

* **Spoofing biométrico**: Detección de vida avanzada previene ataques con fotos
* **Integridad de pruebas ZK**: Implementaciones criptográficas auditadas
* **Disponibilidad de almacenamiento**: Redundancia multi-proveedor (IPFS + Arweave + Walrus + NFT)
* **Gestión de claves**: Integración de módulo de seguridad de hardware

#### Riesgos de Negocio

* **Cumplimiento regulatorio**: Arquitectura de privacidad por diseño
* **Adopción del mercado**: Pruebas extensivas de usuarios y bucles de retroalimentación
* **Competencia**: Ventaja del primer movimiento y protección de patentes
* **Obsolescencia tecnológica**: Arquitectura modular permite actualizaciones

#### Riesgos Operacionales

* **Disponibilidad del servicio**: SLA de 99.9% de tiempo de actividad con monitoreo
* **Integridad de datos**: Sumas de verificación criptográficas y verificación
* **Recuperación ante desastres**: Distribución geográfica y respaldos
* **Escalamiento del equipo**: Procesos establecidos de contratación y incorporación

***

### Arquitectura Offline

#### Diagrama de Flujo del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                               ARQUITECTURA OFFLINE                                  │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                    Dispositivo del Usuario (Offline)       │
│                                                            │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│ │   Cámara    │  │ Procesamiento│  │    Generación       │  │
│ │  Captura    │─▶│   Local      │─▶│   Prueba ZK         │  │
│ └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                         │                   │              │
│                         ▼                   ▼              │
│ ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│ │ Validación  │  │ Generación  │  │   ZelfProof         │  │
│ │ Biométrica  │  │ Billetera   │  │   Encriptado        │  │
│ └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                                             │              │
│                                             ▼              │
│                                  ┌─────────────────────┐   │
│                                  │     Generación      │   │
│                                  │    Código QR        │   │
│                                  └─────────────────────┘   │
└────────────────────────────────────────────────────────────┘
                                             │
                                             ▼
┌────────────────────────────────────────────────────────────┐
│              Backend Zelf Limitado                        │
│                                                            │
│ ┌─────────────┐           ┌─────────────────────────────┐  │
│ │   Servicio  │           │   Controlador de             │  │
│ │   de Auth   │──────────▶│   Autorización de            │  │
│ └─────────────┘           │   Almacenamiento             │  │
│       │                              │                     │
│       ▼                              ▼                     │
│ ┌─────────────┐           ┌─────────────────────────────┐  │
│ │ Validación  │           │    Integración              │  │
│ │ Permisos    │           │    IPFS/Arweave             │  │
│ └─────────────┘           └─────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
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
