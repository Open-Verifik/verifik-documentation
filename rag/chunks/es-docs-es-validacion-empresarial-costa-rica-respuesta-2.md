---
id: "es-docs-es-validacion-empresarial-costa-rica-respuesta-2"
title: "Costa Rica — Verificación empresarial (NITE) — Respuesta"
sourcePath: "docs-es/validacion-empresarial/costa-rica.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "cr"
  - "validacion-empresarial"
endpoints:
  - "/v2/cr/company"
  - "/v2/cr/company?"
  - "/v2/cr/company?documenttype=nite&documentnumber=3101122876"
sourceAnchor: "Respuesta"
slug: "/validacion-empresarial/costa-rica"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/costa-rica"
---

# Costa Rica — Verificación empresarial (NITE)
**API path(s):** /v2/cr/company, /v2/cr/company?, /v2/cr/company?documenttype=nite&documentnumber=3101122876

Consulta registros de empresas costarricenses usando el **NITE** (*Número de Identificación Tributaria de Empresas*) para onboarding de proveedores, cumplimiento y prevención de fraude.

## Respuesta

```json
{
  "data": {
    "businessName": "ENLACES CASUALES COSTA RICA SOCIEDAD ANONIMA",
    "documentNumber": "3101122876",
    "documentType": "NITE"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:18 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "U6IYC"
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
  "message": "documentType must be one of: [NITE]"
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
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notas

- Contacta al soporte para el detalle completo de campos del dataset.
