---
id: "es-docs-es-validacion-empresarial-spain-referencia-de-api"
title: "España — Verificación empresarial (CIF/NIF) — Referencia de API"
sourcePath: "docs-es/validacion-empresarial/spain.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "es"
  - "validacion-empresarial"
endpoint: "/v2/es/company"
sourceAnchor: "Referencia de API"
slug: "/validacion-empresarial/espana"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/espana"
---

# España — Verificación empresarial (CIF/NIF)
**API path(s):** /v2/es/company

## Referencia de API

Este endpoint está pensado para equipos que deben **saber con quién contratan**: bancos, plataformas B2B, insuretech, operadores de marketplace o cualquier negocio que deba validar que una empresa existe, está activa y coincide con el identificador que te ha proporcionado el usuario o el fichero de alta.

**Qué hace en la práctica:** envías un **identificador de empresa** (por ejemplo CIF/NIF en el formato que admita el servicio) y recibes un objeto de datos que puedes usar para completar fichas de cliente, pipelines de aprobación o revisiones de cumplimiento. La respuesta incluye firma Verifik para trazabilidad. Los campos exactos dependen de la fuente y de tu configuración; si necesitas un listado campo a campo para tu sector, el equipo de soporte puede orientarte.

**Cuándo tiene sentido usarlo:** alta de proveedores, revisión previa a pagos recurrentes, apertura de cuentas corporativas, verificación de titulares reales en operaciones sensibles, o cualquier flujo KYB donde “la empresa es quien dice ser” sea un requisito previo a seguir adelante.

**Limitaciones y buenas prácticas:** no sustituye un informe legal completo ni una auditoría contable; es una capa de **verificación automatizada** encadenada a tu política interna. Asegúrate de manejar tokens de forma segura, de registrar intentos fallidos (empresa no encontrada) y de informar al usuario final cuando los datos no basten para una decisión automática.

## Referencia de API

### Endpoint

```
GET https://api.verifik.co/v2/es/company
```

Consulta de datos de **empresa en España** por identificador fiscal (por ejemplo CIF). La respuesta te ayuda en **KYB** y *due diligence*: confirmar que la entidad existe y alinear razón social o estado con tu política de contratación de proveedores o clientes B2B. No reemplaza un informe legal o auditoría contable; sí automatiza el paso previo de “¿esta empresa es quien dice ser?” en tiempo de solicitud. Si el identificador no existe o es inválido, maneja el error según la tabla de respuestas.
