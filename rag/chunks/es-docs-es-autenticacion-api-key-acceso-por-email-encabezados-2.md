---
id: "es-docs-es-autenticacion-api-key-acceso-por-email-encabezados-2"
title: "Acceso con API Key vía Email — Encabezados"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-email.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoints:
  - "/v2/projects/email-login"
  - "/v2/projects/email-login/confirm"
sourceAnchor: "Encabezados"
slug: "/autenticacion/acceso-con-llave-por-email"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-email"
---

# Acceso con API Key vía Email
**API path(s):** /v2/projects/email-login, /v2/projects/email-login/confirm

## Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `email` | string | Sí | Email usado en la solicitud del OTP. |
| `otp` | string | Sí | OTP recibido por email. |

### Solicitud

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/projects/email-login/confirm", { email: "user@example.com", otp: "123456" }, { headers: { Accept: "application/json" } });
console.log(data);
```

  
  

```php
"user@example.com", "otp"=>"123456"]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

r = requests.post("https://api.verifik.co/v2/projects/email-login/confirm", json={"email": "user@example.com", "otp": "123456"}, headers={"Accept": "application/json"})
print(r.json())
```

  
  

```go
package main

func main() {
    body := bytes.NewBufferString(`{"email":"user@example.com","otp":"123456"}`)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/projects/email-login/confirm", body)
    req.Header.Set("Accept", "application/json")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Respuesta

  

```json
{
  "data": {
    "accessToken": "",
    "tokenType": "bearer"
  }
}
```

  
  

```json
{
  "message": "invalid_otp",
  "code": "ERROR"
}
```
