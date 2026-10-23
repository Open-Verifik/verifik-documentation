---
id: "es-docs-es-identity-validation-canada-ejemplos-de-respuesta-4"
title: "Validación de Licencias de Conducir en Canadá — Ejemplos de Respuesta"
sourcePath: "docs-es/identity-validation/canada.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "ca"
  - "identity-validation"
endpoint: "/v2/ca/british-columbia/driver-license"
sourceAnchor: "Ejemplos de Respuesta"
slug: "/identity-validation/canada"
url: "https://docs.verifik.co/verifik-es/identity-validation/canada"
---

# Validación de Licencias de Conducir en Canadá
**API path(s):** /v2/ca/british-columbia/driver-license

La API de Verificación de Licencias de Conducir de Verifik te ayuda a autenticar licencias de conducir canadienses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la validez de licencias de conducir emitidas en las provincias de Columbia Británica y Ontario.

## Ejemplos de Respuesta

```json
{
  "data": {
    "documentNumber": "1123456",
    "lastName": "HELLO",
    "valid": true
  },
  "signature": {
    "dateTime": "August 8, 2023 10:56 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "1234567"
}
```

  
  

```json
{
  "data": {
    "documentNumber": "S123456789123456",
    "licenceStatus": "Valid",
    "verificationNumber": "123V5"
  },
  "signature": {
    "dateTime": "March 12, 2024 3:47 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "8X9FD"
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
  "message": "missing lastName\n missing documentNumber\n"
}
```

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica licencias de conducir al instante durante la apertura de cuentas o solicitudes de crédito.
-   **Rideshare y Delivery**: Autentica conductores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida credenciales de conductores como parte de tu proceso de contratación.
-   **Seguros y Automotriz**: Confirma la validez de licencias de conducir antes de emitir pólizas o procesar reclamos.

## Fuentes Oficiales y Confiabilidad

Nos conectamos directamente con sistemas oficiales de licencias provinciales canadienses (Columbia Británica y Ontario) para asegurar que recibas información verificada y actualizada al minuto.
Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales provinciales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
