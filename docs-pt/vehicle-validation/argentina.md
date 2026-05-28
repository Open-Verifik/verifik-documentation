---
id: argentina
title: 🇦🇷 Argentina — veículo
description: Consulte informações de veículos na Argentina pela placa.
slug: /vehicle-validation/argentina
---

# 🇦🇷 Argentina — veículo

O serviço de informações de veículos na Argentina fornece detalhes de veículos registrados pela placa, incluindo marca, modelo, ano, motor e dados de registro.

### Ponto de acesso

```
GET https://api.verifik.co/v2/ar/vehicle
```

Consulte um veículo argentino com **`plate`**. Retorna detalhes e registro para **verificação de veículos** e **conformidade**.

### Cabeçalhos

| Nome          | Valor              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Parâmetros

| Nome   | Tipo   | Obrigatório | Descrição                               | Exemplo |
| ------ | ------ | ---- | --------------------------------------- | ------- |
| plate  | String | Sim | Placa a consultar, sem espaços ou pontos. | `ABC123` |

### Requisição

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/vehicle',
  params: {plate: 'AE834AM'},
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <your_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

  </TabItem>
  <TabItem value="php" label="PHP">

```php
<?php
$ch = curl_init("https://api.verifik.co/v2/ar/vehicle");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "Authorization: Bearer " . getenv("VERIFIK_TOKEN")
]);
$query = http_build_query([
    "plate" => "AE834AM"
]);
curl_setopt($ch, CURLOPT_URL, "https://api.verifik.co/v2/ar/vehicle?".$query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);
echo $response;
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
import os, requests

url = "https://api.verifik.co/v2/ar/vehicle"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"plate": "AE834AM"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  </TabItem>
</Tabs>

### Resposta

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "brand": "HERMANN",
    "codeRegistrySectional": "2097",
    "isPlateMercosur": "true",
    "model": "FURGON",
    "plate": "AE834AM",
    "recordAddress": "AV. CORRIENTES 2063  PISO: 1 DPTO: 35",
    "registrationDenomination": "CAPITAL FEDERAL N° 097",
    "registrationLocality": "CABA",
    "registrationProvince": "",
    "type": "MOTOVEHICULO",
    "version": "S.FP.3E.98 2+1",
    "year": "2021"
  },
  "signature": {
    "dateTime": "October 10, 2025 6:21 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "2SJOD"
}
```

  </TabItem>
  <TabItem value="404" label="404">

```json
{
  "code": "NotFound",
  "message": "Record not found."
}
```

  </TabItem>
  <TabItem value="409" label="409">

```json
{
  "code": "MissingParameter",
  "message": "missing plate\n"
}
```

  </TabItem>
  <TabItem value="500" label="500">

```json
{
  "code": "InternalServerError",
  "message": "Server error."
}
```

  </TabItem>
</Tabs>


## Casos de uso

- **Seguros**: confirmar detalhes do veículo
- **Concessionárias**: validar informações antes da compra
- **Gestão de frota**: gerenciar informações de veículos
- **Conformidade**: confirmar registro e titularidade
- **Due diligence**: verificar informações antes da transação
