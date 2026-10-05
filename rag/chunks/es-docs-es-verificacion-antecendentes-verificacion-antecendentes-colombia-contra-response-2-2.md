---
id: "es-docs-es-verificacion-antecendentes-verificacion-antecendentes-colombia-contra-response-2-2"
title: "Colombia - Contratos Públicos — Response"
sourcePath: "docs-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos.mdx"
locale: "es"
category: "verificacion-antecendentes"
tags:
  - "co"
  - "verificacion-antecendentes"
endpoint: "/v2/co/contracts"
sourceAnchor: "Response"
slug: "/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos"
url: "https://docs.verifik.co/verifik-es/verificacion-antecendentes/verificacion-antecendentes-colombia-contratos-publicos"
---

# Colombia - Contratos Públicos
**API path(s):** /v2/co/contracts

## Response

```json
{
  "value": {
    "data": {
      "contractor": [
        {
          "contractor": "123456789",
          "contractor_name": "MATEO VERIFIK",
          "count": 19
        }
      ],
      "contracts": [
        {
          "contractor_reference": "18486325807904513",
          "contractor_id": "63535790",
          "contractor": "DIANA ROCIO GARCIA PEÑARANDA",
          "entity_id": "824002672",
          "entity": "CESAR ESE HOSPITAL CAMILO VILLAZON PUMAREJO PUEBLO BELLO",
          "url": "https://www.contratos.gov.co/consultas/detalleProceso.do?numConstancia=18-4-8632580",
          "value": 1250000,
          "object": "PRESTACION DE SERVICIOS PARA EL MANTENIMIENTO PREVENTIVO PLANIFICADO Y CORRECTIVO DE LOS EQUIPOS BIOMEDICOS DE LAS DISTINTAS AREAS DE LA ESE HOSPITAL CAMILO VILLAZON PUMAREJO DE PUEBLO BELLO  CESAR",
          "process_id": "4",
          "department": "CESAR",
          "contract_start_date": "2018-11-01",
          "contract_end_date": "2018-11-16"
        }
      ]
    },
    "signature": {
      "dateTime": "May 24, 2023 4:41 PM",
      "message": "Certified by Verifik.co"
    }
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
  "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CC,NIT]"
}
```

### Features

-   **Public Contracts Verification**: Query public contracts associated with persons or companies
-   **Detailed Information**: Returns complete contract details including values, entities and dates
-   **Transparency**: Promotes transparency in public contracting
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios
