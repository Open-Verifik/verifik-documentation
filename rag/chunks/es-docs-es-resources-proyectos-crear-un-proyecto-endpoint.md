---
id: "es-docs-es-resources-proyectos-crear-un-proyecto-endpoint"
title: "Crear un proyecto — Endpoint"
sourcePath: "docs-es/resources/proyectos/crear-un-proyecto.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Endpoint"
slug: "/resources/proyectos/crear-un-proyecto"
url: "https://docs.verifik.co/verifik-es/resources/proyectos/crear-un-proyecto"
---

# Crear un proyecto

## Endpoint

```
POST https://api.verifik.co/v3/projects
```

Crea un nuevo proyecto KYC con configuración completa. Puedes crear un proyecto básico con campos mínimos o incluir una configuración de flujo completa en una sola solicitud.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | Sí | Nombre del proyecto (máx. 60 caracteres) |
| `allowedCountries` | array | Sí | Lista de países permitidos |
| `contactEmail` | string | Sí | Correo de contacto (formato válido) |
| `privacyUrl` | string | Sí | URL de política de privacidad |
| `termsAndConditionsUrl` | string | Sí | URL de términos y condiciones |
| `dataProtection` | object | Sí | Información del responsable de protección de datos |
| `identifier` | string | No | Identificador del proyecto |
| `currentStep` | number | No | Paso actual de configuración |
| `lastStep` | number | No | Último paso completado |
| `demoMode` | boolean | No | Activa modo demo para pruebas |
| `demoOTP` | string | No | OTP demo (6 dígitos) - se genera si no se envía |
| `branding` | object | No | Configuración de marca |
| `projectFlow` | object | No | Configuración del flujo del proyecto |
| `projectFlowType` | string | No | Tipo de flujo (requerido si envías projectFlow) |

#### Objeto Data Protection

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `name` | string | Sí | Nombre |
| `email` | string | Sí | Email (formato válido) |
| `address` | string | Sí | Dirección principal |
| `address2` | string | No | Dirección secundaria |
| `city` | string | Sí | Ciudad |
| `country` | string | Sí | País |
| `postalCode` | string | Sí | Código postal (3-12 caracteres) |

#### Objeto Project Flow

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `target` | string | Sí | Audiencia (`personal`) |
| `type` | string | Sí | Tipo de flujo (`onboarding`) |
| `signUpForm` | object | No | Configuración del formulario de registro |
| `documents` | object | No | Ajustes de verificación de documentos |
| `liveness` | object | No | Ajustes de verificación biométrica |
| `steps` | object | No | Configuración de pasos |
| `integrations` | object | No | Ajustes de integraciones |
