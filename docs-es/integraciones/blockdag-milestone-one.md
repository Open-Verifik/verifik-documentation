---
sidebar_position: 3
---

# BlockDAG Hito 1: Fundación

## Resumen

**Duración**: Semanas 1-4

**Fecha límite**: 30 de septiembre de 2025  

**Fase**: Fundación  

**Enfoque**: Infraestructura central y configuración básica de integración

Este hito establece la base técnica fundamental para la integración BlockDAG x Zelf, enfocándose en la integración central de encriptación, desarrollo de API, y adaptación de ZK Face Proof.

---

## Entregables

### 1. Integración de Billetera BlockDAG

**Objetivo**: Generar direcciones nativas de BlockDAG y establecer compatibilidad de billeteras

**Tareas**:
- [x] Investigar formato de direcciones BlockDAG y métodos de generación
- [x] Implementar generación de billeteras compatibles con BlockDAG en SDK Zelf
- [x] Crear funciones de validación de direcciones BlockDAG
- [x] Probar generación de billeteras en diferentes configuraciones de red BlockDAG
- [ ] Documentar endpoints de API para generación de billeteras

**Criterios de Aceptación**:
- Generar exitosamente direcciones válidas de BlockDAG
- Validación de formato de direcciones funcionando correctamente
- Integración con testnet de BlockDAG funcional
- Documentación completa para generación de billeteras

**Esfuerzo Estimado**: 2 semanas

---

### 2. Desarrollo de API Central

**Objetivo**: Construir endpoints esenciales de API para operaciones del servicio de nombres con soporte multi-dominio (.blockdag | .bdag)

**Tareas**:
- [ ] Diseñar arquitectura de API para servicio de nombres BlockDAG
- [ ] Implementar endpoint Lease
- [ ] Implementar endpoint Lease Offline
- [ ] Implementar endpoint Search por TAG específico .blockdag
- [ ] Implementar endpoint Search todas las registraciones de tag .blockdag
- [ ] Implementar endpoint Decryption
- [ ] Implementar endpoint Preview ZelfProof
- [ ] Implementar endpoint Preview tag .blockdag
- [ ] Implementar compra de dominios tag con crypto > primero con Coinbase commerce
- [ ] Crear documentación de API y ejemplos con Docusaurus open source (archivos markdown)

**Endpoints de API**:

```javascript
// Buscar nombres disponibles
POST /blockdag-name-service/search
{
  "name": "john.blockdag",
  "duration": "1" // años
}

// Registrar nombre con recuperación biométrica
POST /blockdag-name-service/lease-offline
{
  "name": "john.blockdag",
  "zelfProof": "prueba_biometrica_encriptada",
  "blockdagAddress": "bdag1234...5678"
}

// Recuperar billetera usando biometría
POST /blockdag-name-service/decrypt
{
  "name": "john.blockdag", 
  "faceBase64": "imagen_cara_usuario",
  "password": "contraseña_opcional"
}
```

**Criterios de Aceptación**:
- Todos los endpoints centrales funcionales
- Manejo adecuado de errores y validación
- Límites de velocidad implementados
- Documentación de API completa
- Pruebas unitarias pasando

**Esfuerzo Estimado**: 2 semanas

---

### 3. Adaptación ZK Face Proof

**Objetivo**: Optimizar tecnología ZK Face Proof para ecosistema BlockDAG

**Tareas**:
- [ ] Analizar requisitos específicos de BlockDAG para pruebas ZK
- [ ] Adaptar algoritmos existentes de ZK Face Proof para BlockDAG
- [ ] Optimizar generación de pruebas para compatibilidad con transacciones BlockDAG
- [ ] Probar verificación de pruebas con direcciones BlockDAG
- [ ] Evaluar mejoras de rendimiento
- [ ] Actualizar documentación de pruebas ZK

**Requisitos Técnicos**:
- Optimización de tamaño de pruebas para transacciones BlockDAG
- Compatibilidad con estándares criptográficos de BlockDAG
- Evaluaciones de rendimiento vs implementación actual
- Auditoría de seguridad de algoritmos adaptados

**Criterios de Aceptación**:
- ZK Face Proofs generan correctamente para direcciones BlockDAG
- Tiempo de verificación de pruebas &lt;200ms
- Tamaño de pruebas optimizado para transacciones BlockDAG
- Auditoría de seguridad completada
- Evaluaciones de rendimiento documentadas

**Esfuerzo Estimado**: 1 semana

---

### 4. Configuración de Almacenamiento IPFS

**Objetivo**: Configurar almacenamiento distribuido para metadatos de nombres BlockDAG

