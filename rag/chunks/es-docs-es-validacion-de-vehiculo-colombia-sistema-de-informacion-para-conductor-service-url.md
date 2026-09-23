---
id: "es-docs-es-validacion-de-vehiculo-colombia-sistema-de-informacion-para-conductor-service-url"
title: "Registros de Entrenamiento SISCONMP — Service URL"
sourcePath: "docs-es/validacion-de-vehiculo/colombia/sistema-de-informacion-para-conductores-que-transportan-mercancias-peligrosas.mdx"
locale: "es"
category: "validacion-de-vehiculo"
tags:
  - "co"
  - "validacion-de-vehiculo"
endpoint: "/v2/co/sisconmp/trainings"
sourceAnchor: "Service URL"
slug: "/validacion-de-vehiculo/colombia/sistema-de-informacion-para-conductores-que-transportan-mercancias-peligrosas"
url: "https://docs.verifik.co/verifik-es/validacion-de-vehiculo/colombia/sistema-de-informacion-para-conductores-que-transportan-mercancias-peligrosas"
---

# Registros de Entrenamiento SISCONMP
**API path(s):** /v2/co/sisconmp/trainings

## Service URL

```
https://api.verifik.co/v2/co/sisconmp/trainings
```

Este servicio te permite recuperar registros de entrenamiento registrados en el SISCONMP (Sistema de Control y Monitoreo de Personal) en Colombia. Al proporcionar el número y tipo de documento del participante, puedes acceder a información detallada sobre su entrenamiento incluyendo institución educativa, nombre del entrenamiento, fechas de expedición y vencimiento, y estado de la licencia.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `documentType` | string | Yes | Tipo de documento. Valores permitidos: `CC`, `CE`, `PA`. |
| `documentNumber` | string | Yes | Número de documento del conductor, sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/sisconmp/trainings", {
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

url = "https://api.verifik.co/v2/co/sisconmp/trainings"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "DIVcodigHeadquarters": "11001000",
    "DIVnameHeadquarters": "BOGOTA",
    "NIDHeadquarters": "9131",
    "NIT_educationalInstitution": "901139908",
    "class": "",
    "dateExpedition": "2021/09/11",
    "dateExpeditionLicense": "2016/12/10",
    "descriptionClass": "",
    "documentNumber": "1030644022",
    "documentType": "CC",
    "expirationDate": "2023/09/11",
    "expirationDateLicense": "2026/12/10",
    "inactive": "No",
    "lastName": "URIBE SANCHEZ",
    "licenseNumber": "1030644022",
    "nameFile": "ejemplo",
    "nameHeadquarters": "INSTITUCION DE EDUCACION PARA EL TRABAJO Y EL DESARROLLO HUMANO CORPOIBEROAMERICANA S.A.S",
    "nameTraining": "CURSO BASICO",
    "names": "CHRISTIAN XAVIER",
    "numericalValueClass": "0",
    "typeTraining": "CURSO BASICO",
    "typeVehicle": ""
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 13, 2023 4:05 PM"}
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
