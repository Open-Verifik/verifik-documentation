---
id: "es-docs-es-identity-peru-full-id-respuesta-2"
title: "🇵🇪 Perú - ID Completo — Respuesta"
sourcePath: "docs-es/identity/peru-full-id.mdx"
locale: "es"
category: "identity"
tags:
  - "identity"
sourceAnchor: "Respuesta"
slug: "/identidad/peru-id-completo"
url: "https://docs.verifik.co/verifik-es/identidad/peru-id-completo"
---

# 🇵🇪 Perú - ID Completo

Esta llamada API realiza una verificación extendida de identidad para un ciudadano peruano usando su número de DNI (Documento Nacional de Identidad). Este Servicio recupera información personal detallada. Devuelve datos como el nombre completo del individuo, primer nombre, apellido, estado civil, fecha de nacimiento, número de documento, fechas de expedición y vencimiento, y detalles adicionales como dirección y firma de verificación, certificado por Verifik.
**El header de Authorization es requerido para autenticación para acceder a esta información de forma segura.**

## Respuesta

```json
{
  "data": {
    "address": "CARACALLA",
    "arrayName": [
      "FELIPE",
      "TRUJILLO",
      "HERNANDEZ"
    ],
    "civilStatus": "SOLTERO",
    "dateOfBirth": "19-11-1997",
    "documentNumber": "74687367",
    "documentType": "DNI",
    "expeditionDate": "03-03-2025",
    "expirationDate": "03-03-2033",
    "firstName": "FELIPE",
    "fullName": "FELIPE TRUJILLO HERNANDEZ",
    "lastName": "TRUJILLO HERNANDEZ",
    "photo": "/9j/4AAQSkZJRgABAgAAAQABAAD/2wBD...v8ADSGiigD/2Q==",
    "sex": "M",
    "ubigeoReniec": "020208",
    "verificationDigit": "2"
  },
  "signature": {
    "dateTime": "April 16, 2025 2:44 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "G2ZOZ"
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
  "message": "missing documentType\n. missing documentNumber\n"
}
```

  
  

```json
{
  "code": "MissingParameter",
  "message": "documentType must be one of: [DNI]"
}
```

## Características

- **Verificación Extendida de Identidad**: Realizar verificación integral de identidad para ciudadanos peruanos usando DNI
- **Información Personal Detallada**: Acceder a nombre completo, primer nombre, apellido y componentes de nombre en array
- **Datos Demográficos**: Obtener estado civil, sexo, fecha de nacimiento e información de dirección
- **Detalles del Documento**: Acceder a tipo de documento, número, fecha de expedición, fecha de vencimiento y dígito de verificación
- **Información Geográfica**: Obtener código ubigeoReniec para identificación de ubicación
- **Datos de Foto**: Acceder a foto del ciudadano en formato base64
- **Ciclo de Vida del Documento**: Rastrear fechas de expedición y vencimiento
- **Dígito de Verificación**: Acceder al dígito de verificación del DNI para validación
- **Múltiples Lenguajes de Programación**: Soporte para JavaScript, Python, Ruby y cURL
- **Datos en Tiempo Real**: Acceder a información de ciudadanos actual y actualizada
- **Manejo Completo de Errores**: Respuestas de error detalladas para varios escenarios
- **Integración con Registro Peruano**: Acceso directo a base de datos oficial de ciudadanos peruanos
- **Autenticación Segura**: Header de Authorization requerido para acceso seguro
- **Demografía Completa**: Información demográfica y geográfica completa
- **Validación de Documento**: Validación completa de DNI con todos los campos disponibles
