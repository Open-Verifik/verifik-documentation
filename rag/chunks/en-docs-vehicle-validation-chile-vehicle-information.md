---
id: "en-docs-vehicle-validation-chile-vehicle-information"
title: "Vehicle Information — Implementation"
sourcePath: "docs/vehicle-validation/chile/vehicle-information.md"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoints:
  - "/v2/cl/vehicle"
  - "/v2/cl/vehicle?plate="
sourceAnchor: "Implementation"
---

# Vehicle Information
**API path(s):** /v2/cl/vehicle, /v2/cl/vehicle?plate=

## Implementation

`GET - https://api.verifik.co/v2/cl/vehicle`

This API endpoint allows you to verify the information of a vehicle registered in Chile by providing its license plate number. The response includes details such as the chassis number, engine number, manufacturer, model, year, color, and any outstanding fines associated with the vehicle. Additionally, the API also provides information on the vehicle's owner, type, and origin, where available. Please note that you need to provide the license plate number of the vehicle to query its information.

### Implementation

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

**Query Parameters**

NameTypeRequired?DescriptionExampleplateStringTrueCurrent format BB-CC-12 (send as BBCC12, four letters + two digits, without spaces or points).BBCC12

#### Request

```javascript

const options = {
  method: 'GET',
  url: '',
  params: {plate: 'BBCC12'},
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
conn.request("GET", "/v2/cl/vehicle?plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/vehicle?plate=")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/cl/vehicle?plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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

**Response**

```json
{
  "data": {
    "chasisNumber": "ME1KG0447E2066723",
    "color": "NEGRO",
    "engineNumber": "1ES3032465",
    "fines": "NO POSEE MULTAS",
    "manufacturer": "NO DISPONIBLE",
    "mark": "YAMAHA",
    "model": "FZ 16",
    "orderTheft": "NO DISPONIBLE",
    "origin": "NO DISPONIBLE",
    "owner": "",
    "plate": "BBCC12",
    "publicTrans": "NO DISPONIBLE",
    "revision": "NO DISPONIBLE",
    "rut": "26043542-6",
    "type": "MOTO",
    "typeTransPub": "NO DISPONIBLE",
    "year": "2014"
  },
  "signature": {
    "dateTime": "April 21, 2023 8:32 PM",
    "message": "Certified by Verifik.co"
  }
}
```

```json
{
    "code": "NotFound",
    "message": "Record not found."
}
```

```json
{
"code": "MissingParameter",
"message": "missing plate\n"
}
```
