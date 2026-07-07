---
id: argentina
title: 🇦🇷 アルゼンチン — 車両情報
description: ナンバープレートを用いてアルゼンチンの車両情報を照会します。
slug: /vehicle-validation/argentina
---

# 🇦🇷 アルゼンチン — 車両情報

アルゼンチン車両情報サービスは、ナンバープレートを用いて国内登録車両の詳細を取得します。メーカー、モデル、年式、エンジン仕様、登記情報などを含む包括的なデータを返します。

### エンドポイント

```
GET https://api.verifik.co/v2/ar/vehicle
```

ナンバープレート（**`plate`**）でアルゼンチンの車両を照会します。車両詳細・登録情報などを返し、**車両検証**や **コンプライアンス**に利用できます。

### 関連アルゼンチン車両サービス

- [アルゼンチン 車両 v3](/verifik-ja/vehicle-validation/argentina/vehicle-v3) は車両識別子、アクティブ保険の状態、技術シートデータ（利用可能な場合）を返します。
- [ブエノスアイレス — 交通違反](/verifik-ja/vehicle-validation/argentina/buenos-aires-traffic-infractions) はナンバープレートで交通違反記録を照会します。
- [ブエノスアイレス — 技術検査](/verifik-ja/vehicle-validation/argentina/buenos-aires-technical-inspection) は VTV 技術検査履歴を照会します。
- [アルゼンチン RTO](/verifik-ja/vehicle-validation/argentina/rto) は RTO 検査記録を照会します。

### ヘッダー

| 名前          | 値                 |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### パラメーター

| 名前   | 型     | 必須 | 説明                                    | 例      |
| ------ | ------ | ---- | --------------------------------------- | ------- |
| plate  | String | はい | 照会するナンバープレート（スペースや句点なし）。 | `ABC123` |

### リクエスト

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

### レスポンス

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


## ユースケース

- **保険**: 車両詳細の確認に利用
- **ディーラー**: 購入前の車両情報検証
- **フリート管理**: 社有車の情報管理
- **コンプライアンス**: 登録・名義の確認
- **デューデリジェンス**: 取引前の車両情報確認
