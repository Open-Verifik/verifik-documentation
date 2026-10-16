---
id: "en-docs-api-accounts-create-account-response-fields-3"
title: "Create Account — Response Fields"
sourcePath: "docs/api/accounts/create-account.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients"
sourceAnchor: "Response Fields"
---

# Create Account
**API path(s):** /api/clients

Create a new client account with biometric face verification and master password authentication.

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `data.ipfsHash` | string | IPFS hash of the stored account data |
| `data.token` | string | JWT authentication token for future requests |
| `data.zelfAccount` | object | Account data stored on IPFS |
| `data.zelfAccount.url` | string | IPFS URL to access the account data |
| `data.zelfAccount.cid` | string | Content identifier for IPFS |
| `data.zelfAccount.pinned` | boolean | Whether the data is pinned on IPFS |
| `data.zelfAccount.web3` | boolean | Whether the account supports Web3 features |
| `data.zelfAccount.name` | string | Account filename on IPFS |
| `data.zelfAccount.publicData` | object | Public account information |
| `data.zelfAccount.publicData.accountEmail` | string | Account email address |
| `data.zelfAccount.publicData.accountPhone` | string | Account phone number |
| `data.zelfAccount.publicData.accountCompany` | string | Account company name |
| `data.zelfAccount.publicData.accountCountryCode` | string | Account country code |
| `data.zelfAccount.publicData.accountType` | string | Type of account ("client_account") |
| `data.zelfAccount.publicData.accountSubscriptionId` | string | Subscription level ("free") |
| `data.zelfAccount.publicData.name` | string | Display name for the account |
| `data.zelfProof` | string | ZelfProof cryptographic proof |

## Notes

- This endpoint does not require authentication
- Face image must be provided in base64 format
- Master password is required for account security
- All required fields must be provided
- Language defaults to "en" if not specified
- Company field is required
- Account data is stored on IPFS (InterPlanetary File System)
- Returns a JWT token for future authentication
- Email validation is enforced (must be valid email format)
- Account is automatically pinned on IPFS for persistence
