---
id: "es-docs-es-identity-venezuela-notas-3"
title: "Ciudadano venezolano (CCVE) — Notas"
sourcePath: "docs-es/identity/venezuela.mdx"
locale: "es"
category: "identity"
tags:
  - "ve"
  - "identity"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/foreigner-id"
sourceAnchor: "Notas"
slug: "/identidad/venezuela"
url: "https://docs.verifik.co/verifik-es/identidad/venezuela"
---

# Ciudadano venezolano (CCVE)
**API path(s):** /v2/ve/cedula, /v2/ve/foreigner-id

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos venezolanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Notas

- `documentNumber` es requerido. Se eliminan puntos y espacios. No envíes `documentType`.
- La respuesta incluye campos de nombre (`arrayName`, `firstName`, `lastName`, `fullName`). `birthDate`, `gender` y `maritalStatus` aparecen cuando están disponibles.
- Cuando está presente, `birthDate` sigue el formato `YYYY-MM-DD` (ejemplo: "1998-03-01").
- Sandbox: `10000001`–`10000010` son fijos. `90040401` responde 404. `90050001` responde 500.
- Si el servicio no está disponible temporalmente, la API responde `409` con `code: "Endpoint_out_of_service"`.

---

## Casos de Uso Comunes

-   **Fintech y Banca**: Verifica identidades al instante durante la apertura de cuentas o solicitudes de crédito.
-   **E-commerce y Delivery**: Autentica usuarios y repartidores antes de que se activen en tu plataforma.
-   **Recursos Humanos y Reclutamiento**: Valida documentos de candidatos como parte de tu proceso de contratación.
-   **Seguros y Salud**: Confirma identidades antes de emitir pólizas o proporcionar beneficios médicos.

## Confiabilidad

Cada consulta se maneja con estricto cumplimiento de estándares de seguridad y regulatorios.

## Beneficios Clave

-   **Cumplimiento Automatizado**: Agiliza tus verificaciones KYC para prevenir fraudes sin agregar fricción a tus usuarios.
-   **Resultados Instantáneos**: Procesa verificaciones en segundos, perfecto para onboarding digital en tiempo real.
-   **Datos Confiables**: Confía en datos obtenidos directamente de registros oficiales.
-   **Integración Sencilla**: Conéctate fácilmente vía nuestra API REST o usa nuestros SDKs compatibles.
