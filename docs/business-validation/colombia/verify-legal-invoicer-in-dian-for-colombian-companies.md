---
id: business-validation-colombia-verify-legal-invoicer-in-dian-for-colombian-companies-md
title: Colombia Legal Invoicer Verification
description: Validate legal invoicer registration in DIAN for Colombian companies with Verifik's KYB API.
slug: /business-validation/colombia/verify-legal-invoicer-in-dian-for-colombian-companies
---

export const structuredData = {
	"@context": "https://schema.org",
	"@type": "TechArticle",
	headline: "Colombia Legal Invoicer Verification | Verifik KYB API",
	description:
		"Validate legal invoicer registration in DIAN for Colombian companies with Verifik's KYB API. Connect with official sources and verify invoicer data in seconds.",
	articleSection: "API Documentation",
	keywords: "business verification, KYB API, Colombia DIAN invoicer validation, NIT validation, legal invoicer, company verification, official data source, fraud prevention",
	about: {
		"@type": "Thing",
		name: "Business Verification API",
	},
};

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Colombia Legal Invoicer Verification

Verifik's Legal Invoicer Verification API helps you validate whether a Colombian company has a legal invoicer registered in DIAN (Dirección de Impuestos y Aduanas Nacionales). It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the invoicer registration status of Colombian companies, partners, or vendors.

## What does this API validate?

Our API connects directly with official DIAN records to validate:

-   **Company NIT & Invoicer Registration**: Supports *Número de Identificación Tributaria* (NIT).
-   **Invoicer Information**: Returns invoicer email and registration details.
-   **Company Match**: Confirms that the company has a legal invoicer registered in DIAN.

By verifying these details, you can be confident that the company you're dealing with has proper invoicing capabilities and is compliant with DIAN requirements, significantly lowering the risk of fraud and ensuring compliance.

## API Reference

### Endpoint

```
https://api.verifik.co/v2/co/company/dian/invoicer
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name           | Type    | Required | Description                                    |
| -------------- | ------- | -------- | ---------------------------------------------- |
| `documentType` | string  | Yes      | Document type. Allowed value: `NIT`. |
| `documentNumber` | string | Yes      | NIT (with or without verification digit). |

### Request

<Tabs>
  <TabItem value="node" label="Node.js">

```javascript
import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian/invoicer", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import os, requests

url = "https://api.verifik.co/v2/co/company/dian/invoicer"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  </TabItem>
</Tabs>

### Response

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "documentNumber": "901708460",
    "documentType": "NIT",
    "email": "info@sayshannon.com",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "JS4GP"
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
  "message": "documentType must be one of: [NIT]"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```
```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  </TabItem>
  <TabItem value="500" label="500">

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

  </TabItem>
</Tabs>

### Notes

- This endpoint only validates invoicer registration presence; use DIAN Verification for obligations and status.

---

## Common Use Cases

-   **B2B Onboarding**: Verify companies instantly during partner or vendor registration.
-   **Financial Services**: Authenticate businesses before opening accounts or processing transactions.
-   **Compliance & Due Diligence**: Validate company invoicer registration as part of your KYC/KYB workflows.
-   **E-commerce & Marketplaces**: Confirm business invoicing capabilities before allowing companies to sell on your platform.

## Official Sources & Reliability

We connect directly with official DIAN (Colombia's tax authority) sources to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards.

## Key Benefits

-   **Automated Compliance**: Streamline your KYB checks to prevent fraud without adding friction for your business partners.
-   **Instant Results**: Process verifications in seconds, perfect for real-time business onboarding.
-   **Trusted Data**: Rely on data sourced directly from official tax authority records.
-   **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.

## Compliance & Security

We prioritize the safety of your data. Verifik uses advanced encryption (HTTPS/TLS 1.3) and strict privacy management standards to ensure confidentiality.
Our service is monitored 24/7 for availability and offers role-based access controls to keep your team's access secure.

## About Verifik

Verifik is a leading platform for identity verification, compliance, and fraud prevention across Latin America.
Our APIs automate KYC, KYB, AML, and biometric validation processes, connecting businesses with official data sources in Colombia, Mexico, Peru, Chile, Uruguay, Argentina, Brazil, and beyond.

