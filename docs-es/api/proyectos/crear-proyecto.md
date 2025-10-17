---
id: crear-proyecto
title: Crear Proyecto
description: Crear un nuevo proyecto KYC con configuración opcional de flujo de proyecto
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Crear Proyecto

Crear un nuevo proyecto KYC con configuración completa. Puedes crear un proyecto básico con campos mínimos o incluir una configuración completa de flujo de proyecto en una sola solicitud.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method post">POST</div>
  <div className="endpoint-url">/v3/projects</div>
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

## Cuerpo de la Solicitud

### Proyecto Básico (Campos Mínimos Requeridos)

```json
{
    "name": "Mi Proyecto KYC",
    "allowedCountries": ["Estados Unidos", "Canadá"],
    "contactEmail": "admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "dataProtection": {
        "name": "John Doe",
        "email": "dpo@ejemplo.com",
        "address": "123 Main St",
        "city": "Nueva York",
        "country": "Estados Unidos",
        "postalCode": "10001"
    }
}
```

### Proyecto Completo con Flujo de Proyecto (Recomendado)

```json
{
    "name": "Mi Proyecto KYC",
    "allowedCountries": ["Estados Unidos", "Canadá"],
    "contactEmail": "admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "dataProtection": {
        "name": "John Doe",
        "email": "dpo@ejemplo.com",
        "address": "123 Main St",
        "city": "Nueva York",
        "country": "Estados Unidos",
        "postalCode": "10001"
    },
    "projectFlow": {
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
            "additionalFields": [],
            "allowAdditionalFields": false
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
    "projectFlowType": "onboarding"
}
```

## Parámetros de Solicitud

### Campos del Proyecto

| Campo                    | Tipo    | Requerido | Descripción                                                      |
| ------------------------ | ------- | --------- | ---------------------------------------------------------------- |
| `name`                   | string  | Sí        | Nombre del proyecto                                              |
| `allowedCountries`       | array   | Sí        | Lista de países permitidos                                       |
| `contactEmail`           | string  | Sí        | Email de contacto del proyecto                                   |
| `privacyUrl`             | string  | Sí        | URL de la política de privacidad                                 |
| `termsAndConditionsUrl`  | string  | Sí        | URL de términos y condiciones                                    |
| `dataProtection`         | object  | Sí        | Información de protección de datos (DPO)                         |
| `branding`               | object  | No        | Configuración de branding personalizado                          |
| `projectFlow`            | object  | No        | Configuración del flujo de proyecto                              |
| `projectFlowType`        | string  | No        | Tipo de flujo de proyecto (`onboarding`, `verification`)         |
| `demoMode`               | boolean | No        | Habilitar modo demo (por defecto: false)                        |
| `demoOTP`                | string  | No        | OTP personalizado para modo demo (6 dígitos)                     |

### Configuración de Protección de Datos (dataProtection)

| Campo         | Tipo   | Requerido | Descripción                    |
| ------------- | ------ | --------- | ------------------------------ |
| `name`        | string | Sí        | Nombre del DPO                 |
| `email`       | string | Sí        | Email del DPO                  |
| `address`     | string | Sí        | Dirección del DPO              |
| `city`        | string | Sí        | Ciudad del DPO                 |
| `country`     | string | Sí        | País del DPO                   |
| `postalCode`  | string | Sí        | Código postal del DPO          |

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
| `target`        | string | Sí        | Objetivo del flujo (`personal`, `business`)    |
| `type`          | string | Sí        | Tipo de flujo (`onboarding`, `verification`)   |
| `signUpForm`    | object | No        | Configuración del formulario de registro       |
| `documents`     | object | No        | Configuración de verificación de documentos    |
| `liveness`      | object | No        | Configuración de verificación biométrica       |
| `steps`         | object | No        | Configuración de pasos obligatorios            |
| `integrations`  | object | No        | Configuración de integraciones                 |

## Ejemplos de Solicitud

<Tabs>
<TabItem value="basic" label="Proyecto Básico">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Proyecto KYC Básico",
    allowedCountries: ["Estados Unidos"],
    contactEmail: "admin@ejemplo.com",
    privacyUrl: "https://ejemplo.com/privacidad",
    termsAndConditionsUrl: "https://ejemplo.com/terminos",
    dataProtection: {
      name: "Jane Smith",
      email: "dpo@ejemplo.com",
      address: "456 Oak St",
      city: "Los Angeles",
      country: "Estados Unidos",
      postalCode: "90210"
    }
  }}
/>

</TabItem>
<TabItem value="complete" label="Proyecto Completo con Flujo de Proyecto">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Proyecto KYC Completo",
    allowedCountries: ["Estados Unidos", "Canadá"],
    contactEmail: "admin@ejemplo.com",
    privacyUrl: "https://ejemplo.com/privacidad",
    termsAndConditionsUrl: "https://ejemplo.com/terminos",
    dataProtection: {
      name: "John Doe",
      email: "dpo@ejemplo.com",
      address: "123 Main St",
      city: "Nueva York",
      country: "Estados Unidos",
      postalCode: "10001"
    },
    projectFlow: {
      target: "personal",
      type: "onboarding",
      signUpForm: {
        fullName: true,
        fullNameStyle: "separate",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "whatsapp",
        showTermsAndConditions: true,
        showPrivacyNotice: true
      },
      documents: {
        attemptLimit: 3,
        criminalHistoryVerification: true,
        informationVerification: true,
        screening: true,
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
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.8,
        searchMode: "FAST"
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      },
      integrations: {
        redirectUrl: "https://ejemplo.com/exito",
        source: "NONE",
        strategy: "none"
      }
    },
    projectFlowType: "onboarding"
  }}
