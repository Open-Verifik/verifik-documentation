---
id: listar-proyectos
title: Listar Proyectos
description: Obtener todos los proyectos para el usuario autenticado
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Listar Proyectos

Obtener una lista paginada de todos los proyectos asociados con el usuario autenticado.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method get">GET</div>
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

## Parámetros de Consulta

| Parámetro         | Tipo    | Requerido | Descripción                                            |
| ----------------- | ------- | --------- | ------------------------------------------------------ |
| `page`            | integer | No        | Número de página (por defecto: 1)                      |
| `limit`           | integer | No        | Número de elementos por página (por defecto: 10, máx: 100) |
| `like_name`       | string  | No        | Término de búsqueda para el nombre del proyecto        |
| `where_status`    | string  | No        | Filtrar por estado del proyecto (`draft`, `active`, `paused`) |
| `where_target`    | string  | No        | Filtrar por objetivo del proyecto (`personal`, `business`) |
| `where_createdAt` | string  | No        | Filtrar por fecha de creación (formato ISO 8601)       |
| `in_status`       | array   | No        | Filtrar por múltiples estados (`["active", "paused"]`) |

## Ejemplo de Solicitud

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    page: 1,
    limit: 10
  }}
/>

## Ejemplos de Uso

### Filtrar por Estado

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    where_status: "active"
  }}
/>

### Buscar Proyectos

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    like_name: "KYC"
  }}
/>

### Paginación

<CodeExamples
url="/v3/projects"
method="GET"
query={{
    page: 2,
    limit: 20
  }}
/>

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
  "data": [
    {
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
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "pages": 1
  }
}
```

## <XCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Respuestas de Error

<Tabs>
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
    "message": "No tienes permisos para acceder a este recurso",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene los permisos necesarios para listar proyectos"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 403
}
```

</TabItem>
<TabItem value="409" label="409 Solicitud Incorrecta">

```json
{
  "error": {
    "message": "Parámetros de consulta inválidos",
    "code": "BAD_REQUEST",
    "details": "Los parámetros de consulta proporcionados no son válidos"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 409
}
```

</TabItem>
</Tabs>

## Notas de Implementación

- **Paginación**: Usa los parámetros `page` y `limit` para navegar a través de grandes conjuntos de datos
- **Filtros**: Combina múltiples filtros para obtener resultados específicos
- **Búsqueda**: El parámetro `like_name` realiza una búsqueda parcial en el nombre del proyecto
- **Ordenamiento**: Los resultados se ordenan por fecha de creación (más recientes primero)
- **Límites**: El límite máximo por página es 100 elementos

## Casos de Uso Comunes

1. **Dashboard de Proyectos**: Listar todos los proyectos activos para mostrar en un dashboard
2. **Búsqueda de Proyectos**: Permitir a los usuarios buscar proyectos por nombre
3. **Filtrado por Estado**: Mostrar solo proyectos en estado específico (borrador, activo, pausado)
4. **Paginación**: Implementar navegación de páginas para grandes listas de proyectos
5. **Integración con Frontend**: Obtener datos para mostrar en interfaces de usuario personalizadas
