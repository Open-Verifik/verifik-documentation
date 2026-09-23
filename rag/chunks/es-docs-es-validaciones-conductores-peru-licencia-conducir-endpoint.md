---
id: "es-docs-es-validaciones-conductores-peru-licencia-conducir-endpoint"
title: "Perú - Licencia de Conducir — Endpoint"
sourcePath: "docs-es/validaciones-conductores/peru-licencia-conducir.mdx"
locale: "es"
category: "validaciones-conductores"
tags:
  - "pe"
  - "validaciones-conductores"
endpoint: "/v2/pe/driver-license"
sourceAnchor: "Endpoint"
slug: "/validaciones-conductores/peru-licencia-conducir"
url: "https://docs.verifik.co/verifik-es/validaciones-conductores/peru-licencia-conducir"
---

# Perú - Licencia de Conducir
**API path(s):** /v2/pe/driver-license

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/pe/driver-license
```

Consulta una **licencia de conducir** peruana por **DNI**. Devuelve **categoría**, **estado**, **vencimiento**, **restricciones**, **trámites**, **cursos regulatorios** y campos relacionados cuando están disponibles en registros oficiales de transporte.

### Headers

| Nombre        | Valor              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer `   |

### Parámetros

| Nombre             | Tipo   | Requerido | Descripción                                      | Ejemplo    |
| ------------------ | ------ | --------- | ------------------------------------------------ | ---------- |
| `documentType`     | string | Sí        | Tipo de documento. Valor válido: `DNI`.          | `DNI`      |
| `documentNumber`   | string | Sí        | Número de DNI (6–8 dígitos), sin espacios.       | `10000001` |

### Solicitud

```javascript

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/pe/driver-license',
  params: {
    documentType: 'DNI',
    documentNumber: '10000001',
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ',
  },
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
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ",
}
conn.request(
    "GET",
    "/v2/pe/driver-license?documentType=DNI&documentNumber=10000001",
    headers=headers,
)
res = conn.getresponse()
print(res.read().decode("utf-8"))
```
