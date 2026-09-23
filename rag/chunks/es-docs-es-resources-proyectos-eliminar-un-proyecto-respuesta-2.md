---
id: "es-docs-es-resources-proyectos-eliminar-un-proyecto-respuesta-2"
title: "Eliminar un proyecto — Respuesta"
sourcePath: "docs-es/resources/proyectos/eliminar-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
endpoints:
  - "/v3/projects/${projectid}"
  - "/v3/projects/%s"
  - "/v3/projects/{id}"
  - "/v3/projects/{project_id}"
sourceAnchor: "Respuesta"
---

# Eliminar un proyecto
**API path(s):** /v3/projects/${projectid}, /v3/projects/%s, /v3/projects/{id}, /v3/projects/{project_id}

## Respuesta

```json
{
    "data": {
        "_id": "64a1b2c3d4e5f6789012345",
        "name": "Deleted Project",
        "status": "deleted"
    }
}
```

  
  

```json
{
    "message": "Invalid project ID format",
    "code": "BadRequest",
    "status": 400,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

  
  

```json
{
    "message": "Access forbidden",
    "code": "Forbidden",
    "status": 401,
    "timestamp": "2023-07-01T10:00:00.000Z"
}
```

o

```json
{
    "message": "Access forbidden",
    "code": "Forbidden"
}
```

  
  

```json
{
    "message": "Project not found",
    "code": "NotFound"
}
```

  
  

```json
{
    "message": "Cannot delete project with active flows",
    "code": "Conflict"
}
```

### Notas

- Acción irreversible: elimina todos los datos asociados.
- Eliminación en cascada: también elimina flujos, webhooks, miembros y configuración.
- Comprobaciones previas: pausar el proyecto si está activo, exportar datos necesarios y validar dependencias.
