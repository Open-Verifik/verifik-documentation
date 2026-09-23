---
id: "es-docs-es-resources-validaciones-telefono-validaciones-telefono-indice-de-endpoints-2"
title: "Validaciones de Teléfono — Índice de endpoints"
sourcePath: "docs-es/resources/validaciones-telefono/validaciones-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Índice de endpoints"
slug: "/resources/validaciones-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-telefono"
---

# Validaciones de Teléfono

## Índice de endpoints

| Acción | Método y ruta | Docs |
| --- | --- | --- |
| Enviar OTP independiente | `POST /v2/phone-validations/manual` | [Crear una Validación de Teléfono manual](./crear-una-validacion-telefono-manual.mdx) |
| Verificar OTP | `PUT /v2/phone-validations` | [Validar una Validación de Teléfono](./validar-una-validacion-telefono.mdx) |
| Listar | `GET /v2/phone-validations` | [Listar todas las Validaciones de Teléfono](./listar-todas-las-validaciones-telefono.mdx) |
| Obtener una | `GET /v2/phone-validations/{id}` | [Recuperar una Validación de Teléfono](./recuperar-una-validacion-telefono.mdx) |
| Precios SMS y WhatsApp | — | [Precios SMS y WhatsApp](/phone-validations/sms-and-whatsapp-prices) |

:::tip Autenticación
Todos los endpoints requieren `Authorization: Bearer {YOUR_ACCESS_TOKEN}` y `Content-Type: application/json`.
:::
