---
id: "es-docs-es-smartenroll-smartenroll-reanudar-dos-formas-de-enviar-el-enlace-nuevo"
title: "Reanudar un enrollment incompleto — Dos formas de enviar el enlace nuevo"
sourcePath: "docs-es/smartenroll/smartenroll-reanudar.mdx"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Dos formas de enviar el enlace nuevo"
slug: "/smartenroll/reanudar"
url: "https://docs.verifik.co/verifik-es/smartenroll/reanudar"
---

# Reanudar un enrollment incompleto

## Dos formas de enviar el enlace nuevo

Alguien empezó **SmartEnroll**, avanzó una parte (correo listo, documento aún no) y se fue. Cuando vuelve, **no** debe empezar de nuevo con el mismo correo. Eso intenta crear un segundo enrollment y falla como **already registered** (correo ya registrado).

Envíale un **enlace nuevo** del enrollment que ya comenzó. Continúa desde el último paso que completó.

Puedes enviar ese enlace nuevo de dos formas: **Reenviar enlace en Verifik**, o **tu aplicación le pide a Verifik un enlace nuevo**.

## Dos formas de enviar el enlace nuevo

  
    
      
        En Verifik
      
      
        Abre el enrollment, elige Reenviar enlace y cópialo o envíalo por correo. Listo.
      
    
  
  
    
      
        En tu aplicación
      
      
        Cuando pulse Continuar verificación, pide a Verifik un enlace nuevo y envíalo ahí.
      
    
  

---

## En Verifik

Abre el enrollment en Verifik y usa **Reenviar enlace**. Puedes copiar la URL o enviarla por correo — la misma acción que en la pantalla de [revisión KYC](/verifik-es/smartenroll/smartenroll-admin-revision-kyc#reenviar-enlace-de-incorporación).

Ese enlace nuevo es el que debe abrir. No le envíes la invitación original cuando ya caducó.

:::tip
Si todavía tiene el primer enlace y funciona, puede seguir usándolo. A las dos horas caduca: envía uno nuevo en lugar de pedirle que vuelva a enviar el formulario de alta.
:::

---

## En tu aplicación

1. Cuando **empiece** la verificación, guarda el id de enrollment que devuelve Verifik.
2. Cuando pulse **Continuar verificación**, pide a Verifik un enlace **nuevo** para ese mismo id.
3. Envíalo a esa URL nueva. Retoma el último paso — no un registro nuevo.

¿Necesitas el cuerpo de la petición y la respuesta? Ver [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion).

:::important
No crees un segundo enrollment con el mismo correo o teléfono. Usa el id que guardaste y pide un enlace nuevo.
:::

---
