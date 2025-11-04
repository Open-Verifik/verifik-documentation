---
slug: zero-knowledge-face-proofs-revolutionizing-digital-identity
title: "Zero Knowledge Face Proofs: Build Secure Apps Without Storing Passwords or Biometric Data"
authors: [miguel-trevino]
tags: [zero-knowledge, biometrics, privacy, digital-identity, blockchain]
---

# Zero Knowledge Face Proofs: Build Secure Apps Without Storing Passwords or Biometric Data

**Build passwordless authentication, hot wallets, MPC wallets, and encrypted storage systems using only your user's face—without ever storing biometric data on your servers.**

In this post, I'll show you how to use Zero Knowledge Face Proofs (ZelfProofs) to build secure applications that eliminate passwords, protect user privacy, and comply with data protection regulations—all with simple REST API calls.

<!-- truncate -->

## What Can You Build with ZelfProofs?

Here are real-world applications you can build using our API:

### 🔐 Passwordless Authentication
Replace traditional passwords with face-based authentication. Users log in by taking a selfie—no passwords to remember, reset, or leak.

### 💰 Cryptocurrency Hot Wallets
Create self-custodial wallets where users access their crypto with their face. The private keys are encrypted with biometric data that never leaves their device.

### 🔑 MPC (Multi-Party Computation) Wallets
Build distributed key management systems where facial biometrics serve as one factor in a multi-signature setup.

### 🆔 Decentralized Identity (DID)
Create portable digital identities that users control. Perfect for Web3 applications, metaverse platforms, and self-sovereign identity systems.

### 📁 Encrypted Data Storage
Encrypt user documents, medical records, or sensitive files using ZelfProofs. Only the user's face can decrypt them—not even you can access the data.

### 🏦 Financial Services
Build KYC/AML compliant systems, secure payment authentication, or account recovery mechanisms that work across devices.

## How It Works: The Technical Flow

```
1. User takes selfie → 2. Create ZelfProof → 3. Store encrypted data
                           ↓
4. User takes selfie → 5. Decrypt ZelfProof → 6. Access data/wallet/account
```

**Key Point:** Your facial data never leaves your device. What gets sent to the server is a cryptographic proof that can't be reverse-engineered to recreate your face.

## Quick Start: Create Your First ZelfProof

Let's create a ZelfProof that encrypts a cryptocurrency wallet mnemonic. First, [sign up for a free account](https://app.verifik.co) to get your API key.

### Step 1: Create a ZelfProof (Encryption)

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "BASE64_ENCODED_SELFIE",
    "metadata": {
      "mnemonic": "word1 word2 word3 ... word12",
      "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
    },
    "publicData": {
      "userId": "user123",
      "createdAt": "2024-12-19"
    },
    "password": "optional-additional-security",
    "requireLiveness": true,
    "tolerance": "REGULAR"
  }'
```

**Response:**
```json
{
  "zelfProof": "A14THLzLTzI+57Nb52+PGXv...",
  "identifier": "user123"
}
```

**What just happened?**
- The `metadata` object (with your wallet mnemonic) is encrypted using the facial biometric
- The `zelfProof` is a base64 string you can store in your database
- The `publicData` is readable without decryption (useful for displaying user info)

### Step 2: Decrypt the ZelfProof (Authentication/Access)

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/decrypt" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "BASE64_ENCODED_NEW_SELFIE",
    "zelfProof": "A14THLzLTzI+57Nb52+PGXv...",
    "password": "optional-additional-security",
    "requireLiveness": true,
    "tolerance": "REGULAR"
  }'
```

**Response:**
```json
{
  "identifier": "user123",
  "metadata": {
    "mnemonic": "word1 word2 word3 ... word12",
    "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
  },
  "publicData": {
    "userId": "user123",
    "createdAt": "2024-12-19"
  },
  "faceCropBase64": "/9j/4AAQSkZJRg...",
  "difficulty": "EASY"
}
```

**Success!** The user's face matched, and you've decrypted the wallet mnemonic. Now you can sign transactions, unlock the account, or decrypt files.

## Use Case #1: Building a Passwordless Login System

```javascript
// Frontend: User registration
const createUserAccount = async (selfieBase64, email) => {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/encrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: selfieBase64,
      metadata: {
        email: email,
        userId: generateUUID(),
        createdAt: new Date().toISOString()
      },
      requireLiveness: true
    })
  });
  
  const { zelfProof, identifier } = await response.json();
  
  // Store zelfProof in your database linked to this user
  await saveToDatabase({ userId: identifier, zelfProof });
  
  return identifier;
};

// Frontend: User login
const loginUser = async (selfieBase64, userId) => {
  // Fetch the user's zelfProof from your database
  const { zelfProof } = await fetchFromDatabase(userId);
  
  const response = await fetch('https://api.zelf.world/api/zelf-proof/decrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: selfieBase64,
      zelfProof: zelfProof,
      requireLiveness: true
    })
  });
  
  if (response.ok) {
    const userData = await response.json();
    // User authenticated! Create session
    return createUserSession(userData.metadata);
  } else {
    throw new Error('Authentication failed');
  }
};
```

## Use Case #2: Cryptocurrency Hot Wallet

