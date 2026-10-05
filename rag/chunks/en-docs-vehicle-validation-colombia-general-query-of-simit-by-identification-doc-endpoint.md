---
id: "en-docs-vehicle-validation-colombia-general-query-of-simit-by-identification-doc-endpoint"
title: "SIMIT - General query by identification document — Endpoint"
sourcePath: "docs/vehicle-validation/colombia/general-query-of-simit-by-identification-document.mdx"
locale: "en"
category: "vehicle-validation"
tags:
  - "co"
  - "vehicle-validation"
endpoint: "/v2/co/simit/consultar"
sourceAnchor: "Endpoint"
slug: "/vehicle-validation/colombia/general-query-of-simit-by-identification-document"
url: "https://docs.verifik.co/vehicle-validation/colombia/general-query-of-simit-by-identification-document"
---

# SIMIT - General query by identification document
**API path(s):** /v2/co/simit/consultar

## Endpoint

```
https://api.verifik.co/v2/co/simit/consultar
```

The Traffic Tickets and Fines Service enables users to access detailed information about traffic tickets and fines associated with a specific document number in Colombia. The response includes comprehensive details about each traffic ticket, such as the type of violation, the amount of the fine, and the current status of the ticket.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Document type. Valid parameters: `CC`, `PA`, `CE`, `TI`, `RC`, `NIT`. |
| `documentNumber` | string | Yes | Document number to be consulted, without spaces or dots. |

### Request

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/consultar", {
  params: { 
    documentType: "CC", 
    documentNumber: "123456789" 
  },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/consultar"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Response

  

```json
{
  "value": {
    "value": {
      "data": {
        "multas": [
          {
            "infractor": {
              "tipoDocumento": "Cédula",
              "numeroDocumento": "123456789",
              "nombre": "C**",
              "apellido": "B**",
              "idTipoDocumento": 1
            },
            "valor": 344730,
            "placa": "RDL805",
            "infracciones": [
              {
                "codigoInfraccion": "C35",
                "descripcionInfraccion": "No realizar la revisión técnico-mecánica en el plazo legal establecido o cuando el vehiculo no se encuentre en adecuadas condiciones técnico-mecánicas o de emisión de gases, aun cuando porte los certificados correspondientes.",
                "valorInfraccion": 344730
              }
            ],
            "valorPagar": 344730,
            "departamento": "Cundinamarca",
            "organismoTransito": "Ricaurte",
            "fechaComparendo": "23/02/2016 00:00:00",
            "fechaResolucion": "12/12/2022",
            "numeroComparendo": "25612001000012662173",
            "estadoComparendo": "Pendiente"
          }
        ],
        "cursos": [
          {
            "numeroMulta": "00001234",
            "fechaCurso": "21/12/2011",
            "numeroCurso": "60462",
            "ciudadRealizacion": "Medellin",
            "centroInstruccion": "CIA AL INFRACTOR DE TRANSITO",
            "estado": "No aplicado",
            "certificado": "60462"
          }
        ],
        "acuerdosPago": [
          {
            "resolucion": "324",
            "fechaResolucion": "16/02/2018",
            "estado": "Acuerdo de pago",
            "valorAcuerdo": 837716,
            "pendiente": 837716,
            "totalPagar": 837716,
            "secretaria": "Jamundi",
            "departamento": "Valle del Cauca"
          }
        ],
        "totalMultasPagar": 31,
        "cantMultasPagar": 0,
        "totalAcuerdosPagar": 11,
        "cantAcuerdosPagar": 0
      },
      "signature": {"message": "Certified by Verifik.co", "dateTime": "August 31, 2022 4:16 PM"}
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
  "message": "missing documentType. missing documentNumber"
}
```
