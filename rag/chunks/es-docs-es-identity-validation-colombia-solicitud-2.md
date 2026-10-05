---
id: "es-docs-es-identity-validation-colombia-solicitud-2"
title: "Ciudadano Colombiano — Solicitud"
sourcePath: "docs-es/identity-validation/colombia.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoint: "/v2/co/cedula"
sourceAnchor: "Solicitud"
slug: "/identity-validation/colombia"
url: "https://docs.verifik.co/verifik-es/identity-validation/colombia"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos colombianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const options = {
  method: "GET",
  url: "https://api.verifik.co/v2/co/cedula",
  params: { documentType: "CC", documentNumber: "123456789" },
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
  },
};

const { data } = await axios.request(options);
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/co/cedula"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {
    "documentType": "CC",
    "documentNumber": "123456789"
}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "arrayName": [
      "JULIO",
      "CESAR",
      "CABANA",
      "CONTRERAS"
    ],
    "documentNumber": "1121329662",
    "documentType": "CC",
    "firstName": "JULIO CESAR",
    "fullName": "JULIO CESAR CABANA CONTRERAS",
    "lastName": "CABANA CONTRERAS"
  },
  "signature": {
    "dateTime": "October 8, 2025 8:21 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "I70IL"
}
```

  
  

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentType\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [CC,PPT]"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "missing documentNumber\n"
}
```

### Notas

- Usa `documentType=CC` para cédula; `PPT` para Permiso por Protección Temporal.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.
