---
id: "es-docs-es-integraciones-blockdag-milestone-two-2-flujos-de-trabajo-de-registro-2"
title: "BlockDAG Hito 2: Servicio de Nombres — 2. Flujos de Trabajo de Registro"
sourcePath: "docs-es/integraciones/blockdag-milestone-two.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "2. Flujos de Trabajo de Registro"
---

# BlockDAG Hito 2: Servicio de Nombres

## 2. Flujos de Trabajo de Registro

**Objetivo**: Crear procesos fluidos de registro de nombres online y offline

**Tareas**:
- [ ] Diseñar flujo de trabajo UI/UX de registro
- [ ] Implementar registro online con recuperación biométrica
- [ ] Implementar registro offline con generación de código QR
- [ ] Crear sistema de verificación de disponibilidad de nombres
- [ ] Construir sistema de confirmación y recibo de registro
- [ ] Implementar flujos de trabajo de renovación de nombres

**Flujo de Registro**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            FLUJO DE TRABAJO DE REGISTRO                             │
└─────────────────────────────────────────────────────────────────────────────────────┘

1. VERIFICACIÓN DE DISPONIBILIDAD DE NOMBRE
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Usuario      │───▶│ Verificar        │───▶│ Devolver         │
   │ ingresa      │    │ disponibilidad   │    │ disponible o    │
   │ nombre deseado│    │ del nombre       │    │ sugerir          │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

2. REGISTRO BIOMÉTRICO
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Captura      │───▶│ Generar          │───▶│ Crear billetera │
   │ facial       │    │ ZelfProof        │    │                  │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
                                │
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Almacenar    │◄───│ Generar código  │◄───│ Encriptar        │
   │ prueba       │    │ QR               │    │ metadatos        │
   └──────────────┘    └──────────────────┘    └─────────────────-┘

3. PROCESAMIENTO DE PAGO
   ┌──────────────┐    ┌──────────────────┐    ┌─────────────────-┐
   │ Calcular     │───▶│ Procesar pago   │───▶│ Confirmar pago   │
   │ tarifa de    │    │ BDAG             │    │ y activar        │
   │ registro     │    │                  │    │ nombre            │
   └──────────────┘    └──────────────────┘    └─────────────────-┘
```

**Criterios de Aceptación**:
- Registro online completa en &lt;2 minutos
- Registro offline genera códigos QR válidos
- Verificación de disponibilidad de nombres &lt;500ms tiempo de respuesta
- Tasa de éxito de registro &gt;95%
- Integración de procesamiento de pagos funcional

**Esfuerzo Estimado**: 2.5 semanas

---
