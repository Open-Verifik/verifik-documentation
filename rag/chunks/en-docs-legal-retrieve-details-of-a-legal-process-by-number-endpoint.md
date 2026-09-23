---
id: "en-docs-legal-retrieve-details-of-a-legal-process-by-number-endpoint"
title: "Retrieve Details of a Legal Process by Number — Endpoint"
sourcePath: "docs/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "en"
category: "legal"
tags:
  - "co"
  - "legal"
endpoints:
  - "/v2/co/rama/proceso"
  - "/v2/co/rama/proceso/${processnumber}"
  - "/v2/co/rama/proceso/\\(processnumber"
  - "/v2/co/rama/proceso/{$processnumber}"
  - "/v2/co/rama/proceso/{process_number}"
sourceAnchor: "Endpoint"
slug: "/legal/retrieve-details-of-a-legal-process-by-number"
url: "https://docs.verifik.co/legal/retrieve-details-of-a-legal-process-by-number"
---

# Retrieve Details of a Legal Process by Number
**API path(s):** /v2/co/rama/proceso, /v2/co/rama/proceso/${processnumber}, /v2/co/rama/proceso/\(processnumber, /v2/co/rama/proceso/{$processnumber}, /v2/co/rama/proceso/{process_number}

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/proceso
```

Append the **`processNumber`** as the **final path segment** (for example `GET …/rama/proceso/11001400301220098008000`). The value is typically the **`llaveProceso`** returned by [Colombian Legal Processes](/legal/colombian-legal-processes). The response includes process metadata, parties (`subjects`), and procedural steps (`actions`).

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| name | type | required | description |
| --- | --- | --- | --- |
| `processNumber` | string | yes | Path parameter: judicial process id (min. 7 characters, no spaces). Often copied from `llaveProceso` on the list endpoint. |

### Request

  

```javascript

const processNumber = "18738473";

const { data } = await axios.get(
	`https://api.verifik.co/v2/co/rama/proceso/${processNumber}`,
	{
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
	},
);
console.log(data);
```

  
  

```python

process_number = "18738473"
url = f"https://api.verifik.co/v2/co/rama/proceso/{process_number}"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
r = requests.get(url, headers=headers)
print(r.json())
```

  
  

```php
request(
  'GET',
  "https://api.verifik.co/v2/co/rama/proceso/{$processNumber}",
  [
    'headers' => [
      'Accept' => 'application/json',
      'Authorization' => 'Bearer ' . getenv('VERIFIK_TOKEN'),
    ],
  ],
);

echo $response->getBody();
```

  
  

```swift

let processNumber = "123456789"
let url = URL(string: "https://api.verifik.co/v2/co/rama/proceso/\(processNumber)")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer \(ProcessInfo.processInfo.environment["VERIFIK_TOKEN"] ?? "")", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, _, _ in
  if let data = data { print(String(data: data, encoding: .utf8) ?? "") }
}
task.resume()
```
