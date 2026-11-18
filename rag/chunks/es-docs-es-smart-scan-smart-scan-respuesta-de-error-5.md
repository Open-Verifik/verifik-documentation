---
id: "es-docs-es-smart-scan-smart-scan-respuesta-de-error-5"
title: "Smart Scan — Respuesta de Error"
sourcePath: "docs-es/smart-scan/smart-scan.md"
locale: "es"
category: "smart-scan"
tags:
  - "smart-scan"
  - "scan"
endpoint: "/v2/scan"
sourceAnchor: "Respuesta de Error"
slug: "/escaneo-inteligente"
url: "https://docs.verifik.co/verifik-es/escaneo-inteligente"
---

# Smart Scan
**API path(s):** /v2/scan

**OCR** significa **Reconocimiento Óptico de Caracteres**. Es una tecnología que convierte diferentes tipos de documentos, como documentos en papel escaneados, archivos PDF, o imágenes capturadas por una cámara digital, en datos editables y buscables. El propósito principal de OCR es reconocer y extraer texto de estos formatos no editables para que pueda ser almacenado electrónicamente, manipulado y buscado.

## Respuesta de Error

```json
{
    "success": false,
    "error": "Formato de documento inválido",
    "code": "INVALID_DOCUMENT",
    "details": {
        "supported_formats": ["jpg", "png", "pdf"]
    }
}
```

---

## Mejores Prácticas

### Preparación de Documentos

1. **Calidad de Imagen**: Asegura que los documentos sean claros, bien iluminados y de alta resolución
2. **Soporte de Formato**: Usa formatos soportados (JPG, PNG, PDF) para resultados óptimos
3. **Orientación de Documento**: Asegura que los documentos estén correctamente orientados antes del procesamiento
4. **Tamaño de Archivo**: Mantén tamaños de archivo razonables (bajo 10MB) para procesamiento más rápido

### Uso de API

1. **Procesamiento por Lotes**: Procesa múltiples documentos en lotes para eficiencia
2. **Manejo de Errores**: Implementa manejo de errores apropiado para extracciones fallidas
3. **Umbrales de Confianza**: Establece umbrales de confianza apropiados basados en tus necesidades
4. **Limitación de Velocidad**: Respeta los límites de velocidad de API para evitar interrupciones del servicio

### Seguridad

1. **Privacidad de Datos**: Asegura que los documentos sensibles sean manejados de forma segura
2. **Gestión de Tokens**: Mantén los tokens JWT seguros y rótalos regularmente
3. **Solo HTTPS**: Siempre usa HTTPS para comunicaciones de API
4. **Retención de Datos**: Implementa políticas apropiadas de retención de datos

---

## Límites de Velocidad

-   **Escaneo con Prompt**: 50 solicitudes por minuto
-   **Estudio de Escaneo**: 30 solicitudes por minuto

:::tip Consejo Pro
Comienza con Escaneo con Prompt para pruebas rápidas y prototipado, luego muévete a Estudio de Escaneo para aplicaciones de producción que requieren alta precisión.
:::

:::warning Importante
Siempre prueba tu implementación OCR con documentos de muestra antes de desplegar a producción para asegurar que la precisión cumple con tus requisitos.
:::

---
