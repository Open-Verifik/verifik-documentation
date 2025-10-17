---
id: eliminar-flujo-proyecto
title: Eliminar Flujo de Proyecto
description: Eliminar un flujo de proyecto y todos sus datos asociados
---

import { Rocket, Lock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import CodeExamples from '@site/src/components/CodeExamples';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Eliminar Flujo de Proyecto

Eliminar permanentemente un flujo de proyecto y todos sus datos asociados. Esta acción no se puede deshacer.

## <Rocket size={20} style={{display: 'inline', marginRight: '8px'}} />Endpoint

<div className="endpoint-card">
  <div className="endpoint-method delete">DELETE</div>
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

| Parámetro | Tipo   | Requerido | Descripción                                  |
| --------- | ------ | --------- | -------------------------------------------- |
| `id`      | string | Sí        | El identificador único del flujo de proyecto |

## <AlertTriangle size={20} style={{display: 'inline', marginRight: '8px'}} />Advertencia Importante

:::danger Eliminación Permanente
La eliminación de un flujo de proyecto es **permanente e irreversible**. Esto eliminará:

-   El flujo de proyecto y toda su configuración
-   Configuraciones de formularios de registro
-   Configuraciones de verificación de documentos
-   Configuraciones de verificación biométrica
-   Configuraciones de integraciones
-   Historial de configuraciones y logs

**Asegúrate de hacer una copia de seguridad de cualquier configuración importante antes de proceder.**
:::

## Ejemplos

### Eliminar Flujo de Proyecto

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

### Eliminar Flujo de Proyecto con Confirmación

Primero, verificar que el flujo de proyecto existe:

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="GET"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

Luego proceder con la eliminación:

<CodeExamples
url="/v3/project-flows/64a1b2c3d4e5f6789012346"
method="DELETE"
params={{
    id: "64a1b2c3d4e5f6789012346"
  }}
/>

## Verificaciones Pre-eliminación

Antes de eliminar un flujo de proyecto, considera:

-   **Proyectos Asociados**: ¿Hay proyectos que dependen de este flujo de proyecto?
-   **Configuraciones**: ¿Hay configuraciones específicas que quieres guardar para futuros flujos?
-   **Integraciones**: ¿Hay sistemas externos que dependen de este flujo?
-   **Verificaciones**: ¿Hay verificaciones en progreso que usan este flujo?

## <CheckCircle size={20} style={{display: 'inline', marginRight: '8px'}} />Formato de Respuesta

### <CheckCircle size={18} style={{display: 'inline', marginRight: '6px'}} />Respuesta Exitosa (200 OK)

```json
{
	"data": {
		"message": "Flujo de proyecto eliminado exitosamente",
		"deletedProjectFlowId": "64a1b2c3d4e5f6789012346",
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
		"message": "ID de flujo de proyecto no válido",
		"code": "INVALID_PROJECT_FLOW_ID",
		"details": "El ID del flujo de proyecto proporcionado no es válido"
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
		"message": "No tienes permisos para eliminar este flujo de proyecto",
		"code": "FORBIDDEN",
		"details": "Tu cuenta no tiene permisos para eliminar este flujo de proyecto"
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
<TabItem value="409" label="409 Conflicto">

```json
{
	"error": {
		"message": "No se puede eliminar el flujo de proyecto",
		"code": "DELETE_CONFLICT",
		"details": "El flujo de proyecto tiene proyectos asociados o verificaciones activas que impiden su eliminación"
	},
	"timestamp": "2024-01-15T10:30:00Z",
	"status": 409
}
```

</TabItem>
</Tabs>

## Notas de Implementación

-   **Eliminación en Cascada**: La eliminación del flujo de proyecto también elimina todas las configuraciones asociadas
-   **Proyectos Asociados**: Si hay proyectos que usan este flujo, la eliminación puede fallar
-   **Verificaciones Activas**: Si hay verificaciones en progreso usando este flujo, la eliminación puede fallar
-   **Dependencias**: Verifica que no haya sistemas externos dependiendo del flujo
-   **Confirmación**: Siempre verifica que el flujo existe antes de eliminarlo
-   **Logs**: La eliminación se registra en los logs del sistema

## Casos de Uso Comunes

1. **Limpieza de Configuraciones**: Eliminar flujos de proyecto de prueba o desarrollo
2. **Reorganización**: Eliminar flujos obsoletos durante reorganizaciones
3. **Cumplimiento**: Eliminar flujos para cumplir con solicitudes de eliminación de datos
4. **Migración**: Eliminar flujos antiguos después de migrar a nuevas configuraciones
5. **Testing**: Limpiar flujos de prueba después de completar pruebas

## Alternativas a la Eliminación

Si no estás seguro sobre eliminar un flujo de proyecto, considera estas alternativas:

-   **Desactivar Flujo**: Cambiar la configuración para desactivar el flujo sin eliminarlo
-   **Archivar Configuración**: Guardar la configuración antes de eliminar
-   **Exportar Datos**: Exportar configuraciones importantes antes de la eliminación
-   **Crear Nuevo Flujo**: Crear un nuevo flujo con la configuración deseada
-   **Actualizar Proyectos**: Actualizar proyectos para usar un flujo diferente

## Impacto en Proyectos Asociados

Al eliminar un flujo de proyecto, considera el impacto en:

-   **Proyectos Activos**: Los proyectos que usan este flujo pueden verse afectados
-   **Verificaciones en Progreso**: Las verificaciones en curso pueden fallar
-   **Configuraciones**: Las configuraciones personalizadas se perderán
-   **Integraciones**: Las integraciones configuradas se perderán
-   **Historial**: El historial de configuraciones se perderá
