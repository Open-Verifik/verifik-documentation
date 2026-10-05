---
id: "es-docs-es-biometrics-pruebas-faciales-conocimiento-cero-desencriptar-solicitud-3"
title: "Desencriptar HumanID — Solicitud"
sourcePath: "docs-es/biometrics/pruebas-faciales-conocimiento-cero-desencriptar.mdx"
locale: "es"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Solicitud"
slug: "/biometrics/humanID-desencriptar"
url: "https://docs.verifik.co/verifik-es/biometrics/humanID-desencriptar"
---

# Desencriptar HumanID
**API path(s):** /v2/human-id/decrypt

## Solicitud

func main() {
    payload := map[string]interface{}{
        "faceBase64": "",
        "livenessLevel": "REGULAR",
        "password": "1234",
        "os": "DESKTOP",
        "humanID": "A39T6XGv2ld+/lwCeB11tcXKFUE2+4LkYwr2BfVwko8OvAqFCavD2S5o62IsxIH8QuQ6K9z1yJ6qhedWojVAhlMoufcpZLlhSknJTUMsql+FXXECoZ0elw3ZCKm1DHrrn3QoRtv3Pfc1EPB2fSoXan2RjFEnkolmrNA/FvRaEOgPeFLUlOFAVzYRVVsoFfe9N6pNZ9q5uCRti7vUwPz5LnObB5uVxFyNZFxZJKrJmqkEHWI+elEqQR/7KnGtwgyN4TNnVGdbyRUUZ8eTztGal5VHIDwYdKxIbjDb1x+xz/elCShcHr4K2QhG+cefp1hj6GFg8BSLF83Wk5U20Cm5V6G0F3Vjk4yNDc7IQB6OfvEDsD8OEov4xBG51D7pw6ukFrw/FrlHBbR+KV6We8t7pJ5/vzFll1tZKcki4PoOXcu/DzmhEVVb0DoVRcB53sbxpU0G5aT0hRH2rhs1jI0yitSzISqFOTNCb7wm3CQoA2ZGndx4+DLaoKjOb/9RFlRyk2FWpM1QGAPGMbJbDeW1JrZmBTsWQ6vTr6U+JdCZA2ZxEXIsugpzbkbMMnisW8m+ddoYJm2TJTvYI8XX6bLtC6T6dEM0oFPbJkjcYdW6bemsaMm0+evZUdREs7E435jDXEoJEP0LOufTluGYcstrTqcwKtSwM5OKK9qH27WNaWcybYrKw8tA0RBUf1jDc8ChHiKXRtiUQ3JxKzK2qLnlpBYLo/0Kyy0tYP7xK1lhxaJvMks8igH/jOuyjqLL0MmOs9EnCGZayJD/UQcu84XgDQKmVxk2zFUVhol7HlcRgpMisVaSawWhpnZtPFAeV+rpJgYAR8g4NjhZ7d9QGuHTdrxmGhHZcEyTqblMx4Kx4UVdWKzvHgaFjFFYag2w",
    }
    b, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "https://api.verifik.co/v2/human-id/decrypt", bytes.NewBuffer(b))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+os.Getenv("VERIFIK_TOKEN"))
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var out map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&out)
    fmt.Println(out)
}
```
