---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-step-4-liveness-detection-6"
title: "SmartEnroll: Self Hosted — Step 4: Liveness Detection"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Step 4: Liveness Detection"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Step 4: Liveness Detection

Configure biometric verification to ensure users are physically present during onboarding. This step uses facial recognition and liveness detection to prevent fraud.

### What You'll Configure

-   **Liveness Step Requirement** - Whether biometric verification is mandatory, optional, or skipped
-   **Attempt Limit** - Maximum number of liveness verification attempts (1-5)
-   **Liveness Score** - Minimum score to confirm the user is live (0.52 - 0.90)
-   **Comparison Score** - Minimum score to match face with document photo (`0.65`–`0.95`; default `0.85`). Printed ID portraits (worn Colombian cédulas and similar documents in other countries) often score lower against a live selfie; `0.65` is the lowest hosted floor after you accept more false-accept risk.
-   **Search Mode** - Speed vs accuracy trade-off (FAST or ACCURATE)

### Example: Configure Liveness Detection

:::tip Liveness Scores

-   **minScore (0.65 recommended)** - Lower scores work with low-quality cameras but may increase false positives
-   **searchMinScore (0.80 recommended)** - Higher scores provide better face-to-document matching but require better image quality

Start with recommended values and adjust based on your security requirements and user experience feedback.
:::

### Search Modes

-   **FAST** - Optimized for speed, suitable for most use cases
-   **ACCURATE** - Slower but more precise, recommended for high-security applications

---

## Step 5: Integrations

Connect your KYC project to external systems, configure webhooks for real-time notifications, and set up post-onboarding redirects.
