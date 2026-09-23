---
id: "es-docs-es-clients-account-information-endpoint"
title: "Información de Cuenta — Endpoint"
sourcePath: "docs-es/clients/account-information.md"
locale: "es"
category: "clients"
tags:
  - "clients"
endpoints:
  - "/v2/clients/me"
  - "/v2/clients/me?populates[]=clientsubscriptionplan.subscriptionplan"
sourceAnchor: "Endpoint"
slug: "/informacion-cuenta"
url: "https://docs.verifik.co/verifik-es/informacion-cuenta"
---

# Información de Cuenta
**API path(s):** /v2/clients/me, /v2/clients/me?populates[]=clientsubscriptionplan.subscriptionplan

## Endpoint

### Endpoint

```
https://api.verifik.co/v2/clients/me
```

Con este servicio, puedes obtener la información de tu cliente junto con más información sobre tus créditos, plan de suscripción y configuraciones.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros de Consulta

| Param         | Value                                                                                                                                                                                                                    | Descripción                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| populates[]=  | `clientSubscriptionPlan`, `clientSubscriptionPlan.subscriptionPlan`, `clientSettings` | Con esta opción puedes incluir populates para conocer más información vinculada a tu cuenta de cliente. |

### Solicitud

  

```javascript
const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

  
  

```python

url = "https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan"

headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code}")
    print(response.text)
```

  
  

```go
package main

    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan"
    
    req, _ := http.NewRequest("GET", url, nil)
    
    req.Header.Add("Content-Type", "application/json")
    req.Header.Add("Authorization", "Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw")
    
    res, _ := http.DefaultClient.Do(req)
    
    defer res.Body.Close()
    body, _ := io.ReadAll(res.Body)
    
    fmt.Println(res)
    fmt.Println(string(body))
}
```

  
  

```php
 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer eyJhbGciOiJ9.eyJjbGllbnRJZCI6Ij...plt4Cw'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
```
