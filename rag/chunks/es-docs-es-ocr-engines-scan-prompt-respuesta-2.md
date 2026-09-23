---
id: "es-docs-es-ocr-engines-scan-prompt-respuesta-2"
title: "Escaneo Prompt — Respuesta"
sourcePath: "docs-es/ocr-engines/scan-prompt.mdx"
locale: "es"
category: "ocr-engines"
tags:
  - "ocr"
  - "ocr-engines"
endpoint: "/v2/ocr/scan-prompt"
sourceAnchor: "Respuesta"
slug: "/escaneo-prompt"
url: "https://docs.verifik.co/verifik-es/escaneo-prompt"
---

# Escaneo Prompt
**API path(s):** /v2/ocr/scan-prompt

## Respuesta

```json
{
  "id": "xjicp",
  "data": {
    "__v": 0,
    "_id": "64d3ed6aed1c7d7ea391e617",
    "url": "https://cdn.verifik.co/ocr/64404b1f9856cc8cebd762e7/1691610471704-image.jpeg",
    "type": "ocr",
    "client": "64404b1f9856cc8cebd762e7",
    "status": "ACTIVE_BUT_UNVERIFIED",
    "deleted": false,
    "createdAt": "2023-08-09T19:47:54.214Z",
    "updatedAt": "2023-08-09T19:47:54.214Z",
    "requires2FA": false,
    "documentType": "CUSTOM",
    "OCRExtraction": {
      "fullName": "Juan Miguel Rodríguez López",
      "lastName": "Rodríguez López",
      "firstName": "Juan Miguel",
      "documentNumber": "01101101 01100001"
    },
    "documentNumber": "01101101 01100001",
    "imageValidated": false,
    "validationMethod": "SCAN_GPT"
  },
  "signature": {
    "message": "Certified by Verifik.co",
    "dateTime": "August 9, 2023 7:47 PM"
  }
}
```

  
  

```json
{
  "message": "Document not found",
  "code": "DOCUMENT_NOT_FOUND"
}
```

### Características

1. **Extracción de Tipo de Documento con IA**: Identifica automáticamente el tipo de documento legal.
2. **Extracción de datos precisa**: Emplea tecnología personalizada para extraer información relevante con alta precisión.
3. **Plantillas de prompts flexibles**: Utiliza prompts del sistema pre-diseñados para una extracción eficiente lista para usar. También permite a los usuarios crear plantillas personalizadas para refinar la lógica, ajustar campos extraídos, o mejorar el proceso agregando/eliminando puntos de datos.

### Notas

- Usa imágenes codificadas en Base64 o URLs directas para el parámetro `image`.
- El parámetro `cropFace` ayuda a mejorar la precisión enfocándose en el contenido del documento.
- Especifica `documentType` cuando conozcas el tipo de documento para mejores resultados.
