---
id: "en-docs-vehicle-validation-bolivia-endpoint"
title: "\\U0001F1E7\\U0001F1F4 Bolivia - Vehicle Information — Endpoint"
sourcePath: "docs/vehicle-validation/bolivia.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "bo"
  - "vehicle-validation"
endpoints:
  - "/v2/bo/vehicle"
  - "/v2/bo/vehicle?plate=abc1234"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/bolivia"
url: "https://docs.verifik.co/vehicle-validation/bolivia"
---

# \U0001F1E7\U0001F1F4 Bolivia - Vehicle Information
**API path(s):** /v2/bo/vehicle, /v2/bo/vehicle?plate=abc1234

## Endpoint

The Vehicle Information Service in Bolivia allows you to retrieve precise details about a vehicle registered in the country. By providing the license plate number, the service returns information such as the vehicle's policy number, brand, class (e.g., work motorcycle), registration location, service type (e.g., private), and model.

### Endpoint

```
GET https://api.verifik.co/v2/bo/vehicle
```

Look up a vehicle by license plate (**`plate`**). Returns registration and vehicle details for **verification** and **compliance**.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Vehicle license plate to be consulted. | `ABC1234` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/bo/vehicle',
  params: {
    plate: 'ABC1234'
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
conn.request("GET", "/v2/bo/vehicle?plate=ABC1234", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/bo/vehicle?plate=ABC1234');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/bo/vehicle?plate=ABC1234")!,timeoutInterval: Double.infinity)
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
