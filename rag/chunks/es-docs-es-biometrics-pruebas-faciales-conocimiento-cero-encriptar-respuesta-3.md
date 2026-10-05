---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-encriptar-respuesta-3"
title: "Encriptar HumanID — Respuesta"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-encriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/encrypt"
sourceAnchor: "Respuesta"
slug: "/biometrics/humanID-encriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-encriptar"
---

# Encriptar HumanID
**API path(s):** /v2/human-id/encrypt

## Respuesta

```json
{
  "data": {
    "humanID": "A39T6XGv2ld+/lwCeB11tcXKFUE2+4LkYwr2BfVwko8OvAqFCavD2S5o62IsxIH8QuQ6K9z1yJ6qhedWojVAhlMoufcpZLlhSknJTUMsql+FXXECoZ0elw3ZCKm1DHrrn3QoRtv3Pfc1EPB2fSoXan2RjFEnkolmrNA/FvRaEOgPeFLUlOFAVzYRVVsoFfe9N6pNZ9q5uCRti7vUwPz5LnObB5uVxFyNZFxZJKrJmqkEHWI+elEqQR/7KnGtwgyN4TNnVGdbyRUUZ8eTztGal5VHIDwYdKxIbjDb1x+xz/elCShcHr4K2QhG+cefp1hj6GFg8BSLF83Wk5U20Cm5V6G0F3Vjk4yNDc7IQB6OfvEDsD8OEov4xBG51D7pw6ukFrw/FrlHBbR+KV6We8t7pJ5/vzFll1tZKcki4PoOXcu/DzmhEVVb0DoVRcB53sbxpU0G5aT0hRH2rhs1jI0yitSzISqFOTNCb7wm3CQoA2ZGndx4+DLaoKjOb/9RFlRyk2FWpM1QGAPGMbJbDeW1JrZmBTsWQ6vTr6U+JdCZA2ZxEXIsugpzbkbMMnisW8m+ddoYJm2TJTvYI8XX6bLtC6T6dEM0oFPbJkjcYdW6bemsaMm0+evZUdREs7E435jDXEoJEP0LOufTluGYcstrTqcwKtSwM5OKK9qH27WNaWcybYrKw8tA0RBUf1jDc8ChHiKXRtiUQ3JxKzK2qLnlpBYLo/0Kyy0tYP7xK1lhxaJvMks8igH/jOuyjqLL0MmOs9EnCGZayJD/UQcu84XgDQKmVxk2zFUVhol7HlcRgpMisVaSawWhpnZtPFAeV+rpJgYAR8g4NjhZ7d9QGuHTdrxmGhHZcEyTqblMx4Kx4UVdWKzvHgaFjFFYag2w",
    "ipfs": {
      "url": "https://blush-selective-earwig-920.mypinata.cloud/ipfs/bafkreibu6ouy66tv7mmqbf4rxjd2tywdhfad2vri2sk562bltuz663imwu",
      "IpfsHash": "bafkreibu6ouy66tv7mmqbf4rxjd2tywdhfad2vri2sk562bltuz663imwu",
      "PinSize": 965,
      "Timestamp": "2025-10-15T15:22:00.333Z",
      "ID": "8e4dd38b-580d-4bf7-a71d-5c6d4e7dc008",
      "Name": "613375a1eab2fe08527f81e2_zk_randomid_93558.json",
      "NumberOfFiles": 1,
      "MimeType": "application/json",
      "GroupId": "861b93d7-9795-461d-b479-31f751d6869e",
      "pinned": true,
      "web3": true,
      "name": "613375a1eab2fe08527f81e2_zk_randomid_93558.json",
      "metadata": [
        "a",
        "b",
        "vida"
      ]
    }
  },
  "credits": {
    "amount": -0.84,
    "status": "approved",
    "category": "usage",
    "client": "613375a1eab2fe08527f81e2",
    "superAdmin": null,
    "expensesGroup": "613375a1eab2fe08527f81e2_zk_randomid_93558",
    "product": "humanAuthn",
    "transaction": null,
    "expiresAt": null,
    "isExpired": false,
    "referenceCredit": null,
    "_id": "68efbc187fb658e0366a3019",
    "updatedAt": "2025-10-15T15:22:00.907Z",
    "createdAt": "2025-10-15T15:22:00.907Z",
    "__v": 0
  }
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
  "message": "Access Forbidden",
  "code": "FORBIDDEN"
}
```

  
  

```json
{
  "message": "\"faceBase64\" is required",
  "code": "MissingParameter"
}
```

  
  

```json
{
  "message": "internal_error",
  "code": "ERROR"
}
```