/>

</TabItem>
<TabItem value="demo" label="Proyecto en Modo Demo">

<CodeExamples
url="/v3/projects"
method="POST"
body={{
    name: "Proyecto KYC Demo",
    demoMode: true,
    allowedCountries: ["Estados Unidos"],
    contactEmail: "demo@ejemplo.com",
    privacyUrl: "https://ejemplo.com/privacidad",
    termsAndConditionsUrl: "https://ejemplo.com/terminos",
    dataProtection: {
      name: "DPO Demo",
      email: "dpo@ejemplo.com",
      address: "123 Calle Demo",
      city: "Ciudad Demo",
      country: "Estados Unidos",
      postalCode: "12345"
    }
  }}
/>

</TabItem>
</Tabs>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (201 Creado)

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "Proyecto KYC Básico",
    "identifier": null,
    "contactEmail": "admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "status": "draft",
    "target": "personal",
    "allowedCountries": ["Estados Unidos"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "branding": {
      "backgroundColor": "#ffffff",
      "buttonColor": "#3182ce",
      "buttonTextColor": "#ffffff",
      "logo": null
    },
    "dataProtection": {
      "name": "Jane Smith",
      "email": "dpo@ejemplo.com",
      "address": "456 Oak St",
      "city": "Los Angeles",
      "country": "Estados Unidos",
      "postalCode": "90210"
    },
    "projectFlow": null,
    "projectFlowType": null,
    "demoMode": false
  }
}
```

### Respuesta con Flujo de Proyecto

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "Proyecto KYC Completo",
    "identifier": null,
    "contactEmail": "admin@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "status": "draft",
    "target": "personal",
    "allowedCountries": ["Estados Unidos", "Canadá"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "branding": {
      "backgroundColor": "#ffffff",
      "buttonColor": "#3182ce",
      "buttonTextColor": "#ffffff",
      "logo": null
    },
    "dataProtection": {
      "name": "John Doe",
      "email": "dpo@ejemplo.com",
      "address": "123 Main St",
      "city": "Nueva York",
      "country": "Estados Unidos",
      "postalCode": "10001"
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

### Respuesta en Modo Demo

```json
{
  "data": {
    "_id": "64a1b2c3d4e5f6789012345",
    "name": "Proyecto KYC Demo",
    "identifier": null,
    "contactEmail": "demo@ejemplo.com",
    "privacyUrl": "https://ejemplo.com/privacidad",
    "termsAndConditionsUrl": "https://ejemplo.com/terminos",
    "status": "draft",
    "target": "personal",
    "allowedCountries": ["Estados Unidos"],
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "branding": {
      "backgroundColor": "#ffffff",
      "buttonColor": "#3182ce",
      "buttonTextColor": "#ffffff",
      "logo": null
    },
    "dataProtection": {
      "name": "DPO Demo",
      "email": "dpo@ejemplo.com",
      "address": "123 Calle Demo",
      "city": "Ciudad Demo",
      "country": "Estados Unidos",
      "postalCode": "12345"
    },
    "projectFlow": null,
    "projectFlowType": null,
    "demoMode": true,
    "demoOTP": "123456"
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
    "message": "No tienes permisos para crear proyectos",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene permisos para crear nuevos proyectos"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 403
}
```

</TabItem>
<TabItem value="409" label="409 Conflicto">

```json
{
  "error": {
    "message": "Ya existe un proyecto con este nombre",
    "code": "DUPLICATE_PROJECT",
    "details": "Un proyecto con el mismo nombre ya existe en tu cuenta"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 409
}
```

</TabItem>
</Tabs>

## Notas de Implementación

- **Campos Requeridos**: `name`, `allowedCountries`, `contactEmail`, `privacyUrl`, `termsAndConditionsUrl`, y `dataProtection` son obligatorios
- **Países Permitidos**: Debe ser una lista de países válidos según los códigos de país ISO
- **URLs**: Las URLs de privacidad y términos deben ser válidas y accesibles
- **Protección de Datos**: La información del DPO es requerida para cumplimiento legal
- **Flujo de Proyecto**: Es opcional pero recomendado para proyectos completos
- **Modo Demo**: Útil para pruebas sin usar servicios reales

## Casos de Uso Comunes

1. **Proyecto Básico**: Crear un proyecto con configuración mínima para configurar después
2. **Proyecto Completo**: Crear un proyecto con flujo completo en una sola solicitud
3. **Modo Demo**: Crear un proyecto de prueba para desarrollo y testing
4. **Integración Inicial**: Establecer la configuración base antes de personalizar
5. **Configuración por Pasos**: Crear el proyecto básico y luego actualizar el flujo por separado
