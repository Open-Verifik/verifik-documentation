---
id: "es-docs-es-smartenroll-smartenroll-guia-de-configuracion-2"
title: "SmartEnroll — Guía de Configuración"
sourcePath: "docs-es/smartenroll/smartenroll.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
  - "app-registrations"
endpoint: "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Guía de Configuración"
---

# SmartEnroll
**API path(s):** /v2/app-registrations/{id}/resend-link

**SmartEnroll** es una solución sin código diseñada para proporcionar incorporaciones seguras y fluidas para los usuarios. Esta plataforma permite a las empresas ofrecer diversas verificaciones de incorporación, incluyendo verificación de correo electrónico, teléfono y biométrica, validaciones de documentos, verificaciones AML, verificaciones de manipulación y más. Todas estas características están integradas en nuestro proyecto asegurando una experiencia fácil de usar y segura. Con SmartEnroll, las empresas pueden integrar fácilmente estas soluciones KYC sin la necesidad de codificación compleja o desarrollo de infraestructura.

## Guía de Configuración

Sigue estos 7 pasos para configurar tu proyecto SmartEnroll:

### 1. Configuración Básica

#### Información del Proyecto

Esta sección es donde se configuran los ajustes principales del proyecto. Cada campo tiene un propósito específico:

-   **Nombre del Proyecto**: Este es un campo requerido donde el usuario ingresa el nombre de su proyecto. Se usará en todas las referencias al proyecto dentro del ecosistema Verifik.
-   **Países Permitidos**: Aquí los usuarios especifican a qué países aplicará su proceso KYC. Pueden seleccionar países específicos o elegir **Todos** (World) para permitir el registro desde cualquier país. Esta lista de permitidos es independiente de la aceptación de documentos (que se configura en el paso de Documentos).
-   **Correo Electrónico**: La dirección de correo electrónico asociada con el proyecto. Este es el punto de contacto para toda la correspondencia relacionada con este proyecto.
-   **Política de Privacidad (URL)**: Un campo obligatorio donde los usuarios proporcionan un enlace a su documento de Política de Privacidad. Esto asegura el cumplimiento con las leyes locales e internacionales de protección de datos.
-   **Términos y Condiciones (URL)**: Un campo donde el usuario proporciona una URL a sus Términos y Condiciones, que se mostrarán a los usuarios finales durante el proceso KYC.

#### Información de Contacto del Oficial de Protección de Datos (DPO):

-   **Nombre del Propietario**: El representante legal del proyecto o el nombre del Oficial de Protección de Datos designado.
-   **Correo Electrónico**: La dirección de correo electrónico de la persona responsable de la protección de datos y el cumplimiento.
-   **Dirección**: La dirección principal (opcional).
-   **País, Ciudad, Código Postal**: Detalles de ubicación para el Oficial de Protección de Datos, que pueden ser requeridos para propósitos regulatorios.

:::tip Nota Clave
Esta fase de configuración asegura que todas las configuraciones legales y básicas estén alineadas antes de que el proyecto pueda proceder al siguiente paso.
:::

---
