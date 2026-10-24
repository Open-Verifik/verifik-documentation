---
id: data-retention
title: Data retention
description: How Verifik keeps, masks, and purges document images, extracted fields, and face images.
slug: /getting-started/data-retention
---

# Data retention

Account, project, and project-flow settings decide how long Verifik keeps document images, the extracted fields saved with a document validation, and face images. The policy is stamped onto each new record. A later change does not rewrite records that already exist.

Billing records, credit charges, and usage history stay in place when images are purged.

## Modes

| Mode | Effect |
| --- | --- |
| `store` | The record is kept. Set `retentionHours` to a number greater than 0 to make it eligible for purge after that many hours. Omit `retentionHours` to keep it with no time limit. |
| `ephemeral` | The record becomes eligible for purge at the end of the webhook hold when a webhook is configured, and on the next purge run when no webhook is configured. `retentionHours` is ignored. |
| `none` | Document images and saved extraction fields use the same timing as `ephemeral`. A face image in this mode is not written. SmartEnroll responses omit hosted image URLs and report `hasFrontImage` or `hasBackImage` instead. |

On a SmartEnroll document scan, a `store` rule that includes `retentionHours` still uses the 24-hour hold, or the webhook hold when a webhook is configured. `store` with no hours keeps that image.

`ephemeral` and `none` share purge timing. They differ for face images and for whether SmartEnroll returns hosted URLs.

## Types this policy enforces

| Key | What is covered |
| --- | --- |
| `documentImages` | Front and back photos on a document validation, including the hosted files behind `url` and `backUrl`. |
| `ocrExtraction` | The extraction saved on that validation. |
| `faceImages` | Selfie and document-face images stored for a registration or a login. |

Set `mode` on each key. A top-level `mode` of `none` is copied onto keys you leave unset. A top-level `store` or `ephemeral` does not replace those keys. The reliable request sets every key you care about.

## What stays outside this policy

These records follow their own storage rules. Saving a retention mode does not purge them:

- Document-liveness photos
- Liveness scores and liveness session results
- Webhook bodies, including the extraction carried in a payload
- API response logs
- Biometric templates and face collections used when Smart Access matches a returning person
- Human Auth encrypted credentials, zero-knowledge artefacts, and liveness video
- The storage location chosen for a Human Auth credential
- Document validations and identity images created before a retention stamp existed

Hosted document images use ordinary URLs. A URL stays valid until that file is purged. Treat every image URL as sensitive.

## Precedence

The effective policy is resolved in this order:

1. **Account.** The policy stored on the client settings.
2. **Project.** `dataRetention` on the project replaces the account fields it sets.
3. **Project flow.** `dataRetention` on the flow replaces the project fields it sets.

A level that omits a field leaves the broader value in place. With nothing configured, every enforced type is `store` with no time limit, and the webhook hold is 24 hours.

A saved policy can take about a minute to apply on each running instance.

## Webhook hold

`webhookHoldHours` is an integer from 24 to 72. The default is 24.

When a webhook is configured, `none` and `ephemeral` records stay at least this long so delivery can finish. After a webhook for that registration has been delivered, images in those modes can be removed on a later purge run. Image URLs in the payload can stop working after that delivery. Copy any image you still need while you handle the webhook.

The terminal SmartEnroll events are `onboarding_app_registration_completed`, `onboarding_app_registration_needs_manual_verification`, `onboarding_app_registration_completed_without_kyc`, and `onboarding_app_registration_failed`. See [Smart Enroll (KYC) webhooks](/resources/smart-enroll-kyc-webhooks).

The retention policy does not redact the webhook body. The payload can include the full extraction.

## What a purge removes, masks, and keeps

When a document validation is purged:

| Action | Fields |
| --- | --- |
| Removed | Hosted image files. `url`, `backUrl`, and the file list are cleared. |
| Masked | The saved extraction and `fullName`. |
| Kept in clear | `documentNumber`, given name, family name, request parameters, and screening results stored on the validation. |
| Kept as the row | Status, type, and `createdAt`, so usage counts that read the validation row still include it. |

