---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-ejemplos-4"
title: "Buscar Etiqueta — Ejemplos"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search"
sourceAnchor: "Ejemplos"
---

# Buscar Etiqueta
**API path(s):** /api/sessions, /api/tags/search

Buscar una etiqueta en cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Ejemplos

```bash
# Primero, crear una sesión para obtener el token JWT
curl -X POST "https://api.zelf.world/api/sessions" \
  -H "Content-Type: application/json" \
  -H "Origin: https://test.example.com" \
  -d '{
    "identifier": "test_session_123",
    "type": "createWallet",
    "isWebExtension": false
  }'

# Luego buscar una etiqueta
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"

# Buscar con duración de por vida para precios
curl -X GET "https://api.zelf.world/api/tags/search?tagName=username.zelf&domain=zelf&os=DESKTOP&duration=lifetime" \
  -H "Origin: https://test.example.com" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

```javascript
const axios = require('axios');

async function searchTag() {
  try {
    // Primero, crear una sesión
    const sessionResponse = await axios.post('https://api.zelf.world/api/sessions', {
      identifier: 'test_session_123',
      type: 'createWallet',
      isWebExtension: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'https://test.example.com'
      }
    });

    const token = sessionResponse.data.data.token;

    // Luego buscar la etiqueta
    const searchResponse = await axios.get('https://api.zelf.world/api/tags/search', {
      params: {
        tagName: 'username.zelf',
        domain: 'zelf',
        os: 'DESKTOP',
        duration: 'lifetime'
      },
      headers: {
        'Origin': 'https://test.example.com',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Resultado de búsqueda:', searchResponse.data);
    
    if (searchResponse.data.data.available) {
      console.log('La etiqueta está disponible para alquilar en:', searchResponse.data.data.price.price, 'USD');
    } else {
      console.log('La etiqueta ya está ocupada:', searchResponse.data.data.tagObject.publicData.tagName);
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

searchTag();
```
