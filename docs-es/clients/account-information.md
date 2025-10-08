---
id: informacion-cuenta
title: Información de Cuenta
description: Recuperar información del cliente incluyendo créditos, plan de suscripción y configuraciones
slug: /informacion-cuenta
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Información de Cuenta

## Endpoint

```
https://api.verifik.co/v2/clients/me
```

Con este servicio, puedes obtener la información de tu cliente junto con más información sobre tus créditos, plan de suscripción y configuraciones.

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parámetros de Consulta

| Param         | Value                                                                                                                                                                                                                    | Descripción                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| populates[]=  | `clientSubscriptionPlan`, `clientSubscriptionPlan.subscriptionPlan`, `clientSettings` | Con esta opción puedes incluir populates para conocer más información vinculada a tu cuenta de cliente. |

### Solicitud

<Tabs>
  <TabItem value="node" label="Node.js" default>

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

  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

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

  </TabItem>
  <TabItem value="go" label="Go">

```go
package main

import (
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

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.verifik.co/v2/clients/me?populates[]=clientSubscriptionPlan.subscriptionPlan',
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

  </TabItem>
</Tabs>

### Respuesta

<Tabs>
  <TabItem value="200" label="200 OK" default>

```json
{
    "data": {
        "avatar": null,
        "initialIpAddress": null,
        "secretKey": null,
        "deletedAt": null,
        "_id": "613a3a48f2c84b454153add7",
        "active": true,
        "isEmailVerified": true,
        "isPhoneVerified": true,
        "isVerified": true,
        "otpSentAt": null,
        "requestsCount": 0,
        "subscriptionPlan": "61337217cbbb97a96877e984",
        "email": "jorgemanuel@verifik.co",
        "phone": "7809843183",
        "countryCode": "+1",
        "name": "JORGE MANUEL SANCHEZ",
        "updatedAt": "2025-03-12T17:37:13.526Z",
        "createdAt": "2021-09-09T16:46:01.334Z",
        "__v": 0,
        "totalRequestsCount": 1403,
        "credits": 114.03000000000034,
        "emailOTPCount": 0,
        "isBiometricVerified": false,
        "language": "es",
        "otp": "$2a$10$Q3wDasZgVWLuhEoYatVun.RBdItctOPNZ5lnXNWisZI0L.cFqM5b.",
        "phoneOTPCount": 0,
        "emailOTPSentAt": "2023-08-03T05:21:42.000Z",
        "status": "joined",
        "workSpace": "6647c29855503eb3e836449d",
        "clientSettings": "64cbd0717ae61d030ba39195",
        "JWTPhrase": "123456",
        "stripeCustomer": "cus_Q6iF3XDQgBQ8ZA",
        "clientSubscriptionPlan": {
            "projects": {
                "smartLinkLimit": 5,
                "smartAccessLimit": 5,
                "smartEnrollLimit": 5,
                "datAPILimit": 20,
                "globally": 20
            },
            "_id": "67c0d39dd4b3dec0fc4c81a7",
            "client": "613a3a48f2c84b454153add7",
            "name": "Plus",
            "subscriptionPlan": {
                "projects": {
                    "datAPILimit": 20,
                    "globally": 20,
                    "smartAccessLimit": 5,
                    "smartEnrollLimit": 5,
                    "smartLinkLimit": 5
                },
                "_id": "644f2a3ef19094d3b3f66b7f",
                "amount": 249,
                "trialDays": 0,
                "active": true,
                "visible": true,
                "name": "Plus",
                "code": "smart_check_plus_plan",
                "limit": 100,
                "interval": "month",
                "intervalCount": 1,
                "currency": "USD",
                "stripeProduct": "prod_Nlo8FqIrzIfTkS",
                "stripePrice": "price_1N0GWgFO6i3ofqGHOOUioaUt"
            },
            "stripeSubscription": "sub_1QxEGqFO6i3ofqGH0fyDzHNJ",
            "category": "credits",
            "code": "smart_check_plus_plan",
            "interval": "month",
            "intervalCount": 1,
            "active": true,
            "lastFour": "4242",
            "cardBrand": "visa",
            "cardExpMonth": "2",
            "cardExpYear": "2027",
            "startDate": "2025-02-27T21:05:28.000Z",
            "endDate": "2025-03-27T21:05:28.000Z",
            "autoRenew": true,
            "notes": "new subscription -> sub_1QxEGqFO6i3ofqGH0fyDzHNJ"
        },
        "person": null
    }
}
```

  </TabItem>
  <TabItem value="401" label="401 Unauthorized">

```json
{
    "error": "Unauthorized"
}
```

  </TabItem>
  <TabItem value="403" label="403 Forbidden">

```json
{
    "error": "Forbidden"
}
```

  </TabItem>
</Tabs>

## Campos de Respuesta

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `_id` | String | ID del cliente |
| `email` | String | Dirección de correo electrónico del cliente |
| `phone` | String | Número de teléfono del cliente |
| `name` | String | Nombre completo del cliente |
| `credits` | Number | Créditos disponibles |
| `totalRequestsCount` | Number | Total de solicitudes API realizadas |
| `isEmailVerified` | Boolean | Estado de verificación de correo electrónico |
| `isPhoneVerified` | Boolean | Estado de verificación de teléfono |
| `isBiometricVerified` | Boolean | Estado de verificación biométrica |
| `clientSubscriptionPlan` | Object | Detalles del plan de suscripción |
