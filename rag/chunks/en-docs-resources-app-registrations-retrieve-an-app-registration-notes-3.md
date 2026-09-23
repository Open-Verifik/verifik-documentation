---
id: "en-docs-resources-app-registrations-retrieve-an-app-registration-notes-3"
title: "Get App Registration — Notes"
sourcePath: "docs/resources/app-registrations/retrieve-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "face-verifications"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}?populates[]=project&populates[]=projectflow&populates[]=emailvalidation"
  - "/v2/app-registrations/%s?populates[]=project&populates[]=projectflow"
  - "/v2/app-registrations/{app_registration_id}"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}?populates[]=comparefaceverification"
  - "/v2/face-verifications/:id"
sourceAnchor: "Notes"
---

# Get App Registration
**API path(s):** /v2/app-registrations/${appregistrationid}?populates[]=project&populates[]=projectflow&populates[]=emailvalidation, /v2/app-registrations/%s?populates[]=project&populates[]=projectflow, /v2/app-registrations/{app_registration_id}, /v2/app-registrations/{id}, /v2/app-registrations/{id}?populates[]=comparefaceverification, /v2/face-verifications/:id

## Notes

- **Populates**: Use `populates[]` query parameter to include related objects in the response. This reduces the need for additional API calls.
- **No continuation URL**: This response does not include a hosted resume `link`. Use [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link) when the user needs to continue SmartEnroll.
- **Token Access**: When using an app registration token, you can access your own registration by using the `/me` endpoint or by omitting the ID.
- **Status Values**: Status can be `STARTED`, `ONGOING`, `COMPLETED`, `COMPLETED_WITHOUT_KYC`, `FAILED`, `NEEDS_MANUAL_VERIFICATION`, or `EXPIRED`.
- **Related Objects**: Populated objects include full details instead of just identifier references.
