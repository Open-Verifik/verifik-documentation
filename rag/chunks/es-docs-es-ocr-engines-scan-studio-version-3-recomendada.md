---
id: "es-docs-es-ocr-engines-scan-studio-version-3-recomendada"
title: "Escaneo Estudio — Versión 3 (Recomendada)"
sourcePath: "docs-es/ocr-engines/scan-studio.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-studio"
sourceAnchor: "Versión 3 (Recomendada)"
slug: "/ocr-engines/escaneo-estudio"
url: "https://docs.verifik.co/verifik-es/ocr-engines/escaneo-estudio"
---

# Escaneo Estudio
**API path(s):** /v2/ocr/scan-studio

## Versión 3 (Recomendada)

:::warning Aviso de Deprecación
**La versión 2 de la API de Escaneo Estudio está deprecada y será eliminada el 25 de noviembre de 2026.** Por favor migre al nuevo endpoint v3 para soporte continuo y características mejoradas.
:::

# Escaneo Estudio

## Versión 3 (Recomendada)

### Endpoint

```
https://api.verifik.co/v3/ocr/scan-studio
```

El Escaneo Estudio v3 ofrece capacidades OCR mejoradas con mayor precisión y características adicionales. Esta versión proporciona extracción de campos más detallada con valores normalizados y puntuación de confianza mejorada.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Parámetro      | Tipo   | Requerido | Descripción                                    |
| -------------- | ------ | -------- | ---------------------------------------------- |
| `image`        | string | Sí       | Imagen en formato Base64 codificado o una URL donde la imagen está alojada. |
| `documentType` | string | Sí       | El tipo de documento del que necesita escanear información. Tipos de documentos soportados incluyen: `CC`, `RUT`, `PA`, `ENSAPA`, `DNI`, `CCVE`, `RIFVE`, `TLCC`. |

### Request

  

```javascript
const axios = require('axios');
let data = JSON.stringify({
  "image": "/9j/4AAQSkZJRgABAQEASA....AAD/4gIoS=",
  "documentType": "CCVE"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v3/ocr/scan-studio',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJ0w1splt4Cw'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  
  

```php
 'application/json',
  'Authorization' => '••••••'
];
$body = '{
  "image": "/9j/4AAQSkZJRgABAQEA...xbjqiSXFqrqWSutTpCVOELMoqFhH/2Q==",
  "documentType": "CCVE"
}';
$request = new Request('POST', 'https://api.verifik.co/v3/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```
