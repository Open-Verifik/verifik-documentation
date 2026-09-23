---
id: "es-docs-es-validacion-empresarial-spain-respuesta-3"
title: "España — Verificación empresarial (CIF/NIF) — Respuesta"
sourcePath: "docs-es/validacion-empresarial/spain.mdx"
locale: "es"
category: "validacion-empresarial"
tags:
  - "es"
  - "validacion-empresarial"
endpoint: "/v2/es/company"
sourceAnchor: "Respuesta"
slug: "/validacion-empresarial/espana"
url: "https://docs.verifik.co/verifik-es/validacion-empresarial/espana"
---

# España — Verificación empresarial (CIF/NIF)
**API path(s):** /v2/es/company

Este endpoint está pensado para equipos que deben **saber con quién contratan**: bancos, plataformas B2B, insuretech, operadores de marketplace o cualquier negocio que deba validar que una empresa existe, está activa y coincide con el identificador que te ha proporcionado el usuario o el fichero de alta.
**Qué hace en la práctica:** envías un **identificador de empresa** (por ejemplo CIF/NIF en el formato que admita el servicio) y recibes un objeto de datos que puedes usar para completar fichas de cliente, pipelines de aprobación o revisiones de cumplimiento. La respuesta incluye firma Verifik para trazabilidad. Los campos exactos dependen de la fuente y de tu configuración; si necesitas un listado campo a campo para tu sector, el equipo de soporte puede orientarte.
**Cuándo tiene sentido usarlo:** alta de proveedores, revisión previa a pagos recurrentes, apertura de cuentas corporativas, verificación de titulares reales en operaciones sensibles, o cualquier flujo KYB donde “la empresa es quien dice ser” sea un requisito previo a seguir adelante.
**Limitaciones y buenas prácticas:** no sustituye un informe legal completo ni una auditoría contable; es una capa de **verificación automatizada** encadenada a tu política interna. Asegúrate de manejar tokens de forma segura, de registrar intentos fallidos (empresa no encontrada) y de informar al usuario final cuando los datos no basten para una decisión automática.

## Respuesta

```json
{
    "data": {
        "address": "C/ MATEMATICO PEDRAYES, 23 33005, OVIEDO, ASTURIAS",
        "businessName": "SERESCO SA.",
        "cnae": "6209 Otros servicios relacionados con las tecnologías de la información y la informática",
        "constitutionDate": "",
        "documentNumber": "33011826",
        "documentType": "CIF",
        "legalForm": "SOCIEDAD ANONIMA",
        "phone": "985235364",
        "sic": "7379 Servicios relacionados con computación SC",
        "socialObject": ""
    },
    "signature": {
        "dateTime": "May 18, 2026 10:30 PM",
        "message": "Certified by Verifik.co"
    },
    "id": "BC529"
}
```

  
  

```json
{
    "code": "MissingParameter",
    "message": "documentType must be one of: [NIF,CIF]"
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

- Contacta al soporte para el listado completo de campos del dataset según tu plan y sector.
- Si la empresa no existe en la fuente o el identificador es incorrecto, recibirás un error coherente con la tabla de respuestas; no asumas éxito sin comprobar el código HTTP y el cuerpo de la respuesta.
