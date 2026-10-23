---
id: "en-docs-smartenroll-smartenroll-resume-why-they-see-already-registered-2"
title: "Resume an Incomplete Enrollment — Why they see “already registered”"
sourcePath: "docs/smartenroll/smartenroll-resume.mdx"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Why they see “already registered”"
slug: "/smartenroll/resume"
url: "https://docs.verifik.co/smartenroll/resume"
---

# Resume an Incomplete Enrollment

Someone started **SmartEnroll**, got part-way through (email done, ID not yet), and left. When they come back, they must **not** start over with the same email. That tries to create a second enrollment and fails as **already registered**.
Send them a **new link** for the enrollment they already began. They continue from the last step they completed.
You can send that new link in two ways: **Resend link in Verifik**, or **your app asks Verifik for a new link**.

## Why they see “already registered”

The first link expired
  
  
    The first SmartEnroll link lasts about two hours. After that, opening it again shows the sign-up form. Submitting the same email (or phone) fails because that enrollment already exists. A new link skips the form and continues the original enrollment.
  

---

## Who you can send a new link to

You can resume enrollments that are still in progress (started, but not finished). You cannot resend a link after the enrollment has **completed** or **failed**.

### What not to use

| Avoid | Why |
| --- | --- |
| Starting a new enrollment with the same email or phone | That is a second registration, not a resume |
| Looking up the enrollment or syncing its status | Those do not give you a new hosted link |
| A `smartLink` on the record | Different product (`link.verifik.co`), not hosted SmartEnroll |

---

## Related

- [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link) — API request and response
- [Create an App Registration](/resources/app-registrations/create-an-app-registration) — first session
- [SmartEnroll KYC Flow](/smartenroll/smartenroll-kyc-flow) — the steps they walk through
- [SmartEnroll API Companion](/smartenroll/api-companion) — scores and webhooks after KYC
