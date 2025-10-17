---
id: obtener-proyecto
title: Obtener Proyecto
description: Obtener un proyecto específico por ID
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Obtener Proyecto

Obtener información detallada sobre un proyecto específico por su ID.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method get">GET</div>
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

## Ejemplo de Solicitud

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Ejemplos de Uso

### Obtener Proyecto con Flujo Personal

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

### Obtener Proyecto con Flujo Empresarial

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012346"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "Proyecto KYC Básico",
    "identifier": null,
    "contactEmail": "admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "status": "active",
    "target": "personal",
    "allowedCountries": ["Estados Unidos"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "branding": {
      "backgroundColor": "#ffffff",
      "buttonColor": "#3182ce",
      "buttonTextColor": "#ffffff",
      "logo": "https://ejemplo.com/logo.png"
    },
    "dataProtection": {
      "name": "Jane Smith",
      "email": "dpo@ejemplo.com",
      "address": "456 Oak St",
      "city": "Los Angeles",
      "country": "Estados Unidos",
      "postalCode": "90210"
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
        "attemptLimit": 3,
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
    "message": "ID de proyecto no válido",
    "code": "INVALID_PROJECT_ID",
    "details": "El ID del proyecto proporcionado no es válido"
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
    "message": "No tienes permisos para acceder a este proyecto",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene permisos para ver este proyecto"
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

- **ID del Proyecto**: Debe ser un ObjectId válido de MongoDB
- **Permisos**: Solo puedes acceder a proyectos que pertenecen a tu cuenta
- **Flujo de Proyecto**: El campo `projectFlow` puede ser `null` si el proyecto no tiene un flujo configurado
- **Branding**: Los campos de branding pueden ser `null` si no se han configurado
- **Protección de Datos**: La información de protección de datos es requerida para proyectos activos

## Casos de Uso Comunes

1. **Detalles del Proyecto**: Mostrar información completa de un proyecto específico
2. **Configuración**: Obtener la configuración actual para editar un proyecto
3. **Validación**: Verificar que un proyecto existe antes de realizar operaciones
4. **Integración**: Obtener datos del proyecto para integrar con sistemas externos
5. **Debugging**: Inspeccionar la configuración de un proyecto para resolver problemas
