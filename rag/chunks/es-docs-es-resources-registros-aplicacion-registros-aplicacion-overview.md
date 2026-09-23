---
id: "es-docs-es-resources-registros-aplicacion-registros-aplicacion-overview"
title: "Registros de Aplicación — Overview"
sourcePath: "docs-es/resources/registros-aplicacion/registros-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Overview"
slug: "/resources/registros-en-la-app"
url: "https://docs.verifik.co/verifik-es/resources/registros-en-la-app"
---

# Registros de Aplicación
**API path(s):** /v2/app-registrations, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link, /v2/app-registrations/{id}/sync

## Overview

Los Registros de Aplicación son sesiones de usuario individuales dentro del sistema de Verifik que permiten a las personas pasar por el **proceso de incorporación y verificación** que has configurado en tu Flujo de Proyecto. Piensa en ellos como el viaje real del usuario a través de tu sistema de registro de nuevos usuarios.

### Cómo Funcionan los Registros de Aplicación

Cada Registro de Aplicación representa el intento de un solo usuario de **crear una cuenta y verificar su identidad** usando tu Flujo de Proyecto configurado. Cuando alguien quiere **inscribirse en tu sistema por primera vez**, Verifik crea un Registro de Aplicación para rastrear su progreso a través de los pasos de verificación.

Actualmente, los Registros de Aplicación están diseñados para:

* **incorporación** - Para que nuevos usuarios se inscriban y creen cuentas

### Qué Rastrean los Registros de Aplicación

Los Registros de Aplicación son sistemas de rastreo integrales para procesos de verificación de nuevos usuarios:

#### Progreso del Usuario:
* Completación del formulario de registro
* Estado de verificación de documentos (ID, pasaporte, licencia)
* Resultados de verificación biométrica (selfie + vida)
* Progreso de recopilación de información básica
* Formularios personalizados y firmas
* Resultados de verificación de historial criminal

#### Monitoreo de Seguridad:
* Señales de alerta y preocupaciones de seguridad
* Intentos de validación fallidos
* Control de acceso y seguimiento de intentos
* Detección y prevención de fraude

### Endpoints de la API

#### Crear un Registro de Aplicación
```
POST https://api.verifik.co/v2/app-registrations
```

#### Listar Todos los Registros de Aplicación
```
GET https://api.verifik.co/v2/app-registrations
```

#### Recuperar un Registro de Aplicación
```
GET https://api.verifik.co/v2/app-registrations/{id}
```

#### Sincronizar Estado del Registro de Aplicación
```
PUT https://api.verifik.co/v2/app-registrations/{id}/sync
```

#### Reenviar enlace de registro de aplicación
```
POST https://api.verifik.co/v2/app-registrations/{id}/resend-link
```

Usa este endpoint para generar una URL hospedada nueva cuando el usuario abandonó el flujo. Ver [Reanudar un enrollment incompleto](/verifik-es/smartenroll/reanudar).
