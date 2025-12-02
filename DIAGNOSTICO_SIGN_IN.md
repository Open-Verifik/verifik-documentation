# Diagnóstico: Error en Sign-In URL

## URL Problemática
```
https://staging-access.verifik.co/sign-in/6266193db77ccc8111730c90
```

## Posibles Causas del Error

### 1. **Proyecto no existe en Staging**
El ID `6266193db77ccc8111730c90` es un ID de ejemplo usado en la documentación. Es posible que este proyecto no exista en el ambiente de staging.

**Solución:**
- Verificar que el proyecto existe en staging usando la API:
  ```bash
  GET https://api.verifik.co/v2/projects/6266193db77ccc8111730c90
  Authorization: Bearer YOUR_TOKEN
  ```

### 2. **ProjectFlow no existe o no está activo**
Para que la URL `/sign-in/{project_id}` funcione, el proyecto debe tener un ProjectFlow con:
- `type: "login"`
- `status: "active"` (no "draft" ni "paused")

**Solución:**
- Verificar los ProjectFlows del proyecto:
  ```bash
  GET https://api.verifik.co/v2/project-flows?project=6266193db77ccc8111730c90
  Authorization: Bearer YOUR_TOKEN
  ```
- Asegurarse de que existe un ProjectFlow con:
  - `type: "login"`
  - `status: "active"`

### 3. **ProjectFlow sin configuración de login**
El ProjectFlow debe tener `loginSettings` configurado correctamente.

**Verificar:**
```json
{
  "loginSettings": {
    "email": true,  // o "phone": true, o "faceLiveness": true
    "emailGateway": "mailgun",  // si email está habilitado
    "phoneGateway": "sms",  // si phone está habilitado
    "steps": ["email", "phone", "liveness"]  // al menos uno debe estar
  }
}
```

### 4. **Proyecto deshabilitado o sin acceso**
El proyecto podría estar deshabilitado o no tener acceso en staging.

**Errores comunes:**
- `404: Project_not_found_or_featured_disabled`
- `403: Unauthorized`

### 5. **URL incorrecta para staging**
Verificar que la URL base sea correcta para staging. Según la documentación:
- Producción: `https://access.verifik.co/sign-in/{project_id}`
- Staging: `https://staging-access.verifik.co/sign-in/{project_id}`

## Pasos para Diagnosticar

### Paso 1: Verificar que el proyecto existe
```bash
curl -X GET "https://api.verifik.co/v2/projects/6266193db77ccc8111730c90" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Paso 2: Verificar ProjectFlows del proyecto
```bash
curl -X GET "https://api.verifik.co/v2/project-flows?project=6266193db77ccc8111730c90" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Paso 3: Verificar que existe un ProjectFlow activo tipo "login"
Buscar en la respuesta un ProjectFlow con:
- `type: "login"`
- `status: "active"`

### Paso 4: Verificar configuración de loginSettings
El ProjectFlow debe tener `loginSettings` configurado con al menos un método habilitado.

## Soluciones Recomendadas

### Si el proyecto no existe:
1. Crear el proyecto en staging
2. Crear un ProjectFlow con `type: "login"`
3. Configurar `loginSettings` apropiadamente
4. Activar el ProjectFlow (`status: "active"`)

### Si el ProjectFlow no está activo:
1. Actualizar el ProjectFlow para cambiar `status` a `"active"`:
   ```bash
   PATCH https://api.verifik.co/v2/project-flows/{project_flow_id}
   {
     "status": "active"
   }
   ```

### Si falta configuración:
1. Actualizar el ProjectFlow con `loginSettings`:
   ```json
   {
     "loginSettings": {
       "email": true,
       "emailGateway": "mailgun",
       "phone": false,
       "faceLiveness": false,
       "steps": ["email"]
     }
   }
   ```

## Referencias de la Documentación

- [Create a Project Flow](/resources/create-a-project-flow)
- [The Project Flow Object](/resources/the-project-flow-object)
- [Smart Access Project Flow](/resources/project-flows/create-a-project-flow/smart-access-project-flow)

## Nota Importante

El ID `6266193db77ccc8111730c90` es un ID de ejemplo usado en la documentación. Si estás usando este ID en staging, es probable que no exista. Debes usar el ID de tu proyecto real en staging.


