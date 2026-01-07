---
id: acceso
title: Access
description: Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API
slug: /acceso
---

# Access

Todo lo que Acceso Inteligente tiene para ofrecer pero a nivel de API, dando la flexibilidad de codificar una solución personalizada basada en las necesidades de tu empresa.

## Resumen

La API de Acceso proporciona acceso programático a toda la funcionalidad de Acceso Inteligente, permitiéndote construir flujos de autenticación personalizados que se integren perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o quieren integrar autenticación en sus aplicaciones existentes.

## Guía de Inicio Rápido

Empecemos diciendo que el camino **óptimo** es: Configurar todo en nuestra [aplicación web](https://app.verifik.co) (usando nuestra UI para guardar todo lo relacionado con la configuración ya que no hay necesidad de guardar todo vía API). Si aún quieres seguir todo vía API, listaré todos los endpoints que necesitan ser llamados para configurarlo manualmente o cambiar la información vía API también.

### Pasos de Configuración

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>1. Crear un Proyecto</h3>
      </div>
      <div className="card__body">
        <p>Comienza creando un nuevo proyecto en la plataforma Verifik para organizar tus flujos de autenticación.</p>
        <a href="#" className="button button--primary">Crear Proyecto</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>2. Crear un Flujo de Proyecto</h3>
      </div>
      <div className="card__body">
        <p>Define el flujo de autenticación con type = "login" para tu proyecto.</p>
        <a href="#" className="button button--primary">Crear Flujo</a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>3. Configurar Métodos de Inicio de Sesión</h3>
      </div>
      <div className="card__body">
        <p>Configura los métodos de autenticación que quieres soportar.</p>
        <a href="#" className="button button--primary">Configurar Métodos</a>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>4. Conexión de Base de Datos</h3>
      </div>
      <div className="card__body">
        <p>Conecta tu base de datos de usuarios existente al sistema de autenticación.</p>
        <a href="#" className="button button--primary">Conectar BD</a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--12">
    <div className="card">
      <div className="card__header">
        <h3>5. Configurar Webhooks</h3>
      </div>
      <div className="card__body">
        <p>Configura webhooks para recibir notificaciones en tiempo real para eventos de autenticación.</p>
        <a href="#" className="button button--primary">Configurar Webhooks</a>
      </div>
    </div>
  </div>
</div>

## Métodos de Autenticación

Elige entre tres métodos de autenticación poderosos, cada uno con soporte API integral:

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📧 Acceso por Correo</h3>
      </div>
      <div className="card__body">
        <p>Envía y verifica códigos OTP vía correo electrónico para autenticación segura.</p>
        <a href="#email-access-example" className="button button--primary">Ver Ejemplo</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>📱 Acceso por Teléfono</h3>
      </div>
      <div className="card__body">
        <p>Envía y verifica códigos OTP vía SMS y WhatsApp.</p>
        <a href="#phone-access-example" className="button button--primary">Ver Ejemplo</a>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>👤 Acceso Biométrico</h3>
      </div>
      <div className="card__body">
        <p>Reconocimiento facial y detección de vida para autenticación segura.</p>
        <a href="#biometric-access-example" className="button button--primary">Ver Ejemplo</a>
      </div>
    </div>
  </div>
</div>

## Referencia de API

### Autenticación

Todas las solicitudes de API requieren un token JWT válido. Incluye el token en el header de Authorization:

```bash
Authorization: Bearer <your_jwt_token>
```

### URL Base

```bash
https://api.verifik.co/v2/access
```

---

## Ejemplo de Acceso por Correo

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)

### Empecemos

El flujo principalmente comienza con la creación de la validación de correo electrónico, luego procedemos con la validación de esa validación de correo electrónico que tiene una condición de tiempo y también ingresando la contraseña de un solo uso que pertenece a esa validación de correo electrónico.

#### Paso 1: Crear Validación de Correo

```http
POST /email/send-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "email": "user@example.com",
  "project_id": "your_project_id"
}
```

#### Paso 2: Validar OTP de Correo

```http
POST /email/verify-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "email": "user@example.com",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1"
}
```

### Video Tutorial

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/wYJcFnMhtKg" 
    title="Email Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### Endpoints de API

