---
id: "en-docs-resources-app-logins-retrieve-an-app-login-endpoint"
title: "Retrieve an App Login — Endpoint"
sourcePath: "docs/resources/app-logins/retrieve-an-app-login.mdx"
locale: "en"
category: "resources"
tags:
  - "app-logins"
  - "resources"
endpoints:
  - "/api/app-logins"
  - "/v2/app-logins"
  - "/v2/app-logins/{id}"
sourceAnchor: "Endpoint"
slug: "/resources/retrieve-an-app-login"
url: "https://docs.verifik.co/resources/retrieve-an-app-login"
---

# Retrieve an App Login
**API path(s):** /api/app-logins, /v2/app-logins, /v2/app-logins/{id}

## Endpoint

```
GET https://api.verifik.co/v2/app-logins/{id}
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type   | Required | Description                                                 |
| ---- | ------ | -------- | ----------------------------------------------------------- |
| `id` | string | Yes      | The unique ID of the app login record you want to retrieve |

### Query Parameters

| Name          | Type  | Required | Description                                                                            |
| ------------- | ----- | -------- | -------------------------------------------------------------------------------------- |
| `populates[]` | array | No       | An array specifying which validation fields to populate (e.g., `biometricValidation`) |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f',
  params: {
    'populates[]': ['biometricValidation']
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '
}

conn.request("GET", "/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation', [
  'headers' => [
    'Content-Type' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);

echo $response->getBody();
```

  
  

```go
package main

	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "https://api.verifik.co/v2/app-logins/66e464acbad79f3a380d408f?populates[]=biometricValidation"
	
	req, _ := http.NewRequest("GET", url, nil)
	
	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Authorization", "Bearer ")
	
	res, _ := http.DefaultClient.Do(req)
	
	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)
	
	fmt.Println(string(body))
}
```
