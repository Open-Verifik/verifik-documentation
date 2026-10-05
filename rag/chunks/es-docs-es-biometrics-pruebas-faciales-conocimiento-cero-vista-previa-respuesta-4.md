---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-vista-previa-respuesta-4"
title: "Vista Previa HumanID — Respuesta"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-vista-previa.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/preview"
sourceAnchor: "Respuesta"
slug: "/biometrics/humanID-vista-previa"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-vista-previa"
---

# Vista Previa HumanID
**API path(s):** /v2/human-id/preview

## Respuesta

```json
{
  "data": {
    "passwordLayer": "WithPassword",
    "publicData": {
      "a": "1",
      "vida": "true",
      "b": "2"
    },
    "requireLiveness": true
  }
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
  "message": "Access Forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"humanID\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```

### Notas

- El campo `passwordLayer` indica si la prueba está protegida con contraseña (`WithPassword` o `WithoutPassword`)
- `publicData` contiene los datos públicos que se almacenaron con la prueba (esto es visible para cualquiera con la prueba)
- `requireLiveness` indica si se requería detección de vitalidad cuando se creó la prueba
- Este endpoint no realiza verificación biométrica - solo examina los metadatos de la prueba
- No se cobran créditos por operaciones de vista previa
- El parámetro `os` es requerido pero no afecta la funcionalidad de vista previa
- Esto es útil para depuración, inspección y comprensión de la configuración de la prueba antes de intentar verificación
- Los metadatos privados no se exponen en modo vista previa por razones de seguridad
