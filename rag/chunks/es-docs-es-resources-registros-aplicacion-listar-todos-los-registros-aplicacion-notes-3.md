---
id: "es-docs-es-resources-registros-aplicacion-listar-todos-los-registros-aplicacion-notes-3"
title: "Listar Registros de Aplicación — Notes"
sourcePath: "docs-es/resources/registros-aplicacion/listar-todos-los-registros-aplicacion.mdx"
locale: "es"
category: "resources"
tags:
  - "app-registrations"
  - "resources"
endpoint: "/v2/app-registrations"
sourceAnchor: "Notes"
---

# Listar Registros de Aplicación
**API path(s):** /v2/app-registrations

## Notes

-   **Paginación**: Usa los parámetros `page` y `limit` para navegar por los resultados. El límite por defecto es 10 elementos por página, el máximo es 100.
-   **Filtrado**: Combina múltiples parámetros de consulta para filtrar resultados. Ejemplo: `?where_status=ONGOING&where_project=507f1f77bcf86cd799439011`
-   **Múltiples Estados**: Usa `in_status` como un array para filtrar por múltiples estados: `?in_status[]=ONGOING&in_status[]=COMPLETED`
-   **Metadatos de Respuesta**: La respuesta incluye `total` (conteo total), `limit`, `page`, y `pages` para control de paginación.
-   **Populates**: Usa `populates[]` para incluir objetos relacionados en la respuesta, reduciendo la necesidad de llamadas API adicionales.
