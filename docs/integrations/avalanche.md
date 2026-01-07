---
sidebar_position: 1
---

# Avalanche Integration

Learn how to integrate Zelf with the Avalanche blockchain network.

## Overview

Zelf provides seamless integration with Avalanche, enabling secure identity verification and authentication on the Avalanche ecosystem.

## Getting Started

### Prerequisites
- Avalanche wallet (MetaMask, Core, etc.)
- Zelf SDK installed
- Avalanche network access

### Installation

```bash
npm install @zelf/avalanche-sdk
```

## Basic Integration

### JavaScript/TypeScript

```javascript
import { ZelfAvalanche } from '@zelf/avalanche-sdk';

const zelfAvalanche = new ZelfAvalanche({
  network: 'mainnet', // or 'testnet'
  rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
});

// Create ZelfProof for Avalanche
const createAvalancheProof = async () => {
  try {
    const result = await zelfAvalanche.createProof({
      walletAddress: '0x...',
      network: 'avalanche',
      purpose: 'identity-verification'
    });
    
    console.log('Avalanche ZelfProof created:', result);
    return result;
  } catch (error) {
    console.error('Error creating Avalanche proof:', error);
  }
};
```

## Smart Contract Integration

### Deploy Zelf Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@zelf/contracts/ZelfProof.sol";

contract ZelfAvalancheIntegration {
    ZelfProof public zelfProof;
    
    constructor(address _zelfProof) {
        zelfProof = ZelfProof(_zelfProof);
    }
    
    function verifyIdentity(bytes32 proofId) public view returns (bool) {
        return zelfProof.isValid(proofId);
    }
    
    function registerIdentity(bytes32 proofId) public {
        require(zelfProof.isValid(proofId), "Invalid ZelfProof");
        // Register identity logic
    }
}
```

## Best Practices

### Performance
- Use batch operations when possible
- Implement proper gas estimation
- Consider gas price fluctuations
- Use appropriate gas limits

### Security
- Validate all inputs
- Implement proper access controls
- Use secure random number generation
- Regular security audits
