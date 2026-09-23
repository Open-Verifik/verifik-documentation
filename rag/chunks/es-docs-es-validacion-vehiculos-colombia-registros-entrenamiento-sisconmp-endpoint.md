---
id: "es-docs-es-validacion-vehiculos-colombia-registros-entrenamiento-sisconmp-endpoint"
title: "Registros de Entrenamiento SISCONMP — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/registros-entrenamiento-sisconmp.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/sisconmp/trainings"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/registros-entrenamiento-sisconmp"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/registros-entrenamiento-sisconmp"
---

# Registros de Entrenamiento SISCONMP
**API path(s):** /v2/co/sisconmp/trainings

## Endpoint

```
GET https://api.verifik.co/v2/co/sisconmp/trainings
```

Verifica la capacitación y el registro de **operadores de transporte y carga** ante el **SISCONMP** (Sistema de Control y Monitoreo de Personal) en Colombia. Recupera los registros de formación del participante enviando **`documentType`** y **`documentNumber`** en la **consulta** (institución, nombre del curso, fechas de expedición y vencimiento, estado de la licencia, etc.).

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre           | Tipo   | Requerido | Descripción |
| ---------------- | ------ | --------- | ----------- |
| `documentType`   | string | Sí        | Tipo de documento. Valores permitidos: `CC`, `CE`, `PA`. |
| `documentNumber` | string | Sí        | Número de documento del participante, sin espacios ni puntos. |

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
