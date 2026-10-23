---
id: "es-docs-es-ocr-engines-scan-prompt-endpoint"
title: "Escaneo Prompt — Endpoint"
sourcePath: "docs-es/ocr-engines/scan-prompt.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-prompt"
sourceAnchor: "Endpoint"
slug: "/escaneo-prompt"
url: "https://docs.verifik.co/verifik-es/escaneo-prompt"
---

# Escaneo Prompt
**API path(s):** /v2/ocr/scan-prompt

## Endpoint

```
https://api.verifik.co/v2/ocr/scan-prompt
```

Escaneo Prompt con Integración de IA es una herramienta poderosa diseñada para optimizar la extracción de texto de documentos legales, apoyando tu proceso de Conoce a tu Cliente (KYC). Este servicio utiliza IA avanzada para detectar automáticamente tipos de documentos y emplea tecnología propietaria para una extracción de datos precisa.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `image` | string | Yes | Imagen en formato Base64 codificado o una URL donde está alojada la imagen. |
| `cropFace` | boolean | No | Si quieres recortar la cara del documento, pasa esto como `true`. |
| `documentType` | string | No | Puedes especificar el documentType para que la IA no tenga que adivinar qué tipo de documento estamos extrayendo. |

### Solicitud

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/ocr/scan-prompt", {
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  cropFace: true,
  documentType: "DNI"
}, {
  headers: { 
    "Content-Type": "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ocr/scan-prompt"
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
payload = {
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "cropFace": True,
    "documentType": "DNI"
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```
