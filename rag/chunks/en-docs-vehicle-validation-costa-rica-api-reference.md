---
id: "en-docs-vehicle-validation-costa-rica-api-reference"
title: "\\U0001F1E8\\U0001F1F7 Costa Rica - Vehicle Information — API Reference"
sourcePath: "docs/vehicle-validation/costa-rica.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cr"
  - "vehicle-validation"
endpoint: "/v2/cr/vehicle"
sourceAnchor: "API Reference"
slug: "/vehicle-validation/costa-rica"
url: "https://docs.verifik.co/vehicle-validation/costa-rica"
---

# \U0001F1E8\U0001F1F7 Costa Rica - Vehicle Information
**API path(s):** /v2/cr/vehicle

## API Reference

This service returns detailed information about a vehicle registered in Costa Rica using its **license plate**. Typical data includes the current owner, vehicle specifications (displacement, fiscal value, weights, capacity, power, traction), **infraction** history, and **previous owners** when exposed by the source.

Use it for fleet checks, insurance, and compliance workflows.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/cr/vehicle
```

Send a GET request with the **`plate`** query parameter (no spaces or punctuation). A successful response includes structured vehicle data, owner fields, and history arrays when available.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `plate` | string | **Yes** | Plate to consult without spaces or points. | `AA123BA` |

Sandbox clients can use plates `AA123BA`–`AA123BJ` for stable demo profiles; `ERR40401` returns 404.

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cr/vehicle", {
  params: { plate: "AA123BA" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/cr/vehicle?plate=AA123BA", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cr/vehicle?plate=AA123BA');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cr/vehicle?plate=AA123BA")!,timeoutInterval: Double.infinity)
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
