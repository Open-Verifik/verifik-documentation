---
id: "en-docs-smart-enroll-self-hosted-smart-enroll-self-hosted-getting-started-2"
title: "SmartEnroll: Self Hosted — Getting Started"
sourcePath: "docs/smart-enroll-self-hosted/smart-enroll-self-hosted.md"
locale: "en"
category: "smart-enroll-self-hosted"
tags:
  - "smart-enroll-self-hosted"
sourceAnchor: "Getting Started"
slug: "/smart-enroll-self-hosted"
url: "https://docs.verifik.co/smart-enroll-self-hosted"
---

# SmartEnroll: Self Hosted

The **SmartEnroll API** provides programmatic access to all SmartEnroll functionality, allowing you to build custom KYC and onboarding flows that integrate seamlessly with your existing systems. This solution is perfect for businesses that need more control over the user experience or want to integrate onboarding into their existing applications.

## Getting Started

### Authentication

All API requests require a valid JWT token. Include the token in the Authorization header:

```http
Authorization: Bearer 
```

### Base URLs

-   **Production**: `https://api.verifik.co`
-   **Staging**: `https://staging-api.verifik.co`
-   **Development**: `https://dev-api.verifik.co`

:::tip Environment Selection
Use the appropriate base URL based on your environment. All examples in this documentation use the production URL.
:::

### Quick Start Example

Here's a simple example of how to list all projects using the API:

### API Resources

The SmartEnroll API provides two main resources:

#### Projects

Manage your KYC projects with complete control over configuration, branding, and verification settings.

-   **[List Projects](/resources/projects/list-all-projects)** - Retrieve all projects
-   **[Get Project](/resources/projects/retrieve-a-project)** - Get project details
-   **[Create Project](/resources/projects/projects-create)** - Create new projects
-   **[Update Project](/resources/projects/update-a-project)** - Update project configuration
-   **[Delete Project](/resources/projects/projects-delete)** - Remove projects

#### Project Flows

Configure verification flows and manage project-specific settings.

-   **[Update Project Flow](../resources/project-flows/project-flows-update)** - Update verification flow settings
-   **[Delete Project Flow](../resources/project-flows/project-flows-delete)** - Remove project flows

---

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
    "data": {
        // Response data
    },
    "total": 0,
    "limit": 0,
    "page": 0,
    "pages": 0
}
```
