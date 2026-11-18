---
id: "es-docs-es-integraciones-blockdag-arquitectura-tecnica-zelf-sistemas-online-vs-offline-5"
title: "BlockDAG — Arquitectura Técnica Zelf: Sistemas Online vs Offline"
sourcePath: "docs-es/integraciones/blockdag.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Arquitectura Técnica Zelf: Sistemas Online vs Offline"
---

# BlockDAG

## Arquitectura Técnica Zelf: Sistemas Online vs Offline

### Resumen

El sistema de recuperación biométrica de Zelf opera en dos modos arquitectónicos distintos, cada uno optimizado para diferentes casos de uso y requisitos de seguridad:

1. **Arquitectura Online** - Integración completa de backend con todas las operaciones procesadas a través de servidores Zelf o servidores internos. Los datos biométricos van a la instancia del nodo encriptados con PGP.
2. **Arquitectura Offline** - Procesamiento biométrico local con interacción mínima de backend para autorización de almacenamiento. Los datos biométricos nunca salen del dispositivo.

Ambas arquitecturas mantienen el principio central: **los datos biométricos nunca se almacenan**.

***
