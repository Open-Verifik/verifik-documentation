---
id: "en-docs-functions-create-zelfproof-advanced-configuration-2"
title: "Create a ZelfProof — Advanced Configuration"
sourcePath: "docs/functions/create-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
sourceAnchor: "Advanced Configuration"
---

# Create a ZelfProof

Learn how to create ZelfProofs for your applications.

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
