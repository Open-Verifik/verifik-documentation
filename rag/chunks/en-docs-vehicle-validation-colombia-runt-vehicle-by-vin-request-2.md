---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-by-vin-request-2"
title: "Vehicle Records by VIN — Request"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-by-vin.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/vehicle-by-vin"
  - "/v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/runt-vehicle-by-vin"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-by-vin"
---

# Vehicle Records by VIN
**API path(s):** /v2/co/runt/vehicle-by-vin, /v2/co/runt/vehicle-by-vin?vin=3mvdm2wlaml234946

Verifik’s Vehicle Validation by VIN API allows you to query the complete history and technical specifications of a vehicle registered in Colombia using its Vehicle Identification Number (VIN).
This method is particularly useful when the license plate is unavailable or when verifying the authenticity of a vehicle's identity during inspections, as the VIN is a unique, tamper-resistant identifier.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-vin", {
	params: { vin: "3MVDM2WLAML234946" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/vehicle-by-vin"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"vin": "3MVDM2WLAML234946"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  
  

```php
setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer '
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946")!,timeoutInterval: Double.infinity)
request.addValue("application/json", forHTTPHeaderField: "Accept")
request.addValue("Bearer ", forHTTPHeaderField: "Authorization")
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
