---
id: "es-docs-es-legal-verificar-afiliaciones-colombianas-caracteristicas-3"
title: "Colombia — Afiliaciones de salud y seguridad social — Características"
sourcePath: "docs-es/legal/verificar-afiliaciones-colombianas.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/afiliaciones"
sourceAnchor: "Características"
slug: "/legal/verificar-afiliaciones-colombianas"
url: "https://docs.verifik.co/verifik-es/legal/verificar-afiliaciones-colombianas"
---

# Colombia — Afiliaciones de salud y seguridad social
**API path(s):** /v2/co/afiliaciones

Verifik devuelve **datos de afiliación e información personal** de una persona en Colombia a partir de fuentes oficiales de **salud y seguridad social** (incluido el flujo **RUAF / SISPRO**), usando **tipo de documento**, **número** y **fecha de expedición**. Suele incluir bloques de **EPS**, **ARL**, **pensión (AP)**, **caja de compensación** y **cesantías**, además de **datos personales** cuando la fuente los provee.
Este endpoint es solo **GET** (parámetros en query). Úsalo para **empleo**, **prestaciones** y **cumplimiento** cuando la ley y tu política lo permitan.

## Características

- **Tipos de documento** válidos en validación: **CC**, **CE**, **PA**, **PE**
- **Fecha de expedición** en **`DD/MM/AAAA`**

## Casos de uso

- **Contratación** y relación laboral
- **Prestaciones** y elegibilidad de beneficios

### Notas

- **`date`** es la **fecha de expedición del documento**, no la fecha de nacimiento.
- La ruta está expuesta como **GET** con **query** (no hay **POST** en el backend actual).
- **`PE`** se refiere al **permiso especial de permanencia** según la integración, no a “PEP” (persona políticamente expuesta).
- Un **404** (registro no encontrado o fecha de expedición incorrecta) se cobra. Los fallos de conexión (captcha, timeout o caída del origen) devuelven **409** con `Unable to connect to the source. Please try again later.` y no se cobran.
- Los datos pueden incluir **información personal sensible**; úsala solo donde la ley lo permita.
