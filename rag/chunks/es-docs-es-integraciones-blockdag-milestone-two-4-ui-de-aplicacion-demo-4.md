---
id: "es-docs-es-integraciones-blockdag-milestone-two-4-ui-de-aplicacion-demo-4"
title: "BlockDAG Hito 2: Servicio de Nombres — 4. UI de Aplicación Demo"
sourcePath: "docs-es/integraciones/blockdag-milestone-two.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "4. UI de Aplicación Demo"
---

# BlockDAG Hito 2: Servicio de Nombres

## 4. UI de Aplicación Demo

**Objetivo**: Crear aplicación demo fácil de usar que muestre todas las características

**Tareas**:
- [ ] Diseñar UI de aplicación web responsiva
- [ ] Implementar interfaz de búsqueda y registro de nombres
- [ ] Crear UI de captura y procesamiento biométrico
- [ ] Construir dashboard de gestión de nombres
- [ ] Implementar interfaz de procesamiento de pagos
- [ ] Agregar actualizaciones de estado en tiempo real y notificaciones

**Componentes de UI**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            UI DE APLICACIÓN DEMO                                    │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Header: Logo | Barra Búsqueda | Selector Idioma | Menú Usuario                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│ ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────────────────┐  │
│ │   Búsqueda      │    │   Registro      │    │     Dashboard Mis Nombres        │  │
│ │   Nombres       │    │                 │    │                                 │  │
│ │                 │    │                 │    │                                 │  │
│ │ • Entrada       │    │ • Entrada nombre│    │ • Lista nombres activos        │  │
│ │   búsqueda      │    │ • Captura facial│    │ • Fechas expiración             │  │
│ │ • Sugerencias   │    │ • Formulario    │    │ • Opciones renovación          │  │
│ │ • Disponibilidad│    │   pago          │    │ • Opciones transferencia        │  │
│ │ • Info precios  │    │ • Confirmación  │    │                                 │  │
│ └─────────────────┘    └─────────────────┘    └─────────────────────────────────┘  │
│                                                                                     │
│ ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│ │                           Progreso de Registro                                │ │
│ │                                                                                 │ │
│ │ [Paso 1: Nombre] → [Paso 2: Biométrico] → [Paso 3: Pago] → [Paso 4: Completar] │ │
│ └─────────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Características**:
- Diseño responsivo para móvil y escritorio
- Verificación de disponibilidad de nombres en tiempo real
- Captura biométrica con detección de vida
- Procesamiento de pagos con tokens BDAG
- Dashboard de gestión de nombres
- Seguimiento de progreso de registro

**Criterios de Aceptación**:
- UI funciona en todos los navegadores principales y dispositivos
- Captura biométrica funcional con detección de vida
- Procesamiento de pagos integrado y funcionando
- Dashboard de gestión de nombres completo
- Pruebas de experiencia de usuario completadas con retroalimentación positiva

**Esfuerzo Estimado**: 2 semanas

---
