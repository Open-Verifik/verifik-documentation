---
id: "es-docs-es-identity-venezuela-foreigner-id-respuesta-2"
title: "🇻🇪 Venezuela - Cédula de extranjero (CEVE) — Respuesta"
sourcePath: "docs-es/identity/venezuela-foreigner-id.mdx"
locale: "es"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoint: "/v2/ve/foreigner-id"
sourceAnchor: "Respuesta"
slug: "/identidad/venezuela-foreigner-id"
url: "https://docs.verifik.co/verifik-es/identidad/venezuela-foreigner-id"
---

# 🇻🇪 Venezuela - Cédula de extranjero (CEVE)
**API path(s):** /v2/ve/foreigner-id

La API de Verificación de Identidad de Verifik te permite autenticar a personas extranjeras en Venezuela usando datos oficiales. Está pensada para agilizar el **KYC**, reducir fraude y apoyar el cumplimiento normativo.

## Respuesta

```json
{
  "data": {
    "documentType": "CEVE",
    "documentNumber": "10000001",
    "fullName": "MATEO VENEZUELA VERIFIK",
    "lastName": "MATEO",
    "firstName": "VENEZUELA VERIFIK",
    "arrayName": [
      "MATEO",
      "VENEZUELA",
      "VERIFIK"
    ]
  },
  "signature": {
    "dateTime": "March 13, 2024 2:01 AM",
    "message": "Certified by Verifik.co"
  },
  "id": "7VWXP"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
  "message": "Access forbidden",
  "code": "FORBIDDEN"
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
  "message": "missing documentNumber"
}
```

  
  

```json
{
  "code": "Endpoint_out_of_service",
  "message": "Endpoint_out_of_service"
}
```

### Notas

- `documentNumber` es obligatorio. Se eliminan puntos y espacios. No envíes `documentType`.
- Esta ruta es solo para documentos **CEVE**; la nacional **CCVE** usa `/v2/ve/cedula`.
- La respuesta incluye campos de nombre (`arrayName`, `firstName`, `lastName`, `fullName`).
- Sandbox: `10000001`–`10000010` son fijos. `90040401` responde 404. `90050001` responde 500.
- Si el servicio no está disponible temporalmente, la API responde `409` con `code: "Endpoint_out_of_service"`.

---

## Casos de uso comunes

-   **Verificación de residentes extranjeros**: validar identidad para empleo o servicios.
-   **Servicios financieros**: onboarding con cédula de extranjero.
-   **Cumplimiento**: procesos que requieren verificar CEVE.

## Confiabilidad

Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.
