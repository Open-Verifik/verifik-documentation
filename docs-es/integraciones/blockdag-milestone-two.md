---
sidebar_position: 4
---

# BlockDAG Hito 2: Servicio de Nombres

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

### 2. Flujos de Trabajo de Registro

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

### 3. Integración de Pagos

**Objetivo**: Integrar pagos de tokens BDAG y soporte detallado de la cadena

**Tareas**:
- [ ] Investigar mecanismos de pago de BlockDAG
- [ ] Implementar procesamiento de pagos de tokens BDAG
- [ ] Crear sistema de precios dinámicos basado en longitud y popularidad del nombre
- [ ] Construir sistema de confirmación y recibo de pagos
- [ ] Implementar mecanismos de reembolso para registros fallidos
- [ ] Crear analíticas y reportes de pagos

**Estructura de Precios**:

```javascript
// Precios dinámicos basados en características del nombre
const calcularPrecio = (name, duration) => {
  const precioBase = 12; // $12 precio base
  const multiplicadorLongitud = Math.max(1, (10 - name.length) * 0.5);
  const multiplicadorDuracion = duration; // 1 año = 1x, 2 años = 2x
  const multiplicadorPopularidad = obtenerMultiplicadorPopularidad(name);
  
  return precioBase * multiplicadorLongitud * multiplicadorDuracion * multiplicadorPopularidad;
};

// Ejemplo de precios
"john.blockdag" (4 chars, popular) = $48/año
"alice.blockdag" (5 chars, medio) = $36/año
"verylongname.blockdag" (12 chars, raro) = $12/año
```

**Características de Pago**:
- Procesamiento de pagos de tokens BDAG
- Descuentos de registro multi-año
- Sistema de subasta de nombres premium
- Emails de confirmación de pago
- Seguimiento de historial de transacciones

**Criterios de Aceptación**:
- Pagos BDAG procesándose correctamente
- Sistema de precios dinámicos funcional
- Sistema de confirmación de pagos funcionando
- Mecanismos de reembolso probados y operacionales
- Dashboard de analíticas de pagos completo

**Esfuerzo Estimado**: 1.5 semanas

---

### 4. UI de Aplicación Demo

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

## Métricas de Éxito

### Métricas Técnicas

- **Resolución de Nombres**: &lt;100ms tiempo promedio de resolución
- **Éxito de Registro**: &gt;95% tasa de registro exitoso
- **Procesamiento de Pagos**: &lt;30 segundos confirmación de pago
- **Rendimiento UI**: &lt;2 segundos tiempo de carga de página

### Métricas de Negocio

- **Registro de Usuarios**: 100+ registros exitosos de nombres en pruebas
- **Éxito de Pagos**: &gt;98% tasa de éxito de procesamiento de pagos
- **Satisfacción de Usuarios**: &gt;4.5/5 calificación en pruebas de usuario
- **Tiempo de Actividad del Sistema**: 99.9% disponibilidad durante período de pruebas

---

## Mitigación de Riesgos

### Riesgos Técnicos

**Riesgo**: Problemas de rendimiento de resolución de nombres  
**Mitigación**: Implementar sistema de caché y optimizar consultas de base de datos

**Riesgo**: Fallas de procesamiento de pagos  
**Mitigación**: Múltiples proveedores de pago y manejo integral de errores

**Riesgo**: Complejidad de UI/UX  
**Mitigación**: Proceso de diseño iterativo con integración de retroalimentación de usuarios

### Riesgos de Negocio

**Riesgo**: Desafíos de adopción de usuarios  
**Mitigación**: Aplicación demo integral y materiales educativos de usuarios

**Riesgo**: Complejidad de integración de pagos  
**Mitigación**: Pruebas de integración tempranas y métodos de pago de respaldo

---

## Resumen de Entregables

| Entregable | Duración | Esfuerzo | Prioridad |
|------------|----------|----------|-----------|
| Sistema Resolución Nombres | 2 semanas | Alto | Crítico |
| Flujos Trabajo Registro | 2.5 semanas | Alto | Crítico |
| Integración Pagos | 1.5 semanas | Medio | Alto |
| UI Aplicación Demo | 2 semanas | Medio | Alto |

**Duración Total Estimada**: 4 semanas  
**Esfuerzo Total del Equipo**: 8 semanas-persona

---

## Próximos Pasos

Al completar el Hito 2, el servicio de nombres estará completamente funcional, habilitando:

- **Hito 3**: Características avanzadas incluyendo autenticación 2FA y marco DID
- **Hito 4**: Despliegue de producción con herramientas comunitarias y analíticas

La fase del servicio de nombres establece la funcionalidad central orientada al usuario que impulsará la adopción y generación de ingresos para el ecosistema BlockDAG.
