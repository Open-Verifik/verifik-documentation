---
id: "en-docs-resources-app-logins-retrieve-an-app-login-response-2"
title: "Retrieve an App Login — Response"
sourcePath: "docs/resources/app-logins/retrieve-an-app-login.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoints:
  - "/v2/app-logins/66e464acbad79f3a380d408f"
  - "/v2/app-logins/{id}"
sourceAnchor: "Response"
slug: "/resources/retrieve-an-app-login"
url: "https://docs.verifik.co/resources/retrieve-an-app-login"
---

# Retrieve an App Login
**API path(s):** /v2/app-logins/66e464acbad79f3a380d408f, /v2/app-logins/{id}

## Response

```json
{
  "data": {
    "_id": "66e464acbad79f3a380d408f",
    "client": "613375a1eab2fe08527f81e2",
    "name": "",
    "status": "pending",
    "project": "6266193db77ccc8111730c90",
    "projectFlow": "658ed28b0990f300134d7b78",
    "type": "faceliveness",
    "biometricValidation": "66e464acbad79f3a380d408d",
    "accessControlLog": "66e464acbad79f3a380d4090",
    "updatedAt": "2024-09-13T16:13:32.942Z",
    "createdAt": "2024-09-13T16:13:32.942Z",
    "__v": 0
  }
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```
