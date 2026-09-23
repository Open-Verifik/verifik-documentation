---
id: "es-docs-es-identity-validation-ecuador-respuesta-2"
title: "Ciudadano Ecuatoriano — Respuesta"
sourcePath: "docs-es/identity-validation/ecuador.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "ec"
  - "identity-validation"
endpoint: "/v2/ec/cedula"
sourceAnchor: "Respuesta"
slug: "/identity-validation/ecuador"
url: "https://docs.verifik.co/verifik-es/identity-validation/ecuador"
---

# Ciudadano Ecuatoriano
**API path(s):** /v2/ec/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos ecuatorianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

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

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones KYC para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
