---
id: "en-docs-resources-project-flows-create-a-project-flow-smart-enroll-project-flow-endpoint"
title: "Smart Enroll Project Flow — Endpoint"
sourcePath: "docs/resources/project-flows/create-a-project-flow/smart-enroll-project-flow.mdx"
locale: "en"
category: "resources"
tags:
  - "project-flows"
  - "resources"
endpoints:
  - "/api/project-flows"
  - "/v2/project-flows"
sourceAnchor: "Endpoint"
slug: "/resources/project-flows/create-a-project-flow/smart-enroll-project-flow"
url: "https://docs.verifik.co/resources/project-flows/create-a-project-flow/smart-enroll-project-flow"
---

# Smart Enroll Project Flow
**API path(s):** /api/project-flows, /v2/project-flows

## Endpoint

Create a project flow specifically configured for Smart Enroll onboarding. This flow is optimized for the Smart Enroll system and includes all necessary configurations for a complete onboarding experience.

### Endpoint

```
POST https://api.verifik.co/v2/project-flows
```

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Request Body

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `project` | string | Yes | The project ID this flow belongs to |
| `type` | string | Yes | Flow type: `"onboarding"` for Smart Enroll |
| `name` | string | Yes | Name of the project flow |
| `target` | string | Yes | Target type: `"personal"` or `"business"` |
| `status` | string | Yes | Initial status: `"draft"` or `"active"` |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/project-flows", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      project: "64a1b2c3d4e5f6789012345",
      type: "onboarding",
      name: "Smart Enroll Project Flow",
      target: "personal",
      status: "draft",
      signUpForm: {
        fullName: true,
        fullNameStyle: "separate",
        email: true,
        emailGateway: "mailgun",
        phone: true,
        phoneGateway: "whatsapp",
        countryCode: "US",
        showTermsAndConditions: true,
        showPrivacyNotice: true
      },
      documents: {
        attemptLimit: 3,
        criminalHistoryVerification: true,
        informationVerification: true,
        screening: true,
        verificationMethods: ["SCAN_PROMPT"],
        documentTypes: [
          {
            country: "United States",
            configurations: [
              {
                active: true,
                documentCategory: "government_id",
                documentTemplates: []
              }
            ]
          }
        ]
      },
      liveness: {
        attemptLimit: 3,
        minScore: 0.65,
        searchMinScore: 0.8,
        searchMode: "FAST"
      },
      steps: {
        document: "mandatory",
        liveness: "mandatory"
      }
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```python

url = "https://api.verifik.co/v2/project-flows"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "project": "64a1b2c3d4e5f6789012345",
    "type": "onboarding",
    "name": "Smart Enroll Project Flow",
    "target": "personal",
    "status": "draft",
    "signUpForm": {
        "fullName": True,
        "fullNameStyle": "separate",
        "email": True,
        "emailGateway": "mailgun",
        "phone": True,
        "phoneGateway": "whatsapp",
        "countryCode": "US",
        "showTermsAndConditions": True,
        "showPrivacyNotice": True
    },
    "documents": {
        "attemptLimit": 3,
        "criminalHistoryVerification": True,
        "informationVerification": True,
        "screening": True,
        "verificationMethods": ["SCAN_PROMPT"],
        "documentTypes": [
            {
                "country": "United States",
                "configurations": [
                    {
                        "active": True,
                        "documentCategory": "government_id",
                        "documentTemplates": []
                    }
                ]
            }
        ]
    },
    "liveness": {
        "attemptLimit": 3,
        "minScore": 0.65,
        "searchMinScore": 0.8,
        "searchMode": "FAST"
    },
    "steps": {
        "document": "mandatory",
        "liveness": "mandatory"
    }
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```
