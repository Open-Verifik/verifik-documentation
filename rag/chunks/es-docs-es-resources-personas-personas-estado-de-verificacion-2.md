---
id: "es-docs-es-resources-personas-personas-estado-de-verificacion-2"
title: "Personas — Estado de Verificación"
sourcePath: "docs-es/resources/personas/personas.mdx"
locale: "es"
category: "resources"
tags:
  - "face-recognition"
  - "persons"
  - "resources"
endpoints:
  - "/v2/face-recognition/persons/lookup"
  - "/v2/persons"
  - "/v2/persons/liveness"
  - "/v2/persons/{personid}"
sourceAnchor: "Estado de Verificación"
slug: "/resources/persons"
url: "https://docs.verifik.co/verifik-es/resources/persons"
---

# Personas
**API path(s):** /v2/face-recognition/persons/lookup, /v2/persons, /v2/persons/liveness, /v2/persons/{personid}

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
