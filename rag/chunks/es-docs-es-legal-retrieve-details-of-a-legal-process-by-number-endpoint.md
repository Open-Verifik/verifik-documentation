---
id: "es-docs-es-legal-retrieve-details-of-a-legal-process-by-number-endpoint"
title: "Recuperar Detalles de un Proceso Legal por Número — Endpoint"
sourcePath: "docs-es/legal/retrieve-details-of-a-legal-process-by-number.mdx"
locale: "es"
category: "legal"
tags:
  - "co"
  - "legal"
endpoint: "/v2/co/rama/proceso"
sourceAnchor: "Endpoint"
slug: "/legal/recuperar-detalles-proceso-legal-por-numero"
url: "https://docs.verifik.co/verifik-es/legal/recuperar-detalles-proceso-legal-por-numero"
---

# Recuperar Detalles de un Proceso Legal por Número
**API path(s):** /v2/co/rama/proceso

## Endpoint

### Endpoint

```
GET https://api.verifik.co/v2/co/rama/proceso
```

Agregue **`processNumber`** como **último segmento de ruta** (por ejemplo `GET …/rama/proceso/11001400301220098008000`). Suele ser el **`llaveProceso`** devuelto por [Procesos legales colombianos](/verifik-es/legal/procesos-judiciales-colombianos). La respuesta incluye metadatos del proceso, sujetos (`subjects`) y actuaciones (`actions`).

### Encabezados

| Name | Value |
| --- | --- |
| Accept | `application/json` |
| Authorization | `Bearer ` |

### Parámetros

| name | type | required | description |
| --- | --- | --- | --- |
| `processNumber` | string | sí | Parámetro de ruta: id del proceso judicial (mín. 7 caracteres, sin espacios). Suele copiarse de `llaveProceso` en el listado. |

### Solicitud

  

```javascript

const processNumber = "18738473";

const { data } = await axios.get(
	`https://api.verifik.co/v2/co/rama/proceso/${processNumber}`,
	{
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${process.env.VERIFIK_TOKEN}`,
		},
	},
);
console.log(data);
```

  
  

```python

process_number = "18738473"
url = f"https://api.verifik.co/v2/co/rama/proceso/{process_number}"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}",
}
r = requests.get(url, headers=headers)
print(r.json())
```

  
  

```php
request(
  'GET',
  "https://api.verifik.co/v2/co/rama/proceso/{$processNumber}",
  [
    'headers' => [
      'Accept' => 'application/json',
      'Authorization' => 'Bearer ' . getenv('VERIFIK_TOKEN'),
    ],
  ],
);

echo $response->getBody();
```

  
  

```swift

let processNumber = "123456789"
let url = URL(string: "https://api.verifik.co/v2/co/rama/proceso/\(processNumber)")!
var request = URLRequest(url: url)
request.httpMethod = "GET"
request.setValue("application/json", forHTTPHeaderField: "Accept")
request.setValue("Bearer \(ProcessInfo.processInfo.environment["VERIFIK_TOKEN"] ?? "")", forHTTPHeaderField: "Authorization")

let task = URLSession.shared.dataTask(with: request) { data, _, _ in
  if let data = data { print(String(data: data, encoding: .utf8) ?? "") }
}
task.resume()
```
