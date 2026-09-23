---
id: "es-docs-es-identity-spain-citizen-overview"
title: "España — Verificación de identidad (DNI / NIE)"
sourcePath: "docs-es/identity/spain-citizen.mdx"
locale: "es"
category: "identity"
tags:
  - "es"
  - "identity"
endpoint: "/v2/es/cedula"
slug: "/identidad/ciudadano-espanol"
url: "https://docs.verifik.co/verifik-es/identidad/ciudadano-espanol"
---

# España — Verificación de identidad (DNI / NIE)
**API path(s):** /v2/es/cedula

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos y residentes españoles usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

**Qué recibes en la práctica:** una respuesta estructurada que te permite decidir si aceptas o rechazas el alta de un usuario en función de si el **tipo y número de documento**, el **nombre** y la **fecha de caducidad** son coherentes entre sí según la fuente consultada. No sustituye el asesoramiento legal de tu equipo de cumplimiento, pero sí reduce errores manuales y acelera el “sí o no” en tiempo real dentro de tu producto.

**Cuándo usarla:** apertura de cuentas, préstamos, alquileres de larga duración, altas laborales sensibles, marketplaces con verificación de vendedores, o cualquier flujo donde un documento falso o caducado suponga riesgo reputacional o financiero. La integración es por HTTPS y encaja en flujos totalmente automatizados (formularios web, apps móviles, backoffice interno).

**Qué debes tener claro antes de integrar:** necesitas el tipo de documento (`DNIES` o `NIE`), el número sin espacios y la **fecha de vencimiento** en el formato indicado en la referencia de API. Sin esos datos la validación no puede completarse. Los tiempos de respuesta están pensados para UX en línea; revisa límites de tu plan y manejo de errores (documento no encontrado, parámetros incorrectos, etc.) en la sección de respuestas.
