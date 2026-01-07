---
sidebar_position: 2
---

# Crear un ZelfProof

Aprende cómo crear ZelfProofs para tus aplicaciones.

## Resumen

Crear un ZelfProof implica capturar datos faciales, procesarlos a través de nuestros algoritmos que preservan la privacidad, y generar una prueba criptográfica que puede ser usada para autenticación.

## Implementación Básica

### JavaScript/TypeScript

```javascript
import { ZelfSDK } from '@zelf/sdk';

const zelf = new ZelfSDK({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Crear un nuevo ZelfProof
const createZelfProof = async () => {
  try {
    const result = await zelf.createProof({
      userId: 'unique-user-id',
      metadata: {
        // Metadatos opcionales
        application: 'my-app',
        purpose: 'authentication'
      },
      options: {
        livenessDetection: true,
        qualityThreshold: 0.8
      }
    });
    
    console.log('ZelfProof creado:', result.proofId);
    return result;
  } catch (error) {
    console.error('Error creando ZelfProof:', error);
  }
};
```

### React Component

```jsx
import React, { useState } from 'react';
import { ZelfProofCreator } from '@zelf/react-sdk';

function CreateProofComponent() {
  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateProof = async (result) => {
    if (result.success) {
      setProof(result.proof);
      console.log('ZelfProof creado exitosamente');
    } else {
      console.error('Error al crear ZelfProof:', result.error);
    }
  };

  return (
    <div>
      <ZelfProofCreator
        onComplete={handleCreateProof}
        onError={(error) => console.error(error)}
        options={{
          livenessDetection: true,
          qualityThreshold: 0.8
        }}
      />
      {proof && (
        <div>
          <h3>¡ZelfProof Creado!</h3>
          <p>ID de Prueba: {proof.id}</p>
        </div>
      )}
    </div>
  );
}
```

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