A face image purge clears the stored image bytes.

An encrypted copy of the full extraction is removed 30 days after the scan, including when the visible saved fields were already masked.

Credit charges are recorded when a scan succeeds. A purge leaves billing records and usage history in place, and it does not reverse a charge.

Deleting a document validation or an app registration removes the stored image files and deletes the validation row. Usage history built from those rows shrinks by that deletion. The purge job leaves the row in place.

## When purge runs

A record becomes eligible at `retention.purgeAfter`. A scheduled purge removes eligible records about every 15 minutes. Deletion happens on the next successful run, so the file can remain for a short time after `purgeAfter`. Each run handles a limited batch. A large backlog takes more than one run.

There is no manual-erase endpoint. `allowManualDelete` on a policy object is stored with the policy and does not open a separate erase call.

## Policies apply to new records

The stamp is written when the record is created. Records already in the account keep whatever stamp they have. Records with no stamp are left as they are. Switching an account to `none` leaves history that was stored before that change.

## Scans without a project

`POST /v2/ocr/scan-prompt` and `POST /v2/ocr/scan-agent` follow this rule when the call is not tied to a project:

- The image is not uploaded to hosted storage.
- `url` and `backUrl` in the response are `data:` URIs of the image you sent. They belong to that response. Persist the extraction, and keep your own copy of the image if you still need the photo.
- The response body includes the extraction in full.
- The validation row that is saved stores a masked extraction and a masked `fullName`. `documentNumber` on that row stays in clear.
- The encrypted copy of the full extraction is removed after 30 days.

Details are on [Scan Prompt](/ocr-engines/scan-prompt) and [Scan Agent](/ocr-engines/scan-agent).

A SmartEnroll document scan is tied to an app registration and uses the resolved account, project, and flow policy. The response includes the unmasked extraction. The saved row is masked when `ocrExtraction` is `none`. In `none` and `ephemeral`, the response omits hosted URLs.

## Smart Access

Smart Access login flows (`login` project flows) stamp retention on the login selfie.

- `faceImages` set to `none` means the login selfie is not stored.
- `ephemeral` stores the selfie until the next purge run. Login flows are stamped without a webhook hold.
- `store` keeps the selfie, for `retentionHours` when that number is set.

Matching for a returning person uses biometric templates and face collections. Those templates stay when you change this policy. Login liveness results and login webhook bodies stay as well.

## Human Auth

Document validations created during Human Auth onboarding use the SmartEnroll rules above.

Human Auth projects can lock `faceImages` to `none`. In that mode the selfie is not stored, and the document-to-selfie comparison, which reads the stored selfie, does not run.

Liveness video, zero-knowledge artefacts, and the encrypted credential produced by the storage step stay under their own rules. Choosing a storage location for that credential is separate from this policy. See [HumanAuthn](/biometrics/humanauthn).

## The `dataRetention` object

Send this object on [Update Project](/resources/projects/update-a-project) (`PUT /v3/projects/{id}`). Send `null` to inherit the account policy again.

The same shape on a project flow overrides the project for records created in that flow. See [Smart Enroll Project Flow](/resources/project-flows/create-a-project-flow/smart-enroll-project-flow).

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 }
    }
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `mode` | `store`, `ephemeral`, or `none` | Account or override baseline. Set each type as well. |
| `webhookHoldHours` | integer, 24–72 | Minimum hold when a webhook is configured. Default 24. |
| `types.documentImages.mode` | mode | Document photos. |
| `types.documentImages.retentionHours` | number or omitted | Used when that type is `store` and the number is greater than 0. Ignored for SmartEnroll document images. |
| `types.ocrExtraction` | same shape | Saved extraction. |
| `types.faceImages` | same shape | Selfie and document-face images. `none` means the selfie is not written. |

Other type keys can be present on a stored policy. Purge does not apply them.
