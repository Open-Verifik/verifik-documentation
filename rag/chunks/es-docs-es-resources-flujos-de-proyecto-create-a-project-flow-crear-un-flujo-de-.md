---
id: "es-docs-es-resources-flujos-de-proyecto-create-a-project-flow-crear-un-flujo-de-"
title: "Configuración de Inicio de Sesión — Configuración de Inicio de Sesión"
sourcePath: "docs-es/resources/flujos-de-proyecto/create-a-project-flow-crear-un-flujo-de-proyecto/login-settings-configuracion-de-inicio-de-sesion.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Configuración de Inicio de Sesión"
slug: "/resources/flujos-de-proyecto/create-a-project-flow-crear-un-flujo-de-proyecto/login-settings-configuracion-de-inicio-de-sesion"
url: "https://docs.verifik.co/verifik-es/resources/flujos-de-proyecto/create-a-project-flow-crear-un-flujo-de-proyecto/login-settings-configuracion-de-inicio-de-sesion"
---

# Configuración de Inicio de Sesión

## Configuración de Inicio de Sesión

La configuración de inicio de sesión define cómo los usuarios existentes acceden a tu sistema a través del flujo de proyecto.

### Parámetros de Inicio de Sesión

| Campo | Tipo | Descripción |
| --- | --- | --- |
| `type` | string | Tipo de flujo: debe ser `login` |
| `steps` | object | Pasos habilitados para el inicio de sesión |
| `integrations` | object | URLs de redirección después del login |

### Ejemplo de Configuración

```json
{
  "type": "login",
  "steps": {
    "document": "optional",
    "liveness": "mandatory"
  },
  "integrations": {
    "redirectUrl": "https://example.com/dashboard"
  }
}
```
