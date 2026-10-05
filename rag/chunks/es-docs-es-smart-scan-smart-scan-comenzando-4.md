---
id: "es-docs-es-smart-scan-smart-scan-comenzando-4"
title: "Smart Scan — Comenzando"
sourcePath: "docs-es/smart-scan/smart-scan.md"
locale: "es"
category: "smart-scan"
tags:
  - "smart-scan"
  - "scan"
endpoint: "/v2/scan"
sourceAnchor: "Comenzando"
slug: "/escaneo-inteligente"
url: "https://docs.verifik.co/verifik-es/escaneo-inteligente"
---

# Smart Scan
**API path(s):** /v2/scan

**OCR** significa **Reconocimiento Óptico de Caracteres**. Es una tecnología que convierte diferentes tipos de documentos, como documentos en papel escaneados, archivos PDF, o imágenes capturadas por una cámara digital, en datos editables y buscables. El propósito principal de OCR es reconocer y extraer texto de estos formatos no editables para que pueda ser almacenado electrónicamente, manipulado y buscado.

## Comenzando

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el header de Authorization:

```bash
Authorization: Bearer 
```

### URL Base

```bash
https://api.verifik.co/v2/scan
```

---

## Endpoints de API

### Escaneo con Prompt

#### Extraer Texto con Prompt

```http
POST /prompt/extract
Content-Type: application/json
Authorization: Bearer 

{
  "document": "base64_encoded_image",
  "prompt": "Extrae todo el texto de este documento",
  "fields": ["name", "date", "amount"]
}
```

**Casos de Uso:**

-   Extracción de texto flexible con prompts personalizados
-   Configuración rápida para tipos de documentos diversos
-   Extracción de campos dinámicos basada en prompts

### Estudio de Escaneo

#### Extraer Texto con Modelo Entrenado

```http
POST /studio/extract
Content-Type: application/json
Authorization: Bearer 

{
  "document": "base64_encoded_image",
  "model_id": "your_trained_model_id",
  "confidence_threshold": 0.8
}
```

**Casos de Uso:**

-   Extracción de alta precisión para tipos de documentos específicos
-   Resultados consistentes para documentos estandarizados
-   Aplicaciones listas para producción que requieren confiabilidad

---

## Formato de Respuesta

Todas las respuestas de API siguen un formato consistente:

### Respuesta de Éxito

```json
{
    "success": true,
    "data": {
        "extractedText": "Contenido de texto extraído completo",
        "confidence": 0.95,
        "fields": {
            "name": "Juan Pérez",
            "date": "2024-01-15",
            "amount": "$1,250.00"
        },
        "processing_time": "2.3s",
        "model_used": "scan-prompt-v1"
    },
    "message": "Extracción de texto completada exitosamente"
}
```
