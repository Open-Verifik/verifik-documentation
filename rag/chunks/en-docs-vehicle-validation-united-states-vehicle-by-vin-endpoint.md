---
id: "en-docs-vehicle-validation-united-states-vehicle-by-vin-endpoint"
title: "United States - Vehicle by VIN — Endpoint"
sourcePath: "docs/vehicle-validation/united-states/vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "us"
  - "usa"
  - "vehicle-validation"
endpoint: "/v2/usa/vehicle-by-vin"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/united-states/vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/united-states/vehicle-by-vin"
---

# United States - Vehicle by VIN
**API path(s):** /v2/usa/vehicle-by-vin

## Endpoint

This service decodes a **17-character vehicle identification number (VIN)** for a U.S. market vehicle and returns structured vehicle attributes (make, model, model year, engine, body class, and related fields) sourced from NHTSA VPIC-style data.

### Endpoint

```
GET https://api.verifik.co/v2/usa/vehicle-by-vin
```

Decode a U.S. vehicle by **VIN** using the `vin` query parameter (exactly 17 characters).

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `vin` | string | **Yes** | 17-character VIN (letters and digits, no spaces). | `1G3AK47A7CM535209` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/vehicle-by-vin',
  params: {
    vin: '1G3AK47A7CM535209'
  },
  headers: {
    'Accept': 'application/json',
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
payload = ''
headers = {}
conn.request("GET", "/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/vehicle-by-vin?vin=1G3AK47A7CM535209")!,timeoutInterval: Double.infinity)
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
