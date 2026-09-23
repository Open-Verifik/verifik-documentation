---
id: "es-docs-es-smart-enroll-auto-alojado-smart-enroll-auto-alojado-formato-de-respuesta-3"
title: "SmartEnroll: Auto-alojado — Formato de Respuesta"
sourcePath: "docs-es/smart-enroll-auto-alojado/smart-enroll-auto-alojado.md"
locale: "es"
category: "smart-enroll-auto-alojado"
tags:
  - "smart-enroll-auto-alojado"
endpoint: "/v3"
sourceAnchor: "Formato de Respuesta"
slug: "/smart-enroll-auto-alojado"
url: "https://docs.verifik.co/verifik-es/smart-enroll-auto-alojado"
---

# SmartEnroll: Auto-alojado
**API path(s):** /v3

La **API de SmartEnroll** proporciona acceso programático a toda la funcionalidad de SmartEnroll, permitiéndote construir flujos personalizados de KYC e incorporación que se integran perfectamente con tus sistemas existentes. Esta solución es perfecta para empresas que necesitan más control sobre la experiencia del usuario o desean integrar la incorporación en sus aplicaciones existentes.

## Formato de Respuesta

Todas las respuestas de la API siguen un formato consistente:

### Respuesta Exitosa

```json
{
    "data": {
        // Datos de respuesta
    },
    "total": 0,
    "limit": 0,
    "page": 0,
    "pages": 0
}
```

### Respuesta de Error

```json
{
    "message": "Descripción del error",
    "code": "CÓDIGO_ERROR"
}
```

---

## Límites de Tasa

-   **Operaciones de Proyecto**: 100 solicitudes por minuto por usuario
-   **Operaciones de Flujo de Proyecto**: 50 solicitudes por minuto por usuario
-   **Verificación de Documentos**: 20 solicitudes por minuto por usuario
-   **Verificación Biométrica**: 10 solicitudes por minuto por usuario
-   **Verificaciones de Antecedentes**: 5 solicitudes por minuto por usuario

---

## Construcción de un Proyecto KYC

SmartEnroll Versión 3 proporciona un flujo de trabajo estructurado de 6 pasos para crear proyectos KYC personales (Conozca a su Cliente). Cada paso se construye sobre el anterior, permitiéndote configurar tu flujo de incorporación progresivamente.

### Entendiendo los Objetivos del Proyecto

Antes de comenzar, es importante entender los dos tipos de proyectos:

-   **Personal (KYC)** - Para incorporar usuarios individuales
-   **Empresarial (KYB)** - Para incorporar empresas y sus representantes legales _(cubierto en documentación separada)_

Esta guía se centra en **proyectos KYC Personales**.

---

## Paso 1: Configuración Básica

El primer paso establece la base de tu proyecto KYC. Esto incluye información básica del proyecto, detalles de cumplimiento y configuraciones de protección de datos requeridas por las regulaciones de privacidad.
