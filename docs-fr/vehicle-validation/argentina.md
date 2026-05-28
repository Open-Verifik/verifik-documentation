---
id: argentina
title: 🇦🇷 Argentine — véhicule
description: Consultez les informations de véhicules en Argentine à partir de la plaque d'immatriculation.
slug: /vehicle-validation/argentina
---

# 🇦🇷 Argentine — véhicule

Le service d'information véhicule en Argentine fournit des détails sur les véhicules immatriculés via leur plaque, incluant marque, modèle, année, moteur et données d'enregistrement.

### Point d'accès

```
GET https://api.verifik.co/v2/ar/vehicle
```

Consultez un véhicule argentin avec la **`plate`**. Retourne les détails et l'enregistrement pour la **vérification véhicule** et la **conformité**.

### En-têtes

| Nom           | Valeur             |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### Paramètres

| Nom    | Type   | Requis | Description                             | Exemple |
| ------ | ------ | ---- | --------------------------------------- | ------- |
| plate  | String | Oui | Plaque à consulter, sans espaces ni points. | `ABC123` |

### Requête

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

### Réponse

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


## Cas d'usage

- **Assurance** : vérifier les détails du véhicule
- **Concessionnaires** : valider les informations avant achat
- **Gestion de flotte** : gérer les informations des véhicules
- **Conformité** : confirmer immatriculation et titulaire
- **Due diligence** : vérifier les informations avant transaction
