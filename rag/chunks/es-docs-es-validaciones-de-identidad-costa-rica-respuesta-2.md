---
id: "es-docs-es-validaciones-de-identidad-costa-rica-respuesta-2"
title: "Ciudadano Costarricense — Respuesta"
sourcePath: "docs-es/validaciones-de-identidad/costa-rica.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "cr"
  - "validaciones-de-identidad"
endpoint: "/v2/cr/cedula"
sourceAnchor: "Respuesta"
slug: "/validaciones-de-identidad/costa-rica"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/costa-rica"
---

# Ciudadano Costarricense
**API path(s):** /v2/cr/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos costarricenses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Respuesta

```json
{
  "data": {
    "documentType": "CCCR",
    "documentNumber": "010000001",
    "firstName": "MARIA ELENA",
    "lastName": "LOPEZ GARCIA",
    "fullName": "MARIA ELENA LOPEZ GARCIA"
  },
  "signature": {"message": "Certified by Verifik.co", "dateTime": "July 27, 2026 3:00 PM"}
}
```

  
  

```json
{
  "message": "Invalid document number",
  "code": "INVALID_DOCUMENT"
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

- Proporciona el número sin espacios o puntos.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con fuentes oficiales del gobierno costarricense para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones KYC para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
