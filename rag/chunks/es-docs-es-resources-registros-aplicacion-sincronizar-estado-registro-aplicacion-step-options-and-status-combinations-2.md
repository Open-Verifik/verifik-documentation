---
id: "es-docs-es-resources-registros-aplicacion-sincronizar-estado-registro-aplicacion-step-options-and-status-combinations-2"
title: "Sincronizar Estado de Registro de Aplicación — Step Options and Status Combinations"
sourcePath: "docs-es/resources/registros-aplicacion/sincronizar-estado-registro-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations/{id}/sync"
sourceAnchor: "Step Options and Status Combinations"
---

# Sincronizar Estado de Registro de Aplicación
**API path(s):** /v2/app-registrations/{id}/sync

## Step Options and Status Combinations

#### `skipKYC` Step

**Status:** `COMPLETED_WITHOUT_KYC`

**Description:** Omitir verificación KYC

**What Happens:**

-   Valida los requisitos del formulario de registro
-   Actualiza el estado a ONGOING si los pasos KYC no son obligatorios
-   Envía datos a la integración de HubSpot
-   Devuelve respuesta del formulario de registro con token

**Note:** Este paso solo funciona si todos los pasos KYC obligatorios (basicInformation, document, form, liveness) no están establecidos como "mandatory" en la configuración del flujo de proyecto.

:::warning
**IMPORTANTE**: El paso `skipKYC` es crucial para flujos de tipo `onboarding` ya que proporciona el token de autenticación que los usuarios necesitan para iniciar sesión en tu sistema. Esto proporcionará a tus usuarios el token para acceder a tu aplicación.
:::

#### `instructions` Step

**Status:** `ONGOING`

**Description:** Continuar con instrucciones

**What Happens:**

-   Actualiza el estado a ONGOING
-   Avanza al siguiente paso en el flujo

#### `signUpForm` Step

**Status:** `ONGOING`

**Description:** Continuar con formulario de registro

**What Happens:**

-   Valida los requisitos del formulario de registro
-   Actualiza el estado a ONGOING
-   Devuelve respuesta del formulario de registro con token

#### `basicInformation` Step

**Status:** `ONGOING`

**Description:** Continuar con información básica

**What Happens:**

-   Actualiza el estado a ONGOING
-   Avanza al siguiente paso en el flujo

#### `document` Step

**Status:** `ONGOING`

**Description:** Continuar con verificación de documento

**What Happens:**

-   Actualiza el estado a ONGOING
-   Devuelve respuesta del formulario de registro con token

#### `liveness` Step

**Status:** `ONGOING`

**Description:** Continuar con verificación de vida

**What Happens:**

-   Actualiza el estado a ONGOING
-   Devuelve respuesta de vida con token

#### `form` Step

**Status:** `ONGOING`

**Description:** Continuar con completar formulario

**What Happens:**

-   Actualiza el estado a ONGOING
-   Avanza al siguiente paso en el flujo

#### `end` Step ⭐ **CRUCIAL PARA FLUJOS DE INCORPORACIÓN**

**Status:** `COMPLETED`, `FAILED`, o `NEEDS_MANUAL_VERIFICATION`

**Description:** Completar registro exitosamente

**What Happens:**

-   **Valida todos los campos y verificaciones requeridos**
-   **Actualiza el estado a COMPLETED, FAILED, o NEEDS_MANUAL_VERIFICATION**
-   **Devuelve token de autenticación para inicio de sesión del usuario**
-   Envía datos de finalización a la integración de HubSpot
-   Activa eventos de webhook

:::warning
**IMPORTANTE**: El paso `end` es crucial para flujos de tipo `onboarding` ya que proporciona el token de autenticación que los usuarios necesitan para iniciar sesión en tu sistema. Sin completar este paso, los usuarios no pueden acceder a sus cuentas.
:::
