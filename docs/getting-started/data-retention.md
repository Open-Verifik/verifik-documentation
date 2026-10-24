---
id: data-retention
title: Data retention
description: How Verifik keeps, masks, and purges document images, extracted fields, and face images.
slug: /getting-started/data-retention
---

# Data retention

Account, project, and project-flow settings decide how long Verifik keeps document images, the extracted fields saved with a document validation, face images, and document-liveness images. The policy is stamped onto each new record. A later change leaves records that already exist as they are.

Billing records, credit charges, and usage history stay in place when images are purged.

## Modes

| Mode | Effect |
| --- | --- |
| `store` | The record is kept. Set `retentionHours` to a number greater than 0 to make it eligible for purge after that many hours. Omit `retentionHours` to keep it with no time limit. `retentionHours` is honored, including on SmartEnroll. |
| `ephemeral` | The record is kept through the webhook hold when a webhook is configured, then becomes eligible for purge. |
| `none` | The record is not kept after the webhook hold. A face image in this mode is still kept until the hold ends, so a document-to-selfie comparison can run, and is removed after that. A document-liveness image in this mode is not stored. |

`webhookHoldHours` applies when a webhook is configured. See [Webhook hold](#webhook-hold).

## Types this policy enforces

| Key | What is covered |
| --- | --- |
| `documentImages` | Front and back photos on a document validation. |
| `ocrExtraction` | The extraction saved on that validation. |
| `faceImages` | Selfie and document-face images for a registration or a login. |
| `documentLiveness` | The image from a document-liveness check. `none` means that image is not stored. |

A mode on the policy applies to every enforced type that does not set its own mode. A mode on one type replaces the policy mode for that type only.

`livenessResults` and `apiResponseLogs` are not retention types. The API rejects them.

## What stays outside this policy

These records follow their own storage rules:

- Biometric templates and face collections used when Smart Access matches a returning person
- Human Auth encrypted credentials, zero-knowledge artefacts, and liveness video
- The storage location chosen for a Human Auth credential
- Document validations and identity images created before a retention stamp existed

Hosted document images are private. `url` and `backUrl` are `https` links that expire after one hour. They are never `data:` URIs. Treat every image link as sensitive.

## Precedence

The effective policy is resolved in this order. A stricter setting cannot be loosened by a level below it. `none` is stricter than `ephemeral`, and `ephemeral` is stricter than `store`.

1. **Account.** The policy stored on the client settings. This is the default. With nothing configured, every enforced type is `store` with no time limit, and the webhook hold is 24 hours.
2. **Project.** `dataRetention` on the project replaces account fields it sets, when the new mode is as strict or stricter.
3. **Project flow.** `dataRetention` on the flow replaces project fields it sets, on the same rule.

A scan that is not tied to a project uses the account policy. The default is `store`.

## Webhook hold

`webhookHoldHours` is an integer from 24 to 72. The default is 24.

On SmartEnroll, `none` and `ephemeral` images become eligible for purge only after the terminal onboarding webhook is delivered. That event is `onboarding_app_registration_completed` or `onboarding_app_registration_completed_without_kyc`. The purge time is the later of that delivery and the end of the hold. Earlier webhooks in the same registration do not start the purge.

Copy any image you still need while you handle that delivery. The link may already be within its one-hour lifetime.

Stored webhook bodies are redacted after delivery. See [Smart Enroll (KYC) webhooks](/resources/smart-enroll-kyc-webhooks).

## What a purge removes, masks, and keeps

When a document validation is purged:

| Action | Fields |
| --- | --- |
| Removed | Hosted image files. `url`, `backUrl`, and the file list are cleared. |
| Masked | Personal fields that remain on the row, including the saved extraction. Masking keeps the last 4 characters. |
| Kept | The validation row, including status, type, and `createdAt`, so usage counts that read the row still include it. |

A face image purge clears the stored image bytes after the hold.

The HTTP response for a scan includes the full extraction. Only the values saved on the record are masked.

Credit charges are recorded when a scan succeeds. A purge leaves billing records and usage history in place, and it does not reverse a charge.

## Manual erase

When `allowManualDelete` is true on the policy that applies, these calls remove stored images and saved personal data for that record:

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

Use the document-validation id, the app-registration id, or the erase call for the record you want removed. The same auth header as the rest of the API is required. When `allowManualDelete` is false, the calls are refused.

## When purge runs

A record becomes eligible at `retention.purgeAfter`. For a SmartEnroll `none` or `ephemeral` image, that time is the later of the terminal webhook delivery and the end of `webhookHoldHours`. A scheduled purge removes eligible records about every 15 minutes. Deletion happens on the next successful run, so the file can remain for a short time after it becomes eligible. Each run handles a limited batch. A large backlog takes more than one run.

## Policies apply to new records

The stamp is written when the record is created. Records already in the account keep the stamp they have. Records with no stamp stay as they are. Switching an account to `none` leaves history that was stored before that change.

## Scans without a project

`POST /v2/ocr/scan-prompt` and `POST /v2/ocr/scan-agent` use the account policy when the call is not tied to a project. The default is `store`.

- `url` and `backUrl` are `https` links to the stored images. They expire after one hour. They are never `data:` URIs.
- The response body includes the full extraction.
- The values saved on the validation are masked. After a purge, personal fields that remain are masked to the last 4 characters.

A SmartEnroll document scan is tied to an app registration and uses the account, project, and flow policy, including the stricter-parent rule.

See [Scan Prompt](/ocr-engines/scan-prompt) and [Scan Agent](/ocr-engines/scan-agent).

## Smart Access

Smart Access login flows (`login` project flows) apply this policy to the login selfie.

`faceImages` set to `none` keeps the selfie until the webhook hold ends, so a document-to-selfie comparison can run, and then removes it. `store` keeps it, for `retentionHours` when that number is set. `ephemeral` keeps it through the hold.

Matching a returning person uses biometric templates and face collections. Those templates stay when you change this policy. `livenessResults` is not a retention type. Login webhook bodies that were stored are redacted after delivery.

## Human Auth

Document validations created during Human Auth onboarding use the rules above, including precedence and the terminal-webhook purge.

`faceImages` set to `none` keeps the onboarding selfie until the hold ends so the document-to-selfie comparison can run. `documentLiveness` set to `none` means the document-liveness image is not stored.

Liveness video, zero-knowledge artefacts, and the encrypted credential produced by the storage step stay under their own rules. Choosing a storage location for that credential is separate from this policy. See [HumanAuthn](/biometrics/humanauthn).

## The `dataRetention` object

Send this object on [Update Project](/resources/projects/update-a-project) (`PUT /v3/projects/{id}`). Send `null` to inherit the account policy again. A project cannot set a looser mode than the account.

The same shape on a project flow overrides the project for records created in that flow, when the flow mode is as strict or stricter. See [Smart Enroll Project Flow](/resources/project-flows/create-a-project-flow/smart-enroll-project-flow).

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "allowManualDelete": true,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 },
      "documentLiveness": { "mode": "none" }
    }
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `mode` | `store`, `ephemeral`, or `none` | Policy baseline. It applies to every enforced type that does not set its own mode. |
| `webhookHoldHours` | integer, 24–72 | Minimum hold when a webhook is configured. Default 24. |
| `allowManualDelete` | boolean | When true, the manual-erase calls are allowed. |
| `types.documentImages` | mode, optional `retentionHours` | Document photos. |
| `types.ocrExtraction` | same shape | Saved extraction. |
| `types.faceImages` | same shape | Selfie and document-face images. `none` keeps the selfie until the hold so comparison can run. |
| `types.documentLiveness` | same shape | Document-liveness image. `none` means it is not stored. |

`livenessResults` and `apiResponseLogs` are rejected.
