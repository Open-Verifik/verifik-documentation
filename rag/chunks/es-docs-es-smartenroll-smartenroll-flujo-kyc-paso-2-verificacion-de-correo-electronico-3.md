---
id: "es-docs-es-smartenroll-smartenroll-flujo-kyc-paso-2-verificacion-de-correo-electronico-3"
title: "Flujo KYC de SmartEnroll - Guía para Usuarios Finales — Paso 2: Verificación de Correo Electrónico"
sourcePath: "docs-es/smartenroll/smartenroll-flujo-kyc.md"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Paso 2: Verificación de Correo Electrónico"
---

# Flujo KYC de SmartEnroll - Guía para Usuarios Finales

El **Flujo KYC de SmartEnroll** es un proceso integral de verificación de identidad que guía a los usuarios finales a través de una experiencia de incorporación segura. Este flujo combina múltiples métodos de verificación incluyendo validación de correo electrónico, verificación telefónica, escaneo de documentos y autenticación biométrica para asegurar el más alto nivel de seguridad y cumplimiento.

## Paso 2: Verificación de Correo Electrónico

Después del registro de cuenta, los usuarios deben verificar su dirección de correo electrónico para asegurar que sea válida y accesible.

#### Proceso de Verificación de Correo Electrónico

1. **Código de Verificación Enviado**: Un código de contraseña de un solo uso (OTP) se envía automáticamente a la dirección de correo electrónico proporcionada durante el registro.

2. **Ingresar Código de Verificación**: Se solicita a los usuarios ingresar el código de verificación de 6 dígitos recibido en su bandeja de entrada de correo electrónico.

3. **Validación del Código**: 
   - El código típicamente es válido por un tiempo limitado (generalmente 5-10 minutos)
   - Los usuarios pueden solicitar un nuevo código si el actual expira
   - Se pueden permitir múltiples intentos, pero intentos fallidos excesivos pueden bloquear temporalmente la cuenta

4. **Reenviar Código**: Si el código no ha llegado o ha expirado, los usuarios pueden hacer clic en "Reenviar Código" para recibir un nuevo código de verificación.

:::warning Importante
Revisa tu carpeta de spam o correo no deseado si no recibes el correo de verificación en unos minutos.
:::

Una vez que el correo electrónico es verificado, los usuarios proceden a la verificación telefónica.

---

### Paso 3: Verificación de Teléfono

La verificación telefónica asegura que el usuario tenga acceso al número de teléfono que proporcionó y agrega una capa adicional de seguridad.

#### Métodos de Verificación Telefónica

El método de verificación depende de la configuración de la organización:

- **Verificación SMS**: Un código de verificación se envía vía SMS al número de teléfono proporcionado
- **Verificación WhatsApp**: Un código de verificación se envía vía WhatsApp (si está habilitado)
- **Ambos Métodos**: Los usuarios pueden tener la opción de elegir entre SMS o WhatsApp

#### Proceso de Verificación Telefónica

1. **Seleccionar Método de Verificación**: Si hay múltiples métodos disponibles, los usuarios seleccionan su opción preferida (SMS o WhatsApp).

2. **Código Enviado**: Un código de verificación se envía al número de teléfono seleccionado.

3. **Ingresar Código de Verificación**: Los usuarios ingresan el código recibido en su teléfono.

4. **Reenviar Código**: Similar a la verificación de correo electrónico, los usuarios pueden solicitar un nuevo código si es necesario.

:::tip Consejo para el Usuario
Asegúrate de que tu teléfono tenga buena conectividad de red y pueda recibir mensajes SMS o WhatsApp antes de comenzar este paso.
:::

Después de una verificación telefónica exitosa, los usuarios proceden a la pantalla de instrucciones KYC.

---
