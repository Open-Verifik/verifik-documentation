---
id: "en-docs-certificates-colombia-ministerio-trabajo-certificados-v3-response-2"
title: "Colombia — Ministry of Labor certificates (v3) — Response"
sourcePath: "docs/certificates/colombia-ministerio-trabajo-certificados-v3.mdx"
locale: "en"
category: "certificates"
tags:
  - "certificates"
endpoint: "/api/co/ministerio-de-trabajo/certificados"
sourceAnchor: "Response"
slug: "/certificates/colombia-ministerio-trabajo-certificados-v3"
url: "https://docs.verifik.co/certificates/colombia-ministerio-trabajo-certificados-v3"
---

# Colombia — Ministry of Labor certificates (v3)
**API path(s):** /api/co/ministerio-de-trabajo/certificados

This endpoint returns **Ministry of Labor** certificate information for a Colombian individual, including data associated with **height / occupational safety** training (*curso de alturas*), sourced from Verifik’s **Bogotá microservice**. The **v3** handler returns the **full microservice payload** and exposes certificate rows under **`records`** (mapped from the upstream `constances` field).
Use it for **employment compliance**, **contractor onboarding**, and **workplace safety** checks where this registry is allowed.

## Response

```json
{
	"data": {
		"records": []
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
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
	"message": "documentType must be one of [CC, CE, PPT, PA]"
}
```

## Features

- **Document types**: **CC**, **CE**, **PPT**, **PA**
- **v3** response maps **`constances` → `records`** on the payload returned to the client
- **GET** query parameters

## Use cases

- **Height-work** and **safety training** verification
- **Employer** due diligence and **contractor** compliance

### Notes

- Upstream errors when the person has **no** height-course information may surface as **404** with a message such as *“No registra información en Curso de Alturas.”*
- The **`v2`** endpoint **`/v2/co/ministerio-de-trabajo/certificados`** uses the same microservice but returns a **narrower** payload (certificate array only in some paths); prefer **v3** when you need the **full** object plus **`records`**.
- Microservice **token** and **availability** are environment-dependent; outages may return **5xx** errors.
- Treat results as **personal / labor** data under Colombian law and your policies.
