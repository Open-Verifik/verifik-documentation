---
id: "es-docs-es-resources-project-flows-create-a-project-flow-endpoint"
title: "Crear un Flujo de Proyecto — Endpoint"
sourcePath: "docs-es/resources/project-flows/create-a-project-flow.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Endpoint"
slug: "/resources/project-flows/create-a-project-flow"
url: "https://docs.verifik.co/verifik-es/resources/project-flows/create-a-project-flow"
---

# Crear un Flujo de Proyecto

## Endpoint

```
POST https://api.verifik.co/v3/project-flows
```

Crea un nuevo flujo de proyecto con configuración personalizada.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros de Cuerpo

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `project` | string | Sí | ID del proyecto padre |
| `type` | string | Sí | Tipo de flujo: `onboarding` o `login` |
| `name` | string | Sí | Nombre del flujo |
| `description` | string | No | Descripción opcional |
| `signUpForm` | object | No | Configuración de formulario de registro |
| `documents` | object | No | Configuración de documentos y métodos de verificación |
| `liveness` | object | No | Configuración de vitalidad y búsqueda |
| `steps` | object | No | Pasos habilitados y su obligatoriedad |
| `integrations` | object | No | URLs de integración y webhooks |

### Ejemplo de Solicitud

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v3/project-flows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      project: "64a1b2c3d4e5f6789012345",
      type: "onboarding",
      name: "Onboarding Estándar",
      description: "Flujo con documentos y vitalidad",
      signUpForm: { fullName: true, email: true, phone: true },
      documents: { attemptLimit: 5, verificationMethods: ["SCAN_PROMPT"] },
      liveness: { attemptLimit: 3, minScore: 0.7 },
      steps: { document: "mandatory", liveness: "mandatory" },
      integrations: { webhook: "64a1b2c3...", redirectUrl: "https://example.com/success" }
    }),
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
payload = {
    "project": "64a1b2c3d4e5f6789012345",
    "type": "onboarding",
    "name": "Onboarding Estándar",
    "description": "Flujo con documentos y vitalidad",
    "signUpForm": {"fullName": True, "email": True, "phone": True},
    "documents": {"attemptLimit": 5, "verificationMethods": ["SCAN_PROMPT"]},
    "liveness": {"attemptLimit": 3, "minScore": 0.7},
    "steps": {"document": "mandatory", "liveness": "mandatory"},
    "integrations": {"webhook": "64a1b2c3...", "redirectUrl": "https://example.com/success"}
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```
