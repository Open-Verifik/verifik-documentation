---
slug: pruebas-faciales-de-conocimiento-cero-revolucionando-la-identidad-digital
title: "Pruebas Faciales de Conocimiento Cero: Construye Apps Seguras Sin Almacenar Contraseñas ni Datos Biométricos"
authors: [miguel-trevino]
tags: [conocimiento-cero, biometricos, privacidad, identidad-digital, blockchain]
---

# Pruebas Faciales de Conocimiento Cero: Construye Apps Seguras Sin Almacenar Contraseñas ni Datos Biométricos

**Construye autenticación sin contraseñas, hot wallets, wallets MPC y sistemas de almacenamiento cifrado usando solo el rostro de tus usuarios—sin jamás almacenar datos biométricos en tus servidores.**

En este post, te mostraré cómo usar las Pruebas Faciales de Conocimiento Cero (ZelfProofs) para construir aplicaciones seguras que eliminan contraseñas, protegen la privacidad del usuario y cumplen con regulaciones de protección de datos—todo con simples llamadas a REST API.

<!-- truncate -->

## ¿Qué Puedes Construir con ZelfProofs?

Aquí hay aplicaciones del mundo real que puedes construir usando nuestra API:

### 🔐 Autenticación Sin Contraseñas
Reemplaza las contraseñas tradicionales con autenticación basada en el rostro. Los usuarios inician sesión tomándose una selfie—sin contraseñas que recordar, restablecer o filtrar.

### 💰 Wallets de Criptomonedas (Hot Wallets)
Crea wallets de autocustodia donde los usuarios acceden a sus cripto con su rostro. Las claves privadas se cifran con datos biométricos que nunca salen de su dispositivo.

### 🔑 Wallets MPC (Computación Multi-Parte)
Construye sistemas de gestión de claves distribuidas donde la biometría facial sirve como un factor en una configuración multi-firma.

### 🆔 Identidad Descentralizada (DID)
Crea identidades digitales portátiles que los usuarios controlan. Perfecto para aplicaciones Web3, plataformas del metaverso y sistemas de identidad auto-soberana.

### 📁 Almacenamiento de Datos Cifrados
Cifra documentos de usuario, registros médicos o archivos sensibles usando ZelfProofs. Solo el rostro del usuario puede descifrarlos—ni siquiera tú puedes acceder a los datos.

### 🏦 Servicios Financieros
Construye sistemas compatibles con KYC/AML, autenticación de pagos seguros o mecanismos de recuperación de cuentas que funcionan entre dispositivos.

## Cómo Funciona: El Flujo Técnico

```
1. Usuario toma selfie → 2. Crear ZelfProof → 3. Almacenar datos cifrados
                              ↓
4. Usuario toma selfie → 5. Descifrar ZelfProof → 6. Acceder a datos/wallet/cuenta
```

**Punto Clave:** Los datos faciales nunca salen del dispositivo. Lo que se envía al servidor es una prueba criptográfica que no puede ser reverse-engineered para recrear tu rostro.

## Inicio Rápido: Crea tu Primer ZelfProof

Vamos a crear un ZelfProof que cifra un mnemonic de wallet de criptomonedas. Primero, [regístrate para una cuenta gratuita](https://app.verifik.co) para obtener tu API key.

### Paso 1: Crear un ZelfProof (Cifrado)

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Authorization: Bearer TU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "SELFIE_EN_BASE64",
    "metadata": {
      "mnemonic": "palabra1 palabra2 palabra3 ... palabra12",
      "walletAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
    },
    "publicData": {
      "userId": "user123",
      "createdAt": "2024-12-19"
    },
    "password": "seguridad-adicional-opcional",
    "requireLiveness": true,
    "tolerance": "REGULAR"
  }'
