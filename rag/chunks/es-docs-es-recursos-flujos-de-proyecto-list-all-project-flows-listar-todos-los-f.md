---
id: "es-docs-es-recursos-flujos-de-proyecto-list-all-project-flows-listar-todos-los-f"
title: "Listar Todos los Flujos de Proyecto — Endpoint"
sourcePath: "docs-es/recursos/flujos-de-proyecto/list-all-project-flows-listar-todos-los-flujos-de-proyecto.mdx"
locale: "es"
category: "recursos"
tags:
  - "recursos"
sourceAnchor: "Endpoint"
slug: "/recursos/flujos-de-proyecto/list-all-project-flows-listar-todos-los-flujos-de-proyecto"
url: "https://docs.verifik.co/verifik-es/recursos/flujos-de-proyecto/list-all-project-flows-listar-todos-los-flujos-de-proyecto"
---

# Listar Todos los Flujos de Proyecto

## Endpoint

```
GET https://api.verifik.co/v3/project-flows
```

Recupera una lista de todos los flujos de proyecto con filtrado y paginación opcionales.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros de Consulta

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `page` | number | No | Número de página para paginación |
| `perPage` | number | No | Número de registros por página |
| `type` | string | No | Filtrar por tipo: `onboarding` o `login` |
| `status` | string | No | Filtrar por estado: `draft`, `active`, `paused`, `deleted` |

### Ejemplo de Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v3/project-flows?page=1&perPage=20", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
  });
  console.log(await res.json());
}

run();
```

  
  

```python

url = "https://api.verifik.co/v3/project-flows"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"page": 1, "perPage": 20}
r = requests.get(url, params=params, headers=headers)
print(r.json())
```

### Ejemplo de Respuesta

```json
{
  "data": [
    {
      "_id": "64a1b2c3d4e5f6789012346",
      "project": "64a1b2c3d4e5f6789012345",
      "type": "onboarding",
      "status": "active",
      "version": 3,
      "name": "Onboarding Estándar",
      "createdAt": "2023-07-01T10:00:00.000Z",
      "updatedAt": "2023-07-01T16:45:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 1
  }
}
```
