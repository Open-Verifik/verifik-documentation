---
id: "en-docs-accounts-clients-account-information-endpoint"
title: "Account Information — Endpoint"
sourcePath: "docs/accounts/clients/account-information.mdx"
locale: "en"
category: "accounts"
tags:
  - "clients"
  - "accounts"
endpoints:
  - "/api/clients/me"
  - "/v2/clients/me"
sourceAnchor: "Endpoint"
slug: "/accounts/clients/account-information"
url: "https://docs.verifik.co/accounts/clients/account-information"
---

# Account Information
**API path(s):** /api/clients/me, /v2/clients/me

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/clients/me
```

With this service, you can obtain your client information along with more information about your credits, subscription plan and settings.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Query Parameters

| Param         | Value                                                                                                                                                                                                                    | Description                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| populates[]=  | `clientSubscriptionPlan`, `clientSubscriptionPlan.subscriptionPlan`, `clientSettings` | With this option you can include populates to know more information linked to your client account. |

### Request

  

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  
  

```python

url = "https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan"

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

  
  

```go
package main

    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan"
    
    req, _ := http.NewRequest("GET", url, nil)
    
    req.Header.Add("Content-Type", "application/json")
    req.Header.Add("Authorization", "Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw")
    
    res, _ := http.DefaultClient.Do(req)
    
    defer res.Body.Close()
    body, _ := io.ReadAll(res.Body)
    
    fmt.Println(res)
    fmt.Println(string(body))
}
```

  
  

```php
 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```
