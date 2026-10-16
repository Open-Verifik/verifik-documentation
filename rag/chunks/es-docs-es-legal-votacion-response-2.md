---
id: "es-docs-es-legal-votacion-response-2"
title: "Recuperar Información de Votación para Ciudadanos Colombianos — Response"
sourcePath: "docs-es/legal/votacion.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/registraduria/votacion"
sourceAnchor: "Response"
slug: "/legal/votacion"
url: "https://docs.verifik.co/verifik-es/legal/votacion"
---

# Recuperar Información de Votación para Ciudadanos Colombianos
**API path(s):** /v2/co/registraduria/votacion

## Response

```json
{
  "success": true,
  "data": {
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "address": "Calle 123 #45-67",
    "department": "Cundinamarca",
    "municipality": "Bogotá D.C.",
    "pollingTable": "123",
    "votingStation": "Colegio San José",
    "votingStationAddress": "Carrera 7 #32-16",
    "status": "active"
  }
}
```

  
  

```json
{
  "success": false,
  "error": "Votante no encontrado",
  "code": "VOTER_NOT_FOUND"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

### Features

-   **Verificación de Registro de Votantes**: Confirmar el estado de registro de votantes
-   **Información de Ubicación**: Detalles sobre mesa y puesto de votación
-   **Datos Demográficos**: Información sobre departamento y municipio
-   **Respuesta Estructurada**: Formato de datos organizado para fácil integración
-   **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
-   **Manejo de Errores**: Respuestas de error comprensivas para varios escenarios

## Casos de Uso

- **Verificación de Registro de Votantes**: Confirmar el estado de registro de votantes
- **Soporte del Día de Elecciones**: Ayudar a los votantes a encontrar sus ubicaciones de votación
- **Análisis Demográfico**: Analizar la distribución de votantes y demografía
- **Monitoreo Electoral**: Rastrear la participación de votantes y registro
- **Compromiso Cívico**: Apoyar procesos democráticos y educación de votantes
