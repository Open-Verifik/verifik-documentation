---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-with-extra-data-endpoint"
title: "Ciudadano Colombiano con Datos Extendidos — Endpoint"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen-with-extra-data.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula/extra"
  - "/v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10%2f10%2f2020"
  - "/v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10/10/2020"
sourceAnchor: "Endpoint"
slug: "/validacion-identidad/colombia/ciudadano-colombiano-con-datos-extra"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano-con-datos-extra"
---

# Ciudadano Colombiano con Datos Extendidos
**API path(s):** /v2/co/cedula/extra, /v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10%2f10%2f2020, /v2/co/cedula/extra?documenttype=cc&documentnumber=123456789&date=10/10/2020

## Endpoint

```
https://api.verifik.co/v2/co/cedula/extra
```

Accede a información detallada sobre un ciudadano colombiano usando su identificación gubernamental (Cédula de Ciudadanía). Este endpoint de API proporciona detalles principales—nombre completo, primer nombre, apellido y número de identificación—junto con datos privados extendidos, incluyendo fecha de nacimiento, género y estado de vida, para verificación de identidad mejorada.

#### Caso de Uso Clave

Diseñado para empresas que requieren verificaciones de identidad profundas para procesos KYC avanzados, detección de fraude o cumplimiento en Colombia. Usar responsablemente debido a la naturaleza sensible de los datos devueltos.

**Nota:** Este endpoint es exclusivo para documentos de identificación colombianos (Cédula de Ciudadanía). Para otros países o tipos de documentos, por favor consulta nuestros servicios de validación alternativos.

### Headers

| Name | Value |
| --- | --- |
| Content-Type | `application/json` |
| Authorization | `Bearer ` |

### Parámetros de Consulta

| Name | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `documentType` | String | True | Tipo de documento. Parámetro válido: CC. | `CC` |
| `documentNumber` | String | True | Número de documento de la persona a consultar, sin espacios o puntos. | `123456789` |
| `date` | String | True | Fecha de emisión del documento. Formato válido: DD/MM/YYYY. | `10/10/2020` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/extra',
  params: {documentType: 'CC', documentNumber: '123456789', date: '10/10/2020'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer '
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10%2F10%2F2020")!,timeoutInterval: Double.infinity)
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

  
  

```php
setUrl('https://api.verifik.co/v2/co/cedula/extra?documentType=CC&documentNumber=123456789&date=10/10/2020');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setBody('');
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
?>
```
