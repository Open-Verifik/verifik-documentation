---
id: "es-docs-es-validaciones-de-identidad-mexico-solicitud-2"
title: "Ciudadano Mexicano — Solicitud"
sourcePath: "docs-es/validaciones-de-identidad/mexico.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "mx"
  - "validaciones-de-identidad"
endpoint: "/v2/mx/curp"
sourceAnchor: "Solicitud"
slug: "/validaciones-de-identidad/mexico"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/mexico"
---

# Ciudadano Mexicano
**API path(s):** /v2/mx/curp

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos mexicanos usando la Clave Única de Registro de Población (CURP). Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/mx/curp", {
  params: { documentNumber: "ABCD890513ABCDEF09", documentType: "CURP" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/mx/curp"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "ABCD890513ABCDEF09", "documentType": "CURP"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "CURP",
    "documentNumber": "ABCD890513ABCDEF09",
    "firstName": "Juan",
    "lastName": "Pérez",
    "fullName": "Juan Pérez",
    "dateOfBirth": "1989-05-13",
    "nationality": "Mexican"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "MX001"
}
```

  
  

```json
{
  "message": "Invalid CURP number",
  "code": "INVALID_CURP"
}
```

### Notas

-   Asegúrate de que `documentNumber` coincida estrictamente con el formato CURP.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.
