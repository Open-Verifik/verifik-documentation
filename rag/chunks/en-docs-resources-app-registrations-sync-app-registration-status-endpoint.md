---
id: "en-docs-resources-app-registrations-sync-app-registration-status-endpoint"
title: "Sync App Registration Status — Endpoint"
sourcePath: "docs/resources/app-registrations/sync-app-registration-status.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/api/app-registrations/sync"
  - "/v2/app-registrations/sync"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Endpoint"
---

# Sync App Registration Status
**API path(s):** /api/app-registrations/sync, /v2/app-registrations/sync, /v2/app-registrations/{id}/sync

## Endpoint

```
PUT https://api.verifik.co/v2/app-registrations/{id}/sync
```

The `App Registration Sync` endpoint updates the status and step of an app registration process. This endpoint is useful for syncing the registration status, especially when specific conditions or criteria have been met.

:::warning
The JWT Token you should use when running the `Sync` is provided from the `App Registration` in creation. You must use the token returned when creating an [App Registration](/resources/app-registrations/create-an-app-registration) to authenticate this request.
:::

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | The unique identifier of the App Registration record you would like to sync. This is the `_id` returned when creating the app registration |
| `step` | string | Yes | Specifies the step to update. Valid values: `skipKYC`, `instructions`, `signUpForm`, `basicInformation`, `document`, `liveness`, `form`, `end` |
| `status` | string | Yes | The new status of the registration. Valid values depend on the step: For `skipKYC`: `COMPLETED_WITHOUT_KYC`. For `instructions`, `signUpForm`, `basicInformation`, `document`, `liveness`, `form`: `ONGOING`. For `end`: `COMPLETED`, `FAILED`, or `NEEDS_MANUAL_VERIFICATION` |

### Step Options and Status Combinations

#### `skipKYC` Step

**Status:** `COMPLETED_WITHOUT_KYC`

**Description:** Skip KYC verification

**What Happens:**
- Validates sign-up form requirements
- Updates status to ONGOING if KYC steps are not mandatory
- Sends data to HubSpot integration
- Returns sign-up form response with token

**Note:** This step only works if all mandatory KYC steps (basicInformation, document, form, liveness) are not set to "mandatory" in the project flow configuration.

:::warning
**IMPORTANT**: The `skipKYC` step is crucial for `onboarding` type flows as it provides the authentication token that users need to login to your system. This will provide your users with the token for accessing your application.
:::

#### `instructions` Step

**Status:** `ONGOING`

**Description:** Continue with instructions

**What Happens:**
- Updates status to ONGOING
- Moves to next step in the flow

#### `signUpForm` Step

**Status:** `ONGOING`

**Description:** Continue with sign-up form

**What Happens:**
- Validates sign-up form requirements
- Updates status to ONGOING
- Returns sign-up form response with token

#### `basicInformation` Step

**Status:** `ONGOING`

**Description:** Continue with basic information

**What Happens:**
- Updates status to ONGOING
- Moves to next step in the flow

#### `document` Step

**Status:** `ONGOING`

**Description:** Continue with document verification

**What Happens:**
- Updates status to ONGOING
- Returns sign-up form response with token

#### `liveness` Step

**Status:** `ONGOING`

**Description:** Continue with liveness verification

**What Happens:**
- Updates status to ONGOING
- Returns liveness response with token

#### `form` Step

**Status:** `ONGOING`

**Description:** Continue with form completion

**What Happens:**
- Updates status to ONGOING
- Moves to next step in the flow

#### `end` Step ⭐ **CRUCIAL FOR ONBOARDING FLOWS**

**Status:** `COMPLETED`, `FAILED`, or `NEEDS_MANUAL_VERIFICATION`

**Description:** Complete registration successfully

**What Happens:**
- **Validates all required fields and verifications**
- **Updates status to COMPLETED, FAILED, or NEEDS_MANUAL_VERIFICATION**
- **Returns authentication token for user login**
- Sends completion data to HubSpot integration
- Triggers webhook events

:::warning
**IMPORTANT**: The `end` step is crucial for `onboarding` type flows as it provides the authentication token that users need to login to your system. Without completing this step, users cannot access their accounts.
:::
