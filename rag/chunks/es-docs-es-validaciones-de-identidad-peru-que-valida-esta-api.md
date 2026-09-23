---
id: "es-docs-es-validaciones-de-identidad-peru-que-valida-esta-api"
title: "Ciudadano Peruano v3 — ¿Qué valida esta API?"
sourcePath: "docs-es/validaciones-de-identidad/peru.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "pe"
  - "validaciones-de-identidad"
endpoints:
  - "/v3/pe/cedula"
  - "/v3/pe/cedula?documenttype=dni&documentnumber=1234567"
sourceAnchor: "¿Qué valida esta API?"
slug: "/validaciones-de-identidad/peru"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/peru"
---

# Ciudadano Peruano v3
**API path(s):** /v3/pe/cedula, /v3/pe/cedula?documenttype=dni&documentnumber=1234567

## ¿Qué valida esta API?

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos peruanos usando el Documento Nacional de Identidad (DNI). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y DNI**: Soporta *Documento Nacional de Identidad* (DNI).
-   **Detalles Personales**: Retorna fecha de nacimiento, género, estado civil y dirección.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número DNI.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
https://api.verifik.co/v3/pe/cedula
```

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Valor permitido: `DNI`. |
| `documentNumber` | string | Sí | Número de documento de la persona a consultar. |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula',
  params: {
    documentType: 'DNI',
    documentNumber: '1234567'
  },
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

  
  

```python

conn = http.client.HTTPSConnection("api.verifik.co")
payload = ''
headers = {}
conn.request("GET", "/v3/pe/cedula?documentType=DNI&documentNumber=1234567", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

  
  

```php
setUrl('https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567');
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
?>
```

  
  

```swift
var request = URLRequest(url: URL(string: "https://api.verifik.co/v3/pe/cedula?documentType=DNI&documentNumber=1234567")!,timeoutInterval: Double.infinity)
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
