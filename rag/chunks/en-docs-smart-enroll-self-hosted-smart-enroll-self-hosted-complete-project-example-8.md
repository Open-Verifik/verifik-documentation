---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-complete-project-example-8"
title: "SmartEnroll: Self Hosted — Complete Project Example"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Complete Project Example"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Complete Project Example

Here's a complete example showing how to create a fully configured KYC project in a single request:

---

## Project Lifecycle Management

### Activating Your Project

Once you've configured all steps, change the project status to make it live:

### Project Status Values

-   **draft** - Project is being configured, not accessible to end users
-   **active** - Project is live and accepting user enrollments
-   **paused** - Project is temporarily disabled, no new enrollments accepted

:::warning Before Activating
Ensure all required steps are properly configured and tested before setting status to "active". Users will not be able to complete onboarding if required steps are missing or misconfigured.
:::

---

## Integration Patterns

### Progressive Configuration

Build your project step-by-step, matching the SmartEnroll interface workflow:

1. **Create** the project with basic information
2. **Configure** sign-up form fields
3. **Set up** document verification
4. **Enable** liveness detection
5. **Connect** integrations and webhooks
6. **Customize** branding and appearance
7. **Activate** the project

This approach provides better error handling and validation at each step.

### Single-Request Configuration

Create a complete project in one API call if you have all configuration details prepared. This is ideal for:

-   Automated project creation
-   Template-based deployments
-   Migration from other systems

:::tip Best Practice
Use the progressive approach when building projects manually or through a user interface. Use the single-request approach for automation and templates.
:::

---
