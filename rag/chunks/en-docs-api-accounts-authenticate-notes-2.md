---
id: "en-docs-api-accounts-authenticate-notes-2"
title: "Authenticate — Notes"
sourcePath: "docs/api/accounts/authenticate.md"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/api/clients/auth"
sourceAnchor: "Notes"
---

# Authenticate
**API path(s):** /api/clients/auth

Authenticate a client using biometric face verification.

## Notes

- Requires API key authentication
- Either email OR countryCode + phone must be provided
- Biometric verification is optional but recommended
- Returns JWT token for subsequent authenticated requests
- ZelfProof and account data are returned for authenticated users
