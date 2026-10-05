---
id: "en-docs-vehicle-validation-chile-vehicle-soap-vehicle-soap-lookup"
title: "\\U0001F1E8\\U0001F1F1 Chile - Vehicle SOAP — Vehicle SOAP Lookup"
sourcePath: "docs/vehicle-validation/chile/vehicle-soap.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "cl"
  - "vehicle-validation"
endpoint: "/v2/cl/vehicle-soap"
sourceAnchor: "Vehicle SOAP Lookup"
slug: "/vehicle-validation/chile/vehicle-soap"
url: "https://docs.verifik.co/vehicle-validation/chile/vehicle-soap"
---

# \U0001F1E8\U0001F1F1 Chile - Vehicle SOAP
**API path(s):** /v2/cl/vehicle-soap

## Vehicle SOAP Lookup

Chilean vehicular **SOAP** (*Seguro Obligatorio de Accidentes Personales*) lookup validates mandatory personal accident insurance for a vehicle registered in Chile. Query by **license plate** and **policy number** to retrieve insurer, owner, validity dates, and vehicle attributes from the AACH registry.

## Vehicle SOAP Lookup

### Endpoint

```
https://api.verifik.co/v2/cl/vehicle-soap
```

Query by **license plate** (`plate`) and **policy number** (`policyNumber`; the service uses the last four digits against the AACH registry). Typical fields include **status**, **insuranceCompany**, **ownerName**, **ownerRut**, **validFrom**, **validTo**, **brand**, **model**, **manufactureYear**, **engineNumber**, and **premium**—use for **insurance compliance**, **fleet onboarding**, and **claims** workflows.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `plate` | string | **Yes** | Chilean license plate (Patente), 4–6 alphanumeric characters. | `HTRT86` |
| `policyNumber` | string | **Yes** | Policy number; the last four digits are used for the AACH SOAP lookup. | `94596506` |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/cl/vehicle-soap", {
	params: { plate: "HTRT86", policyNumber: "94596506" },
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
	},
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/cl/vehicle-soap"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "HTRT86", "policyNumber": "94596506"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
