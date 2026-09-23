---
id: "en-docs-driver-validation-kansas-driver-license-endpoint"
title: "Kansas Driver License — Endpoint"
sourcePath: "docs/driver-validation/kansas-driver-license.md"
locale: "en"
category: "driver-validation"
tags:
  - "usa"
  - "driver-validation"
endpoints:
  - "/v2/usa/kansas/driver-license"
  - "/v2/usa/kansas/driver-license?documentnumber=k12345678&dateofbirth=29/01/1974&firstname=mateo&lastname=verifik"
sourceAnchor: "Endpoint"
slug: "/driver-validation/kansas-driver-license"
url: "https://docs.verifik.co/driver-validation/kansas-driver-license"
---

# Kansas Driver License
**API path(s):** /v2/usa/kansas/driver-license, /v2/usa/kansas/driver-license?documentnumber=k12345678&dateofbirth=29/01/1974&firstname=mateo&lastname=verifik

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/usa/kansas/driver-license
```

The Kansas Driver License Validation Service allows developers to programmatically validate the status, restrictions, endorsements, and designations of Kansas driver licenses. By providing a valid Kansas driver license number, users can obtain a response that includes details such as the license status, expiration date, any restrictions or endorsements, and designations associated with the license.

This service is essential for verifying driver credentials and ensuring compliance with state regulations.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type   | Required | Description                                    | Example      |
| -------------- | ------ | -------- | ---------------------------------------------- | ------------ |
| documentNumber | String | Yes      | Document number of the person to be queried. | `K12345678`  |
| dateOfBirth    | String | Yes      | The birthdate of the license holder (format: DD/MM/YYYY). | `29/1/1974`  |
| firstName      | String | Yes      | Name of the license holder.                   | `MATEO`      |
| lastName       | String | Yes      | Last name of the license holder.              | `VERIFIK`    |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/kansas/driver-license',
  params: {
    documentNumber: 'K12345678',
    dateOfBirth: '29/01/1974',
    firstName: 'MATEO',
    lastName: 'VERIFIK'
  },
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
conn.request("GET", "/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK")!,timeoutInterval: Double.infinity)
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
setUrl('https://api.verifik.co/v2/usa/kansas/driver-license?documentNumber=K12345678&dateOfBirth=29/01/1974&firstName=MATEO&lastName=VERIFIK');
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
