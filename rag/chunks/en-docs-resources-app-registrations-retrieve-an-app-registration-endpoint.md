---
id: "en-docs-resources-app-registrations-retrieve-an-app-registration-endpoint"
title: "Get App Registration — Endpoint"
sourcePath: "docs/resources/app-registrations/retrieve-an-app-registration.mdx"
locale: "en"
category: "resources"
tags:
  - "app-registrations"
  - "face-verifications"
  - "resources"
endpoints:
  - "/v2/app-registrations/${appregistrationid}?populates[]=project&populates[]=projectflow&populates[]=emailvalidation"
  - "/v2/app-registrations/%s?populates[]=project&populates[]=projectflow"
  - "/v2/app-registrations/{app_registration_id}"
  - "/v2/app-registrations/{id}"
  - "/v2/app-registrations/{id}?populates[]=comparefaceverification"
  - "/v2/face-verifications/:id"
sourceAnchor: "Endpoint"
---

# Get App Registration
**API path(s):** /v2/app-registrations/${appregistrationid}?populates[]=project&populates[]=projectflow&populates[]=emailvalidation, /v2/app-registrations/%s?populates[]=project&populates[]=projectflow, /v2/app-registrations/{app_registration_id}, /v2/app-registrations/{id}, /v2/app-registrations/{id}?populates[]=comparefaceverification, /v2/face-verifications/:id

## Endpoint

```
GET https://api.verifik.co/v2/app-registrations/{id}
```

Retrieve detailed information about a specific app registration by its ID. You can populate related objects like validations, project, and project flow.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Params

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | The unique identifier of the app registration |
| `populates[]` | array | No | Populate related objects. Available: `project`, `projectFlow`, `emailValidation`, `phoneValidation`, `biometricValidation`, `documentValidation`, `informationValidation`, `person`, `face`, `documentFace`, `compareFaceVerification`, `cryptoValidation`, `formSubmittion`, `signature`, `accessControlLog` |

### Request

  

```javascript
const fetch = require("node-fetch");

async function run() {
  const appRegistrationId = "674de8df21c72be3cc42b8a7";
  const res = await fetch(`https://api.verifik.co/v2/app-registrations/${appRegistrationId}?populates[]=project&populates[]=projectFlow&populates[]=emailValidation`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
  });
  console.log(await res.json());
}

run();
```

  
  

```php

  

```python

app_registration_id = "674de8df21c72be3cc42b8a7"
url = f"https://api.verifik.co/v2/app-registrations/{app_registration_id}"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"populates[]": ["project", "projectFlow", "emailValidation"]}
r = requests.get(url, params=params, headers=headers)
print(r.json())
```

  
  

```go
package main

    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

func main() {
    appRegistrationId := "674de8df21c72be3cc42b8a7"
    url := fmt.Sprintf("https://api.verifik.co/v2/app-registrations/%s?populates[]=project&populates[]=projectFlow", appRegistrationId)
    req, _ := http.NewRequest("GET", url, nil)
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
