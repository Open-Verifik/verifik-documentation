---
id: "en-docs-smartaccess-smartaccess-2-configure-login-methods-3"
title: "SmartAccess — 2. Configure Login Methods"
sourcePath: "docs/smartaccess/smartaccess.md"
locale: "en"
category: "smartaccess"
tags:
  - "smartaccess"
sourceAnchor: "2. Configure Login Methods"
slug: "/smartaccess"
url: "https://docs.verifik.co/smartaccess"
---

# SmartAccess

**SmartAccess** is a no-code solution designed to provide secure and seamless passwordless logins for users. This platform enables businesses to offer various authentication methods, including email, phone, and biometric verification, ensuring a user-friendly and secure experience. With SmartAccess, companies can easily integrate these authentication methods without the need for complex coding or infrastructure development.

## 2. Configure Login Methods

The **Login Methods** step is where you define how your users will authenticate themselves. SmartAccess offers a robust range of options that you can customize extensively to meet your business requirements:

* **Email Verification:** Enable or disable email-based authentication. If enabled, you can customize how the email OTPs (One-Time Passwords) are generated and sent. This includes setting the expiration time for OTPs, customizing the email templates to reflect your brand, and deciding whether to require additional verification steps, such as two-factor authentication (2FA).
* **Phone Verification:** SmartAccess supports phone-based verification via SMS and WhatsApp. You can choose to enable one or both options depending on your user base's preferences. Customize the messaging format, language, and delivery time to ensure a seamless experience. Additionally, you can configure fallback options in case the primary method fails, such as sending a second OTP through a different channel.

#### Biometric Authentication

* **Biometric Authentication:** The platform's biometric capabilities allow users to log in using facial recognition. You have significant control over how this process works:
  * **Liveness Score:** Customize the threshold for liveness detection. This score determines how stringent the system is in verifying that the biometric input is from a live person, not a static image or video.
  * **Search Score:** This score sets the accuracy in search criteria (1:N) of facial recognition. A higher score means an more security, stricter matching criteria, and demands a higher resemblance to the user in order to gain access. The recommended score for optimal performance is 85%.

SmartAccess also includes an option to **Recommend Face Registration** every time a user accesses the project without prior biometric registration. This ensures that users are consistently encouraged to enroll in the most secure authentication method available.
