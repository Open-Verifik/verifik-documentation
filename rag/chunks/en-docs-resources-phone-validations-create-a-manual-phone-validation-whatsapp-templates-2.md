---
id: "en-docs-resources-phone-validations-create-a-manual-phone-validation-whatsapp-templates-2"
title: "Create a Manual Phone Validation — WhatsApp templates"
sourcePath: "docs/resources/phone-validations/create-a-manual-phone-validation.mdx"
locale: "en"
category: "resources"
tags:
  - "phone-validations"
  - "resources"
endpoints:
  - "/v2/phone-validations"
  - "/v2/phone-validations/manual"
sourceAnchor: "WhatsApp templates"
slug: "/resources/create-a-manual-phone-validation"
url: "https://docs.verifik.co/resources/create-a-manual-phone-validation"
---

# Create a Manual Phone Validation
**API path(s):** /v2/phone-validations, /v2/phone-validations/manual

## WhatsApp templates

| `whatsappTemplate` | Meta template | Notes |
| --- | --- | --- |
| `authentication` (default) | `authentication` | OTP in body + button URL parameter. |
| `flow2` | `flow2_es` / `flow2_en` | Branded header/body (`title` as section) + code + action; language picks the variant. |

```json
{
  "phone": "3001234567",
  "countryCode": "+57",
  "phoneGateway": "whatsapp",
  "title": "Company ABC",
  "language": "es",
  "whatsappTemplate": "flow2"
}
```

### Request examples

```bash
curl -X POST "https://api.verifik.co/v2/phone-validations/manual" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "3001234567",
    "countryCode": "+57",
    "phoneGateway": "whatsapp",
    "title": "Company ABC",
    "language": "en"
  }'
```

```javascript

const { data } = await axios.post(
  "https://api.verifik.co/v2/phone-validations/manual",
  {
    phone: "3001234567",
    countryCode: "+57",
    phoneGateway: "whatsapp",
    title: "Company ABC",
    language: "en",
  },
  {
    headers: {
      Authorization: "Bearer YOUR_ACCESS_TOKEN",
      "Content-Type": "application/json",
    },
  }
);

console.log(data);
```

```python

response = requests.post(
    "https://api.verifik.co/v2/phone-validations/manual",
    headers={
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json",
    },
    json={
        "phone": "3001234567",
        "countryCode": "+57",
        "phoneGateway": "whatsapp",
        "title": "Company ABC",
        "language": "en",
    },
)

print(response.json())
```

```php
request('POST', 'https://api.verifik.co/v2/phone-validations/manual', [
  'headers' => [
    'Authorization' => 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type' => 'application/json',
  ],
  'json' => [
    'phone' => '3001234567',
    'countryCode' => '+57',
    'phoneGateway' => 'whatsapp',
    'title' => 'Company ABC',
    'language' => 'en',
  ],
]);

echo $response->getBody();
```
