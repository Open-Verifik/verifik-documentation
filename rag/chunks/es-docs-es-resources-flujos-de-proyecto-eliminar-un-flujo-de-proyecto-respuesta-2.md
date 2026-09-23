---
id: "es-docs-es-resources-flujos-de-proyecto-eliminar-un-flujo-de-proyecto-respuesta-2"
title: "Eliminar un flujo de proyecto — Respuesta"
sourcePath: "docs-es/resources/flujos-de-proyecto/eliminar-un-flujo-de-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Respuesta"
---

# Eliminar un flujo de proyecto

## Respuesta

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012346",
    "status": "deleted"
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
{ "message": "Cannot delete project flow with active users", "code": "Conflict" }
```

### Notas

- Acción irreversible; considera pausar el flujo antes de borrar.
- Se eliminan referencias en el proyecto padre y configuraciones asociadas.
