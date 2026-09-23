---
id: "en-docs-biometrics-zero-knowledge-face-proofs-decrypt-request-2"
title: "Decrypt HumanID — Request"
sourcePath: "docs/biometrics/zero-knowledge-face-proofs-decrypt.mdx"
locale: "en"
category: "biometrics"
tags:
  - "biometrics"
  - "human-id"
endpoint: "/v2/human-id/decrypt"
sourceAnchor: "Request"
slug: "/biometrics/humanID-decrypt"
url: "https://docs.verifik.co/biometrics/humanID-decrypt"
---

# Decrypt HumanID
**API path(s):** /v2/human-id/decrypt

## Request

```javascript
const fetch = require("node-fetch");

async function run() {
  const res = await fetch("https://api.verifik.co/v2/human-id/decrypt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
    },
    body: JSON.stringify({
      faceBase64: "",
      password: "1234",
      os: "DESKTOP",
      humanID: "A39T6XGv2ld+/lwCeB11tcXKFUE2+4LkYwr2BfVwko8OvAqFCavD2S5o62IsxIH8QuQ6K9z1yJ6qhedWojVAhlMoufcpZLlhSknJTUMsql+FXXECoZ0elw3ZCKm1DHrrn3QoRtv3Pfc1EPB2fSoXan2RjFEnkolmrNA/FvRaEOgPeFLUlOFAVzYRVVsoFfe9N6pNZ9q5uCRti7vUwPz5LnObB5uVxFyNZFxZJKrJmqkEHWI+elEqQR/7KnGtwgyN4TNnVGdbyRUUZ8eTztGal5VHIDwYdKxIbjDb1x+xz/elCShcHr4K2QhG+cefp1hj6GFg8BSLF83Wk5U20Cm5V6G0F3Vjk4yNDc7IQB6OfvEDsD8OEov4xBG51D7pw6ukFrw/FrlHBbR+KV6We8t7pJ5/vzFll1tZKcki4PoOXcu/DzmhEVVb0DoVRcB53sbxpU0G5aT0hRH2rhs1jI0yitSzISqFOTNCb7wm3CQoA2ZGndx4+DLaoKjOb/9RFlRyk2FWpM1QGAPGMbJbDeW1JrZmBTsWQ6vTr6U+JdCZA2ZxEXIsugpzbkbMMnisW8m+ddoYJm2TJTvYI8XX6bLtC6T6dEM0oFPbJkjcYdW6bemsaMm0+evZUdREs7E435jDXEoJEP0LOufTluGYcstrTqcwKtSwM5OKK9qH27WNaWcybYrKw8tA0RBUf1jDc8ChHiKXRtiUQ3JxKzK2qLnlpBYLo/0Kyy0tYP7xK1lhxaJvMks8igH/jOuyjqLL0MmOs9EnCGZayJD/UQcu84XgDQKmVxk2zFUVhol7HlcRgpMisVaSawWhpnZtPFAeV+rpJgYAR8g4NjhZ7d9QGuHTdrxmGhHZcEyTqblMx4Kx4UVdWKzvHgaFjFFYag2w"
    }),
  });
  console.log(await res.json());
}

run();
```

  
  

