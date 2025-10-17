---
id: eliminar-proyecto
title: Eliminar Proyecto
description: Eliminar un proyecto y todos sus datos asociados
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Eliminar Proyecto

Eliminar permanentemente un proyecto y todos sus datos asociados. Esta acción no se puede deshacer.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method delete">DELETE</div>
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

## <AlertTriangle size={20} style={{display: 'inline', marginRight: '8px'}} />Advertencia Importante

:::danger Eliminación Permanente
La eliminación de un proyecto es **permanente e irreversible**. Esto eliminará:
- El proyecto y toda su configuración
- El flujo de proyecto asociado (si existe)
- Todos los datos de verificación relacionados
- Configuraciones de branding y personalización
- Historial de transacciones y logs

**Asegúrate de hacer una copia de seguridad de cualquier dato importante antes de proceder.**
:::

## Ejemplos

### Eliminar Proyecto

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

### Eliminar Proyecto con Confirmación

Primero, verificar que el proyecto existe:

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

Luego proceder con la eliminación:

<CodeExamples
url="/v3/projects/64a1b2c3d4e5f6789012345"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012345"
  }}
/>

## Verificaciones Pre-eliminación

Antes de eliminar un proyecto, considera:

- **Datos de Verificación**: ¿Hay verificaciones en progreso o completadas que necesitas conservar?
- **Configuraciones**: ¿Hay configuraciones específicas que quieres guardar para futuros proyectos?
- **Integraciones**: ¿Hay sistemas externos que dependen de este proyecto?
- **Usuarios**: ¿Hay usuarios que están actualmente usando este proyecto?

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
  "data": {
    "message": "Proyecto eliminado exitosamente",
    "deletedProjectId": "64a1b2c3d4e5f6789012345",
    "deletedAt": "2024-01-15T10:30:00Z"
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
    "message": "No tienes permisos para eliminar este proyecto",
    "code": "FORBIDDEN",
    "details": "Tu cuenta no tiene permisos para eliminar este proyecto"
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
<TabItem value="409" label="409 Conflicto">

```json
{
  "error": {
    "message": "No se puede eliminar el proyecto",
    "code": "DELETE_CONFLICT",
    "details": "El proyecto tiene verificaciones activas o dependencias que impiden su eliminación"
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "status": 409
}
```

</TabItem>
</Tabs>

## Notas de Implementación

- **Eliminación en Cascada**: La eliminación del proyecto también elimina el flujo de proyecto asociado
- **Verificaciones Activas**: Si hay verificaciones en progreso, la eliminación puede fallar
- **Dependencias**: Verifica que no haya sistemas externos dependiendo del proyecto
- **Confirmación**: Siempre verifica que el proyecto existe antes de eliminarlo
- **Logs**: La eliminación se registra en los logs del sistema

## Casos de Uso Comunes

1. **Limpieza de Datos**: Eliminar proyectos de prueba o desarrollo
2. **Reorganización**: Eliminar proyectos obsoletos durante reorganizaciones
3. **Cumplimiento**: Eliminar proyectos para cumplir con solicitudes de eliminación de datos
4. **Migración**: Eliminar proyectos antiguos después de migrar a nuevas configuraciones
5. **Testing**: Limpiar proyectos de prueba después de completar pruebas

## Alternativas a la Eliminación

Si no estás seguro sobre eliminar un proyecto, considera estas alternativas:

- **Pausar Proyecto**: Cambiar el estado a `paused` en lugar de eliminar
- **Archivar Configuración**: Guardar la configuración antes de eliminar
- **Exportar Datos**: Exportar datos importantes antes de la eliminación
- **Desactivar**: Simplemente desactivar el proyecto sin eliminarlo
