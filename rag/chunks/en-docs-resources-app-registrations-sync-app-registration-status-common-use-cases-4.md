---
id: "en-docs-resources-app-registrations-sync-app-registration-status-common-use-cases-4"
title: "Sync App Registration Status — Common Use Cases"
sourcePath: "docs/resources/app-registrations/sync-app-registration-status.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}/sync"
  - "/v2/app-registrations/%s/sync"
  - "/v2/app-registrations/{app_registration_id}/sync"
  - "/v2/app-registrations/{id}/sync"
sourceAnchor: "Common Use Cases"
---

# Sync App Registration Status
**API path(s):** /v2/app-registrations/${appregistrationid}/sync, /v2/app-registrations/%s/sync, /v2/app-registrations/{app_registration_id}/sync, /v2/app-registrations/{id}/sync

## Common Use Cases

- **Complete Registration**: Use `end` step with `COMPLETED` status to finalize user registration
- **Skip Verification**: Use `skipKYC` step to bypass verification requirements when appropriate
- **Manual Review**: Use `end` step with `NEEDS_MANUAL_VERIFICATION` status for flagged registrations
- **Step Progression**: Use intermediate steps to move users through the registration flow

This endpoint provides comprehensive control over the app registration process, allowing you to manage user progression, handle edge cases, and ensure proper authentication token generation for onboarding flows.