**Tareas**:
- [ ] Configurar nodo IPFS para integración BlockDAG
- [ ] Diseñar esquema de metadatos para nombres BlockDAG
- [ ] Implementar cliente de almacenamiento IPFS para ZelfProofs
- [ ] Crear sistema de indexación de metadatos
- [ ] Probar rendimiento de almacenamiento y recuperación
- [ ] Implementar sistemas de respaldo y redundancia

**Esquema de Metadatos**:

```json
{
  "name": "john.blockdag",
  "blockdagAddress": "bdag1234...5678",
  "zelfProofHash": "hash_ipfs_de_prueba_encriptada",
  "registrationDate": "2024-01-15T10:30:00Z",
  "expirationDate": "2025-01-15T10:30:00Z",
  "metadata": {
    "version": "1.0",
    "encryptionType": "zk_face_proof",
    "storageProviders": ["ipfs", "arweave"]
  }
}
```

**Criterios de Aceptación**:
- Nodo IPFS operacional y accesible
- Esquema de metadatos finalizado y documentado
- Almacenamiento y recuperación funcionando correctamente
- Sistema de indexación funcional
- Sistemas de respaldo probados y operacionales

**Esfuerzo Estimado**: 1 semana

---

## Arquitectura Técnica

### Componentes del Sistema

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                            ARQUITECTURA HITO 1                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────────────────────────────────┐
│   SDK Zelf       │     │                 Integración BlockDAG                     │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ Gen Billetera│ │────▶│ │ Generación  │  │ Formato     │  │ Funciones       │   │
│ │ (BlockDAG)   │ │     │ │ Direcciones │  │ Direcciones │  │ Validación      │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
│                  │     │                                                          │
│ ┌──────────────┐ │     │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
│ │ ZK Face      │ │────▶│ │ Adaptación  │  │ Compatibilidad│ │ Motor           │   │
│ │ Proof Gen    │ │     │ │ Pruebas     │  │ BlockDAG    │  │ Optimización    │   │
│ └──────────────┘ │     │ └─────────────┘  └─────────────┘  └─────────────────┘   │
└──────────────────┘     └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                    Capa API                             │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Endpoint    │  │ Endpoint    │  │ Endpoint        │   │
                         │ │ Búsqueda    │  │ Arrendamiento│  │ Desencriptación │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────────────────────────────────────────┐
                         │                 Capa Almacenamiento                     │
                         │                                                          │
                         │ ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐   │
                         │ │ Configuración│  │ Esquema     │  │ Sistema         │   │
                         │ │ Nodo IPFS   │  │ Metadatos   │  │ Indexación      │   │
                         │ └─────────────┘  └─────────────┘  └─────────────────┘   │
                         └──────────────────────────────────────────────────────────┘
```

---

## Métricas de Éxito

### Métricas Técnicas

- **Generación de Billeteras**: Generar exitosamente 1000+ direcciones BlockDAG
- **Tiempo de Respuesta API**: &lt;200ms tiempo promedio de respuesta para todos los endpoints
- **Rendimiento Pruebas ZK**: Generación de pruebas &lt;5 segundos, verificación &lt;200ms
- **Confiabilidad Almacenamiento**: 99.9% tiempo de actividad para operaciones de almacenamiento IPFS

### Métricas de Desarrollo

- **Cobertura de Código**: &gt;90% cobertura de pruebas para todos los componentes nuevos
- **Documentación**: 100% endpoints de API documentados con ejemplos
- **Seguridad**: Pasar auditoría de seguridad para generación de billeteras y pruebas ZK
- **Rendimiento**: Cumplir todos los objetivos de evaluación

---

## Mitigación de Riesgos

Nada aún en este Hito

### Riesgos Técnicos

Nada aún en este Hito

### Riesgos de Cronograma

---

## Resumen de Entregables

| Entregable | Duración | Esfuerzo | Prioridad |
|------------|----------|----------|-----------|
| Integración Billetera BlockDAG | 2 semanas | Alto | Crítico |
| Desarrollo API Central | 2 semanas | Alto | Crítico |
| Adaptación ZK Face Proof | 1 semana | Medio | Alto |
| Configuración Almacenamiento IPFS | 1 semana | Medio | Alto |

**Duración Total Estimada**: 4 semanas  
**Esfuerzo Total del Equipo**: 3 personas

---

## Próximos Pasos

Al completar el Hito 1, la fundación estará establecida para:

- **Hito 2**: Implementación del servicio de nombres con resolución de dominios
- **Hito 3**: Características avanzadas incluyendo autenticación 2FA y marco DID
- **Hito 4**: Despliegue de producción con herramientas comunitarias y analíticas

La fase de fundación asegura que todos los componentes técnicos centrales funcionen correctamente antes de construir características avanzadas sobre esta infraestructura.
