---
id: "es-docs-es-autenticacion-api-key-acceso-por-email-endpoint"
title: "Acceso con API Key vía Email — Endpoint"
sourcePath: "docs-es/autenticacion/api-key-acceso-por-email.mdx"
locale: "es"
category: "autenticacion"
tags:
  - "projects"
  - "autenticacion"
endpoints:
  - "/v2/projects/email-login"
  - "/v2/projects/email-login/confirm"
sourceAnchor: "Endpoint"
slug: "/autenticacion/acceso-con-llave-por-email"
url: "https://docs.verifik.co/verifik-es/autenticacion/acceso-con-llave-por-email"
---

# Acceso con API Key vía Email
**API path(s):** /v2/projects/email-login, /v2/projects/email-login/confirm

## Endpoint

```
https://api.verifik.co/v2/projects/email-login
```

Solicita un OTP para ser enviado al email del cliente registrado.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `email` | string | Sí | Email del cliente que recibirá el OTP. |

### Solicitud

  

```javascript

const { data } = await axios.post("https://api.verifik.co/v2/projects/email-login", null, {
  params: { email: "user@example.com" },
  headers: { Accept: "application/json" },
});
console.log(data);
```

  
  

```php

  

```python

r = requests.post("https://api.verifik.co/v2/projects/email-login", params={"email": "user@example.com"}, headers={"Accept": "application/json"})
print(r.json())
```

  
  

```go
package main

func main() {
    url := "https://api.verifik.co/v2/projects/email-login?email=user@example.com"
    req, _ := http.NewRequest("POST", url, nil)
    req.Header.Set("Accept", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    fmt.Println(resp.Status)
}
```

### Respuesta

  

```json
{
  "data": {
    "status": "sent",
    "email": "user@example.com",
    "expiresAt": "2025-06-13T17:24:58.000Z"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "EML01"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "invalid_email"
}
```

  

---

### Endpoint

```
https://api.verifik.co/v2/projects/email-login/confirm
```

Confirma el OTP y obtiene un token JWT de acceso.
