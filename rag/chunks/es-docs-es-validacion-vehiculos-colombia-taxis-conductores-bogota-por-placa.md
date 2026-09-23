---
id: "es-docs-es-validacion-vehiculos-colombia-taxis-conductores-bogota-por-placa"
title: "Conductores de Taxi en Bogotá por Placa — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/taxis-conductores-bogota-por-placa.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/bogota/taxi-drivers/plate"
sourceAnchor: "Endpoint"
slug: "/validacion-de-vehiculo/colombia/taxis-conductores-bogota-por-placa"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/taxis-conductores-bogota-por-placa"
---

# Conductores de Taxi en Bogotá por Placa
**API path(s):** /v2/co/bogota/taxi-drivers/plate

## Endpoint

```
GET https://api.verifik.co/v2/co/bogota/taxi-drivers/plate
```

Este servicio retorna información del conductor de taxi y detalles de tarjeta de operación en Bogotá. Envía la **placa** del vehículo como último **segmento de ruta** (por ejemplo `…/plate/WMN482`), no como parámetro de consulta. La placa debe tener 5–6 caracteres, sin espacios ni puntos.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Segmento de ruta después de `/plate/`. 5–6 caracteres; sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/taxi-drivers/plate/WMN482", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/bogota/taxi-drivers/plate/WMN482"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
r = requests.get(url, headers=headers)
print(r.json())
```

### Respuesta

  

```json
{
  "data": [
    {
      "arl": "ARP SURA (ANTES SURATEP)",
      "bloodType": "O+",
      "companyName": "TAX EXPRESS S.A.                                            ",
      "companyNit": "8001749098",
      "controlCardNumber": "3018528",
      "controlCardStatus": "0",
      "driverDTO": {
        "bloodGroup": null,
        "foto": null,
        "person": {
          "address": null,
          "birthDate": null,
          "cellPhone": null,
          "documentIssueDate": null,
          "firstName": "REINEL",
          "identificationNumber": "80873223",
          "identificationType": null,
          "identificationTypeDesc": null,
          "lastName": "AMADO CRUZ"
        },
        "photoUri": null,
        "rhFactor": null
      },
      "effectiveDate": "16-04-2026",
      "eps": "SANITAS",
      "fixedPhoneType": false,
      "foto": "",
      "issueDate": "24-03-2026",
      "operationCardExpirationDate": "19-02-2027",
      "operationCardNumber": "2148724",
      "paymentMethodName": "PLATAFORMA TECNÓLOGICA",
      "plate": "LSZ913",
      "qualityFactor": false,
      "rtmExpirationDate": "18-04-2026",
      "rtmNumber": "1",
      "soatExpirationDate": "16-04-2026",
      "soatNumber": "408004743304000",
      "validityDate": "16-04-2026"
    },
    {
      "arl": "POSITIVA COMPAÑÍA DE SEGUROS",
      "bloodType": "O+",
      "companyName": "TAX EXPRESS S.A.                                            ",
      "companyNit": "8001749098",
      "controlCardNumber": "3002873",
      "controlCardStatus": "0",
      "driverDTO": {
        "bloodGroup": null,
        "foto": null,
        "person": {
          "address": null,
          "birthDate": null,
          "cellPhone": null,
          "documentIssueDate": null,
          "firstName": "ADINAEL",
          "identificationNumber": "1232891942",
          "identificationType": null,
          "identificationTypeDesc": null,
          "lastName": "SANCHEZ  MELO"
        },
        "photoUri": null,
        "rhFactor": null
      },
      "effectiveDate": "05-04-2026",
      "eps": "SANITAS",
      "fixedPhoneType": false,
      "foto": "",
      "issueDate": "06-03-2026",
      "operationCardExpirationDate": "19-02-2027",
      "operationCardNumber": "2148724",
      "paymentMethodName": "PLATAFORMA TECNÓLOGICA",
      "plate": "LSZ913",
      "qualityFactor": false,
      "rtmExpirationDate": "18-04-2026",
      "rtmNumber": "1",
      "soatExpirationDate": "16-04-2026",
      "soatNumber": "408004743304000",
      "validityDate": "16-04-2026"
    }
  ],
  "signature": {
    "dateTime": "March 25, 2026 12:09 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "WA9IB"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "No_result_found_for_the_indicated_plate"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```
