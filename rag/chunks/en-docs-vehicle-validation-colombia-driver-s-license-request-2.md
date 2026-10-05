---
id: "en-docs-vehicle-validation-colombia-driver-s-license-request-2"
title: "Driver's License — Request"
sourcePath: "docs/vehicle-validation/colombia/driver-s-license.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/runt/conductor"
sourceAnchor: "Request"
slug: "/vehicle-validation/colombia/driver-s-license"
url: "https://docs.verifik.co/vehicle-validation/colombia/driver-s-license"
---

# Driver's License
**API path(s):** /v2/co/runt/conductor

Verifik's Driver's License Validation API allows you to query official information registered in Colombia's Registro Único Nacional de Tránsito (RUNT) using the driver's identification document number.
This integration is essential for transport companies, car rental agencies, insurers, and logistics platforms that need to verify the legal status and eligibility of drivers before hiring or authorizing vehicle use.

## Request

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/conductor", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
	},
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/runt/conductor"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
