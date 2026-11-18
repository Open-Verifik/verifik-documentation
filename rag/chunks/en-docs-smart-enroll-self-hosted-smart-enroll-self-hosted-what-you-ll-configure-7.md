---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-what-you-ll-configure-7"
title: "SmartEnroll: Self Hosted — What You'll Configure"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "What You'll Configure"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## What You'll Configure

-   **Redirect URL** - Where to send users after completing onboarding (required)
-   **Webhook** - Endpoint to receive real-time onboarding events
-   **Blacklist Integration** - Connect to external databases to prevent enrollment
-   **API Integration** - Link to your customer database for data validation

### Example: Configure Integrations

:::info Blacklist Integration
The blacklist feature allows you to connect an external database. Users found in this database will be prevented from completing onboarding. Set `source` to "API" or "CSV" and configure the appropriate connection details.
:::

### Integration Sources

-   **NONE** - No external integration
-   **API** - Connect to a RESTful API endpoint
-   **CSV** - Upload a CSV file (coming soon)

### Integration Strategies

-   **none** - Allow all users to enroll
-   **blacklist** - Prevent users found in external database from enrolling

---

## Step 6: User Interface Customization

Customize the visual appearance of your onboarding flow to match your brand identity. This step is optional but recommended for a seamless user experience.

### What You'll Configure

-   **Logo** - Your company logo (displayed at the top)
-   **Background Color** - Main background color
-   **Button Color** - Primary button color
-   **Button Text Color** - Text color for buttons
-   **Title Color** - Color for headings and titles
-   **Text Color** - Color for body text
-   **Image** - Background or decorative image
-   **Image Background Color** - Background color for the image area

### Example: Configure Branding

:::tip Color Guidelines

-   Use high contrast between text and backgrounds for accessibility
-   Test your color scheme on both desktop and mobile devices
-   Ensure button colors stand out from the background
-   Consider your brand guidelines when choosing colors
    :::

---
