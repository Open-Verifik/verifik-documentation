---
id: "es-docs-es-identity-dominican-republic-respuesta-2"
title: "Ciudadano Dominicano — Respuesta"
sourcePath: "docs-es/identity/dominican-republic.mdx"
locale: "es"
category: "identity"
tags:
  - "do"
  - "identity"
endpoint: "/v2/do/cedula"
sourceAnchor: "Respuesta"
slug: "/identidad/republica-dominicana"
url: "https://docs.verifik.co/verifik-es/identidad/republica-dominicana"
---

# Ciudadano Dominicano
**API path(s):** /v2/do/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos dominicanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

```json
{
  "data": {
    "arrayName": ["MATEO", "VERIFIK"],
    "documentNumber": "12345678909876",
    "documentType": "CIE",
    "firstName": "MATEO",
    "fullName": "MATEO VERIFIK",
    "lastName": "VERIFIK"
  },
  "signature": {"dateTime": "July 3, 2024 3:24 PM", "message": "Certified by Verifik.co"},
  "id": "YOESE"
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
  "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
  "message": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

  
  

```json
{
    "code": "InternalServerError",
    "message": "Server error."
}
```

### Notas

- `documentType` debe ser `CIE`.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno dominicano para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones KYC para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
