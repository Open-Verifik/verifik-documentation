---
id: "es-docs-es-identity-paraguay-solicitud-2"
title: "Ciudadano Paraguayo — Solicitud"
sourcePath: "docs-es/identity/paraguay.mdx"
locale: "es"
category: "identity"
tags:
  - "py"
  - "identity"
endpoint: "/v2/py/cic"
sourceAnchor: "Solicitud"
slug: "/identidad/paraguay"
url: "https://docs.verifik.co/verifik-es/identidad/paraguay"
---

# Ciudadano Paraguayo
**API path(s):** /v2/py/cic

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos paraguayos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Solicitud

```javascript

const { data } = await axios.get("https://api.verifik.co/v2/py/cic", {
  params: { documentNumber: "1234567" },
  headers: { Accept: "application/json", Authorization: `Bearer ${process.env.VERIFIK_TOKEN}` },
});
console.log(data);
```

  
  

```python

url = "https://api.verifik.co/v2/py/cic"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentNumber": "1234567"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

### Respuesta

  

```json
{
  "data": {
    "documentNumber": "1234567",
    "firstName": "Fernando",
    "lastName": "Silva",
    "fullName": "Fernando Silva"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "January 16, 2024 3:44 PM"},
  "id": "PY001"
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
}
```

### Notas

- Proporciona CIC sin separadores.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno paraguayo para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.
