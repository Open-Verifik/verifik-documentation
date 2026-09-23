---
id: "es-docs-es-identity-peru-foreigner-id-respuesta-2"
title: "🇵🇪 Perú - Cédula de Extranjero — Respuesta"
sourcePath: "docs-es/identity/peru-foreigner-id.mdx"
locale: "es"
category: "identity"
tags:
  - "pe"
  - "identity"
endpoints:
  - "/v2/pe/foreigner-id/ce"
  - "/v2/pe/foreigner-id/ce?documentnumber=005015372&dateofbirth=16/08/1993"
sourceAnchor: "Respuesta"
slug: "/identidad/peru-cedula-extranjero"
url: "https://docs.verifik.co/verifik-es/identidad/peru-cedula-extranjero"
---

# 🇵🇪 Perú - Cédula de Extranjero
**API path(s):** /v2/pe/foreigner-id/ce, /v2/pe/foreigner-id/ce?documentnumber=005015372&dateofbirth=16/08/1993

El servicio de Verificación de Identidad Peruano te permite verificar la identidad de un individuo en Perú por su número de cédula de extranjero. El servicio devuelve el nombre completo y otra información relacionada del individuo, incluyendo estado migratorio, nacionalidad, vencimiento de residencia y detalles de la cédula de extranjero, junto con una firma para certificar la autenticidad de la respuesta.
Este servicio es útil para verificar residentes extranjeros en Perú y acceder a su estado migratorio y validez de documentos.

## Respuesta

```json
{
  "data": {
    "arrayName": [
      "CORDERO",
      "SANCHEZ",
      "ANA",
      "RENE"
    ],
    "dateOfBirth": "16/08/1993",
    "documentNumber": "005015372",
    "firstName": "ANA RENE",
    "foreignerIdExpiration": "12/08/2025",
    "foreignerIdLastIssuance": "12/08/2021",
    "fullName": "ANA RENE CORDERO SANCHEZ",
    "immigrationStatus": "HUMANITARIA",
    "lastName": "CORDERO CAMPERO",
    "nationality": "VENEZOLANA",
    "residenceExpiration": "26/02/2025"
  },
  "signature": {
    "dateTime": "November 6, 2024 3:22 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "K0MMA"
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
  "message": "missing documentNumber\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "dateOfBirth format required: DD/MM/YYYY\n"
}
```

## Características

- **Verificación de Cédula de Extranjero**: Verificar documentos de identidad de extranjeros en Perú
- **Verificación de Estado Migratorio**: Acceder al estado migratorio actual (ej. HUMANITARIA)
- **Información de Nacionalidad**: Obtener detalles de nacionalidad del residente extranjero
- **Validez de Documento**: Verificar vencimiento de cédula de extranjero y fechas de última emisión
- **Estado de Residencia**: Verificar fechas de vencimiento de residencia
- **Información Personal**: Acceder a nombre completo, primer nombre, apellido y fecha de nacimiento
- **Validación de Número de Documento**: Verificar números de documentos de extranjeros
- **Validación de Formato de Fecha**: Asegurar formato correcto de fecha de nacimiento (DD/MM/YYYY)
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, PHP y Swift
- **Datos en Tiempo Real**: Acceder a información de extranjeros actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
- **Integración con Inmigración Peruana**: Acceso directo a base de datos oficial de inmigración peruana
- **Gestión de Documentos de Extranjeros**: Seguimiento completo del ciclo de vida de cédula de extranjero
- **Cumplimiento de Residencia**: Monitorear estado de residencia y fechas de vencimiento
