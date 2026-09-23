---
id: "en-docs-vehicle-validation-colombia-runt-vehicle-soat-rtm-response-3"
title: "SOAT and RTM Validation in RUNT — Response"
sourcePath: "docs/vehicle-validation/colombia/runt-vehicle-soat-rtm.md"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoints:
  - "/v2/co/runt/consultarvehiculo?documenttype=cc&documentnumber=98622259&plate=kbu003"
  - "/v2/co/runt/vehiculo"
  - "/v2/co/runt/vehiculo?documenttype=cc&documentnumber=&plate="
sourceAnchor: "Response"
slug: "/vehicle-validation/colombia/runt-vehicle-soat-rtm"
url: "https://docs.verifik.co/vehicle-validation/colombia/runt-vehicle-soat-rtm"
---

# SOAT and RTM Validation in RUNT
**API path(s):** /v2/co/runt/consultarvehiculo?documenttype=cc&documentnumber=98622259&plate=kbu003, /v2/co/runt/vehiculo, /v2/co/runt/vehiculo?documenttype=cc&documentnumber=&plate=

Verifik’s SOAT and RTM Validation API provides real-time access to the status of mandatory documents for vehicles registered in Colombia: the Mandatory Traffic Accident Insurance (SOAT) and the Mechanical Technical Review (RTM).
This service is critical for ensuring that vehicles comply with Colombian traffic regulations, helping to prevent fines and legal issues.

## Response

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

```json
{
	"code": "NotFound",
	"message": "Record not found."
}
```

```json
{
	"code": "MissingParameter",
	"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

```json
{
	"code": "MissingParameter",
	"message": "documentType must be one of: [CC]"
}
```

---

## Business Use Cases

The RUNT SOAT and RTM query API is widely used for:

-   **Insurance Companies**: To verify current coverage before issuing new policies or processing claims.
-   **Fleet Management**: To automatically monitor expiration dates and schedule renewals.
-   **Ride-Hailing Apps**: To ensure that drivers' vehicles are legally compliant to operate.
-   **Traffic Authorities**: To automate compliance checks and enforcement.

## Compliance & Data Quality

### Compliance, availability, and accuracy

The API connects directly to official sources such as RUNT, ensuring:

-   Verified and up-to-date information.
-   High availability and optimal response times.
-   Regulatory compliance with traffic laws.
