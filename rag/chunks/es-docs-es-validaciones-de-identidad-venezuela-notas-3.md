---
id: "es-docs-es-validaciones-de-identidad-venezuela-notas-3"
title: "Ciudadano Venezolano — Notas"
sourcePath: "docs-es/validaciones-de-identidad/venezuela.mdx"
locale: "es"
category: "validaciones-de-identidad"
tags:
  - "ve"
  - "validaciones-de-identidad"
endpoints:
  - "/v2/ve/cedula"
  - "/v2/ve/cedula?"
  - "/v2/ve/cedula?documentnumber=10000001"
sourceAnchor: "Notas"
slug: "/validaciones-de-identidad/venezuela"
url: "https://docs.verifik.co/verifik-es/validaciones-de-identidad/venezuela"
---

# Ciudadano Venezolano
**API path(s):** /v2/ve/cedula, /v2/ve/cedula?, /v2/ve/cedula?documentnumber=10000001

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos venezolanos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Notas

- `documentNumber` es requerido. Se eliminan puntos y espacios. No envíes `documentType`.
- La respuesta incluye campos de nombre (`arrayName`, `firstName`, `lastName`, `fullName`). `birthDate`, `gender` y `maritalStatus` aparecen cuando están disponibles.
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

## Cumplimiento y Seguridad

Priorizamos la seguridad de tus datos. Verifik usa encriptación avanzada (HTTPS/TLS 1.3) y estándares estrictos de gestión de privacidad para garantizar la confidencialidad.
Nuestro servicio está monitoreado 24/7 para disponibilidad y ofrece controles de acceso basados en roles para mantener seguro el acceso de tu equipo.