```php
 "",
    "password" => "1234",
    "os" => "DESKTOP",
    "humanID" => "A39T6XGv2ld+/lwCeB11tcXKFUE2+4LkYwr2BfVwko8OvAqFCavD2S5o62IsxIH8QuQ6K9z1yJ6qhedWojVAhlMoufcpZLlhSknJTUMsql+FXXECoZ0elw3ZCKm1DHrrn3QoRtv3Pfc1EPB2fSoXan2RjFEnkolmrNA/FvRaEOgPeFLUlOFAVzYRVVsoFfe9N6pNZ9q5uCRti7vUwPz5LnObB5uVxFyNZFxZJKrJmqkEHWI+elEqQR/7KnGtwgyN4TNnVGdbyRUUZ8eTztGal5VHIDwYdKxIbjDb1x+xz/elCShcHr4K2QhG+cefp1hj6GFg8BSLF83Wk5U20Cm5V6G0F3Vjk4yNDc7IQB6OfvEDsD8OEov4xBG51D7pw6ukFrw/FrlHBbR+KV6We8t7pJ5/vzFll1tZKcki4PoOXcu/DzmhEVVb0DoVRcB53sbxpU0G5aT0hRH2rhs1jI0yitSzISqFOTNCb7wm3CQoA2ZGndx4+DLaoKjOb/9RFlRyk2FWpM1QGAPGMbJbDeW1JrZmBTsWQ6vTr6U+JdCZA2ZxEXIsugpzbkbMMnisW8m+ddoYJm2TJTvYI8XX6bLtC6T6dEM0oFPbJkjcYdW6bemsaMm0+evZUdREs7E435jDXEoJEP0LOufTluGYcstrTqcwKtSwM5OKK9qH27WNaWcybYrKw8tA0RBUf1jDc8ChHiKXRtiUQ3JxKzK2qLnlpBYLo/0Kyy0tYP7xK1lhxaJvMks8igH/jOuyjqLL0MmOs9EnCGZayJD/UQcu84XgDQKmVxk2zFUVhol7HlcRgpMisVaSawWhpnZtPFAeV+rpJgYAR8g4NjhZ7d9QGuHTdrxmGhHZcEyTqblMx4Kx4UVdWKzvHgaFjFFYag2w"
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  
  

```python

url = "https://api.verifik.co/v2/human-id/decrypt"
headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
payload = {
    "faceBase64": "",
    "password": "1234",
    "os": "DESKTOP",
    "humanID": "A39T6XGv2ld+/lwCeB11tcXKFUE2+4LkYwr2BfVwko8OvAqFCavD2S5o62IsxIH8QuQ6K9z1yJ6qhedWojVAhlMoufcpZLlhSknJTUMsql+FXXECoZ0elw3ZCKm1DHrrn3QoRtv3Pfc1EPB2fSoXan2RjFEnkolmrNA/FvRaEOgPeFLUlOFAVzYRVVsoFfe9N6pNZ9q5uCRti7vUwPz5LnObB5uVxFyNZFxZJKrJmqkEHWI+elEqQR/7KnGtwgyN4TNnVGdbyRUUZ8eTztGal5VHIDwYdKxIbjDb1x+xz/elCShcHr4K2QhG+cefp1hj6GFg8BSLF83Wk5U20Cm5V6G0F3Vjk4yNDc7IQB6OfvEDsD8OEov4xBG51D7pw6ukFrw/FrlHBbR+KV6We8t7pJ5/vzFll1tZKcki4PoOXcu/DzmhEVVb0DoVRcB53sbxpU0G5aT0hRH2rhs1jI0yitSzISqFOTNCb7wm3CQoA2ZGndx4+DLaoKjOb/9RFlRyk2FWpM1QGAPGMbJbDeW1JrZmBTsWQ6vTr6U+JdCZA2ZxEXIsugpzbkbMMnisW8m+ddoYJm2TJTvYI8XX6bLtC6T6dEM0oFPbJkjcYdW6bemsaMm0+evZUdREs7E435jDXEoJEP0LOufTluGYcstrTqcwKtSwM5OKK9qH27WNaWcybYrKw8tA0RBUf1jDc8ChHiKXRtiUQ3JxKzK2qLnlpBYLo/0Kyy0tYP7xK1lhxaJvMks8igH/jOuyjqLL0MmOs9EnCGZayJD/UQcu84XgDQKmVxk2zFUVhol7HlcRgpMisVaSawWhpnZtPFAeV+rpJgYAR8g4NjhZ7d9QGuHTdrxmGhHZcEyTqblMx4Kx4UVdWKzvHgaFjFFYag2w"
}
r = requests.post(url, json=payload, headers=headers)
print(r.json())
```

  
  

```go
package main

    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)
