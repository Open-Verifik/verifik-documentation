---
id: "es-docs-es-api-etiquetas-buscar-etiqueta-por-dominio-endpoint"
title: "Buscar Etiquetas por Dominio — Endpoint"
sourcePath: "docs-es/api/etiquetas/buscar-etiqueta-por-dominio.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/search-by-domain"
sourceAnchor: "Endpoint"
---

# Buscar Etiquetas por Dominio
**API path(s):** /api/sessions, /api/tags/search-by-domain

## Endpoint

Buscar todas las etiquetas dentro de un dominio específico y sistema de almacenamiento.

### Endpoint

```
GET /api/tags/search-by-domain
```

## Descripción

Este endpoint te permite buscar todas las etiquetas disponibles dentro de un dominio específico usando un sistema de almacenamiento particular (IPFS, Arweave, o Walrus). Retorna un array de objetos de etiqueta que contienen metadatos, direcciones de blockchain e información de almacenamiento.

## Autenticación

Este endpoint requiere autenticación mediante token JWT. Primero debes crear una sesión usando el endpoint `/api/sessions` para obtener un token JWT.

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `domain` | string | Sí | El dominio en el que buscar (ej., "zelf", "avax", "bdag") |
| `storage` | string | Sí | Sistema de almacenamiento a buscar ("IPFS", "Arweave", "Walrus") |

### Respuesta

```json
{
  "data": [
    {
      "id": "01997817-a6fe-7451-9bbb-1abc0e3ca315",
      "name": "testingdomain.zelf.hold",
      "cid": "bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "size": 21483,
      "number_of_files": 1,
      "mime_type": "image/png",
      "group_id": null,
      "created_at": "2025-09-23T19:40:40.362Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreiegb75ipiqjcmwc5gd7sec56i24jcqqsit5wesgxuewbhjwf5kdza",
      "publicData": {
        "btcAddress": "bc1qa4lwfcfvr4czx85tulmd83r77w8mnken2jpltk",
        "domain": "zelf",
        "ethAddress": "0x2e54E51BA41Aaf19132F1F5ce5ad4d1266726104",
        "extraParams": "{\"hasPassword\":\"true\",\"type\":\"hold\",\"origin\":\"online\",\"registeredAt\":\"2025-09-23 14:40:39\",\"expiresAt\":\"2025-10-23 14:40:39\",\"suiAddress\":\"0x9362642b91628c337a3bc3a57b9997997241785a8f906a29c9cd4e03667f5877\"}",
        "solanaAddress": "HQRfUpzNiQxwtU37PxGbkCAntw3441mzQFyBkXy7rTxN",
        "zelfName": "testingdomain.zelf.hold"
      }
    },
    {
      "id": "c4805114-0000-4571-ba22-12e6fb0688a5",
      "name": "anotherdomainhere.zelf.hold",
      "cid": "bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "size": 18073,
      "number_of_files": 1,
      "mime_type": "false",
      "group_id": null,
      "created_at": "2025-09-13T19:48:23.33Z",
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreifkbcqozngq66nzeeqjypkldq5cfpaqmqaq3pe7qjvd47pwplw3ze",
      "publicData": {
        "btcAddress": "bc1qjcerutgp0y2y7yaxps6zllcy6arccn4mff5qnr",
        "domain": "zelf",
        "ethAddress": "0x9Ca1FF37893730F0BFF9052bB9d605e659E15622",
        "extraParams": "{\"hasPassword\":\"true\",\"duration\":\"yearly\",\"type\":\"hold\",\"origin\":\"online\",\"price\":24,\"registeredAt\":\"2025-09-13 14:48:22\",\"expiresAt\":\"2025-10-13 14:48:22\",\"suiAddress\":\"0x571ffe189865411e4f72c07364eb63647917d4205a5907d1e977f3bd1996f68c\"}",
        "solanaAddress": "A4NRExXSojWjUsey5kf9o879mriNfbbXhKrcG1pVUTKy",
        "zelfName": "anotherdomainhere.zelf.hold",
        "zelfProof": "AujeuMt+bdryMcYP1UarcpoM5GS1S72qGLNyp/EOwfsZjvf8je9P91MYCew4hHgzMqFpU4n+Qs0j8GV2QX8+zsraINjF9lMcQ24O7uD2qrP7trd5FRFnn5gCDIeISx/b9B1Vk+/I36PCPjQDBvJ9zlIpJ5wONSAMps5Ef9/TfuWQML2Zu9cVr6eSKIzi+ewSbs48aeBp6jhsMOPH+6eMNqdHxscTgodkNeuMRgAR11sxdfOZmMMZQ9XXqHqcNyd9muhUVbshHszicemzrwNPTX0q3WFoeQthy6znGP5janpdhoT5Cpq59y984pDCMb47VVoaBrB/WjK+2v2KtfgoNUmqKlvVfMzQ/ef5LMbb1nFsyPtUH1FrxbLYbF/qBspdA1x4FYPKYoz9HiOTraQMfjwmoS0US4lOo7/0zffTZVqXso+h+c8mpod769oCYP3snXlUrLqNewJlp5A0Cf4+PcGCqU6hMIelT62NXwnTY1D1qUW/5suiXfoof84zsvEr7zXS5RR9VhFkthllkGuYpQHaiK/5uv8yTrPtkWDL+QVeQb3DnBAmJCs5SPl62/BIe/0kXm5czzaoa99waUYK3YKghYM9B5Gr+qozEBbnWR0QL1xxdnATfzSvqZ+ywY/eA/1oOr0nvpvXgNzoxk5eVmbuoIQQiUz78XOn7IvR6N+oKmOIVvHTUsxyCa0A6MRYzqTIaQUBTjFQMFFlPbxiljwW+q9k8QTjonlU9HLSxYybrfxUb0+MnvxQw3mXQlCaEBqwYMfwHeQ484tBZFq9W0wcKlkiKUVkCAHjlttq/GcanaGd+XojllGHMfSjuo3rtUAkhOQZXatuiaxSNioW2DccxnGwuepXtcgTaNOAEDxdmc0Q3ecTVYdhNPUVJ1LBltdI/vqJf55SyQgh8kTXKO7HdKbqr22jkK5wkfvDtwXwxdOtR5E0kNVYuSNG37HpqeDkTFkmyrTfSR/7mr7ICjZn4AJ3fdSgrRwLCjLzLdCZl6ctKDUh6VrWsQFpfp69uKVvCdgVyTWQtIkmXl2hqxm7XcKizgZGZuRwiAI1zR1ZqutqBSAciBOkBAinLMuPHMCt7SUODBkH5EO5ZyDcvw=="
      }
    }
  ]
}
```
