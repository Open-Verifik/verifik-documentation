---
id: soat-rtm-vehiculo-runt
title: RUNT - SOAT y RTM del Vehículo
description: Información de seguros e inspección técnica
sidebar_label: SOAT y RTM del Vehículo
slug: /validacion-vehiculos/colombia/soat-rtm-vehiculo-runt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RUNT - SOAT y RTM del Vehículo

## Servicio de Información de Vehículos Colombianos

<Tabs>
<TabItem value="endpoint" label="Endpoint" default>

`GET - https://api.verifik.co/v2/co/runt/vehiculo`

El servicio de información de vehículos colombianos proporciona acceso en tiempo real a detalles sobre un vehículo registrado en Colombia. Usando este servicio, puedes obtener información como el nombre e identificación del propietario, color del vehículo, marca y modelo, estado de registro y fechas de vencimiento para el SOAT (seguro obligatorio de vehículos) y revisión técnica.

Este servicio es ideal para empresas de la industria automotriz, compañías de seguros y agencias gubernamentales que necesitan verificar información de vehículos y asegurar el cumplimiento de regulaciones.

</TabItem>
</Tabs>

### Implementación

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Parámetros de Consulta**

| Name | Type | Required? | Description | Example |
|------|------|-----------|-------------|---------|
| documentType | String | `True` | Tipo de documento. Valores permitidos son: CC, CE, PA, RC, NIT. | `CC` |
| documentNumber | String | `True` | Número de documento del propietario del vehículo, sin espacios ni puntos. | `123456789` |
| plate | String | `True` | Placa del vehículo a consultar. | `ABC123` |

**Solicitud**

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/runt/vehiculo',
  params: {documentType: 'CC', documentNumber: '123456789', plate: 'ABC123'},
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
payload = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
headers = {
  'Content-Type': 'text/plain'
}
conn.request("GET", "/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

</TabItem>

<TabItem value="swift" label="Swift">

```swift
let parameters = "https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003"
let postData = parameters.data(using: .utf8)

var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=")!,timeoutInterval: Double.infinity)
request.addValue("text/plain", forHTTPHeaderField: "Content-Type")

request.httpMethod = "GET"
request.httpBody = postData

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
$request->setUrl('https://api.verifik.co/v2/co/runt/vehiculo?documentType=CC&documentNumber=&plate=');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'text/plain'
));
$request->setBody('https://api.verifik.co/v2/co/runt/consultarVehiculo?documentType=CC&documentNumber=98622259&plate=KBU003');
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

### **Respuesta**

<Tabs>
<TabItem value="200" label="200" default>

```json
{
  "data": {
    "documentType": "CC",
    "documentNumber": "123456789",
    "plate": "XXXXX",
    "vehicleInformation": {
      "color": "PLATEADO",
      "brand": "CHERY",
      "line": "QQ3 SQR7080 S116",
      "status": "ACTIVO",
      "enrollmentDate": "07/10/2010",
      "plate": "XXXXX"
    },
    "soat": {
      "valid": true,
      "expeditionDate": "10/09/2021",
      "dueDate": "11/09/2022",
      "coverageStartDate": "12/09/2021",
      "soatNumber": "XXXXXX"
    },
    "techReview": {
      "valid": true,
      "reviewNumber": "XXXXX",
      "expeditionDate": "12/09/2021",
      "dueDate": "12/09/2022",
      "requireTechReview": true
    },
    "consultationDateTime": "2022-03-03T17:10:00.568Z"
  },
  "signature": {
    "dateTime": "March 3, 2022 12:10 PM",
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

<TabItem value="409" label="409">

```json
{
"code": "MissingParameter",
"message": "missing documentType\n. missing documentNumber\n. missing plate\n"
}
```

</TabItem>

<TabItem value="409b" label="409 - Tipo de Documento Inválido">

```json
{
"code": "MissingParameter",
"message": "documentType must be one of: [CC]"
}
```

</TabItem>
</Tabs>
