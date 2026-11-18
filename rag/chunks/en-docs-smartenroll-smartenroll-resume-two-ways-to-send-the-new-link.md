---
id: "en-docs-smartenroll-smartenroll-resume-two-ways-to-send-the-new-link"
title: "Resume an Incomplete Enrollment — Two ways to send the new link"
sourcePath: "docs/smartenroll/smartenroll-resume.mdx"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "Two ways to send the new link"
slug: "/smartenroll/resume"
url: "https://docs.verifik.co/smartenroll/resume"
---

# Resume an Incomplete Enrollment

## Two ways to send the new link

Someone started **SmartEnroll**, got part-way through (email done, ID not yet), and left. When they come back, they must **not** start over with the same email. That tries to create a second enrollment and fails as **already registered**.

Send them a **new link** for the enrollment they already began. They continue from the last step they completed.

You can send that new link in two ways: **Resend link in Verifik**, or **your app asks Verifik for a new link**.

## Two ways to send the new link

  
    
      
        In Verifik
      
      
        Open the enrollment, choose Resend link, then copy it or email it. Done.
      
    
  
  
    
      
        In your application
      
      
        When they click Continue Verification, ask Verifik for a new link and send them there.
      
    
  

---

## In Verifik

Open the enrollment in Verifik and use **Resend link**. You can copy the URL or send it by email — same action as on the [admin KYC review](/smartenroll/smartenroll-admin-kyc-review#resend-enrollment-link) screen.

That new link is what they should open. Do not send them the original invite after it has expired.

:::tip
If they still have the first link and it still works, they can keep using it. After about two hours it expires — send a new one instead of asking them to submit the sign-up form again.
:::

---

## In your application

1. When they **start** verification, store the enrollment id Verifik returns.
2. When they click **Continue Verification**, ask Verifik for a **new** link for that same id.
3. Send them to that new URL. They pick up from the last step — not a new registration.

Need the request body and response? See [Resend an App Registration Link](/resources/app-registrations/resend-an-app-registration-link).

:::important
Do not create a second enrollment with the same email or phone. Use the id you stored and request a new link.
:::

---
