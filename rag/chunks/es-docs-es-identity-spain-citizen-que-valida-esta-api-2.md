---
id: "es-docs-es-identity-spain-citizen-que-valida-esta-api-2"
title: "España — Verificación de identidad (DNI / NIE) — ¿Qué valida esta API?"
sourcePath: "docs-es/identity/spain-citizen.mdx"
locale: "es"
category: "identity"
tags:
  - "es"
  - "identity"
endpoint: "/v2/es/cedula"
sourceAnchor: "¿Qué valida esta API?"
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

## ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre Completo y Número de Documento**: Soporta *Documento Nacional de Identidad* (DNI) y *Número de Identidad de Extranjero* (NIE).
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de documento.
-   **Verificación de Fecha de Vencimiento**: Valida la fecha de vencimiento del documento.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/es/cedula
```

Validación de identidad para personas en España mediante consulta a fuentes oficiales. Envías **tipo de documento** (`DNIES` o `NIE`), **número** (sin espacios) y **fecha de vencimiento** (`DD/MM/YYYY`); la API comprueba coherencia entre documento, nombre y caducidad. Sirve para **KYC**, reducción de fraude y cumplimiento en onboarding, contratación, seguros o marketplaces: sabrás si el documento existe, está vigente y corresponde a la persona indicada. Pensado para integración HTTPS en flujos totalmente automatizados; revisa códigos de error cuando el registro no exista o falten parámetros.

### Encabezados

| Nombre | Valor |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| Nombre | Tipo | Requerido | Descripción |
| --- | --- | --- | --- |
| `documentType` | string | Sí | Tipo de documento. Valores permitidos: `DNIES`, `NIE`. |
| `documentNumber` | string | Sí | Número de documento sin espacios. |
| `date` | string | Sí | Fecha de vencimiento en formato `DD/MM/YYYY`. |
