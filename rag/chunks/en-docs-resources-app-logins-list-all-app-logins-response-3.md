---
id: "en-docs-resources-app-logins-list-all-app-logins-response-3"
title: "List All App Logins — Response"
sourcePath: "docs/resources/app-logins/list-all-app-logins.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoint: "/v2/app-logins"
sourceAnchor: "Response"
slug: "/resources/list-all-app-logins"
url: "https://docs.verifik.co/resources/list-all-app-logins"
---

# List All App Logins
**API path(s):** /v2/app-logins

## Response

```json
{
  "data": [
    {
      "_id": "66e49e46dbfa9731ceb9d477",
      "client": "613375a1eab2fe08527f81e2",
      "name": "Verifik Main Account",
      "status": "validated",
      "project": "6266193db77ccc8111730c90",
      "projectFlow": "658ed28b0990f300134d7b78",
      "type": "email",
      "emailValidation": {
        "_id": "66e49e45dbfa9731ceb9d475",
        "client": "613375a1eab2fe08527f81e2",
        "project": "6266193db77ccc8111730c90",
        "projectFlow": "658ed28b0990f300134d7b78",
        "status": "validated",
        "validationMethod": "verificationCode",
        "email": "miguel.trevinom@gmail.com",
        "emailData": {
          "firstName": "Verifik Main Account",
          "title": "Verifik Client App",
          "projectName": "Verifik Client App",
          "contactEmail": "miguel@verifik.co",
          "logo": "https://cdn.verifik.co/projects/VerifikClientApp_1726146056389-image.png",
          "authLink": "http://localhost:4400/sign-in/6266193db77ccc8111730c90?email=miguel.trevinom@gmail.com&otp=",
          "buttonColor": "#14AE5C",
          "buttonTxtColor": "#FFF"
        },
        "otp": "$2a$10$mMYT2vE6sx3J898UOPDeFeADuXYE3Gktkx9DwVUmDr0uiAu1qdp.y",
        "expiresAt": "2024-09-13T20:29:17.000Z",
        "extraParams": [],
        "type": "login",
        "redirectUrl": "https://verifik.app",
        "requires2FA": false,
        "ipAddress": "::ffff:172.17.0.1",
        "updatedAt": "2024-09-13T20:19:47.927Z",
        "createdAt": "2024-09-13T20:19:18.660Z",
        "__v": 0
      }
    }
  ]
}
```
