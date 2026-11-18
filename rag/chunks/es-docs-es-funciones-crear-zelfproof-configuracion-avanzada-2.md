---
id: "es-docs-es-funciones-crear-zelfproof-configuracion-avanzada-2"
title: "Crear un ZelfProof — Configuración Avanzada"
sourcePath: "docs-es/funciones/crear-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Configuración Avanzada"
---

# Crear un ZelfProof

Aprende cómo crear ZelfProofs para tus aplicaciones.

## Configuración Avanzada

### Opciones Personalizadas

```javascript
const advancedOptions = {
  livenessDetection: {
    enabled: true,
    threshold: 0.8,
    timeout: 30000
  },
  quality: {
    minResolution: { width: 640, height: 480 },
    maxBlur: 0.3,
    minBrightness: 0.4
  },
  security: {
    encryptionLevel: 'high',
    keyDerivation: 'pbkdf2',
    iterations: 100000
  }
};

const result = await zelf.createProof({
  userId: 'user-123',
  options: advancedOptions
});
```

### Manejo de Metadatos

```javascript
const metadata = {
  // Información del usuario
  userId: 'user-123',
  email: 'user@example.com',
  
  // Contexto de la aplicación
  application: 'my-wallet-app',
  version: '1.0.0',
  
  // Contexto de seguridad
  purpose: 'wallet-access',
  permissions: ['read', 'write'],
  
  // Datos personalizados
  custom: {
    department: 'engineering',
    role: 'developer'
  }
};

const result = await zelf.createProof({
  userId: 'user-123',
  metadata: metadata
});
```

## Manejo de Errores

### Escenarios de Error Comunes

```javascript
try {
  const result = await zelf.createProof({
    userId: 'user-123'
  });
} catch (error) {
  switch (error.code) {
    case 'CAMERA_ACCESS_DENIED':
      console.log('Se requiere acceso a la cámara');
      break;
    case 'LIVENESS_DETECTION_FAILED':
      console.log('Por favor asegúrate de ser una persona real');
      break;
    case 'QUALITY_THRESHOLD_NOT_MET':
      console.log('Por favor mejora la iluminación y posición de la cámara');
      break;
    case 'NETWORK_ERROR':
      console.log('La conexión de red falló');
      break;
    case 'INVALID_USER_ID':
      console.log('El ID de usuario es requerido y debe ser único');
      break;
    default:
      console.log('Error inesperado:', error.message);
  }
}
```
