---
id: "es-docs-es-identity-bolivia-solicitud-2"
title: "Ciudadano Boliviano — Solicitud"
sourcePath: "docs-es/identity/bolivia.mdx"
locale: "es"
category: "identity"
tags:
  - "bo"
  - "identity"
endpoint: "/v2/bo/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/bolivia"
url: "https://docs.verifik.co/verifik-es/identidad/bolivia"
---

# Ciudadano Boliviano
**API path(s):** /v2/bo/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos bolivianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/bo/cedula", {
  params: { documentType: "CI", documentNumber: "123456789", dateOfBirth: "15/03/1990" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/bo/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CI", "documentNumber": "123456789", "dateOfBirth": "15/03/1990"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "CI",
    "documentNumber": "123456789",
    "firstName": "María",
    "lastName": "González",
    "fullName": "María González",
    "dateOfBirth": "1990-03-15"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "BO001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notas

- Fecha de nacimiento requerida y debe coincidir con el registro CI.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.
