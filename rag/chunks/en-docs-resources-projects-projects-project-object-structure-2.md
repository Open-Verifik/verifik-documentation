---
id: "en-docs-resources-projects-projects-project-object-structure-2"
title: "Projects — Project Object Structure"
sourcePath: "docs/resources/projects/projects.mdx"
locale: "en"
category: "resources"
tags:
  - "projects"
  - "resources"
endpoint: "/v2/projects"
sourceAnchor: "Project Object Structure"
slug: "/resources/projects/projects"
url: "https://docs.verifik.co/resources/projects/projects"
---

# Projects
**API path(s):** /v2/projects

## Project Object Structure

```json
{
  "id": "proj_123456789",
  "name": "My Company",
  "description": "Company verification project",
  "logo": "https://example.com/logo.png",
  "primaryColor": "#0066CC",
  "secondaryColor": "#FFFFFF",
  "contactEmail": "support@mycompany.com",
  "privacyPolicyUrl": "https://mycompany.com/privacy",
  "termsOfServiceUrl": "https://mycompany.com/terms",
  "dataProtectionOfficer": {
    "name": "John Doe",
    "email": "dpo@mycompany.com",
    "address": "123 Main St, City, State"
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Use Cases

- **Brand Consistency**: Ensure your brand appears correctly across all verification flows
- **Legal Compliance**: Meet regulatory requirements for data protection
- **User Experience**: Provide a seamless, branded experience for your users
- **Multi-tenant Support**: Manage multiple projects for different business units
