---
id: "es-docs-es-services-verifik-access-code-solution-via-api-ejemplo-de-acceso-biome"
title: "Ejemplo de Acceso Biométrico — Configuración"
sourcePath: "docs-es/services/verifik-access-code-solution-via-api/ejemplo-de-acceso-biometrico.mdx"
locale: "es"
category: "services"
tags:
  - "biometric-validations"
  - "services"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Configuración"
slug: "/services/verifik-access-code-solution-via-api/ejemplo-de-acceso-biometrico"
url: "https://docs.verifik.co/verifik-es/services/verifik-access-code-solution-via-api/ejemplo-de-acceso-biometrico"
---

# Ejemplo de Acceso Biométrico
**API path(s):** /v2/biometric-validations

## Configuración

## Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](/verifik-es/resources/proyectos/crear-un-proyecto)
- [Crear un Flujo de Proyecto](/verifik-es/resources/flujos-de-proyecto/create-a-project-flow-crear-un-flujo-de-proyecto)

## Empecemos

El flujo principalmente comienza con la creación de la validación biométrica, luego procedemos con la validación de esa validación biométrica que tiene una condición de tiempo y también ingresando el token JWT en los headers > Authorization una vez que la Validación Biométrica es creada para autorizar la **validación**.

### Paso 1: Crear Validación Biométrica

```http
POST https://api.verifik.co/v2/biometric-validations
Content-Type: application/json
Authorization: Bearer 

{
  "projectId": "your_project_id",
  "faceImage": "base64_encoded_image"
}
```

### Paso 2: Validar Validación Biométrica

```http
POST https://api.verifik.co/v2/biometric-validations/{validation_id}/validate
Content-Type: application/json
Authorization: Bearer 

{
  "faceImage": "base64_encoded_image"
}
```

### Video Tutorial

### Endpoints de API

- [Crear una Validación Biométrica](/verifik-es/resources/crear-una-validacion-biometrica)
- [Validar una Validación Biométrica de Inicio de Sesión de App](/verifik-es/resources/validaciones-biometricas/recuperar-una-validacion-biometrica)