```

**Respuesta:**
```json
{
  "zelfProof": "A14THLzLTzI+57Nb52+PGXv...",
  "identifier": "user123"
}
```

**¿Qué acaba de pasar?**
- El objeto `metadata` (con tu mnemonic de wallet) se cifra usando la biometría facial
- El `zelfProof` es una cadena en base64 que puedes almacenar en tu base de datos
- El `publicData` es legible sin descifrado (útil para mostrar información del usuario)

### Paso 2: Descifrar el ZelfProof (Autenticación/Acceso)

```bash
curl -X POST "https://api.zelf.world/api/zelf-proof/decrypt" \
  -H "Authorization: Bearer TU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "faceBase64": "NUEVA_SELFIE_EN_BASE64",
    "zelfProof": "A14THLzLTzI+57Nb52+PGXv...",
    "password": "seguridad-adicional-opcional",
    "requireLiveness": true,
    "tolerance": "REGULAR"
  }'
```

**Respuesta:**
```json
{
  "identifier": "user123",
  "metadata": {
    "mnemonic": "palabra1 palabra2 palabra3 ... palabra12",
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

**¡Éxito!** El rostro del usuario coincidió, y has descifrado el mnemonic del wallet. Ahora puedes firmar transacciones, desbloquear la cuenta o descifrar archivos.

## Caso de Uso #1: Sistema de Login Sin Contraseñas

```javascript
// Frontend: Registro de usuario
const createUserAccount = async (selfieBase64, email) => {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/encrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer TU_API_KEY',
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
  
  // Almacena zelfProof en tu base de datos vinculado a este usuario
  await saveToDatabase({ userId: identifier, zelfProof });
  
  return identifier;
};

// Frontend: Login de usuario
const loginUser = async (selfieBase64, userId) => {
  // Obtén el zelfProof del usuario de tu base de datos
  const { zelfProof } = await fetchFromDatabase(userId);
  
  const response = await fetch('https://api.zelf.world/api/zelf-proof/decrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer TU_API_KEY',
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
    // ¡Usuario autenticado! Crea sesión
    return createUserSession(userData.metadata);
  } else {
    throw new Error('Autenticación fallida');
  }
};
```

## Caso de Uso #2: Wallet de Criptomonedas

```python
import requests
import json

def create_wallet(selfie_base64, mnemonic):
    """Crear un wallet protegido con ZelfProof"""
    
    response = requests.post(
        'https://api.zelf.world/api/zelf-proof/encrypt',
        headers={
            'Authorization': 'Bearer TU_API_KEY',
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
    """Descifrar wallet y firmar transacción"""
    
    response = requests.post(
        'https://api.zelf.world/api/zelf-proof/decrypt',
        headers={
            'Authorization': 'Bearer TU_API_KEY',
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
        
        # Ahora usa el mnemonic para firmar la transacción
        signed_tx = sign_with_mnemonic(mnemonic, transaction_data)
        return signed_tx
    else:
        raise Exception('Verificación facial fallida')
```

## Caso de Uso #3: Almacenamiento de Documentos Cifrados

```typescript
// Cifrar un documento con el rostro de un usuario
async function encryptDocument(
  userSelfie: string,
  documentContent: string
): Promise<string> {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/encrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer TU_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: userSelfie,
      metadata: {
        document: documentContent,
        encryptedAt: new Date().toISOString()
      },
      publicData: {
        documentName: 'Registro Médico',
        documentType: 'PDF'
      },
      requireLiveness: true
    })
  });
  
  const { zelfProof } = await response.json();
  return zelfProof; // Almacena esto en tu base de datos
}

// Descifrar el documento cuando el usuario verifique su rostro
async function decryptDocument(
  userSelfie: string,
  zelfProof: string
): Promise<string> {
  const response = await fetch('https://api.zelf.world/api/zelf-proof/decrypt', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer TU_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      faceBase64: userSelfie,
      zelfProof: zelfProof,
      requireLiveness: true
    })
  });
  
  const data = await response.json();
  return data.metadata.document; // Contenido original del documento
}
```

## Entendiendo la Respuesta de la API

Cuando descifras un ZelfProof, esto es lo que recibes:

```json
{
  "identifier": "user-unique-id",
  "metadata": {
    // Tus datos cifrados (solo accesibles con el rostro correcto)
    "secret": "información-sensible",
    "walletKey": "datos-clave-privada"
  },
  "publicData": {
    // Datos no sensibles (siempre legibles)
    "name": "Juan Pérez",
    "email": "juan@ejemplo.com"
  },
  "faceCropBase64": "/9j/4AAQ...",  // Imagen del rostro recortada
  "difficulty": "EASY"  // Qué tan difícil fue la coincidencia facial
}
```

## Mejores Prácticas de Seguridad

### ✅ Hacer:
- Siempre habilita `requireLiveness: true` en producción
- Usa `tolerance: "STRICT"` para aplicaciones de alta seguridad (wallets, pagos)
- Agrega un `password` opcional para capa adicional de seguridad
- Almacena ZelfProofs en tu base de datos (son seguros de almacenar—no pueden revertirse)
- Implementa rate limiting en intentos de descifrado

### ❌ No Hacer:
- Nunca almacenes las imágenes faciales reales en tus servidores
- No deshabilites la detección de vida en producción
- No uses `tolerance: "LOW"` para aplicaciones financieras
- No compartas API keys en código del lado del cliente (usa un proxy backend)

## Pruébalo Ahora: Integración en 5 Minutos

1. **Regístrate gratis**: [app.verifik.co](https://app.verifik.co)
2. **Obtén tu API key**: Disponible inmediatamente en tu dashboard
3. **Prueba en sandbox**: Usa nuestro entorno de pruebas sin límites
4. **Lee la documentación**: [docs.verifik.co](https://docs.verifik.co) para referencia completa de la API
5. **Únete a nuestro Discord**: Obtén ayuda de nuestra comunidad de desarrolladores

## Enlaces Rápidos de Referencia de la API

- **[Crear ZelfProof (Cifrar)](https://docs.verifik.co/functions/create-qr-zelfproof)**: Cifra datos con biometría facial
- **[Descifrar ZelfProof](https://docs.verifik.co/functions/decrypt-zelfproof)**: Verifica rostro y descifra datos
- **[Vista Previa ZelfProof](https://docs.verifik.co/api/tags/preview-zelfproof)**: Ver datos públicos sin descifrado
- **[Documentación Completa de la API](https://docs.verifik.co)**: Guías completas y ejemplos

## Historias de Éxito del Mundo Real

- **App de Wallet de Cripto**: Redujo solicitudes de recuperación de cuenta en un 95%
- **Plataforma de Salud**: Acceso a registros de pacientes compatible con HIPAA sin almacenar datos biométricos
- **SaaS Empresarial**: Eliminó restablecimientos de contraseñas, ahorrando $50K/año en costos de soporte
- **Protocolo DeFi**: Habilitó recuperación social para wallets MPC usando verificación facial

**Todos los tiers incluyen:**
- Detección de vida
- CDN global para tiempos de respuesta rápidos
- SLA de 99.9% de uptime
- Soporte técnico

## Comienza a Construir Hoy

```bash
# Obtén tu API key
curl -X POST https://app.verifik.co/api/auth/signup \
  -d "email=tu@ejemplo.com"

# Haz tu primera llamada API
curl -X POST "https://api.zelf.world/api/zelf-proof/encrypt" \
  -H "Authorization: Bearer TU_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"faceBase64": "...", "metadata": {"test": "Hola Mundo"}}'
```

## Obtén Ayuda

- 📚 **Documentación**: [docs.verifik.co](https://docs.verifik.co)
- 💬 **Comunidad Discord**: [Únete a nuestros desarrolladores](https://discord.gg/verifik)
- 🐛 **GitHub**: [Reporta problemas](https://github.com/verifik)
- 📧 **Soporte por Email**: developers@verifik.co

## ¿Qué Sigue?

1. [Crea tu cuenta gratuita](https://app.verifik.co)
2. Obtén tu API key
3. Prueba los ejemplos anteriores
4. ¡Construye algo increíble!

---

**¿Listo para construir el futuro de la autenticación segura sin contraseñas? Crea tu cuenta gratuita y comienza a probar en minutos.**

*No se requiere tarjeta de crédito. 1,000 llamadas API gratuitas por mes. Cancela en cualquier momento.*
