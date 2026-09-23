---
id: "es-docs-es-identity-peru-full-id-endpoint"
title: "🇵🇪 Perú - ID Completo — Endpoint"
sourcePath: "docs-es/identity/peru-full-id.mdx"
locale: "es"
category: "identity"
tags:
  - "identity"
endpoint: "/v3/pe/cedula/extra"
sourceAnchor: "Endpoint"
slug: "/identidad/peru-id-completo"
url: "https://docs.verifik.co/verifik-es/identidad/peru-id-completo"
---

# 🇵🇪 Perú - ID Completo
**API path(s):** /v3/pe/cedula/extra

## Endpoint

Esta llamada API realiza una verificación extendida de identidad para un ciudadano peruano usando su número de DNI (Documento Nacional de Identidad). Este Servicio recupera información personal detallada. Devuelve datos como el nombre completo del individuo, primer nombre, apellido, estado civil, fecha de nacimiento, número de documento, fechas de expedición y vencimiento, y detalles adicionales como dirección y firma de verificación, certificado por Verifik.

**El header de Authorization es requerido para autenticación para acceder a esta información de forma segura.**

### Endpoint

```
GET https://api.verifik.co/v3/pe/cedula/extra
```

### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Name | Type | Required | Description | Example |
| ---- | ---- | -------- | ----------- | ------- |
| `documentType` | string | **Sí** | Tipo de documento. Valor permitido: DNI. | `DNI` |
| `documentNumber` | string | **Sí** | Número de documento de la persona a consultar. | `123456789` |

### Solicitud

  

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v3/pe/cedula/extra',
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

url = "https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367"

payload = {}
headers = {
  'Authorization': 'Bearer eyJhbGciOIJ9.eyJjbGllbnRJZCI6..06rwjGQ'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

  
  

```ruby
require "uri"
require "net/http"

url = URI("https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Authorization"] = "Bearer eyJhbGciOkpXVCJ9.eyJjbGllbn...rwjGQ"

response = https.request(request)
puts response.read_body
```

  
  

```bash
curl --location --request GET 'https://app.verifik.co/v3/pe/cedula/extra?documentType=DNI&documentNumber=74687367' \
--header 'Authorization: Bearer eyJhbGciOiJXVCJ9.eyJjbGllbnR...QqLcIe4-706rwjGQ'
```
