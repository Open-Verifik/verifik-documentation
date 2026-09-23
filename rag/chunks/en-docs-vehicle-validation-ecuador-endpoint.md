---
id: "en-docs-vehicle-validation-ecuador-endpoint"
title: "\\U0001F1EA\\U0001F1E8 Ecuador - Vehicle Fines — Endpoint"
sourcePath: "docs/vehicle-validation/ecuador.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "ec"
  - "vehicle-validation"
endpoints:
  - "/v2/ec/vehiculo/placa/multas"
  - "/v2/ec/vehiculo/placa/multas?plate=abc1234"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/ecuador"
url: "https://docs.verifik.co/vehicle-validation/ecuador"
---

# \U0001F1EA\U0001F1E8 Ecuador - Vehicle Fines
**API path(s):** /v2/ec/vehiculo/placa/multas, /v2/ec/vehiculo/placa/multas?plate=abc1234

## Endpoint

The Ecuador Vehicle License Plate Fines service allows you to retrieve information about fines associated with a vehicle's license plate in Ecuador. You can access details such as the vehicle's registration information, including the plate number, class, and model. The service also provides the current status, service type, and registration expiration date, along with any outstanding fines linked to the license plate.

This service is useful for individuals and businesses aiming to stay informed about fines associated with their vehicles and ensure compliance with Ecuadorian traffic laws.

### Endpoint

```
GET https://api.verifik.co/v2/ec/vehiculo/placa/multas
```

Look up an Ecuadorian vehicle by **`plate`** (license plate). Returns registration details and **outstanding fines** for **compliance**, **fleet**, and **risk** checks.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Plate number to consult, without spaces or points. | `ABC1234` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ec/vehiculo/placa/multas',
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
conn.request("GET", "/v2/ec/vehiculo/placa/multas?plate=ABC1234", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABC1234');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/ec/vehiculo/placa/multas?plate=ABC1234")!,timeoutInterval: Double.infinity)
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
