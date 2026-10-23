---
id: "es-docs-es-api-etiquetas-vista-previa-etiqueta-campos-de-respuesta-etiqueta-existente-4"
title: "Vista Previa de Etiqueta — Campos de Respuesta (Etiqueta Existente)"
sourcePath: "docs-es/api/etiquetas/vista-previa-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Campos de Respuesta (Etiqueta Existente)"
---

# Vista Previa de Etiqueta

Previsualizar una etiqueta para ver si existe o verificar información de precios antes de alquilarla.

## Campos de Respuesta (Etiqueta Existente)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `preview` | object | Información de previsualización para etiqueta existente |
| `preview.passwordLayer` | string | Nivel de protección por contraseña |
| `preview.publicData` | object | Direcciones públicas de blockchain y metadatos |
| `preview.requireLiveness` | boolean | Si se requiere verificación de vida |
| `tagObject` | object | Objeto de etiqueta completo desde almacenamiento |
| `tagObject.id` | string | Identificador único de la etiqueta |
| `tagObject.owner` | string | Identificador del propietario de la etiqueta |
| `tagObject.url` | string | URL directa a los datos de la etiqueta |
| `tagObject.explorerUrl` | string | URL del explorador de blockchain |
| `tagObject.publicData` | object | Datos públicos de blockchain |
| `tagObject.size` | string | Tamaño de datos en bytes |
| `tagObject.zelfProofQRCode` | string | Código QR codificado en base64 |
| `tagObject.zelfProof` | string | Datos ZelfProof encriptados |

```json
{
  "data": {
    "ipfs": [],
    "arweave": [],
    "available": true,
    "tagName": "myname.zelf",
    "price": {
      "price": 24,
      "currency": "USD",
      "reward": 2.4,
      "discount": 0,
      "priceWithoutDiscount": 24,
      "discountType": "percentage"
    }
  }
}
```

### Campos de Respuesta (Etiqueta Disponible)

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `ipfs` | array | Opciones de almacenamiento IPFS (vacío para etiquetas disponibles) |
| `arweave` | array | Opciones de almacenamiento Arweave (vacío para etiquetas disponibles) |
| `available` | boolean | Si la etiqueta está disponible para compra |
| `tagName` | string | El nombre de etiqueta solicitado |
| `price` | object | Información de precios para la etiqueta |
| `price.price` | number | Precio actual en USD |
| `price.currency` | string | Tipo de moneda |
| `price.reward` | number | Cantidad de recompensa en USD |
| `price.discount` | number | Cantidad de descuento aplicado |
| `price.priceWithoutDiscount` | number | Precio original antes del descuento |
| `price.discountType` | string | Tipo de descuento (ej., "percentage") |

```json
{
  "validationError": "Name contains invalid characters"
}
```

```json
{
  "error": "Protected resource, use Authorization header to get access"
}
```

```json
{
  "validationError": "missing tagName\n"
}
```
