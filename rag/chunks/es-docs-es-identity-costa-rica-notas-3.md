---
id: "es-docs-es-identity-costa-rica-notas-3"
title: "Ciudadano costarricense (CCCR) — Notas"
sourcePath: "docs-es/identity/costa-rica.mdx"
locale: "es"
category: "identity"
tags:
  - "cr"
  - "identity"
endpoint: "/v2/cr/cedula"
sourceAnchor: "Notas"
slug: "/identidad/costa-rica"
url: "https://docs.verifik.co/verifik-es/identidad/costa-rica"
---

# Ciudadano costarricense (CCCR)
**API path(s):** /v2/cr/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos costarricenses usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.
Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

## Notas

- Proporciona el número sin espacios o puntos.
- Una cédula que no es elegible para la reimpresión en línea según las reglas de renovación del TSE, de igual forma se resuelve exitosamente (`200`) con `status: "requires_renewal"` y `expired: true`, en lugar de un error. El objeto `message` bilingüe (`es`/`en`) explica que el ciudadano debe renovar el documento en persona en una oficina del TSE.

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
