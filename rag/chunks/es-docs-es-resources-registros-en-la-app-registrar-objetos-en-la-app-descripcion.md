---
id: "es-docs-es-resources-registros-en-la-app-registrar-objetos-en-la-app-descripcion"
title: "Registrar Objetos en la App — Descripción"
sourcePath: "docs-es/resources/registros-en-la-app/registrar-objetos-en-la-app.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Descripción"
slug: "/resources/registros-en-la-app/registrar-objetos-en-la-app"
url: "https://docs.verifik.co/verifik-es/resources/registros-en-la-app/registrar-objetos-en-la-app"
---

# Registrar Objetos en la App

## Descripción

Durante el proceso de registro de aplicación, puedes registrar varios objetos relacionados que se crean como parte del flujo de verificación. Estos objetos incluyen validaciones de email, teléfono, biométricas y documentos.

### Objetos que se Pueden Registrar

#### Validación de Email

Cuando se crea una validación de email durante el registro, se asocia automáticamente con el registro de aplicación a través del campo `emailValidation`.

#### Validación de Teléfono

Cuando se crea una validación de teléfono durante el registro, se asocia automáticamente con el registro de aplicación a través del campo `phoneValidation`.

#### Validación Biométrica

Cuando se crea una validación biométrica durante el registro, se asocia automáticamente con el registro de aplicación a través del campo `biometricValidation`.

#### Validación de Documento

Cuando se crea una validación de documento durante el registro, se asocia automáticamente con el registro de aplicación a través del campo `documentValidation`.

#### Persona

Cuando se crea una persona durante la validación biométrica, se asocia automáticamente con el registro de aplicación a través del campo `person`.

### Ejemplo de Registro Completo

```json
{
  "_id": "app_registration_123456789",
  "client": "client_123456789",
  "project": "project_123456789",
  "projectFlow": "flow_123456789",
  "status": "completed",
  "email": "user@example.com",
  "phone": "1234567890",
  "countryCode": "+1",
  "fullName": "John Doe",
  "emailValidation": "email_validation_123456789",
  "phoneValidation": "phone_validation_123456789",
  "biometricValidation": "biometric_validation_123456789",
  "documentValidation": "document_validation_123456789",
  "person": "person_123456789",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:32:00Z"
}
```
