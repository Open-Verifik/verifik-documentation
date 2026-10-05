---
id: "en-docs-smartenroll-smartenroll-4-biometric-registration-4"
title: "SmartEnroll — 4. Biometric Registration"
sourcePath: "docs/smartenroll/smartenroll.md"
locale: "en"
category: "smartenroll"
tags:
  - "smartenroll"
sourceAnchor: "4. Biometric Registration"
slug: "/smartenroll"
url: "https://docs.verifik.co/smartenroll"
---

# SmartEnroll

**SmartEnroll** is a no-code solution designed to provide secure and seamless onboardings for users. This platform enables businesses to offer various onboarding checks, including email, phone, and biometric verification, document validations, AML checks, tempering checks and more. All those features are integrated into our project ensuring a user-friendly and secure experience. With SmartEnroll, companies can easily integrate these KYC solutions without the need for complex coding or infrastructure development.

## 4. Biometric Registration

**Biometric Registration:** This is the biometric verification part of the flow, where a user's face is checked to confirm their presence during the onboarding process.

-   **Set an Attempt Limit**: Specifies how many times a user can fail liveness detection before being blocked from continuing. The allowed attempts can be customized from 3 to 10.
-   **Liveness Score:** Customize the threshold for liveness detection. This score determines how stringent the system is in verifying that the biometric input is from a live person, not a static image or video. The default recommendation is 50%, which ensures the liveness check works optimally on most devices.
-   **Compare Score:** This score sets the accuracy of comparing (1:1) the face of the end user to the document provided. A higher score means more security, stricter matching criteria, and demands a higher resemblance to the user in order to gain access. The hosted default / recommended value is **85% (`0.85`)**. Hosted SmartEnroll allows **`0.65`–`0.95`**. The direct face-recognition API accepts **`0.67`–`0.95`**. Printed ID portraits are often faded, scratched, or low-resolution — some Colombian cédulas are especially poor, and the same document-quality problem can appear in other countries. Live selfie vs printed photo scores lower than live-vs-live. Lowering toward **65% (`0.65`)** reduces false rejects of genuine users with bad document photos; it also raises false-accept risk. Keep `0.85` unless you see real users failing.

:::warning Security Notice
Higher scores provide better security but may increase false rejection rates. Test with your user base to find the optimal balance. Server-side `cropFace` is not supported on face-recognition compare APIs—send face-focused images or crop client-side.
:::

For reading scores programmatically after enrollment (populates, webhooks, thresholds), see the [SmartEnroll API Companion](/smartenroll/api-companion).

---
