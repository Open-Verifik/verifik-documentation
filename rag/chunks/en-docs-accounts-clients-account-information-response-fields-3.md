---
id: "en-docs-accounts-clients-account-information-response-fields-3"
title: "Account Information — Response Fields"
sourcePath: "docs/accounts/clients/account-information.mdx"
locale: "en"
category: "accounts"
tags:
  - "clients"
  - "accounts"
endpoints:
  - "/api/clients/me"
  - "/v2/clients/me"
sourceAnchor: "Response Fields"
slug: "/accounts/clients/account-information"
url: "https://docs.verifik.co/accounts/clients/account-information"
---

# Account Information
**API path(s):** /api/clients/me, /v2/clients/me

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `_id` | String | Client ID |
| `email` | String | Client email address |
| `phone` | String | Client phone number |
| `name` | String | Client full name |
| `credits` | Number | Available credits |
| `totalRequestsCount` | Number | Total API requests made |
| `isEmailVerified` | Boolean | Email verification status |
| `isPhoneVerified` | Boolean | Phone verification status |
| `isBiometricVerified` | Boolean | Biometric verification status |
| `clientSubscriptionPlan` | Object | Subscription plan details |
