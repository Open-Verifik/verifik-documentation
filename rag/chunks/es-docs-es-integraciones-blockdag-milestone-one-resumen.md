---
id: "es-docs-es-integraciones-blockdag-milestone-one-resumen"
title: "BlockDAG Hito 1: Fundación — Resumen"
sourcePath: "docs-es/integraciones/blockdag-milestone-one.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Resumen"
---

# BlockDAG Hito 1: Fundación

## Resumen

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
