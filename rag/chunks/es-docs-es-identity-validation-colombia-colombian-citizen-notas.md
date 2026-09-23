---
id: "es-docs-es-identity-validation-colombia-colombian-citizen-notas"
title: "Ciudadano Colombiano — Notas"
sourcePath: "docs-es/identity-validation/colombia/colombian-citizen.mdx"
locale: "es"
category: "identity-validation"
tags:
  - "co"
  - "identity-validation"
endpoints:
  - "/v2/co/cedula"
  - "/v2/co/foreigner-id/ce"
  - "/v2/co/foreigner-id/ppt"
  - "/v2/co/procuraduria"
sourceAnchor: "Notas"
slug: "/validacion-identidad/colombia/ciudadano-colombiano"
url: "https://docs.verifik.co/verifik-es/validacion-identidad/colombia/ciudadano-colombiano"
---

# Ciudadano Colombiano
**API path(s):** /v2/co/cedula, /v2/co/foreigner-id/ce, /v2/co/foreigner-id/ppt, /v2/co/procuraduria

## Notas

-   Usa `documentType=CC`, `CE`, `PPT`, `NIT` o `PEP`. Para estado migratorio (vencimiento / VIGENTE) usa las rutas [foreigner-id](/verifik-es/identidad/colombia-ce). Para solo Procuraduría: [Colombia Procuraduría](/verifik-es/identity/colombia-procuraduria).

---

### Verificación de identidad en Colombia

La API de Verificación de Identidad de Verifik te ayuda a autenticar ciudadanos colombianos usando datos oficiales del gobierno. Está diseñada para agilizar tus procesos de KYC (Conozca a su Cliente), prevenir fraudes y asegurar el cumplimiento normativo sin complicaciones.

Creamos esta integración para empresas que necesitan una forma rápida, segura y automatizada de confirmar la verdadera identidad de usuarios, empleados o clientes.

### ¿Qué valida esta API?

Nuestra API se conecta directamente con registros oficiales para validar:

-   **Nombre completo y número de ID**: *Cédula de Ciudadanía* (**CC**), *Cédula de Extranjería* (**CE**), *Permiso de Protección Temporal* (**PPT**), *Permiso Especial de Permanencia* (**PEP**) y *NIT*. [Colombia CE](/verifik-es/identidad/colombia-ce) sigue disponible cuando necesitas fecha de expedición / estado migratorio.
-   **Estado del Documento**: Verifica el estado actual en la base de datos de la *Registraduría Nacional del Estado Civil*.
-   **Expedición y Vigencia**: Confirma la fecha de expedición y si el documento está actualmente vigente.
-   **Coincidencia de Identidad**: Verifica que el nombre proporcionado coincida con el número de identificación.

Al verificar estos detalles, puedes tener la certeza de que la persona con la que tratas es real y posee un documento válido, reduciendo significativamente el riesgo de suplantación y fraude.
