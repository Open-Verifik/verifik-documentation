---
id: verify-colombian-affiliations
title: Verify Colombian Affiliations
description: Verify Colombian affiliations with various entities
---

# Verify Colombian Affiliations

### Endpoint

```
https://api.verifik.co/v2/co/afiliaciones
```

The Verify Colombian Affiliations service allows users to access detailed information about an individual's affiliations with various entities in Colombia.

By providing parameters such as document type, document number, and date, the service returns a response that includes personal information along with details about the individual's affiliations with EPS (healthcare provider), ARL (work-related risk insurance), AP (pension fund), caja de compensación (compensation fund), and cesantías (unemployment fund).

This service is particularly valuable for companies and organizations that need to verify an individual's affiliations in Colombia for purposes such as employment verification or benefits eligibility.

### **Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### **Query Parameters**

<table><thead><tr><th width="197">Name</th><th width="87">Type</th><th width="108">Required?</th><th width="218">Description</th><th>Example</th></tr></thead><tbody><tr><td>documentType</td><td>String</td><td><code>True</code></td><td>Document type of the person to consult. Parameters: CC, PA, CE, PEP.</td><td><code>CC</code></td></tr><tr><td>documentNumber</td><td>String</td><td><code>True</code></td><td>Document number of the person to consult, without spaces or points.</td><td><code>123456789</code></td></tr><tr><td>date</td><td>String</td><td><code>True</code></td><td>Expedition date of the document, must be entered as follows: DD/MM/YYYY.</td><td><code>05/05/2020</code></td></tr></tbody></table>

### Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/afiliaciones',
  params: {
		  documentType: 'CC', 
		  documentNumber: '123456789', 
		  date: '05/05/2022'
				  },
  headers: {
    Accept: 'application/json',
    Authorization: 'jwt <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

</TabItem>
<TabItem value="python" label="Python">

```python
import http.client

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/co/afiliaciones?documentType=CC&documentNumber=&date=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>
<TabItem value="swift" label="Swift">

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=&date=")!,timeoutInterval: Double.infinity)
request.httpMethod = "GET"

let task = URLSession.shared.dataTask(with: request) { data, response, error in 
  guard let data = data else {
    print(String(describing: error))
    return
  }
  print(String(data: data, encoding: .utf8)!)
}

task.resume()

```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/afiliaciones?documentType=CC&documentNumber=&date=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
```

</TabItem>
</Tabs>

### **Response**

<Tabs>
<TabItem value="200" label="200">

```json
{
  "data": {
    "informaciónPersonal": {
      "fechaCorte": "2022-08-19",
      "documentoIdentidad": "CC 123456789",
      "primerNombre": "MATEO",
      "segundoNombre": "",
      "primerApellido": "VERIFIK",
      "segundoApellido": "",
      "sexo": "M"
    },
    "eps": {
      "fechaCorte": "2022-08-19",
      "eps": "FAMISANAR E.P.S. LTDA - CAFAM - COLSUBSIDIO -CM",
      "regimen": "Subsidiado",
      "fechaAfiliacion": "01/09/2020",
      "estadoAfiliacion": "Activo",
      "tipoAfiliado": "CABEZA DE FAMILIA",
      "departamentoMunicipio": "BOGOTA D.C."
    },
    "ap": {
      "fechaCorte": "2022-08-19",
      "pensiones": [
        {
          "regimenPensional": "PENSIONES: AHORRO INDIVIDUAL",
          "administradoraPensional": "SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTIAS PORVENIR SA",
          "fechaAfiliacionPensional": "1996-03-01",
          "estadoPensional": "Inactivo"
        }
      ]
    },
    "arl": {
      "fechaCorte": "2022-08-19",
      "riesgos": [
        {
          "administradora": "POSITIVA COMPAÑIA DE SEGUROS",
          "fecha": "2016-09-01",
          "estado": "Activa",
          "actividad": "EMPRESAS DEDICADAS A ACTIVIDADES DE LAS INSTITUCIONES PRESTADORAS DE SERVICIOS DE SALUD, CON INTERNACION INCLUYE HOSPITALES GENERALES, CENTROS DE ATENCIÓN MÉDICA CON AYUDAS DIAGNOSTICAS, INSTITUCIONES PRESTADORAS DE SERVICIOS DE SALUD, CENTROS ESPECIALIZADOS (EXCEPTO DE RADIODIAGNOSTICOS Y/O RADIOTERAPIA), HOSPITALES PARA TUBERCULOSOS, INSTITUCIONES DE SALUD MENTAL",
          "municipioLaboral": "Bogotá, D.C.- BOGOTÁ"
        },
        {
          "administradora": "RIESGOS PROFESIONALES COLMENA SA COMPAÑIA DE SEGUROS DE VIDA",
          "fecha": "2009-08-01",
          "estado": "Activa",
          "actividad": "EMPRESAS DEDICADAS A OTRAS ACTIVIDADES EMPRESARIALES NCP INCLUYE OFICINAS DE NEGOCIOS VARIOS TALES COMO COBRANZAS DE CUENTAS, ACTIVIDADES DE EVALUACIÓN EXCEPTO LAS RELACIONADAS CON BIENES RAÍCES Y NEGOCIOS, ACTIVIDADES DE INTERMEDIACIÓN Y PROMOCIÓN COMERCIAL, SUBASTAS, TRAMITACIÓN DE DOCUMENTOS, ACTIVIDADES DE REDACCIÓN, TRADUCCIÓN E INTERPRETACIÓN, ACTIVIDADES DE MICROFILMACIÓN, ACTIVIDADES DE DEMOSTRACIÓN Y EXHIBICIÓN INCLUSO LA PRESTACIÓN DE SERVICIOS PROFESIONALES, ACTIVIDADES DE AGENCIAS, DISEÑO DE TELAS PRENDAS DE VESTIR ETC",
          "municipioLaboral": "Bogotá, D.C.- BOGOTÁ"
        },
        {
          "administradora": "SEGUROS DE VIDA COLPATRIA SA",
          "fecha": "2012-02-15",
          "estado": "Activa",
          "actividad": "EMPRESAS DEDICADAS A ACTIVIDADES DE LAS INSTITUCIONES PRESTADORAS DE SERVICIOS DE SALUD, CON INTERNACION INCLUYE HOSPITALES GENERALES, CENTROS DE ATENCIÓN MÉDICA CON AYUDAS DIAGNOSTICAS, INSTITUCIONES PRESTADORAS DE SERVICIOS DE SALUD, CENTROS ESPECIALIZADOS (EXCEPTO DE RADIODIAGNOSTICOS Y/O RADIOTERAPIA), HOSPITALES PARA TUBERCULOSOS, INSTITUCIONES DE SALUD MENTAL",
          "municipioLaboral": "Bogotá, D.C.- BOGOTÁ"
        }
      ]
    },
    "cajaCompensacion": {
      "fechaCorte": "2022-08-19",
      "cajas": []
    },
    "cesantias": {
      "fechaCorte": "2022-08-19",
      "cesantias": []
    }
  },
  "signature": {
    "dateTime": "August 30, 2022 2:49 PM",
    "message": "Certified by Verifik.co"
  }
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
<TabItem value="409-1" label="409 (Missing Parameters)">

```json
{
"code": "MissingParameter",
"message": "missing documentType\n. missing documentNumber\n"
}
```

</TabItem>
<TabItem value="409-2" label="409 (Invalid Document Type)">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC, PA, CE, PEP]"
}
```

</TabItem>
</Tabs>

## Features

-   **Affiliation Verification**: Verify affiliations with EPS, ARL, AP, compensation funds, and severance funds
-   **Personal Information**: Access personal information of the individual
-   **Affiliation Status**: Verify the current status of all affiliations
-   **Employment Information**: Access information about employers and work activities
-   **Health Information**: Verify EPS affiliation and health regime
-   **Pension Information**: Verify affiliation to pension funds
-   **Risk Information**: Verify ARL affiliation and work activities
-   **Structured Response**: Organized data format for easy integration
-   **Multiple Programming Languages**: Support for JavaScript, Python, PHP, and Swift
-   **Error Handling**: Comprehensive error responses for various scenarios

## Use Cases

- **Employment Verification**: Verify employment affiliations for hiring processes
- **Benefits Eligibility**: Verify affiliations to determine benefits eligibility
- **Due Diligence**: Verify affiliations for due diligence processes
- **Regulatory Compliance**: Comply with regulatory requirements for affiliation verification
- **Identity Verification**: Verify personal information and affiliations of the individual