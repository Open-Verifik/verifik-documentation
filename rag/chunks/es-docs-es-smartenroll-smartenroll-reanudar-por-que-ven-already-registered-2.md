---
id: "es-docs-es-smartenroll-smartenroll-reanudar-por-que-ven-already-registered-2"
title: "Reanudar un enrollment incompleto — Por qué ven “already registered”"
sourcePath: "docs-es/smartenroll/smartenroll-reanudar.mdx"
locale: "es"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Por qué ven “already registered”"
slug: "/smartenroll/reanudar"
url: "https://docs.verifik.co/verifik-es/smartenroll/reanudar"
---

# Reanudar un enrollment incompleto

Alguien empezó **SmartEnroll**, avanzó una parte (correo listo, documento aún no) y se fue. Cuando vuelve, **no** debe empezar de nuevo con el mismo correo. Eso intenta crear un segundo enrollment y falla como **already registered** (correo ya registrado).
Envíale un **enlace nuevo** del enrollment que ya comenzó. Continúa desde el último paso que completó.
Puedes enviar ese enlace nuevo de dos formas: **Reenviar enlace en Verifik**, o **tu aplicación le pide a Verifik un enlace nuevo**.

## Por qué ven “already registered”

El primer enlace caducó
  
  
    El primer enlace de SmartEnroll dura unas dos horas. Después, al abrirlo de nuevo aparece el formulario de alta. Enviar el mismo correo (o teléfono) falla porque ese enrollment ya existe. Un enlace nuevo salta el formulario y continúa el enrollment original.
  

---

## A quién puedes enviar un enlace nuevo

Puedes reanudar enrollments que siguen en curso (empezaron, pero no terminaron). No puedes reenviar un enlace cuando el enrollment ya **terminó** o **falló**.

### Qué no usar

| Evita | Por qué |
| --- | --- |
| Empezar un enrollment nuevo con el mismo correo o teléfono | Eso es un segundo registro, no una reanudación |
| Consultar el enrollment o sincronizar su estado | Eso no te da un enlace hospedado nuevo |
| Un `smartLink` en el registro | Otro producto (`link.verifik.co`), no SmartEnroll hospedado |

---

## Relacionado

- [Reenviar enlace de registro de aplicación](/verifik-es/resources/registros-aplicacion/reenviar-enlace-registro-aplicacion) — petición y respuesta de la API
- [Crear un Registro de Aplicación](/verifik-es/resources/registros-aplicacion/crear-un-registro-aplicacion) — primera sesión
- [Flujo KYC SmartEnroll](/verifik-es/smartenroll/smartenroll-flujo-kyc) — los pasos que recorre el usuario
- [SmartEnroll — Guía de API](/verifik-es/smartenroll/guia-api) — scores y webhooks tras el KYC
