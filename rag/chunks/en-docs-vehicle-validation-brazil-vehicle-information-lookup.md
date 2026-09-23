---
id: "en-docs-vehicle-validation-brazil-vehicle-information-lookup"
title: "Vehicle Information — Vehicle information lookup"
sourcePath: "docs/vehicle-validation/brazil.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "br"
  - "vehicle-validation"
endpoints:
  - "/v2/br/vehicle"
  - "/v2/br/vehicle?plate=pzy7h82"
sourceAnchor: "Vehicle information lookup"
slug: "/vehicle-validation/brazil"
url: "https://docs.verifik.co/vehicle-validation/brazil"
---

# Vehicle Information
**API path(s):** /v2/br/vehicle, /v2/br/vehicle?plate=pzy7h82

## Vehicle information lookup

## Vehicle information lookup

### Endpoint

```
GET https://api.verifik.co/v2/br/vehicle
```

Given a Brazilian **license plate**, **Verifik** returns structured vehicle data in one request so you can tie a real-world asset to verified, normalized attributes. It is aimed at **fleet and mobility onboarding**, **insurance quoting and claims**, **secured finance and collateral review**, and **marketplace or dealer checks** where the plate is the primary identifier.

The Verifik API returns a **normalized vehicle record** for that plate, including **plate**, **brand**, **model**, **model year** and **year of manufacture**, **chassis (VIN)**, **engine**, **color**, **body type**, **fuel type**, **transmission**, **doors**, **manufacturer or plant**, **FIPE codes** where they apply to the vehicle, and **irregularity or restriction indicators** when they exist for that registration. Use it to confirm the unit in front of you matches the official line before you continue.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `plate` | string | **Yes** | License plate to query (letters and digits; casing is normalized). Example: `PZY7H82`. |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/br/vehicle',
  params: {
    plate: 'PZY7H82',
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
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
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request("GET", "/v2/br/vehicle?plate=PZY7H82", "", headers)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```

  
  

```php
request('GET', 'https://api.verifik.co/v2/br/vehicle', [
  'query' => ['plate' => 'PZY7H82'],
  'headers' => [
    'Accept' => 'application/json',
    'Authorization' => 'Bearer ',
  ],
]);
echo $response->getBody();
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/br/vehicle?plate=PZY7H82")!)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer ", forHTTPHeaderField: "Authorization")
let task = URLSession.shared.dataTask(with: request) { data, _, _ in
  print(String(data: data ?? Data(), encoding: .utf8) ?? "")
}
task.resume()
```
