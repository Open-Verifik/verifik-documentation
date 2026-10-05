---
id: "es-docs-es-identity-guatemala-extra-respuesta-2"
title: "Guatemala Extra — Respuesta"
sourcePath: "docs-es/identity/guatemala-extra.mdx"
locale: "es"
category: "identity"
tags:
  - "gt"
  - "identity"
endpoint: "/v2/gt/cedula/extra"
sourceAnchor: "Respuesta"
slug: "/identidad/guatemala-extra"
url: "https://docs.verifik.co/verifik-es/identidad/guatemala-extra"
---

# Guatemala Extra
**API path(s):** /v2/gt/cedula/extra

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos guatemaltecos usando datos oficiales del gobierno. Este endpoint proporciona detalles adicionales como fecha de nacimiento y género.

## Respuesta

```json
{
    "data": {
        "arrayName": [
            "ERICK",
            "ROBERTO",
            "RAMIREZ",
            "MORALES"
        ],
        "birthDate": "1984-03-12",
        "documentNumber": "2222624190903",
        "documentType": "CUI",
        "firstName": "ERICK ROBERTO",
        "fullName": "ERICK ROBERTO RAMIREZ MORALES",
        "gender": "MASCULINO",
        "lastName": "RAMIREZ MORALES"
    },
    "signature": {
        "dateTime": "January 15, 2026 1:56 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "OQPT8"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n. missing documentNumber\n. missing dateOfBirth\n"
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

- `documentType` debe ser `CUI`.
- `dateOfBirth` es obligatorio y debe usar el formato **`DD/MM/YYYY`** (por ejemplo, `12/03/1984`), aunque la fecha de nacimiento en la respuesta proviene de una consulta SAT separada.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.
