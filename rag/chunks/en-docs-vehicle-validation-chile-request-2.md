---
id: "en-docs-vehicle-validation-chile-request-2"
title: "\\U0001F1E8\\U0001F1F1 Chile - Vehicle Information — Request"
sourcePath: "docs/vehicle-validation/chile.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle-soap"
  - "/v2/cl/vehicle/v3"
  - "/v2/cl/vehicle?plate=bbcc12"
sourceAnchor: "Request"
slug: "/vehicle-validation/chile"
url: "https://docs.verifik.co/vehicle-validation/chile"
---

# \U0001F1E8\U0001F1F1 Chile - Vehicle Information
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle-soap, /v2/cl/vehicle/v3, /v2/cl/vehicle?plate=bbcc12

Chilean vehicle validation service provides comprehensive verification capabilities for vehicle information. This service allows you to retrieve detailed information about vehicles registered in Chile.
Related Chile vehicle endpoints:
- **Vehicle Information (`v2/cl/vehicle`)**: commercial vehicle lookup (Reale / getapi). A **404** means the plate is not in that source—not an outage.
- **Vehicle Technical Review (`v3/cl/vehicle`)**: technical review status and inspection history. See [Chile - Vehicle Technical Review](/vehicle-validation/chile/vehicle-technical-review). Use this route for ficha técnica / revisión (`GET /v3/cl/vehicle`, not `/v2/cl/vehicle/v3`).
- **Vehicle SOAP (`v2/cl/vehicle-soap`)**: mandatory personal accident insurance certificate. See [Chile - Vehicle SOAP](/vehicle-validation/chile/vehicle-soap).

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle", {
  params: { plate: "BBCC12" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/vehicle',
  params: {
    plate: 'BBCC12'
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
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request("GET", "/v2/cl/vehicle?plate=BBCC12", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/vehicle?plate=BBCC12');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setHeader('Accept', 'application/json');
$request->setHeader('Authorization', 'Bearer ');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/vehicle?plate=BBCC12")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()
```
