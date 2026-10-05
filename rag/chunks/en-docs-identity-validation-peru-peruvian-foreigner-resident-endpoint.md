---
id: "en-docs-identity-validation-peru-peruvian-foreigner-resident-endpoint"
title: "\\U0001F1F5\\U0001F1EA Peru - Foreigner Resident — Endpoint"
sourcePath: "docs/identity-validation/peru/peruvian-foreigner-resident.mdx"
locale: "en"
category: "identity-validation"
tags:
  - "pe"
  - "identity-validation"
endpoint: "/v2/pe/foreigner-id/ce"
sourceAnchor: "Endpoint"
slug: "/identity-validation/peru/peruvian-foreigner-resident"
url: "https://docs.verifik.co/identity-validation/peru/peruvian-foreigner-resident"
---

# \U0001F1F5\U0001F1EA Peru - Foreigner Resident
**API path(s):** /v2/pe/foreigner-id/ce

## Endpoint

The Peruvian ID Verification service allows you to verify the identity of an individual in Peru by their foreigner ID number. The service returns the full name and other related information of the individual, including immigration status, nationality, residence expiration, and foreigner ID details, along with a signature to certify the authenticity of the response.

This service is useful for verifying foreign residents in Peru and accessing their immigration status and document validity.

### Endpoint

```
GET https://api.verifik.co/v2/pe/foreigner-id/ce
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentNumber` | string | **Yes** | Document number of the person to be queried. | `005015372` |
| `dateOfBirth` | string | **Yes** | The date of birth of the document owner. | `16/08/1993` |

### Request

  

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/pe/foreigner-id/ce',
  params: {
    documentNumber: '005015372',
    dateOfBirth: '16/08/1993'
  },
  headers: { 
    'Authorization': 'Bearer '
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

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/foreigner-id/ce?documentNumber=005015372&dateOfBirth=16/08/1993")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```
