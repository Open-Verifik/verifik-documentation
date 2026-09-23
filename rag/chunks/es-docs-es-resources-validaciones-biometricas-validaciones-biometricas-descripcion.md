---
id: "es-docs-es-resources-validaciones-biometricas-validaciones-biometricas-descripcion"
title: "Validaciones Biométricas — Descripción"
sourcePath: "docs-es/resources/validaciones-biometricas/validaciones-biometricas.mdx"
locale: "es"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoint: "/v2/biometric-validations"
sourceAnchor: "Descripción"
slug: "/resources/validaciones-biometricas"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-biometricas"
---

# Validaciones Biométricas
**API path(s):** /v2/biometric-validations

## Descripción

Las Validaciones Biométricas son el sistema de verificación principal dentro de Verifik que procesa y valida datos biométricos de usuarios durante el proceso de autenticación y registro. Piensa en ellas como el punto de control de seguridad que asegura que los usuarios son quienes dicen ser verificando su identidad biométrica a través de reconocimiento facial y detección de vida.

### Cómo Funcionan las Validaciones Biométricas

Cada Validación Biométrica representa una sola sesión de verificación biométrica que procesa datos biométricos enviados por el usuario. Cuando alguien toma una selfie o proporciona datos biométricos durante el registro, inicio de sesión o verificación de cuenta, Verifik crea una Validación Biométrica para analizar los datos biométricos y confirmar la identidad del usuario.

Actualmente, las Validaciones Biométricas soportan estos tipos:

* **validation** - Proceso de verificación biométrica estándar
* **login** - Verificación biométrica para autenticación de usuario
* **onboarding** - Verificación biométrica para registro de nuevos usuarios
* **liveness** - Detección de vida y anti-suplantación

### Qué Rastrean las Validaciones Biométricas

Las Validaciones Biométricas son sistemas de verificación integrales que procesan cada aspecto de la verificación biométrica:

#### Información Biométrica:
* Reconocimiento facial y coincidencia de identidad
* Detección de vida y anti-suplantación
* Evaluación de calidad y análisis de imagen
* Verificación de identidad de usuario

#### Proceso de Verificación:
* Captura y procesamiento de imagen
* Generación de plantilla biométrica
* Coincidencia y comparación de identidad
* Detección y validación de vida

#### Características de Seguridad:
* Anti-suplantación y detección de fraude
* Evaluación y validación de calidad
* Coincidencia y comparación de plantilla
* Evaluación y puntuación de riesgo
