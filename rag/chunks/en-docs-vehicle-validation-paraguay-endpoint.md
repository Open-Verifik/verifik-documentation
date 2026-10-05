---
id: "en-docs-vehicle-validation-paraguay-endpoint"
title: "\\U0001F1F5\\U0001F1FE Paraguay - Vehicle Information — Endpoint"
sourcePath: "docs/vehicle-validation/paraguay.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "py"
  - "vehicle-validation"
endpoint: "/v2/py/vehicle"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/paraguay"
url: "https://docs.verifik.co/vehicle-validation/paraguay"
---

# \U0001F1F5\U0001F1FE Paraguay - Vehicle Information
**API path(s):** /v2/py/vehicle

## Endpoint

This service provides detailed information about a vehicle in Paraguay using its license plate number. The response includes vehicle details such as the brand, chassis, type, year, number of axles, the owner's name, the type of service, the current status of the vehicle, and the license plate number.

This information is useful for various purposes, including vehicle verification, ownership checks, and compliance monitoring.

### Endpoint

```
GET https://api.verifik.co/v2/py/vehicle
```

Look up a vehicle by license plate (**`plate`**). Returns registration, owner, and vehicle details for **verification** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Plate number to consult. | `ABC123` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/py/vehicle',
  params: {
    plate: 'ABC123'
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
conn.request("GET", "/v2/py/vehicle?plate=ABC123", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/py/vehicle?plate=ABC123');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/py/vehicle?plate=ABC123")!,timeoutInterval: Double.infinity)
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
