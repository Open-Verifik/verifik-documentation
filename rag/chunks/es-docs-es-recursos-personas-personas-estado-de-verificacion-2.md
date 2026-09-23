---
id: "es-docs-es-recursos-personas-personas-estado-de-verificacion-2"
title: "Personas — Estado de Verificación"
sourcePath: "docs-es/recursos/personas/personas.mdx"
locale: "es"
category: "recursos"
tags:
  - "face-recognition"
  - "recursos"
endpoints:
  - "/v2/face-recognition/persons"
  - "/v2/face-recognition/persons/liveness"
  - "/v2/face-recognition/persons/{personid}"
sourceAnchor: "Estado de Verificación"
slug: "/recursos/personas"
url: "https://docs.verifik.co/verifik-es/recursos/personas"
---

# Personas
**API path(s):** /v2/face-recognition/persons, /v2/face-recognition/persons/liveness, /v2/face-recognition/persons/{personid}

## Estado de Verificación

- `pending` - Persona creada pero aún no verificada
- `verified` - Persona ha sido verificada exitosamente
- `failed` - Verificación fallida
- `expired` - Verificación ha expirado

### Casos de Uso

- **Incorporación de Usuarios**: Crea registros de personas durante el registro
- **Almacenamiento Biométrico**: Almacena datos biométricos para verificación futura
- **Gestión de Identidad**: Mantén una base de datos de individuos verificados
- **Control de Acceso**: Usa registros de personas para sistemas de acceso seguro
- **Cumplimiento**: Cumple con requisitos regulatorios para verificación de identidad