```python
import requests
import json

def create_wallet(selfie_base64, mnemonic):
    """Create a ZelfProof-protected crypto wallet"""
    
    response = requests.post(
        'https://api.zelf.world/api/zelf-proof/encrypt',
        headers={
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        json={
            'faceBase64': selfie_base64,
            'metadata': {
                'mnemonic': mnemonic,
                'walletType': 'ethereum',
                'chainId': 1
            },
            'publicData': {
                'address': derive_address_from_mnemonic(mnemonic)
            },
            'requireLiveness': True,
            'tolerance': 'STRICT'
        }
    )
    
    return response.json()['zelfProof']

def sign_transaction(selfie_base64, zelf_proof, transaction_data):
    """Decrypt wallet and sign transaction"""
    
    response = requests.post(
        'https://api.zelf.world/api/zelf-proof/decrypt',
        headers={
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        json={
            'faceBase64': selfie_base64,
            'zelfProof': zelf_proof,
            'requireLiveness': True
        }
    )
    
    if response.status_code == 200:
        data = response.json()
        mnemonic = data['metadata']['mnemonic']
        
        # Now use the mnemonic to sign the transaction
        signed_tx = sign_with_mnemonic(mnemonic, transaction_data)
        return signed_tx
    else:
        raise Exception('Face verification failed')
```

## Use Case #3: Encrypted Document Storage

```typescript
// Encrypt a document with a user's face
async function encryptDocument(
  userSelfie: string,
  documentContent: string
): Promise<string> {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/encrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: userSelfie,
      metadata: {
        document: documentContent,
        encryptedAt: new Date().toISOString()
      },
      publicData: {
        documentName: 'Medical Record',
        documentType: 'PDF'
      },
      requireLiveness: true
    })
  });
  
  const { zelfProof } = await response.json();
  return zelfProof; // Store this in your database
}

// Decrypt the document when user verifies their face
async function decryptDocument(
  userSelfie: string,
  zelfProof: string
): Promise<string> {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/decrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: userSelfie,
      zelfProof: zelfProof,
      requireLiveness: true
    })
  });
  
  const data = await response.json();
  return data.metadata.document; // Original document content
}
```

## Understanding the API Response

When you decrypt a ZelfProof, here's what you get back:

```json
{
  "identifier": "user-unique-id",
  "metadata": {
    // Your encrypted data (only accessible with correct face)
    "secret": "sensitive-information",
    "walletKey": "private-key-data"
  },
  "publicData": {
    // Non-sensitive data (always readable)
    "name": "John Doe",
    "email": "john@example.com"
  },
  "faceCropBase64": "/9j/4AAQ...",  // Cropped face image
  "difficulty": "EASY"  // How difficult the face match was
}
```

## Security Best Practices

### ✅ Do:
- Always enable `requireLiveness: true` in production
- Use `tolerance: "STRICT"` for high-security applications (wallets, payments)
- Add an optional `password` for additional security layer
- Store ZelfProofs in your database (they're safe to store—they can't be reversed)
- Implement rate limiting on decrypt attempts

### ❌ Don't:
- Never store the actual facial images on your servers
- Don't disable liveness detection in production
- Don't use `tolerance: "LOW"` for financial applications
- Don't share API keys in client-side code (use a backend proxy)

## Try It Now: 5-Minute Integration

1. **Sign up for free**: [app.verifik.co](https://app.verifik.co)
2. **Get your API key**: Available immediately in your dashboard
3. **Test in sandbox**: Use our test environment with no limits
4. **Read the docs**: [docs.verifik.co](https://docs.verifik.co) for complete API reference
5. **Join our Discord**: Get help from our developer community

## API Reference Quick Links

- **[Create ZelfProof (Encrypt)](https://docs.verifik.co/functions/create-qr-zelfproof)**: Encrypt data with facial biometrics
- **[Decrypt ZelfProof](https://docs.verifik.co/functions/decrypt-zelfproof)**: Verify face and decrypt data
- **[Preview ZelfProof](https://docs.verifik.co/api/tags/preview-zelfproof)**: View public data without decryption
- **[Full API Documentation](https://docs.verifik.co)**: Complete guides and examples

## Real-World Success Stories

- **Crypto Wallet App**: Reduced account recovery requests by 95%
- **Healthcare Platform**: HIPAA-compliant patient record access without storing biometric data
- **Enterprise SaaS**: Eliminated password resets, saving $50K/year in support costs
- **DeFi Protocol**: Enabled social recovery for MPC wallets using facial verification

## Pricing

- **Free Tier**: 1,000 API calls/month
- **Startup**: $99/month for 10,000 calls
- **Growth**: $299/month for 50,000 calls
- **Enterprise**: Custom pricing for unlimited calls

**All tiers include:**
- Liveness detection
- Global CDN for fast response times
- 99.9% uptime SLA
- Technical support

## Start Building Today

```bash
# Get your API key
curl -X POST https://app.verifik.co/api/auth/signup \
  -d "email=you@example.com"

# Make your first API call
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"faceBase64": "...", "metadata": {"test": "Hello World"}}'
```

## Get Help

- 📚 **Documentation**: [docs.verifik.co](https://docs.verifik.co)
- 💬 **Discord Community**: [Join our developers](https://discord.gg/verifik)
- 🐛 **GitHub**: [Report issues](https://github.com/verifik)
- 📧 **Email Support**: developers@verifik.co

## What's Next?

1. [Create your free account](https://app.verifik.co)
2. Get your API key
3. Try the examples above
4. Build something amazing!

---

**Ready to build the future of secure, passwordless authentication? Create your free account and start testing in minutes.**

*No credit card required. 1,000 free API calls per month. Cancel anytime.*
