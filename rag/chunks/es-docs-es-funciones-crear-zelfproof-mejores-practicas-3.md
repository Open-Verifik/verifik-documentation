---
id: "es-docs-es-funciones-crear-zelfproof-mejores-practicas-3"
title: "Crear un ZelfProof — Mejores Prácticas"
sourcePath: "docs-es/funciones/crear-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Mejores Prácticas"
---

# Crear un ZelfProof

Aprende cómo crear ZelfProofs para tus aplicaciones.

## Mejores Prácticas

### 1. Experiencia de Usuario
- Proporciona instrucciones claras a los usuarios
- Muestra indicadores de progreso durante el procesamiento
- Maneja errores con gracia con mensajes útiles
- Prueba en varias condiciones de iluminación

### 2. Seguridad
- Siempre habilita la detección de vida para producción
- Usa umbrales de calidad apropiados
- Almacena pruebas de forma segura
- Implementa manejo de errores adecuado

### 3. Rendimiento
- Optimiza la configuración de la cámara para tu caso de uso
- Considera capacidades offline
- Implementa estados de carga apropiados
- Cachea pruebas cuando sea apropiado

## Pruebas

### Entorno Sandbox

```javascript
const zelf = new ZelfSDK({
  apiKey: 'sandbox-api-key',
  environment: 'sandbox'
});

// Probar con datos simulados
const testResult = await zelf.createProof({
  userId: 'test-user',
  testMode: true
});
```

### Aseguramiento de Calidad

```javascript
// Probar diferentes escenarios
const testScenarios = [
  { lighting: 'low', quality: 'poor' },
  { lighting: 'normal', quality: 'good' },
  { lighting: 'bright', quality: 'excellent' }
];

for (const scenario of testScenarios) {
  const result = await zelf.createProof({
    userId: `test-${scenario.lighting}`,
    options: {
      quality: scenario.quality
    }
  });
  
  console.log(`Prueba ${scenario.lighting}:`, result.success);
}
```
