---
id: "en-docs-functions-create-zelfproof-overview"
title: "Create a ZelfProof — Overview"
sourcePath: "docs/functions/create-zelfproof.md"
locale: "en"
category: "functions"
tags:
  - "functions"
sourceAnchor: "Overview"
---

# Create a ZelfProof

## Overview

Learn how to create ZelfProofs for your applications.

## Overview

Creating a ZelfProof involves capturing facial data, processing it through our privacy-preserving algorithms, and generating a cryptographic proof that can be used for authentication.

## Basic Implementation

### JavaScript/TypeScript

```javascript

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
    
       console.error(error)}
        options={{
          livenessDetection: true,
          qualityThreshold: 0.8
        }}
      />
      {proof && (
        
          ZelfProof Created!
          Proof ID: {proof.id}
        
      )}
    
  );
}
```
