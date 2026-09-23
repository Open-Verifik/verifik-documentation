---
id: "es-docs-es-recursos-flujos-de-proyecto-flujos-de-proyecto"
title: "Flujos de Proyecto — Descripción General"
sourcePath: "docs-es/recursos/flujos-de-proyecto/flujos-de-proyecto.mdx"
locale: "es"
category: "recursos"
tags:
  - "recursos"
endpoints:
  - "/v3/project-flows"
  - "/v3/project-flows/{flowid}"
sourceAnchor: "Descripción General"
slug: "/recursos/flujos-de-proyecto"
url: "https://docs.verifik.co/verifik-es/recursos/flujos-de-proyecto"
---

# Flujos de Proyecto
**API path(s):** /v3/project-flows, /v3/project-flows/{flowid}

## Descripción General

Los flujos de proyecto son los planos que definen cómo los usuarios verificarán su identidad en tu sistema. Piensa en ellos como el manual de instrucciones que le dice a Verifik exactamente qué pasos seguir, qué información recopilar y qué tan estricto ser durante el proceso de verificación.

### Cómo Funcionan los Flujos de Proyecto

Cada flujo de proyecto es una plantilla de configuración que define el recorrido completo de verificación del usuario. Cuando alguien quiere usar tu sistema, Verifik sigue tu flujo de proyecto paso a paso para asegurar que cumplan con tus requisitos de seguridad y cumplimiento.

Actualmente, los flujos de proyecto admiten estos tipos:

* **onboarding** - Para nuevos usuarios que se registran y crean cuentas
* **login** - Para usuarios existentes que acceden a tu sistema

### Lo que Configuran los Flujos de Proyecto

Los flujos de proyecto son sistemas de configuración integrales que definen cada aspecto de tu proceso de verificación:

#### Experiencia del Usuario
* Qué formularios mostrar y en qué orden
* Qué información es requerida vs. opcional
* Cómo los usuarios pueden enviar documentos
* Si se necesitan firmas

#### Configuración de Seguridad
* Quién puede acceder a tu sistema (lista blanca/lista negra)
* Qué tan estricto ser con la verificación de identidad
* Qué verificaciones de seguridad realizar
* Cómo manejar actividad sospechosa

#### Opciones de Integración
* Qué bases de datos verificar
* Qué servicios externos usar
* Cómo manejar fallos de verificación
* Lógica de negocio y reglas personalizadas

### Endpoints de API

#### Crear un Flujo de Proyecto
```
POST https://api.verifik.co/v3/project-flows
```

#### Listar Todos los Flujos de Proyecto
```
GET https://api.verifik.co/v3/project-flows
```

#### Recuperar un Flujo de Proyecto
```
GET https://api.verifik.co/v3/project-flows/{flowId}
```

#### Actualizar un Flujo de Proyecto
```
PUT https://api.verifik.co/v3/project-flows/{flowId}
```
