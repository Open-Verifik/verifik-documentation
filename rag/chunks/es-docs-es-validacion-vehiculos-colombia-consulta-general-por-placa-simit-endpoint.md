---
id: "es-docs-es-validacion-vehiculos-colombia-consulta-general-por-placa-simit-endpoint"
title: "SIMIT - Consulta General por Número de Placa — Endpoint"
sourcePath: "docs-es/validacion-vehiculos/colombia/consulta-general-por-placa-simit.mdx"
locale: "es"
category: "validacion-vehiculos"
tags:
  - "co"
  - "validacion-vehiculos"
endpoint: "/v2/co/simit/consultar/placa"
sourceAnchor: "Endpoint"
slug: "/validacion-vehiculos/colombia/consulta-general-por-placa-simit"
url: "https://docs.verifik.co/verifik-es/validacion-vehiculos/colombia/consulta-general-por-placa-simit"
---

# SIMIT - Consulta General por Número de Placa
**API path(s):** /v2/co/simit/consultar/placa

## Endpoint

```
https://api.verifik.co/v2/co/simit/consultar/placa
```

Este Servicio permite a los usuarios obtener información detallada sobre multas y comparendos asociados con un número de placa de matrícula específico en Colombia. La respuesta incluye detalles completos sobre cada comparendo, como el tipo de infracción, el monto de la multa y el estado actual del comparendo.

### Headers

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `plate` | string | Yes | Placa de matrícula a consultar, sin espacios ni puntos. |

### Solicitud

  

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/consultar/placa", {
  params: { plate: "ABC123" },
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` 
  },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/simit/consultar/placa"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "ABC123"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

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
  "message": "missing plate"
}
```
