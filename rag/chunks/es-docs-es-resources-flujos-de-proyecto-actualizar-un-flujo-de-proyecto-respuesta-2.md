---
id: "es-docs-es-resources-flujos-de-proyecto-actualizar-un-flujo-de-proyecto-respuesta-2"
title: "Actualizar un flujo de proyecto — Respuesta"
sourcePath: "docs-es/resources/flujos-de-proyecto/actualizar-un-flujo-de-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Respuesta"
---

# Actualizar un flujo de proyecto

## Respuesta

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012346",
    "status": "active",
    "version": 3
  }
}
```

  
  

```json
{ "message": "Invalid project flow ID format", "code": "BadRequest" }
```

  
  

```json
{ "message": "Access forbidden", "code": "Forbidden" }
```

  
  

```json
{ "message": "Project flow not found", "code": "NotFound" }
```

  
  

```json
{ "message": "Cannot update project flow with active users", "code": "Conflict" }
```

  
  

```json
{
  "message": "Project flow validation failed",
  "code": "UnprocessableEntity",
  "details": []
}
```

### Notas

- Solo se actualizan los campos enviados; los demás permanecen sin cambios.
- Valida rangos de `minScore` y límites de intentos según tu política de riesgo.
- Considera pausar el flujo antes de cambios que afecten a usuarios activos.