- [Crear una Validación de Correo](#)
- [Validar una Validación de Correo](#)

---

## Ejemplo de Acceso por Teléfono

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)

### Empecemos

El flujo principalmente comienza con la creación de la validación de teléfono, luego procedemos con la validación de esa validación de teléfono que tiene una condición de tiempo y también ingresando la contraseña de un solo uso que pertenece a esa validación de teléfono.

#### Paso 1: Crear Validación de Teléfono (SMS)

```http
POST /phone/send-sms
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Paso 2: Crear Validación de Teléfono (WhatsApp)

```http
POST /phone/send-whatsapp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "project_id": "your_project_id"
}
```

#### Paso 3: Validar OTP de Teléfono

```http
POST /phone/verify-otp
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "phone": "+1234567890",
  "otp": "123456",
  "validation_id": "validation_id_from_step_1_or_2"
}
```

### Video Tutorial

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/QEdQzUL7PpE" 
    title="Phone Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### Endpoints de API

- [Crear una Validación de Teléfono de Registro de App](#)
- [Validar una Validación de Teléfono](#)

---

## Ejemplo de Acceso Biométrico

### Configuración

Si no has creado un proyecto y un projectFlow con la propiedad type = **login**, entonces aquí están los enlaces para eso:

- [Crear un Proyecto](#)
- [Crear un Flujo de Proyecto](#)

### Empecemos

El flujo principalmente comienza con la creación de la validación biométrica, luego procedemos con la validación de esa validación biométrica que tiene una condición de tiempo y también ingresando el token JWT en los headers > Authorization una vez que la Validación Biométrica es creada para autorizar la **validación**.

#### Paso 1: Registrar Rostro

```http
POST /biometric/register-face
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "user_id": "user123",
  "project_id": "your_project_id",
  "face_image": "base64_encoded_image"
}
```

#### Paso 2: Verificar Rostro

```http
POST /biometric/verify-face
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "user_id": "user123",
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

#### Paso 3: Verificación de Vida

```http
POST /biometric/liveness-check
Content-Type: application/json
Authorization: Bearer <your_jwt_token>

{
  "face_image": "base64_encoded_image",
  "validation_id": "validation_id_from_step_1"
}
```

### Video Tutorial

<div className="video-container">
  <iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/0vgyvnFg5QY" 
    title="Biometric Access Example Tutorial" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

### Endpoints de API

- [Crear una Validación Biométrica](#)
- [Validar una Validación Biométrica de Inicio de Sesión de App](#)

---

## Formato de Respuesta

Todas las respuestas de API siguen un formato consistente:

### Respuesta de Éxito

```json
{
  "success": true,
  "data": {
    "validation_id": "val_123456789",
    "expires_at": "2024-01-01T12:00:00Z",
    "status": "pending"
  },
  "message": "Operación completada exitosamente"
}
```

### Respuesta de Error

```json
{
  "success": false,
  "error": "Código OTP inválido",
  "code": "INVALID_OTP",
  "details": {
    "attempts_remaining": 2
  }
}
```

## Límites de Velocidad

- **OTP de Correo**: 5 solicitudes por minuto por correo electrónico
- **OTP de Teléfono**: 3 solicitudes por minuto por número de teléfono
- **Biométrico**: 10 solicitudes por minuto por usuario

## Características de Seguridad

- **Autenticación de Token JWT**: Acceso seguro a API con tokens de tiempo limitado
- **Limitación de Velocidad**: Protección contra ataques de fuerza bruta
- **Expiración de OTP**: Contraseñas de un solo uso de tiempo limitado
- **Detección de Vida**: Previene ataques de suplantación en autenticación biométrica
- **Notificaciones de Webhook**: Monitoreo de eventos de seguridad en tiempo real

## Mejores Prácticas

1. **Siempre valida respuestas**: Verifica el campo `success` antes de procesar datos
2. **Maneja errores elegantemente**: Implementa manejo de errores apropiado para todas las llamadas de API
3. **Almacena tokens de forma segura**: Nunca expongas tokens JWT en código del lado del cliente
4. **Implementa lógica de reintento**: Maneja fallas temporales con retroceso exponencial
5. **Monitorea límites de velocidad**: Rastrea el uso de API para evitar alcanzar límites de velocidad

## Soporte

Para soporte técnico y documentación de API, contacta a nuestro equipo de soporte o visita nuestro portal de desarrolladores.

---

:::tip Consejo Pro
Comienza con la configuración de la aplicación web para la implementación más rápida, luego usa la API para integraciones personalizadas y características avanzadas.
:::

:::warning Aviso de Seguridad
Siempre usa HTTPS en producción y nunca expongas credenciales sensibles en código del lado del cliente.
:::
