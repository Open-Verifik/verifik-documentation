---
id: "en-docs-vehicle-validation-colombia-simit-comparendo-details-endpoint"
title: "SIMIT - Subpoena Details — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/simit-comparendo-details.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/simit/comparendo"
  - "/v2/co/simit/comparendos"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/simit-comparendo-details"
url: "https://docs.verifik.co/vehicle-validation/colombia/simit-comparendo-details"
---

# SIMIT - Subpoena Details
**API path(s):** /v2/co/simit/comparendo, /v2/co/simit/comparendos

## Endpoint

```
https://api.verifik.co/v2/co/simit/comparendo
```

The SIMIT Subpoena Details service returns **detailed information for one traffic citation** (*comparendo*) when you provide the document, subpoena number, and transit authority ID. It complements the **list** endpoint [SIMIT - Fines](/vehicle-validation/colombia/simit-fines) (`GET /v2/co/simit/comparendos`), which returns all citations for a person.

Use it for **fine verification**, **dispute review**, and **fleet compliance** workflows.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Document type. Valid values: `CC`, `CE`, `PA`, `PPT`, `NIT`, `RC`, `TI`. |
| `documentNumber` | string | Yes | Document number to consult, without spaces or points. |
| `numeroComparendo` | string | Yes | SIMIT subpoena / comparendo number. |
| `idOrganismoTransito` | string | Yes | Transit authority identifier from SIMIT. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/comparendo", {
  params: {
    documentType: "CC",
    documentNumber: "10000001",
    numeroComparendo: "2561200100010000000001",
    idOrganismoTransito: "25612100",
  },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/comparendo"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {
    "documentType": "CC",
    "documentNumber": "10000001",
    "numeroComparendo": "2561200100010000000001",
    "idOrganismoTransito": "25612100",
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
