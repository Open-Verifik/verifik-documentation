---
id: actualizar-proyecto
title: Actualizar Proyecto
description: Actualizar la configuración del proyecto con enfoque paso a paso que coincide con el asistente frontend
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Actualizar Proyecto

Actualizar la configuración del proyecto usando un enfoque paso a paso que coincide con el asistente frontend de SmartEnroll. Este endpoint soporta actualizaciones parciales, permitiéndote modificar secciones específicas sin afectar otras.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method put">PUT</div>
  <div className="endpoint-url">/v3/projects/&#123;id&#125;</div>
</div>

## <Lock size={20} style={{display: 'inline', marginRight: '8px'}} />Autenticación

<div className="auth-card">
  <div className="auth-header">
    <h4><Lock size={16} style={{display: 'inline', marginRight: '6px'}} />Token JWT Requerido</h4>
  </div>
  <div className="auth-body">
    <p>Incluye tu token JWT en el header de Authorization para todas las solicitudes:</p>
    <div className="code-block">
      <code>Authorization: Bearer &lt;tu_token_jwt&gt;</code>
    </div>
  </div>
</div>

## Parámetros de Ruta

| Parámetro | Tipo   | Requerido | Descripción                          |
| --------- | ------ | --------- | ------------------------------------ |
| `id`      | string | Sí        | El identificador único del proyecto |

## Cuerpo de la Solicitud

El cuerpo de la solicitud soporta actualizaciones parciales. Solo incluye los campos que deseas actualizar.

### Campos Disponibles

| Campo                    | Tipo    | Requerido | Descripción                                                      |
| ------------------------ | ------- | --------- | ---------------------------------------------------------------- |
| `name`                   | string  | No        | Nombre del proyecto                                              |
| `allowedCountries`       | array   | No        | Lista de países permitidos                                       |
| `contactEmail`           | string  | No        | Email de contacto del proyecto                                   |
| `privacyUrl`             | string  | No        | URL de la política de privacidad                                 |
| `termsAndConditionsUrl`  | string  | No        | URL de términos y condiciones                                    |
| `dataProtection`         | object  | No        | Información de protección de datos (DPO)                         |
| `branding`               | object  | No        | Configuración de branding personalizado                          |
| `projectFlow`            | object  | No        | Configuración del flujo de proyecto                              |
| `projectFlowType`        | string  | No        | Tipo de flujo de proyecto (`onboarding`, `verification`)         |
| `demoMode`               | boolean | No        | Habilitar/deshabilitar modo demo                                 |
| `demoOTP`                | string  | No        | OTP personalizado para modo demo (6 dígitos)                     |

### Configuración de Protección de Datos (dataProtection)

| Campo         | Tipo   | Requerido | Descripción                    |
| ------------- | ------ | --------- | ------------------------------ |
| `name`        | string | No        | Nombre del DPO                 |
| `email`       | string | No        | Email del DPO                  |
| `address`     | string | No        | Dirección del DPO              |
| `city`        | string | No        | Ciudad del DPO                 |
| `country`     | string | No        | País del DPO                   |
| `postalCode`  | string | No        | Código postal del DPO          |

### Configuración de Branding (branding)

| Campo              | Tipo   | Requerido | Descripción                    |
| ------------------ | ------ | --------- | ------------------------------ |
| `backgroundColor`  | string | No        | Color de fondo (hex)           |
| `buttonColor`      | string | No        | Color del botón (hex)          |
| `buttonTextColor`  | string | No        | Color del texto del botón (hex) |
| `logo`             | string | No        | URL del logo                   |

### Configuración del Flujo de Proyecto (projectFlow)

| Campo           | Tipo   | Requerido | Descripción                                    |
| --------------- | ------ | --------- | ---------------------------------------------- |
| `target`        | string | No        | Objetivo del flujo (`personal`, `business`)    |
| `type`          | string | No        | Tipo de flujo (`onboarding`, `verification`)   |
| `signUpForm`    | object | No        | Configuración del formulario de registro       |
| `documents`     | object | No        | Configuración de verificación de documentos    |
| `liveness`      | object | No        | Configuración de verificación biométrica       |
| `steps`         | object | No        | Configuración de pasos obligatorios            |
| `integrations`  | object | No        | Configuración de integraciones                 |

## Ejemplos de Solicitud

### Actualizar Solo Protección de Datos

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    dataProtection: {
      name: "Nombre DPO Actualizado",
      email: "dpo-actualizado@ejemplo.com",
      address: "456 Nueva Dirección St",
      city: "San Francisco",
      country: "Estados Unidos",
      postalCode: "94105"
    }
  }}
/>

