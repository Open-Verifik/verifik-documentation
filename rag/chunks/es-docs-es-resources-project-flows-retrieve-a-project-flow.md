---
id: "es-docs-es-resources-project-flows-retrieve-a-project-flow"
title: "Recuperar un Flujo de Proyecto — Endpoint"
sourcePath: "docs-es/resources/project-flows/retrieve-a-project-flow.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Endpoint"
slug: "/resources/project-flows/retrieve-a-project-flow"
url: "https://docs.verifik.co/verifik-es/resources/project-flows/retrieve-a-project-flow"
---

# Recuperar un Flujo de Proyecto

## Endpoint

```
GET https://api.verifik.co/v3/project-flows/{id}
```

Recupera un flujo de proyecto específico usando su identificador único.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `id` | string | Sí | ID del flujo de proyecto a recuperar |

### Ejemplo de Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const flowId = "64a1b2c3d4e5f6789012346";
  const res = await fetch(`https://api.verifik.co/v3/project-flows/${flowId}`, {
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

flow_id = "64a1b2c3d4e5f6789012346"
url = f"https://api.verifik.co/v3/project-flows/{flow_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
r = requests.get(url, headers=headers)
print(r.json())
```

### Ejemplo de Respuesta

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012346",
    "project": "64a1b2c3d4e5f6789012345",
    "type": "onboarding",
    "status": "active",
    "version": 3,
    "name": "Onboarding Estándar",
    "description": "Flujo con documentos y vitalidad",
    "signUpForm": { "fullName": true, "email": true, "phone": true },
    "documents": { "attemptLimit": 5, "verificationMethods": ["SCAN_PROMPT"] },
    "liveness": { "attemptLimit": 3, "minScore": 0.7 },
    "steps": { "document": "mandatory", "liveness": "mandatory" },
    "integrations": { "webhook": "64a1b2c3...", "redirectUrl": "https://example.com/success" },
    "createdAt": "2023-07-01T10:00:00.000Z",
    "updatedAt": "2023-07-01T16:45:00.000Z"
  }
}
```
