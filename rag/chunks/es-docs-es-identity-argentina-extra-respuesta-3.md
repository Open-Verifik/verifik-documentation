---
id: "es-docs-es-identity-argentina-extra-respuesta-3"
title: "Argentina - Ciudadano Argentino Completo — Respuesta"
sourcePath: "docs-es/identity/argentina-extra.mdx"
locale: "es"
category: "identity"
tags:
  - "ar"
  - "identity"
endpoint: "/v2/ar/cedula/extra"
sourceAnchor: "Respuesta"
slug: "/identidad/argentina-extra"
url: "https://docs.verifik.co/verifik-es/identidad/argentina-extra"
---

# Argentina - Ciudadano Argentino Completo
**API path(s):** /v2/ar/cedula/extra

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos argentinos usando datos oficiales del gobierno. Este endpoint devuelve campos ampliados respecto a la cédula estándar, entre ellos **fecha de nacimiento**, **género**, partes del nombre e **indicador de vida** (`isAlive`).

## Respuesta

```json
{
    "data": {
        "documentType": "DNIAR",
        "documentNumber": "44768756",
        "firstName": "MARIA LOURDES",
        "lastName": "ARCE",
        "fullName": "MARIA LOURDES ARCE",
        "arrayName": [
            "MARIA",
            "LOURDES",
            "ARCE"
        ],
        "gender": "F",
        "dateOfBirth": "2003-03-25",
        "isAlive": true
    },
    "signature": {
        "dateTime": "April 15, 2026 5:43 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "B7T6Y"
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
    "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [DNIAR]"
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

- `documentType` debe ser `DNIAR`.
- `gender` se devuelve como código de una letra (por ejemplo `F` o `M`) cuando está disponible.
- `isAlive` indica si el registro reporta a la persona como viva al momento de la consulta.

---

## Casos de uso comunes

- **Fintech y banca**: Enriquecer el onboarding con fecha de nacimiento y comprobación de vida.
- **E-commerce y delivery**: Validar repartidores o cuentas de alto valor con señales de identidad más fuertes.
- **RR. HH. y reclutamiento**: Confirmar datos del candidato frente a registros oficiales.
- **Seguros y salud**: Apoyar reglas de edad y elegibilidad con fechas de nacimiento verificadas.
