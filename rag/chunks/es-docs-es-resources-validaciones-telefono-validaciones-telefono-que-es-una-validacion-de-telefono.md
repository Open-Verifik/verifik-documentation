---
id: "es-docs-es-resources-validaciones-telefono-validaciones-telefono-que-es-una-validacion-de-telefono"
title: "Validaciones de Teléfono — ¿Qué es una Validación de Teléfono?"
sourcePath: "docs-es/resources/validaciones-telefono/validaciones-telefono.mdx"
locale: "es"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/app-registration"
  - "/v2/phone-validations/manual"
  - "/v2/phone-validations/{id}"
sourceAnchor: "¿Qué es una Validación de Teléfono?"
slug: "/resources/validaciones-telefono"
url: "https://docs.verifik.co/verifik-es/resources/validaciones-telefono"
---

# Validaciones de Teléfono
**API path(s):** /v2/phone-validations, /v2/phone-validations/app-registration, /v2/phone-validations/manual, /v2/phone-validations/{id}

## ¿Qué es una Validación de Teléfono?

Una **Validación de Teléfono** es una sesión OTP para un número. Verifik envía un código de un solo uso por **SMS** o **WhatsApp**, y luego confirmas el código que ingresa el usuario.

Ciclo típico:

1. **Enviar** — crear una Phone Validation y entregar el OTP  
2. **Verificar** — enviar el mismo teléfono + OTP para marcar la sesión como validada  

Consulta todos los campos en [El objeto Validación de Teléfono](./el-objeto-validacion-telefono.mdx).

### Reglas de tiempo

| Regla | Valor por defecto |
| --- | --- |
| OTP válido durante | **10 minutos** (`expiresAt` en la respuesta de envío) |
| Ventana de reenvío | **~2 minutos** entre envíos para el mismo teléfono + gateway (`409` `otp_recently_sent`) |
| Omitir ventana | Create manual con `"force": true` |

Envía y muestra siempre el **`countryCode`** junto al **`phone`** nacional (ej. `+57 3001234567`) para que el usuario sepa a qué destino llegó el mensaje.

---

### Elige tu ruta de integración

#### Ruta A — Independiente / Smart Tools (sin proyecto)

Úsala cuando envías OTPs desde tu backend o desde **Smart Tools → Mensajes de WhatsApp / SMS**, sin un proyecto de Smart Enroll o Smart Access.

| Paso | Endpoint |
| --- | --- |
| 1. Enviar OTP | [`POST /v2/phone-validations/manual`](./crear-una-validacion-telefono-manual.mdx) |
| 2. Verificar OTP | [`PUT /v2/phone-validations`](./validar-una-validacion-telefono.mdx) |

- No requiere `project` / `projectFlow`  
- El `source` del registro es `"manual"`  
- Se cobran **créditos de comunicación** tras un envío exitoso  
- `title` opcional (máx. 15 caracteres) define el nombre de empresa en la plantilla  

```text
Tu app                      API Verifik
──────                      ───────────
POST /manual  ───────────►  OTP enviado
                            status: sent

PUT  /phone-validations ─►  OTP verificado
  { phone, countryCode, otp }   status: validated
```

#### Ruta B — Proyecto / App Registration (Smart Enroll y Access)

Úsala cuando el OTP forma parte de un flujo de registro o login ligado a un proyecto.

| Paso | Endpoint |
| --- | --- |
| 1. Enviar OTP | [`POST /v2/phone-validations/app-registration`](/resources/phone-validations/create-an-app-registration-phone-validation) |
| 2. Verificar OTP | [`PUT /v2/phone-validations`](./validar-una-validacion-telefono.mdx) |

---
