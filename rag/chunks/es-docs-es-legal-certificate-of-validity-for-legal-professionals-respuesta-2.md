---
id: "es-docs-es-legal-certificate-of-validity-for-legal-professionals-respuesta-2"
title: "Certificado de Vigencia para Profesionales Legales — Respuesta"
sourcePath: "docs-es/legal/certificate-of-validity-for-legal-professionals.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/certificado/vigencia"
sourceAnchor: "Respuesta"
slug: "/legal/certificado-vigencia-profesionales-legales"
url: "https://docs.verifik.co/verifik-es/legal/certificado-vigencia-profesionales-legales"
---

# Certificado de Vigencia para Profesionales Legales
**API path(s):** /v2/co/rama/certificado/vigencia

## Respuesta

```json
{
  "data": {
    "certificado": "",
    "documentNumber": "123456789",
    "documentType": "CC",
    "encalidad": "Abogado",
    "estado": "Vigente",
    "fechaCreacion": "30/05/2014",
    "fechaExpedicion": "2014/05/30",
    "idHojaDeVida": "5757153a-0e73-e123-80f1-001234b16b17",
    "motivoNoVigencia": " - ",
    "numeroTarCarLice": "123456",
    "observacionesPenaAccesoria": null
  },
  "signature": {
    "dateTime": "April 5, 2024 2:17 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "CHKEH"
}
```

  
  

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "Error de validación (parámetro faltante o inválido, o documentType distinto de CC/CE)."
}
```

## Características

-   **Verificación Profesional**: Verificar el estado actual de profesionales legales en Colombia
-   **Múltiples Tipos Profesionales**: Soporte para ABG (Abogado), JUEZPAZ (Juez de Paz) y LT (Técnico Legal)
-   **Seguimiento de Estado**: Verificar si el profesional está actualmente activo (Vigente) o inactivo
-   **Detalles de Certificación**: Acceder a fechas de creación y expedición de certificaciones profesionales
-   **Identificación Única**: Obtener identificador único de currículum para cada profesional
-   **Información de Licencia**: Acceder a números de licencia profesional y detalles
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP, y Swift
-   **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios
