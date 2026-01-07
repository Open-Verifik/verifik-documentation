---
sidebar_position: 2
---

# Create a ZelfProof

Learn how to create ZelfProofs for your applications.

## Overview

Creating a ZelfProof involves capturing facial data, processing it through our privacy-preserving algorithms, and generating a cryptographic proof that can be used for authentication.

## Basic Implementation

### JavaScript/TypeScript

```javascript
import { ZelfSDK } from '@zelf/sdk';

const zelf = new ZelfSDK({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Create a new ZelfProof
const createZelfProof = async () => {
  try {
    const result = await zelf.createProof({
      userId: 'unique-user-id',
      metadata: {
        // Optional metadata
        application: 'my-app',
        purpose: 'authentication'
      },
      options: {
        livenessDetection: true,
        qualityThreshold: 0.8
      }
    });
    
    console.log('ZelfProof created:', result.proofId);
    return result;
  } catch (error) {
    console.error('Error creating ZelfProof:', error);
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
      console.log('ZelfProof created successfully');
    } else {
      console.error('Failed to create ZelfProof:', result.error);
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
          <h3>ZelfProof Created!</h3>
          <p>Proof ID: {proof.id}</p>
        </div>
      )}
    </div>
  );
}
```

## Advanced Configuration

### Custom Options

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

### Metadata Handling

```javascript
const metadata = {
  // User information
  userId: 'user-123',
  email: 'user@example.com',
  
  // Application context
  application: 'my-wallet-app',
  version: '1.0.0',
  
  // Security context
  purpose: 'wallet-access',
  permissions: ['read', 'write'],
  
  // Custom data
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

## Error Handling

### Common Error Scenarios

```javascript
try {
  const result = await zelf.createProof({
    userId: 'user-123'
  });
} catch (error) {
  switch (error.code) {
    case 'CAMERA_ACCESS_DENIED':
      console.log('Camera access is required');
      break;
    case 'LIVENESS_DETECTION_FAILED':
      console.log('Please ensure you are a real person');
      break;
    case 'QUALITY_THRESHOLD_NOT_MET':
      console.log('Please improve lighting and camera position');
      break;
    case 'NETWORK_ERROR':
      console.log('Network connection failed');
      break;
    case 'INVALID_USER_ID':
      console.log('User ID is required and must be unique');
      break;
    default:
      console.log('Unexpected error:', error.message);
  }
}
```

## Best Practices

### 1. User Experience
- Provide clear instructions to users
- Show progress indicators during processing
- Handle errors gracefully with helpful messages
- Test in various lighting conditions

### 2. Security
- Always enable liveness detection for production
- Use appropriate quality thresholds
- Store proofs securely
- Implement proper error handling

### 3. Performance
- Optimize camera settings for your use case
- Consider offline capabilities
- Implement proper loading states
- Cache proofs when appropriate

## Testing

### Sandbox Environment

```javascript
const zelf = new ZelfSDK({
  apiKey: 'sandbox-api-key',
  environment: 'sandbox'
});

// Test with mock data
const testResult = await zelf.createProof({
  userId: 'test-user',
  testMode: true
});
```

### Quality Assurance

```javascript
// Test different scenarios
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
  
  console.log(`Test ${scenario.lighting}:`, result.success);
}
```
