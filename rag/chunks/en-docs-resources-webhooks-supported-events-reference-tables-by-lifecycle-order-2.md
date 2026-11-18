---
id: "en-docs-resources-webhooks-supported-events-reference-tables-by-lifecycle-order-2"
title: "Supported Events — Reference tables (by lifecycle order)"
sourcePath: "docs/resources/webhooks/supported-events.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Reference tables (by lifecycle order)"
slug: "/resources/supported-events"
url: "https://docs.verifik.co/resources/supported-events"
---

# Supported Events

## Reference tables (by lifecycle order)

#### 1. App registration (`app_registration_*`)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `app_registration_created` | New registration after insert / init | `appRegistration` | Includes `projectFlow` context when populated |
| `app_registration_sync_` | **`sync`** while status stays **`ONGOING`** | `appRegistration` | `` is snake_case: e.g. `sign_up_form`, `instructions`, `document`, `liveness`, `skip_kyc` |
| `app_registration_completed` | **`sync`** `end` (or staff path) when requirements pass and status becomes **`COMPLETED`** | `appRegistration` | |
| `app_registration_needs_manual_verification` | **`sync`** `end` (or rules) when blocked by manual review / completeness | `appRegistration` | |
| `app_registration_completed_without_kyc` | **`skipKYC`** when flow allows skip and status **`COMPLETED_WITHOUT_KYC`** | `appRegistration` | |
| `app_registration_failed` | **`sync`** `end` with request **`FAILED`** when completeness allows that outcome | `appRegistration` | |
| `app_registration_person_already_set` | Liveness/person attach when person already linked | `appRegistration` | Error shape: `error`, `statusCode`, `message` |

#### 2. Email validation (`email_validation_*`)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `email_validation_created` | First OTP email sent | `emailValidation` | |
| `email_validation_resend` | Resend OTP while prior send still valid | `emailValidation` | Second send for same pending validation |
| `email_validation_validated` | Correct OTP (or valid demo OTP on demo projects) | `emailValidation` | |
| `email_validation_failed` | Status moves to failed | `emailValidation` | Part of `email_validation_{status}` pattern |
| `email_validation_otp_incorect` | Wrong OTP submitted | `emailValidation` | Spelling **`incorect`** matches API |
| `email_validation_expired` | Session expired (~10 min) | `emailValidation` | |

#### 3. Phone validation (`phone_validation_*`)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `phone_validation_created` | First OTP message sent (SMS/WhatsApp) | `phoneValidation` | |
| `phone_validation_resend` | Resend OTP for same pending validation | `phoneValidation` | Cooldown may apply; **`force`** can bypass in API |
| `phone_validation_validated` | Correct OTP | `phoneValidation` | |
| `phone_validation_failed` | Status moves to failed | `phoneValidation` | Part of `phone_validation_{status}` pattern |
| `phone_validation_otp_incorect` | Wrong OTP | `phoneValidation` | |
| `phone_validation_expired` | Session expired | `phoneValidation` | |

#### 4. Document validation (`document_validation_*`)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `document_validation_created` | New document validation started | `documentValidation` | Often includes `appRegistration`, `email`, `phone` |
| `document_validation_source_lookup` | Government / data source lookup finished | `documentValidation` | |
| `document_validation_data_source_error` | Source returned invalid/empty or name mismatch | `documentValidation` | May include `isSupported`, `infoValidationSupportedReason`, `notSupportedData` |
| `document_validation_manual_verification_required` | Document moved to manual review | `documentValidation` | Linked app registration may become **`NEEDS_MANUAL_VERIFICATION`** |

#### 5. Biometric validation (`biometric_validation_*` and related)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `biometric_validation_new` | Status **`new`** | `biometricValidation` | Dynamic: `biometric_validation_{status}` |
| `biometric_validation_validated` | Status **`validated`** | `biometricValidation` | |
| `biometric_validation_failed` | Status **`failed`** | `biometricValidation` | |
| `biometric_validation_created_person` | Person created from biometric flow | `biometricValidation` | |
| `biometric_validation_liveness_failed` | Liveness step failed explicitly | `biometricValidation` | |
| `biometrics_liveness_score_not_acceptable` | Liveness score below project threshold | `biometricValidation` | Payload may include `projectFlow` |

#### 6. Face verification (`face_verification_*`)

| Event suffix | When it fires | Main `object` entity | Notes |
| --- | --- | --- | --- |
| `face_verification_compare` | Face compare finished (e.g. selfie vs document) | `appRegistration` | Includes **`compareResult`** |

#### 7. Information validation (`information_validation_*`)
