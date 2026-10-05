---
id: "es-docs-es-resources-webhooks-eventos-soportados-tablas-de-referencia-orden-del-ciclo-de-vida-2"
title: "Eventos soportados — Tablas de referencia (orden del ciclo de vida)"
sourcePath: "docs-es/resources/webhooks/eventos-soportados.mdx"
locale: "es"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Tablas de referencia (orden del ciclo de vida)"
slug: "/resources/eventos-soportados"
url: "https://docs.verifik.co/verifik-es/resources/eventos-soportados"
---

# Eventos soportados

## Tablas de referencia (orden del ciclo de vida)

#### 1. App registration (`app_registration_*`)

| Sufijo | Cuándo se emite | Entidad principal en `object` | Notas |
| --- | --- | --- | --- |
| `app_registration_created` | Nuevo registro tras insert / init | `appRegistration` | Suele incluir contexto `projectFlow` |
| `app_registration_sync_` | **`sync`** con estado **`ONGOING`** | `appRegistration` | `` en snake_case: ej. `sign_up_form`, `instructions`, `skip_kyc` |
| `app_registration_completed` | **`sync`** `end` (u otra vía staff) cuando pasa requisitos y **`COMPLETED`** | `appRegistration` | |
| `app_registration_needs_manual_verification` | **`sync`** `end` o reglas cuando hay bloqueo manual | `appRegistration` | |
| `app_registration_completed_without_kyc` | **`skipKYC`** permitido y estado **`COMPLETED_WITHOUT_KYC`** | `appRegistration` | |
| `app_registration_failed` | **`sync`** `end` con **`FAILED`** cuando la completitud lo permite | `appRegistration` | |
| `app_registration_person_already_set` | Intento de persona cuando ya existe | `appRegistration` | Incluye `error`, `statusCode`, `message` |

#### 2. Email (`email_validation_*`)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `email_validation_created` | Primer envío de OTP por email | `emailValidation` | |
| `email_validation_resend` | Reenvío con envío previo aún válido | `emailValidation` | |
| `email_validation_validated` | OTP correcto (o demo válido) | `emailValidation` | |
| `email_validation_failed` | Estado pasa a failed | `emailValidation` | Patrón `email_validation_{status}` |
| `email_validation_otp_incorect` | OTP incorrecto | `emailValidation` | Ortografía **`incorect`** por compatibilidad API |
| `email_validation_expired` | Sesión expirada (~10 min) | `emailValidation` | |

#### 3. Teléfono (`phone_validation_*`)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `phone_validation_created` | Primer OTP (SMS/WhatsApp) | `phoneValidation` | |
| `phone_validation_resend` | Reenvío OTP misma validación | `phoneValidation` | Puede haber cooldown; **`force`** en API |
| `phone_validation_validated` | OTP correcto | `phoneValidation` | |
| `phone_validation_failed` | Estado failed | `phoneValidation` | Patrón `phone_validation_{status}` |
| `phone_validation_otp_incorect` | OTP incorrecto | `phoneValidation` | |
| `phone_validation_expired` | Sesión expirada | `phoneValidation` | |

#### 4. Documento (`document_validation_*`)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `document_validation_created` | Inicia validación de documento | `documentValidation` | Suele incluir `appRegistration`, `email`, `phone` |
| `document_validation_source_lookup` | Consulta a fuente externa / gobierno | `documentValidation` | |
| `document_validation_data_source_error` | Respuesta inválida o nombre no coincide | `documentValidation` | Puede incluir `isSupported`, `infoValidationSupportedReason`, `notSupportedData` |
| `document_validation_manual_verification_required` | Pasa a revisión manual | `documentValidation` | El registro puede quedar **`NEEDS_MANUAL_VERIFICATION`** |

#### 5. Biométrico (`biometric_validation_*` y relacionados)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `biometric_validation_new` | Estado **`new`** | `biometricValidation` | Patrón `biometric_validation_{status}` |
| `biometric_validation_validated` | Estado **`validated`** | `biometricValidation` | |
| `biometric_validation_failed` | Estado **`failed`** | `biometricValidation` | |
| `biometric_validation_created_person` | Persona creada desde flujo biométrico | `biometricValidation` | |
| `biometric_validation_liveness_failed` | Liveness falla explícitamente | `biometricValidation` | |
| `biometrics_liveness_score_not_acceptable` | Score bajo el umbral del proyecto | `biometricValidation` | Puede incluir `projectFlow` |

#### 6. Rostro (`face_verification_*`)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `face_verification_compare` | Comparación terminada (selfie vs documento) | `appRegistration` | Incluye **`compareResult`** |

#### 7. Información / antecedentes (`information_validation_*`)

| Sufijo | Cuándo se emite | Entidad principal | Notas |
| --- | --- | --- | --- |
| `information_validation_background_check` | Antecedentes / listas completados | `informationValidation` | |
| `information_validation_updated` | Sync desde flujo ligado a documento | `informationValidation` | Depende del contexto webhook en documento/flujo |

---
