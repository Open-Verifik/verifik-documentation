---
id: "en-docs-api-projects-projects-create-notes-4"
title: "Create Project — Notes"
sourcePath: "docs/api/projects/projects-create.mdx"
locale: "en"
category: "api"
tags:
  - "api"
endpoint: "/v3/projects"
sourceAnchor: "Notes"
slug: "/api/projects/projects-create"
url: "https://docs.verifik.co/api/projects/projects-create"
---

# Create Project
**API path(s):** /v3/projects

## Notes

- **Demo Mode**: When `demoMode: true` without `demoOTP`, the system auto-generates a random 6-digit OTP. In development environments, demo mode is automatically enabled.
- **Project Flow**: For production use, create complete projects with projectFlow configuration in a single request to ensure consistency.
- **Validation**: All fields are validated; missing required fields or invalid values result in validation errors.
- **Data Protection**: The `postalCode` must be 3-12 characters, alphanumeric with spaces and hyphens allowed.
- **Document Types**: When `steps.document` is not "skip", `verificationMethods` and `documentTypes` are required.
- **Liveness**: `minScore` range: 0.52–0.9; `searchMinScore` range: 0.7–0.95.
