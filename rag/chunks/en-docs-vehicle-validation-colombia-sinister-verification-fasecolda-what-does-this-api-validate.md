---
id: "en-docs-vehicle-validation-colombia-sinister-verification-fasecolda-what-does-this-api-validate"
title: "Claims Verification — What does this API validate?"
sourcePath: "docs/vehicle-validation/colombia/sinister-verification-fasecolda.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/fasecolda/sinister"
sourceAnchor: "What does this API validate?"
slug: "/vehicle-validation/colombia/sinister-verification-fasecolda"
url: "https://docs.verifik.co/vehicle-validation/colombia/sinister-verification-fasecolda"
---

# Claims Verification
**API path(s):** /v2/co/fasecolda/sinister

## What does this API validate?

Verifik's Fasecolda Claims Verification API helps you check the insurance claim history of vehicles in Colombia using official Fasecolda data. It's designed to streamline your vehicle verification processes, assess risk, and ensure you have complete information about a vehicle's insurance history.

We built this integration for businesses that need a fast, secure, and automated way to verify vehicle insurance claims and accident history.

## What does this API validate?

Our API connects directly with official Fasecolda records to validate:

-   **Vehicle License Plate**: Supports Colombian vehicle license plates.
-   **Insurance Claims History**: Returns comprehensive information about registered insurance claims associated with the vehicle.
-   **Claim Details**: Provides claim ID, accident date, and protection type for each claim.

By verifying these details, you can assess a vehicle's insurance history and potential risks, significantly helping with vehicle valuation and risk assessment.

## API Reference

### Service URL

```
https://api.verifik.co/v2/co/fasecolda/sinister
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `plate` | string  | Yes      | Plate of the vehicle to consult, without spaces or periods. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/fasecolda/sinister", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/fasecolda/sinister"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```
