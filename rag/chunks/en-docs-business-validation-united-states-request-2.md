---
id: "en-docs-business-validation-united-states-request-2"
title: "United States Business Verification — Request"
sourcePath: "docs/business-validation/united-states.mdx"
locale: "en"
category: "business-validation"
tags:
  - "us"
  - "usa"
  - "business-validation"
endpoint: "/v2/usa/company"
sourceAnchor: "Request"
slug: "/business-validation/united-states"
url: "https://docs.verifik.co/business-validation/united-states"
---

# United States Business Verification
**API path(s):** /v2/usa/company

Verifik's Business Verification API helps you authenticate US companies using official government data from SEC EDGAR. It's designed to streamline your KYB (Know Your Business) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.
We built this integration for businesses that need a fast, secure, and automated way to confirm the legitimacy of companies, partners, or vendors.

## Request

```javascript

const { data } = await axios.post(
  "https://api.verifik.co/v2/usa/company",
  { business: "APPLE INC" },
  { headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` } }
);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/usa/company"
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
payload = {"business": "APPLE INC"}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```

### Response

  

```json
{
  "data": {
    "addresses": {
      "mailing": {
        "street1": "ONE APPLE PARK WAY",
        "street2": null,
        "city": "CUPERTINO",
        "stateOrCountry": "CA",
        "zipCode": "95014",
        "stateOrCountryDescription": "CA",
        "isForeignLocation": 0,
        "foreignStateTerritory": null,
        "country": null,
        "countryCode": null
      },
      "business": {
        "street1": "ONE APPLE PARK WAY",
        "street2": null,
        "city": "CUPERTINO",
        "stateOrCountry": "CA",
        "zipCode": "95014",
        "stateOrCountryDescription": "CA",
        "isForeignLocation": null,
        "foreignStateTerritory": null,
        "country": null,
        "countryCode": null
      }
    },
    "categor": "Large accelerated filer",
    "cik": "0000320193",
    "description": "",
    "ein": "942404110",
    "entityType": "operating",
    "exchanges": [
      "Nasdaq"
    ],
    "fiscalYearEnd": "0927",
    "flags": "",
    "formerNames": [
      {
        "name": "APPLE INC",
        "from": "2007-01-10T05:00:00.000Z",
        "to": "2019-08-05T04:00:00.000Z"
      },
      {
        "name": "APPLE COMPUTER INC",
        "from": "1994-01-26T05:00:00.000Z",
        "to": "2007-01-04T05:00:00.000Z"
      },
      {
        "name": "APPLE COMPUTER INC/ FA",
        "from": "1997-07-28T04:00:00.000Z",
        "to": "1997-07-28T04:00:00.000Z"
      }
    ],
    "investorWebsite": "",
    "name": "Apple Inc.",
    "phone": "(408) 996-1010",
    "sic": "3571",
    "sicDescription": "Electronic Computers",
    "stateOfIncorporation": "CA",
    "stateOfIncorporationDescription": "CA",
    "tickers": [
      "AAPL"
    ],
    "website": "",
    "business": "APPLE INC"
  },
  "signature": {
    "dateTime": "October 10, 2025 5:45 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "N2A12"
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
  "message": "missing business\n"
}
```

  
  

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```
