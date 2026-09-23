---
id: "es-docs-es-funciones-crear-zelfproof-resumen"
title: "Crear un ZelfProof — Resumen"
sourcePath: "docs-es/funciones/crear-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
sourceAnchor: "Resumen"
---

# Crear un ZelfProof

## Resumen

Aprende cómo crear ZelfProofs para tus aplicaciones.

## Resumen

Crear un ZelfProof implica capturar datos faciales, procesarlos a través de nuestros algoritmos que preservan la privacidad, y generar una prueba criptográfica que puede ser usada para autenticación.

## Implementación Básica

### JavaScript/TypeScript

```javascript

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
    
       console.error(error)}
        options={{
          livenessDetection: true,
          qualityThreshold: 0.8
        }}
      />
      {proof && (
        
          ¡ZelfProof Creado!
          ID de Prueba: {proof.id}
        
      )}
    
  );
}
```
