---
id: actualizar-flujo-proyecto
title: Actualizar Flujo de Proyecto
description: Actualizar la configuración del flujo de proyecto para flujos objetivo personales
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeExamples from '@site/src/components/CodeExamples';

# Actualizar Flujo de Proyecto

Actualizar la configuración de un flujo de proyecto existente. Este endpoint soporta actualizaciones parciales y se enfoca en flujos objetivo personales.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method put">PUT</div>
  <div className="endpoint-url">/v3/project-flows/&#123;id&#125;</div>
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

| Parámetro | Tipo   | Requerido | Descripción                              |
| --------- | ------ | --------- | ---------------------------------------- |
| `id`      | string | Sí        | El identificador único del flujo de proyecto |

## Cuerpo de la Solicitud

El cuerpo de la solicitud soporta actualizaciones parciales. Solo incluye los campos que deseas actualizar.

### Campos Disponibles

| Campo           | Tipo   | Requerido | Descripción                                    |
| --------------- | ------ | --------- | ---------------------------------------------- |
| `target`        | string | No        | Objetivo del flujo (`personal`, `business`)    |
| `type`          | string | No        | Tipo de flujo (`onboarding`, `verification`)   |
| `signUpForm`    | object | No        | Configuración del formulario de registro       |
| `documents`     | object | No        | Configuración de verificación de documentos    |
| `liveness`      | object | No        | Configuración de verificación biométrica       |
| `steps`         | object | No        | Configuración de pasos obligatorios            |
| `integrations`  | object | No        | Configuración de integraciones                 |

### Configuración del Formulario de Registro (signUpForm)

| Campo                      | Tipo    | Requerido | Descripción                                    |
| -------------------------- | ------- | --------- | ---------------------------------------------- |
| `fullName`                 | boolean | No        | Mostrar campo de nombre completo               |
| `fullNameStyle`            | string  | No        | Estilo del nombre (`separate`, `combined`)     |
| `email`                    | boolean | No        | Mostrar campo de email                         |
| `emailGateway`             | string  | No        | Gateway de email (`mailgun`, `sendgrid`)       |
| `phone`                    | boolean | No        | Mostrar campo de teléfono                      |
| `phoneGateway`             | string  | No        | Gateway de teléfono (`whatsapp`, `sms`)        |
| `showTermsAndConditions`   | boolean | No        | Mostrar términos y condiciones                 |
| `showPrivacyNotice`        | boolean | No        | Mostrar aviso de privacidad                    |
| `countryCode`              | boolean | No        | Mostrar selector de código de país             |
| `allowAdditionalFields`    | boolean | No        | Permitir campos adicionales                    |
| `additionalFields`         | array   | No        | Lista de campos adicionales                    |

### Configuración de Documentos (documents)

| Campo                           | Tipo    | Requerido | Descripción                                    |
| ------------------------------- | ------- | --------- | ---------------------------------------------- |
| `attemptLimit`                  | integer | No        | Límite de intentos de verificación             |
| `criminalHistoryVerification`   | boolean | No        | Habilitar verificación de antecedentes penales |
| `informationVerification`       | boolean | No        | Habilitar verificación de información          |
| `screening`                     | boolean | No        | Habilitar screening                            |
| `verificationMethods`           | array   | No        | Métodos de verificación (`SCAN_PROMPT`, `SCAN_STUDIO`) |
| `documentTypes`                 | array   | No        | Tipos de documentos permitidos                 |

### Configuración de Liveness (liveness)

| Campo           | Tipo    | Requerido | Descripción                                    |
| --------------- | ------- | --------- | ---------------------------------------------- |
| `attemptLimit`  | integer | No        | Límite de intentos de verificación             |
| `minScore`      | number  | No        | Puntuación mínima requerida                    |
| `searchMinScore`| number  | No        | Puntuación mínima para búsqueda                |
| `searchMode`    | string  | No        | Modo de búsqueda (`FAST`, `ACCURATE`)          |

### Configuración de Pasos (steps)

| Campo      | Tipo   | Requerido | Descripción                                    |
| ---------- | ------ | --------- | ---------------------------------------------- |
| `document` | string | No        | Paso de documento (`mandatory`, `optional`, `disabled`) |
| `liveness` | string | No        | Paso de liveness (`mandatory`, `optional`, `disabled`) |

### Configuración de Integraciones (integrations)

| Campo         | Tipo   | Requerido | Descripción                                    |
| ------------- | ------ | --------- | ---------------------------------------------- |
| `redirectUrl` | string | No        | URL de redirección después de verificación     |
| `source`      | string | No        | Fuente de integración (`NONE`, `API`, `WEBHOOK`) |
| `strategy`    | string | No        | Estrategia de validación (`none`, `whitelist`, `blacklist`) |
| `apiUrl`      | string | No        | URL de la API externa                          |
| `apiTestType` | string | No        | Tipo de prueba de API (`email`, `phone`)       |
| `apiTestValue`| string | No        | Valor de prueba de API                         |

## Ejemplos de Solicitud

<Tabs>
<TabItem value="documents" label="Actualizar Documentos">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
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
    }
  }}
/>

</TabItem>
<TabItem value="liveness" label="Actualizar Liveness">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
    liveness: {
      attemptLimit: 3,
      minScore: 0.7,
      searchMinScore: 0.85,
      searchMode: "ACCURATE"
    }
  }}
/>

</TabItem>
<TabItem value="integrations" label="Actualizar Integraciones">

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="PUT"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
body={{
    integrations: {
      redirectUrl: "https://ejemplo.com/exito",
      source: "API",
      strategy: "blacklist",
      apiUrl: "https://api.ejemplo.com/verificar",
      apiTestType: "email",
      apiTestValue: "test@ejemplo.com"
    }
  }}
/>

</TabItem>
</Tabs>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
  "data": {
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
      "minScore": 0.7,
      "searchMinScore": 0.85,
      "searchMode": "ACCURATE"
    },
    "steps": {
      "document": "mandatory",
      "liveness": "mandatory"
    },
    "integrations": {
      "redirectUrl": "https://ejemplo.com/exito",
      "source": "API",
      "strategy": "blacklist",
      "apiUrl": "https://api.ejemplo.com/verificar",
      "apiTestType": "email",
      "apiTestValue": "test@ejemplo.com"
    },
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T11:45:00Z"
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
    "message": "No tienes permisos para actualizar este flujo de proyecto",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene permisos para modificar este flujo de proyecto"
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
    "message": "Flujo de proyecto no encontrado",
    "code": "PROJECT_FLOW_NOT_FOUND",
    "details": "No se encontró un flujo de proyecto con el ID proporcionado"
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
- **Configuración de Documentos**: Puedes actualizar tipos de documentos y configuraciones específicas
- **Verificación Biométrica**: Los parámetros de liveness se validan para asegurar valores apropiados
- **Integraciones**: Las configuraciones de API externa se validan antes de guardar

## Casos de Uso Comunes

1. **Configuración de Documentos**: Actualizar tipos de documentos permitidos y configuraciones
2. **Ajustes de Liveness**: Modificar parámetros de verificación biométrica
3. **Integraciones**: Configurar webhooks y APIs externas
4. **Formularios**: Personalizar campos del formulario de registro
5. **Pasos Obligatorios**: Ajustar qué pasos son obligatorios u opcionales
