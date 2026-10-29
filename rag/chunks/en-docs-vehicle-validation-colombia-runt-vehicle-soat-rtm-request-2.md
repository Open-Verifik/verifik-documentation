---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-soat-rtm-request-2"
title: "SOAT and RTM Validation in RUNT — Request"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-soat-rtm.md"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/vehiculo"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/runt-vehicle-soat-rtm"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-soat-rtm"
---

# SOAT and RTM Validation in RUNT
**API path(s):** /v2/co/runt/vehiculo

Verifik’s SOAT and RTM Validation API provides real-time access to the status of mandatory documents for vehicles registered in Colombia: the Mandatory Traffic Accident Insurance (SOAT) and the Mechanical Technical Review (RTM).
This service is critical for ensuring that vehicles comply with Colombian traffic regulations, helping to prevent fines and legal issues.

## Request

```javascript

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/runt/vehiculo",
	params: { documentType: "CC", documentNumber: "123456789", plate: "ABC123" },
	headers: {
		Accept: "application/json",
		Authorization: "jwt ",
	},
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
payload = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
headers = {
  'Content-Type': 'text/plain'
}
conn.request("GET", "/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
let parameters = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
request.addValue("text/plain", forHTTPHeaderField: "Content-Type")

request.httpMethod = "GET"
request.httpBody = postData

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
setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'text/plain'
));
$request->setBody('https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003');
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
