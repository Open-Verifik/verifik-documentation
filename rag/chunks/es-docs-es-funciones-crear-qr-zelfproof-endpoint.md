---
id: "es-docs-es-funciones-crear-qr-zelfproof-endpoint"
title: "Crear un QR-Code ZelfProof — Endpoint"
sourcePath: "docs-es/funciones/crear-qr-zelfproof.md"
locale: "es"
category: "funciones"
tags:
  - "funciones"
endpoint: "/api/zelf-proof/encrypt"
sourceAnchor: "Endpoint"
---

# Crear un QR-Code ZelfProof
**API path(s):** /api/zelf-proof/encrypt

## Endpoint

### Endpoint

```
https://api.zelf.world/api/zelf-proof/encrypt 
```

Este endpoint permite la creación de una nueva Prueba Facial de Conocimiento Cero "**ZelfProof**" como bytes en bruto codificados en base64. Estos son los mismos bytes utilizados para generar el código ZelfQR.

### Solicitud

* **Endpoint**: `/api/zelf-proof/encrypt`
* **Método**: POST
* **Content-Type**: `application/json`

#### **Cuerpo**

El cuerpo de la solicitud debe ser un objeto JSON que contenga los siguientes campos:

```json
{
  "livenessDetectionPriorCreation": false,
  "publicData": {
    "ethAddress": "0x13901AE0F17E2875E86C86721f9943598601b0C4"
  },
  "faceBase64": "face_image_bytes_as_base64",
  "livenessLevel": "REGULAR",
  "metadata": {
    "mnemonic": "pistol cloth equal legend category dry wine enjoy rookie artwork portion december"
  },
  "os": "DESKTOP",
  "password": "optional",
  "identifier": "A0123453",
  "referenceFaceBase64": "optional_base64_encoded_reference_face_image",
  "requireLiveness": true,
  "tolerance": "REGULAR",
  "verifierKey": "optional_auth_key"
}
```

#### Campos:

* **livenessDetectionPriorCreation**: `Boolean` (Opcional) - Si es verdadero, el rostro debe estar vivo para crear el ZelfProof.
* **publicData**: `object` (Opcional) - Datos en texto claro asociados con el registro, como `masked_id`.
* **faceBase64**: `string` (Requerido) - Datos de imagen facial codificados en Base64.
* **livenessLevel**: `string` (Opcional) - Especifica la tolerancia para las verificaciones de vida facial. Ej., `"REGULAR"`.
* **metadata**: `object` (Opcional) - Metadatos adicionales en formato JSON asociados con el ZelfProof.
* **os**: `string` (Opcional) - El sistema operativo desde donde se origina la solicitud, ej., `"DESKTOP"`.
* **password**: `string` (Opcional) - Una contraseña para seguridad adicional.
* **identifier**: `string` (Opcional) - Un ID asociado con el registro.
* **referenceFaceBase64**: `string` (Opcional) - Imagen facial de referencia codificada en Base64. Usada para coincidir con el `faceBase64`.
* **requireLiveness**: `Boolean` (Opcional) - Si es verdadero, el rostro debe estar vivo.
* **tolerance**: `string` (Opcional) - Especifica la tolerancia para la coincidencia facial. Ej., `"REGULAR"`.
* **verifierKey**: `string` (Opcional) - Una clave de autenticación requerida para descifrar el ZelfProof si se especifica.
