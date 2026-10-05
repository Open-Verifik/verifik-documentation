---
id: "es-docs-es-integraciones-blockdag-milestone-two-resumen"
title: "BlockDAG Hito 2: Servicio de Nombres — Resumen"
sourcePath: "docs-es/integraciones/blockdag-milestone-two.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Resumen"
---

# BlockDAG Hito 2: Servicio de Nombres

## Resumen

## Resumen

**Duración**: Semanas 5-8  
**Fase**: Implementación del Servicio de Nombres  
**Enfoque**: Sistema de resolución de dominios y flujos de trabajo de registro

Este hito construye sobre la fundación establecida en el Hito 1 para crear un sistema completo de servicio de nombres para BlockDAG, incluyendo resolución de dominios, flujos de trabajo de registro, e integración de pagos.

---

## Entregables

### 1. Sistema de Resolución de Nombres

**Objetivo**: Implementar soporte de dominio `*.blockdag` con capacidades completas de resolución

**Tareas**:
- [ ] Diseñar arquitectura de resolución de dominios
- [ ] Implementar resolución tipo DNS para nombres BlockDAG
- [ ] Crear reglas de validación y formato de nombres
- [ ] Construir sistema de caché de resolución
- [ ] Implementar soporte de subdominios
- [ ] Crear endpoints de API de resolución

**Endpoints de API**:

```javascript
// Resolver nombre a dirección BlockDAG
GET /blockdag-name-service/resolve/{name}
Respuesta: {
  "name": "john.blockdag",
  "address": "bdag1234...5678",
  "expires": "2025-01-15T10:30:00Z",
  "status": "active"
}

// Resolución por lotes de múltiples nombres
POST /blockdag-name-service/resolve/batch
{
  "names": ["john.blockdag", "alice.blockdag", "bob.blockdag"]
}

// Obtener historial y metadatos del nombre
GET /blockdag-name-service/metadata/{name}
```

**Reglas de Dominio**:
- Los nombres deben tener entre 3-63 caracteres
- Solo caracteres alfanuméricos y guiones permitidos
- No puede comenzar o terminar con guión
- Lista de nombres reservados (admin, www, api, etc.)

**Criterios de Aceptación**:
- Resolución de dominios funcionando para todos los nombres válidos
- Resolución de subdominios funcional
- Sistema de caché mejora rendimiento en 80%
- Resolución por lotes soporta hasta 100 nombres
- Tiempo de resolución &lt;100ms promedio

**Esfuerzo Estimado**: 2 semanas

---
