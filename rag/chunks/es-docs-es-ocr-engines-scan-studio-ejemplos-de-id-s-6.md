---
id: "es-docs-es-ocr-engines-scan-studio-ejemplos-de-id-s-6"
title: "Escaneo Estudio — Ejemplos de ID's"
sourcePath: "docs-es/ocr-engines/scan-studio.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-studio"
sourceAnchor: "Ejemplos de ID's"
slug: "/ocr-engines/escaneo-estudio"
url: "https://docs.verifik.co/verifik-es/ocr-engines/escaneo-estudio"
---

# Escaneo Estudio
**API path(s):** /v2/ocr/scan-studio

## Ejemplos de ID's

* [Cédula Colombiana](https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1690232072151-image.jpeg)
* [INE México](https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1690301869522-image.png)

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
  "documentType": "CC"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/ocr/scan-studio',
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
  "documentType": "CC"
}';
$request = new Request('POST', 'https://api.verifik.co/v2/ocr/scan-studio', $headers, $body);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();
```
