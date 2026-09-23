---
id: "es-docs-es-resources-project-flows-project-flows-project-flow-object-structure-2"
title: "Flujos de Proyecto — Project Flow Object Structure"
sourcePath: "docs-es/resources/project-flows/project-flows.mdx"
locale: "es"
category: "resources"
tags:
  - "project-flows"
  - "resources"
endpoint: "/v2/project-flows"
sourceAnchor: "Project Flow Object Structure"
slug: "/resources/project-flows"
url: "https://docs.verifik.co/verifik-es/resources/project-flows"
---

# Flujos de Proyecto
**API path(s):** /v2/project-flows

## Project Flow Object Structure

```json
{
  "id": "flow_123456789",
  "name": "Standard Onboarding Flow",
  "type": "onboarding",
  "projectId": "proj_123456789",
  "steps": [
    {
      "type": "form",
      "name": "personal_info",
      "required": true,
      "fields": ["firstName", "lastName", "email", "phone"]
    },
    {
      "type": "document_verification",
      "name": "id_verification",
      "required": true,
      "documentTypes": ["passport", "drivers_license"]
    },
    {
      "type": "biometric_verification",
      "name": "selfie_verification",
      "required": true,
      "livenessDetection": true
    }
  ],
  "securitySettings": {
    "whitelistEnabled": false,
    "blacklistEnabled": true,
    "strictMode": true
  },
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### Use Cases

- **Custom Onboarding**: Define specific verification steps for new users
- **Compliance Requirements**: Meet regulatory requirements for identity verification
- **Risk Management**: Configure different security levels based on user type
- **Integration Flexibility**: Customize verification flows for different business needs