### Actualizar Configuración de Documentos

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    projectFlow: {
      documents: {
        attemptLimit: 5,
        criminalHistoryVerification: true,
        verificationMethods: ["SCAN_PROMPT"],
        documentTypes: [
          {
            country: "Estados Unidos",
            configurations: [
              {
                active: true,
                documentCategory: "government_id"
              }
            ]
          }
        ]
      },
      steps: {
        document: "mandatory"
      }
    }
  }}
/>

### Actualizar Branding

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
body={{
    branding: {
      backgroundColor: "#1a365d",
      buttonColor: "#3182ce",
      buttonTextColor: "#ffffff",
      logo: "https://ejemplo.com/logo.png"
    }
  }}
/>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "Nombre de Proyecto Actualizado",
    "identifier": null,
    "contactEmail": "nuevo-admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "status": "draft",
    "target": "personal",
    "allowedCountries": ["Estados Unidos"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T11:45:00Z",
    "branding": {
      "backgroundColor": "#1a365d",
      "buttonColor": "#3182ce",
      "buttonTextColor": "#ffffff",
      "logo": "https://ejemplo.com/logo.png"
    },
    "dataProtection": {
      "name": "Nombre DPO Actualizado",
      "email": "dpo-actualizado@ejemplo.com",
      "address": "456 Nueva Dirección St",
      "city": "San Francisco",
      "country": "Estados Unidos",
      "postalCode": "94105"
    },
    "projectFlow": {
      "_id": "64a1b2c3d4e5f6789012346",
      "target": "personal",
      "type": "onboarding",
      "signUpForm": {
        "fullName": true,
        "fullNameStyle": "separate",
        "email": true,
        "emailGateway": "mailgun",
        "phone": true,
        "phoneGateway": "whatsapp",
        "showTermsAndConditions": true,
        "showPrivacyNotice": true,
        "countryCode": true,
        "allowAdditionalFields": false,
        "additionalFields": []
      },
      "documents": {
        "attemptLimit": 5,
        "criminalHistoryVerification": true,
        "informationVerification": true,
        "screening": true,
        "verificationMethods": ["SCAN_PROMPT"],
        "documentTypes": [
          {
            "country": "Estados Unidos",
            "configurations": [
              {
                "active": true,
                "documentCategory": "government_id"
              }
            ]
          }
        ]
      },
      "liveness": {
        "attemptLimit": 3,
        "minScore": 0.65,
        "searchMinScore": 0.8,
        "searchMode": "FAST"
      },
      "steps": {
        "document": "mandatory",
        "liveness": "mandatory"
      },
      "integrations": {
        "redirectUrl": "https://ejemplo.com/exito",
        "source": "NONE",
        "strategy": "none"
      }
    },
    "projectFlowType": "onboarding",
    "demoMode": false
  }
}
```

## <XCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Respuestas de Error

<Tabs>
<TabItem value="400" label="400 Solicitud Incorrecta">

```json
{
  "error": {
    "message": "Datos de solicitud inválidos",
    "code": "VALIDATION_ERROR",
    "details": "Los datos proporcionados no cumplen con los requisitos de validación"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 400
}
```

</TabItem>
<TabItem value="401" label="401 No Autorizado">

```json
{
  "error": {
    "message": "Token de autenticación no válido o expirado",
    "code": "UNAUTHORIZED",
    "details": "El token JWT proporcionado no es válido o ha expirado"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 401
}
```

</TabItem>
<TabItem value="403" label="403 Prohibido">

```json
{
  "error": {
    "message": "No tienes permisos para actualizar este proyecto",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene permisos para modificar este proyecto"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 403
}
```

</TabItem>
<TabItem value="404" label="404 No Encontrado">

```json
{
  "error": {
    "message": "Proyecto no encontrado",
    "code": "PROJECT_NOT_FOUND",
    "details": "No se encontró un proyecto con el ID proporcionado"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 404
}
```

</TabItem>
</Tabs>

## Notas de Implementación

- **Actualizaciones Parciales**: Solo incluye los campos que deseas actualizar
- **Validación**: Los campos proporcionados se validan según las reglas del modelo
- **Flujo de Proyecto**: Puedes actualizar secciones específicas del flujo sin afectar otras
- **Branding**: Los campos de branding se actualizan completamente cuando se proporcionan
- **Modo Demo**: Al actualizar el modo demo, el `demoOTP` se devuelve en la respuesta si está habilitado

## Casos de Uso Comunes

1. **Configuración Paso a Paso**: Actualizar secciones específicas del proyecto gradualmente
2. **Cambios de Branding**: Actualizar la apariencia visual del proyecto
3. **Configuración de Documentos**: Modificar los tipos de documentos y configuraciones
4. **Integraciones**: Actualizar webhooks y configuraciones de integración
5. **Modo Demo**: Habilitar/deshabilitar el modo demo para pruebas
