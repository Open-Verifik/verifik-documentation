---
id: "en-docs-functions-create-zelfproof-best-practices-3"
title: "Create a ZelfProof — Best Practices"
sourcePath: "docs/functions/create-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
sourceAnchor: "Best Practices"
---

# Create a ZelfProof

Learn how to create ZelfProofs for your applications.

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
