---
id: "es-docs-es-api-etiquetas-vista-previa-etiqueta-endpoint"
title: "Vista Previa de Etiqueta — Endpoint"
sourcePath: "docs-es/api/etiquetas/vista-previa-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Endpoint"
---

# Vista Previa de Etiqueta

## Endpoint

Previsualizar una etiqueta para ver si existe o verificar información de precios antes de alquilarla.

### Endpoint

```
GET /api/tags/preview
```

## Descripción

Este endpoint te permite previsualizar una etiqueta y ver sus detalles antes de comprometerte a alquilarla. Retorna diferentes estructuras de respuesta dependiendo de si la etiqueta ya existe o está disponible para compra.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `tagName` | string | Sí | El nombre de la etiqueta a previsualizar (ej., "myname") |
| `domain` | string | Sí | El tipo de dominio (ej., "zelf", "avax", "bdag") |
| `os` | string | Sí | Sistema operativo ("DESKTOP", "ANDROID", "IOS") |
| `captchaToken` | string | No | Token CAPTCHA para protección contra bots (opcional) |
