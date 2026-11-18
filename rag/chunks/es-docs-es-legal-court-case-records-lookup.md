---
id: "es-docs-es-legal-court-case-records-lookup"
title: "Consulta de Expedientes Judiciales — Endpoint"
sourcePath: "docs-es/legal/court-case-records-lookup.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/legal-process/{casenumber}"
sourceAnchor: "Endpoint"
slug: "/legal/court-case-records-lookup"
url: "https://docs.verifik.co/verifik-es/legal/court-case-records-lookup"
---

# Consulta de Expedientes Judiciales
**API path(s):** /v2/co/legal-process/{casenumber}

## Endpoint

This service allows you to retrieve details of legal processes by case number in Colombia.

### Endpoint

```
GET https://api.verifik.co/v2/co/legal-process/{caseNumber}
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parameters

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `caseNumber` | string | **Yes** | Case number to look up. | `123456789` |

### Request

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/legal-process/123456789',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Response

  

```json
{
  "data": {
    "caseNumber": "123456789",
    "status": "active",
    "details": {}
  },
  "signature": {
    "dateTime": "January 16, 2024 3:44 PM",
    "message": "Certified by Verifik.co"
  }
}
```

## Related Resources

- [Recuperar Detalles de Proceso Legal por Número](/verifik-es/legal/recuperar-detalles-proceso-legal-por-numero)
- [Procesos Legales Colombianos](/verifik-es/legal/procesos-judiciales-colombianos)
