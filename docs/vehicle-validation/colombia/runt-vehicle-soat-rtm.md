---
id: vehicle-validation-colombia-runt-vehicle-soat-rtm
title: SOAT and RTM Validation in RUNT | Verifik API Colombia
description: Verify the status of mandatory insurance (SOAT) and technical review (RTM) for vehicles in Colombia. Real-time API for traffic compliance.
slug: /vehicle-validation/colombia/runt-vehicle-soat-rtm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 🧠 SOAT and RTM Validation in RUNT (Colombia)

Verifik’s SOAT and RTM Validation API provides real-time access to the status of mandatory documents for vehicles registered in Colombia: the Mandatory Traffic Accident Insurance (SOAT) and the Mechanical Technical Review (RTM).

This service is critical for ensuring that vehicles comply with Colombian traffic regulations, helping to prevent fines and legal issues.

### ⚙️ What information does the API return?

When a query is made using the license plate and owner's document, the API returns:

-   **SOAT Status**: Validity, policy number, insurer, issuance and expiration dates.
-   **RTM Status**: Validity, certificate number, diagnostic center, issuance and expiration dates.
-   **Vehicle Details**: Make, line, model, color, and registration status.
-   **Owner Verification**: Confirmation of the document number associated with the vehicle.

### 🚗 Business use cases

The RUNT SOAT and RTM query API is widely used for:

-   **Insurance Companies**: To verify current coverage before issuing new policies or processing claims.
-   **Fleet Management**: To automatically monitor expiration dates and schedule renewals.
-   **Ride-Hailing Apps**: To ensure that drivers' vehicles are legally compliant to operate.
-   **Traffic Authorities**: To automate compliance checks and enforcement.

### 🔐 Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with traffic laws.

### 🧱 Additional technical information

-   **Method**: GET
-   **Response format**: JSON
-   **Update frequency**: Real-time
-   **Official source**: RUNT Colombia
-   **Coverage**: Nationwide

### 📘 About Verifik

Verifik is an identity verification and compliance platform that connects companies with official data sources across Latin America.

# Colombia - RUNT SOAT and RTM

## Endpoint

```
https://api.verifik.co/v2/co/runt/vehiculo
```

The Colombian Vehicle Information service provides real-time access to details about a registered vehicle in Colombia. By using this service, you can obtain information such as the owner's name and identification, vehicle color, make and model, registration status, and expiration dates for the SOAT (mandatory vehicle insurance) and technical review.

This service is ideal for businesses in the automotive industry, insurance companies, and government agencies that need to verify vehicle information and ensure compliance with regulations.

## Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

## Parameters

| Name             | Type   | Required | Description                                                             |
| ---------------- | ------ | -------- | ----------------------------------------------------------------------- |
| `documentType`   | string | Yes      | Document type. Allowed values are: CC, CE, PA, RC, NIT.                 |
| `documentNumber` | string | Yes      | Document number of the owner of the vehicle, without spaces or periods. |
| `plate`          | string | Yes      | Vehicle plate to consult.                                               |

## Request

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from "axios";

const options = {
	method: "GET",
	url: "https://api.verifik.co/v2/co/runt/vehiculo",
	params: { documentType: "CC", documentNumber: "123456789", plate: "ABC123" },
	headers: {
		Accept: "application/json",
		Authorization: "jwt <tu_token>",
	},
};

try {
	const { data } = await axios.request(options);
	console.log(data);
} catch (error) {
	console.error(error);
}
```

</TabItem>

<TabItem value="python" label="Python">

```python
import http.client

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

</TabItem>

<TabItem value="swift" label="Swift">

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

</TabItem>

<TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=');
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

</TabItem>
</Tabs>

## Response

<Tabs>
<TabItem value="200" label="200" default>

```json
{
	"data": {
		"documentType": "CC",
		"documentNumber": "123456789",
		"plate": "XXXXX",
		"vehicleInformation": {
			"color": "PLATEADO",
			"brand": "CHERY",
			"line": "QQ3 SQR7080 S116",
			"status": "ACTIVO",
			"enrollmentDate": "07/10/2010",
			"plate": "XXXXX"
		},
		"soat": {
			"valid": true,
			"expeditionDate": "10/09/2021",
			"dueDate": "11/09/2022",
			"coverageStartDate": "12/09/2021",
			"soatNumber": "XXXXXX"
		},
		"techReview": {
			"valid": true,
			"reviewNumber": "XXXXX",
			"expeditionDate": "12/09/2021",
			"dueDate": "12/09/2022",
			"requireTechReview": true
		},
		"consultationDateTime": "2022-03-03T17:10:00.568Z"
	},
	"signature": {
		"dateTime": "March 3, 2022 12:10 PM",
		"message": "Certified by Verifik.co"
	}
}
```

</TabItem>

<TabItem value="404" label="404">

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

</TabItem>

<TabItem value="409" label="409">

```json
{
	"code": "MissingParameter",
	"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

</TabItem>

<TabItem value="409b" label="409 - Invalid Document Type">

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of: [CC]"
}
```

</TabItem>
</Tabs>

## Use Cases

-   **Vehicle Verification**: Validate complete information of vehicles registered in Colombia
-   **Insurance Services**: Verify SOAT status and expiration dates
-   **Technical Review**: Validate technical inspection status
-   **Traffic Control**: Verify compliance with vehicle regulations
-   **Transportation Companies**: Validate vehicle fleets and their documents
-   **Property Verification**: Confirm owner and vehicle details

## Features

-   ✅ Query by document type, number and plate
-   ✅ Complete vehicle information (brand, model, color, status)
-   ✅ Owner data (document type and number)
-   ✅ SOAT status with expedition and expiration dates
-   ✅ Technical review status with number and dates
-   ✅ Vehicle enrollment date
-   ✅ Registration status (ACTIVE/INACTIVE)
-   ✅ Support for multiple document types (CC, CE, PA, RC, NIT)
-   ✅ Certified response by Verifik.co
