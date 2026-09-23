---
id: "en-docs-resources-app-registrations-resend-an-app-registration-link-response-3"
title: "Resend an App Registration Link — Response"
sourcePath: "docs/resources/app-registrations/resend-an-app-registration-link.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoints:
  - "/v2/app-registrations"
  - "/v2/app-registrations/${appregistrationid}/resend-link"
  - "/v2/app-registrations/%s/resend-link"
  - "/v2/app-registrations/{app_registration_id}/resend-link"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}/resend-link"
sourceAnchor: "Response"
---

# Resend an App Registration Link
**API path(s):** /v2/app-registrations, /v2/app-registrations/${appregistrationid}/resend-link, /v2/app-registrations/%s/resend-link, /v2/app-registrations/{app_registration_id}/resend-link, /v2/app-registrations/{id}, /v2/app-registrations/{id}/resend-link

## Response

```json
{
	"data": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"link": "https://access.verifik.co/sign-up/6266193db77ccc8111730c90?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
		"firstName": "Robert",
		"lastName": "Sánchez",
		"fullName": "Robert Sánchez",
		"email": "robert_196@verifik.co",
		"step": "signUpForm",
		"steps": {
			"signUpForm": "mandatory",
			"basicInformation": "skip",
			"document": "optional",
			"liveness": "optional",
			"form": "skip"
		},
		"appRegistrationId": "6a98727a47eb5690a7f0b68f",
		"status": "ONGOING",
		"expiresAt": "2026-09-09 22:14:14",
		"accessType": "app_registration_initiated",
		"issuedAt": 1788990254,
		"emailSent": null
	}
}
```

When `sendEmail` is `true` and the enrollee has an email, `emailSent` looks like:

```json
{
	"sent": true,
	"email": "robert_196@verifik.co",
	"mailgunId": ""
}
```

  
  

```json
{
	"code": "access_denied",
	"message": "403:access_denied"
}
```

  
  

```json
{
	"code": "AppRegistration_not_found",
	"message": "404:AppRegistration_not_found"
}
```

  
  

```json
{
	"code": "cannot_resend_link_for_this_status",
	"message": "409:cannot_resend_link_for_this_status"
}
```

Client tokens receive this when status is `COMPLETED`, `COMPLETED_WITHOUT_KYC`, or `FAILED`. A `409` with `MissingParameter` is also returned when `sendEmail` is true but no enrollee email can be resolved.

### Notes

- **Hosted URL**: `data.link` is `{accessAppUrl}/sign-up/{projectId}?token={token}`. Production host is `https://access.verifik.co`.
- **Resume, do not recreate**: Do not call `POST /v2/app-registrations` again with the same email or phone. That returns `409:email_is_registered_already` or `409:phone_is_registered_already`.
- **Create token window**: The JWT from create is valid for **120 minutes**. After it expires, mint a new link here instead of reusing the original URL.
- **Not a resume URL**: [`GET /v2/app-registrations/{id}`](/resources/app-registrations/retrieve-an-app-registration) and [`PUT /{id}/sync`](/resources/app-registrations/sync-app-registration-status) do not generate a hosted continuation URL. `smartLink` on the App Registration object is the OneTimeLink product (`link.verifik.co`), not this flow.
- **Authorization**: Enrollee session tokens cannot call this endpoint. Use the client API token that owns the project.
