---
id: "en-docs-vehicle-validation-peru-peruvian-vehicle-endpoint"
title: "Peru - Vehicle Information — Endpoint"
sourcePath: "docs/vehicle-validation/peru/peruvian-vehicle.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "pe"
  - "vehicle-validation"
endpoints:
  - "/v2/pe/vehiculo/placa"
  - "/v2/pe/vehiculo/placa?plate="
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/peru/peruvian-vehicle"
url: "https://docs.verifik.co/vehicle-validation/peru/peruvian-vehicle"
---

# Peru - Vehicle Information
**API path(s):** /v2/pe/vehiculo/placa, /v2/pe/vehiculo/placa?plate=

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/pe/vehiculo/placa
```

The Peruvian Vehicle Information service provides detailed data about registered vehicles in Peru based on their license plate number. The response includes key details such as the vehicle's make, model, year, engine and chassis serial numbers, seating capacity, and usage type.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `plate`        | string  | Yes      | Plate number to consult, without spaces or points. |

### Request

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/vehiculo/placa',
  params: {plate: 'ABC123'},
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt '
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
conn.request("GET", "/v2/pe/vehiculo/placa?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/pe/vehiculo/placa?plate=")!,timeoutInterval: Double.infinity)
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

```php
setUrl('https://api.verifik.co/v2/pe/vehiculo/placa?plate=');
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
```
