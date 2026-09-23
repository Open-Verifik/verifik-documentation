---
id: "en-docs-business-validation-chilean-endpoint"
title: "\\U0001F1E8\\U0001F1F1 Chile - Business Validation — Endpoint"
sourcePath: "docs/business-validation/chilean.mdx"
locale: "en"
category: "business-validation"
tags:
  - "cl"
  - "business-validation"
endpoints:
  - "/v2/cl/company"
  - "/v2/cl/company?documenttype=rut&documentnumber=212957739"
sourceAnchor: "Endpoint"
slug: "/business-validation/chilean"
url: "https://docs.verifik.co/business-validation/chilean"
---

# \U0001F1E8\U0001F1F1 Chile - Business Validation
**API path(s):** /v2/cl/company, /v2/cl/company?documenttype=rut&documentnumber=212957739

## Endpoint

Verifik's Business Verification API helps you authenticate Chilean companies using official government data. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

This service allows you to retrieve information about a company in Chile by providing its document type and number. The service response will contain the name of the company, its business category, subcategory, and activity. Additionally, this service will provide you with a list of services for which the company is authorized to work.

### Endpoint

```
https://api.verifik.co/v2/cl/company
```

Look up Chilean companies by RUT: legal name, business category, activity, and authorized service lines from official registry data for KYB and vendor due diligence.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentType` | string | **Yes** | Document type. Allowed parameter: RUT. | `RUT` |
| `documentNumber` | string | **Yes** | RUT of the company that you want to consult, enter this parameter with periods and hyphens as established by the native documentation. | `33516727409` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/cl/company',
  params: {
    documentType: 'RUT',
    documentNumber: '212957739'
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
    'Accept': 'application/json',
    'Authorization': 'Bearer '
}
conn.request("GET", "/v2/cl/company?documentType=RUT&documentNumber=212957739", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=212957739');
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
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/cl/company?documentType=RUT&documentNumber=212957739")!,
                         timeoutInterval: Double.infinity)
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
