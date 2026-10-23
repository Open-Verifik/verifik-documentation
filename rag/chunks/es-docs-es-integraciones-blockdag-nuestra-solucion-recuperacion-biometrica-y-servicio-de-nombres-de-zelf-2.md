---
id: "es-docs-es-integraciones-blockdag-nuestra-solucion-recuperacion-biometrica-y-servicio-de-nombres-de-zelf-2"
title: "BlockDAG — Nuestra Solución: Recuperación Biométrica y Servicio de Nombres de Zelf"
sourcePath: "docs-es/integraciones/blockdag.md"
locale: "es"
category: "integraciones"
tags:
  - "integraciones"
sourceAnchor: "Nuestra Solución: Recuperación Biométrica y Servicio de Nombres de Zelf"
---

# BlockDAG

## Nuestra Solución: Recuperación Biométrica y Servicio de Nombres de Zelf

#### Tecnología Central: ZK Face Proof

Nuestra tecnología propietaria **Zero-Knowledge Face Proof**:

* Encripta frases semilla usando biometría facial + contraseña opcional
* **Nunca almacena datos biométricos** - todo sucede localmente
* Crea pruebas matemáticas que pueden verificar identidad sin revelarla
* Funciona **completamente offline** - no se requiere internet para la recuperación

#### Servicio de Nombres Zelf (ZNS)

Nuestro sistema de nombres descentralizado proporciona:

* Nombres legibles por humanos vinculados a direcciones cripto
* Funciona Multi-blockchain (BlockDAG, ETH, BTC, SOL, SUI, etc.)
* Almacenamiento distribuido vía IPFS, Arweave, Walrus
* Puede almacenarse también como NFT ya que el ZK-Face Proof se almacena como un código QR que pesa menos de 100kb.
* API completa para integración (si la integración se hace para una instancia de Node > que es una versión online donde los cálculos del algoritmo suceden allí en caso de que quieras usarlo en una extensión de billetera)

#### Tres Enfoques de Integración

### Enfoque 1: Recuperación de Billetera Biométrica + Servicio de Nombres BlockDAG

#### Implementación Técnica

**Características Centrales:**

* Implementar convención de nombres `john.blockdag`
* Generar direcciones de billetera compatibles con BlockDAG
* Integrar con la economía de tokens nativa de BlockDAG
* Proporcionar endpoints de API para resolución de nombres

**Puntos de Integración API:**

```javascript
// Buscar nombres disponibles
POST /blockdag-name-service/search
{
  "name": "john.blockdag",
  "duration": "1" // años
}

// Registrar nombre con recuperación biométrica
POST /blockdag-name-service/lease-offline
{
  "name": "john.blockdag",
  "zelfProof": "prueba_biometrica_encriptada",
  "blockdagAddress": "bdag1234...5678"
}

// Recuperar billetera usando biometría
POST /blockdag-name-service/decrypt
{
  "name": "john.blockdag", 
  "faceBase64": "imagen_cara_usuario",
  "password": "contraseña_opcional"
}
```

**Flujo de Trabajo Offline:**

1. Usuario toma selfie + elige nombre
2. Sistema genera billetera BlockDAG localmente
3. Crea ZK Face Proof encriptado que contiene frase semilla
4. Almacena prueba encriptada en IPFS con metadatos del nombre
5. Usuario puede recuperar en cualquier momento usando escaneo facial (offline)

**Propuesta de Valor:**

* **$12-240 por registro de nombre** ingresos para el ecosistema BlockDAG
* **Eliminar almacenamiento de frases semilla** - usuarios solo necesitan su cara
* **Funciona offline** - perfecto para áreas con mala conectividad
* **Recuperación instantánea de billetera** en menos de un minuto > ZelfProof + (Biometría + Contraseña opcional) = frase semilla.

***
