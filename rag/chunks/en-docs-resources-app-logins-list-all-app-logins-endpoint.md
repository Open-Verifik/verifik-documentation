---
id: "en-docs-resources-app-logins-list-all-app-logins-endpoint"
title: "List All App Logins — Endpoint"
sourcePath: "docs/resources/app-logins/list-all-app-logins.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoints:
  - "/api/app-logins"
  - "/v2/app-logins"
sourceAnchor: "Endpoint"
slug: "/resources/list-all-app-logins"
url: "https://docs.verifik.co/resources/list-all-app-logins"
---

# List All App Logins
**API path(s):** /api/app-logins, /v2/app-logins

## Endpoint

```
GET https://api.verifik.co/v2/app-logins
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Parameter Name                     | Type   | Required | Description                                                                                                          |
| ---------------------------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `page`                             | number | No       | Specifies the page of the results to retrieve. Default is `1`                                                        |
| `populates[]`                      | array  | No       | An array specifying which validations to include (e.g., `emailValidation`, `phoneValidation`, `biometricValidation`) |
| `sort`                             | string | No       | Field by which to sort the results. Default is by creation date (`-createdAt`)                                       |
| `where-exists_emailValidation`     | number | No       | Filter results where email validation exists (`1` to include)                                                        |
| `where-exists_phoneValidation`     | number | No       | Filter results where phone validation exists (`1` to include)                                                        |
| `where-exists_biometricValidation` | number | No       | Filter results where biometric validation exists (`1` to include)                                                    |
| `like_name`                        | string | No       | Search results by name (supports partial matching)                                                                   |
