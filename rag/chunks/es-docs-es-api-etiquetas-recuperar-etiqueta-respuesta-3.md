---
id: "es-docs-es-api-etiquetas-recuperar-etiqueta-respuesta-3"
title: "Recuperación de una Etiqueta — Respuesta"
sourcePath: "docs-es/api/etiquetas/recuperar-etiqueta.md"
locale: "es"
category: "api"
tags:
  - "api"
endpoints:
  - "/api/sessions"
  - "/api/tags/lease-recovery"
sourceAnchor: "Respuesta"
---

# Recuperación de una Etiqueta
**API path(s):** /api/sessions, /api/tags/lease-recovery

Recuperar una etiqueta usando un ZelfProof existente de una etiqueta previamente alquilada. Este endpoint te permite crear una nueva etiqueta con los mismos datos de wallet de una etiqueta anterior.

## Respuesta

```json
{
  "data": {
    "ethAddress": "0x1cdDf0A78Af351725a25508927080452D4C9CB5c",
    "solanaAddress": "4HBvMcJAD6iXLetJR9xj3EFu1CM6x7TV6J44gfLmYu1R",
    "btcAddress": "bc1qf7w3ceql0mdnkhgzacpcc64mwrquctraazz879",
    "zelfName": "recovery13508.zelf",
    "domain": "zelf",
    "duration": 1,
    "price": 24,
    "reward": 2.4,
    "discount": 0,
    "discountType": "percentage",
    "suiAddress": "0x9692522bf5463b1ff2da4b14d7d4b8dce60fd369da42a2438fb09e9518218716",
    "hasPassword": "true",
    "zelfProof": "AiIjAVSb9Sj0JpZLW0/XRfReum7Rt96s3rahLzvxXsXpkMHMHAeDeF/Jx+KRZg8AjBiQKHJPtkHntfVfTnJfNvijeOQa90kVzMk/uJcc3ZBodca5TPxq7EJik5Zv65Qu0MZ17J3RPTjwRdke5ryZHWJgv/NX2jr7YlgDfknWr1WVpzu37TeAsLZaA289wnEom3K6ENwSoZwar/adzsNiIrHBCtQxD2r6iQfqlyxQ8TzU8upBB2yiZXxJa2BGB/YlJScI9hIPs9N5/VkcFjmSObFjbnegqngz7Sd5eNgOxYROGU9uYc2w6AAmPQxM1SDOsZE/QtODz9vIUTngME0erAK3AQ5iK52nnDfKJ71CHzcAAJrNUnLRPoHRlHw1w89mleNyJIGK/jt9b+2/qLBnEuOE2wKrI7W+CP1Yc0gvMHsAiZoarheBUn4QZv1FoSuIVvRwUyHuIJNwo/Fl5eKBCSzbwJ7lbIbdTO+QJuH0Qp9CneVIl6/APJi1Wi2/61KCkWWvKFifxQChTqc9Zs3PyiveWvdzv1HrqvHoWpjeyXm64X8WCQA1hJ1gvTYXLHUgF/DkupAdJnyCQtlAG/gpKR/npiwRFdrRskpA9doglgJJ7JzA12MJj95r3kEDFNxuMWqm3hd2W0aGwmrWehWqRlCUkRy2VJFn4mnfO3kNmRAk5DfhP6uf61KaPSwSlw20fbDBuyNMa6vSYbyDcZACUB3ihsEHf/+QQ57XE3muE7H6XGSeji0+WZg50alsjNelwz13jNwiHVAR5xsEfs7GPltHFUfekwtcZJ2sD1C+sfNZINfmghZZHrW4KDFb6HwPQsKe7B+IsIRKfPpdo5ES7t1Wqkdimv6kn7olW8wlJ4gKrERzRx1Xp5wJyVIEQ1n/JYXU+yUogdNvm1W65z28vmOj6jKU4w5C6sBMDHsphseYLYBOsicMr3XDKGwndQeHpEDZys01F9ZKkn/LrFS/FnyZAIzrfIJjPSUzaMAbzKt34TzJaHhpsSi8jH443/oLbM8h69Qt4XHsb0I8aietzSxlqPQySwkQTEHwzPpKtQLQgjZveA84PMZLRiF+KB1PwB9r1n/jSZXUBX1FKPYlVBhHoxDdwq8z+LeM2CJatZtHJiIlXiKETt9TmpMbAa0k4dzHHMeQophZAqE4oq11xDfPp34DfafP3oRVwmIKFUv1DSX522Ejrhx+l/rXD7NAluM3bQjKJ4K0VR8vwcNRCsyhKbi4fhCoXhbQPCjwyUJRllav+UxvUPE6YrE31vkzDvGBm3kch7oLSLzPaCMTVxV3YeJAMQYl+pFoQfpRSLmOSQM=",
    "zelfProofQRCode": "data:image/png;base64,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",
    "ipfs": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreidaeqkuipr6towfl5cqctgnbisnxo2j4wzbzjxr567ffwplryem3e",
      "ipfs_pin_hash": "bafkreidaeqkuipr6towfl5cqctgnbisnxo2j4wzbzjxr567ffwplryem3e",
      "ipfsHash": "bafkreidaeqkuipr6towfl5cqctgnbisnxo2j4wzbzjxr567ffwplryem3e",
      "cid": "bafkreidaeqkuipr6towfl5cqctgnbisnxo2j4wzbzjxr567ffwplryem3e",
      "publicData": {
        "zelfName": "recovery13508.zelf.hold",
        "domain": "zelf",
        "ethAddress": "0x1cdDf0A78Af351725a25508927080452D4C9CB5c",
        "btcAddress": "bc1qf7w3ceql0mdnkhgzacpcc64mwrquctraazz879",
        "solanaAddress": "4HBvMcJAD6iXLetJR9xj3EFu1CM6x7TV6J44gfLmYu1R",
        "suiAddress": "0x9692522bf5463b1ff2da4b14d7d4b8dce60fd369da42a2438fb09e9518218716",
        "hasPassword": "true",
        "type": "hold",
        "origin": "online",
        "registeredAt": "2025-09-25 13:00:02",
        "expiresAt": "2025-10-25 13:00:02"
      }
    }
  }
}
```
