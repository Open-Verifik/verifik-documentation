---
id: "en-docs-resources-biometric-validations-retrieve-a-biometric-validation-request-2"
title: "Retrieve a Biometric Validation — Request"
sourcePath: "docs/resources/biometric-validations/retrieve-a-biometric-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "biometric-validations"
  - "resources"
endpoints:
  - "/v2/biometric-validations/biometric_validation_123456789"
  - "/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow&sort=-createdat&limit=10"
  - "/v2/biometric-validations/{id}"
sourceAnchor: "Request"
slug: "/resources/retrieve-a-biometric-validation"
url: "https://docs.verifik.co/resources/retrieve-a-biometric-validation"
---

# Retrieve a Biometric Validation
**API path(s):** /v2/biometric-validations/biometric_validation_123456789, /v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectflow&sort=-createdat&limit=10, /v2/biometric-validations/{id}

## Request

### Request

```javascript
const axios = require("axios");

const config = {
  method: "get",
  url: "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789",
  headers: {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
  },
  params: {
    "populates[]": ["client", "project", "projectFlow"],
    "sort": "-createdAt",
    "limit": 10
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

url = "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789"

params = {
  'populates[]': ['client', 'project', 'projectFlow'],
  'sort': '-createdAt',
  'limit': 10
}

headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
}

response = requests.request("GET", url, headers=headers, params=params)

print(response.text)
```

```php
 'https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow&sort=-createdAt&limit=10',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer YOUR_ACCESS_TOKEN'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```

```go
package main

  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {
  url := "https://api.verifik.co/v2/biometric-validations/biometric_validation_123456789?populates[]=client&populates[]=project&populates[]=projectFlow&sort=-createdAt&limit=10"

  req, _ := http.NewRequest("GET", url, nil)

  req.Header.Add("Authorization", "Bearer YOUR_ACCESS_TOKEN")

  res, _ := http.DefaultClient.Do(req)

  defer res.Body.Close()
  body, _ := ioutil.ReadAll(res.Body)

  fmt.Println(string(body))
}
```
