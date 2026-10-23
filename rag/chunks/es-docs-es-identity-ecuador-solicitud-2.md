---
id: "es-docs-es-identity-ecuador-solicitud-2"
title: "Ciudadano Ecuatoriano — Solicitud"
sourcePath: "docs-es/identity/ecuador.mdx"
locale: "es"
category: "identity"
tags:
  - "ec"
  - "identity"
endpoint: "/v2/ec/cedula"
sourceAnchor: "Solicitud"
slug: "/identidad/ecuador"
url: "https://docs.verifik.co/verifik-es/identidad/ecuador"
---

# Ciudadano Ecuatoriano
**API path(s):** /v2/ec/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos ecuatorianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/ec/cedula", {
  params: { documentType: "CCEC", documentNumber: "0102260098" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/ec/cedula"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CCEC", "documentNumber": "0102260098"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentType": "CCEC",
    "documentNumber": "123456789",
    "firstName": "Luis",
    "lastName": "Vega",
    "fullName": "Luis Vega"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "EC001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notas

- Proporciona el número de documento sin espacios o puntos.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno ecuatoriano para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.
