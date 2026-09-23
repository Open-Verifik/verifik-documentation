---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-precios-especificos-por-dominio-5"
title: "Buscar Etiqueta — Precios Específicos por Dominio"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
sourceAnchor: "Precios Específicos por Dominio"
---

# Buscar Etiqueta

Buscar una etiqueta en cualquier nombre de dominio soportado (Zelf, Avax, BDAG, u otros dominios licenciados).

## Precios Específicos por Dominio

Diferentes dominios tienen diferentes estructuras de precios:

- **Zelf**: $24 USD (1 año), $210 USD (por vida)
- **Avax**: $18 USD (1 año)
- **BDAG**: Precios variables basados en la configuración del dominio

## Opciones de Duración

| Duración | Descripción | Multiplicador de Precio Típico |
|----------|-------------|--------------------------------|
| `1` | 1 año | 1x precio base |
| `2` | 2 años | ~1.8x precio base |
| `3` | 3 años | ~2.5x precio base |
| `4` | 4 años | ~3.2x precio base |
| `5` | 5 años | ~3.8x precio base |
| `lifetime` | Por vida | ~8.75x precio base |

## Respuestas de Error

*Las respuestas de error están documentadas en las pestañas de respuesta arriba, incluyendo errores de validación, errores de autenticación y errores del servidor.*
