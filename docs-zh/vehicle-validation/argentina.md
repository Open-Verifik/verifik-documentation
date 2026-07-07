---
id: argentina
title: 🇦🇷 阿根廷 — 车辆信息
description: 通过车牌查询阿根廷车辆信息。
slug: /vehicle-validation/argentina
---

# 🇦🇷 阿根廷 — 车辆信息

阿根廷车辆信息服务可通过车牌获取国内登记车辆的详细信息，返回包括品牌、车型、年份、发动机规格及登记信息在内的全面数据。

### 端点

```
GET https://api.verifik.co/v2/ar/vehicle
```

通过车牌（**`plate`**）查询阿根廷车辆，返回车辆详情与登记信息，用于 **车辆核验** 与 **合规**。

### 相关阿根廷车辆服务

- [阿根廷 车辆 v3](/verifik-zh/vehicle-validation/argentina/vehicle-v3) 返回车辆标识符、有效保单状态及技术参数表数据（如有）。
- [布宜诺斯艾利斯 — 交通违章](/verifik-zh/vehicle-validation/argentina/buenos-aires-traffic-infractions) 按车牌查询交通违章记录。
- [布宜诺斯艾利斯 — 技术检验](/verifik-zh/vehicle-validation/argentina/buenos-aires-technical-inspection) 查询 VTV 技术检验历史。
- [阿根廷 RTO](/verifik-zh/vehicle-validation/argentina/rto) 查询 RTO 检验记录。

### 请求头

| 名称          | 取值                 |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### 参数

| 名称   | 类型   | 必填 | 描述                                    | 示例    |
| ------ | ------ | ---- | --------------------------------------- | ------- |
| plate  | String | 是 | Mercosur 格式 `AA-123-BB`（以 `AA123BB` 发送，不含空格或句点）。 | `AA123BB` |

### 请求

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript">

```javascript
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/ar/vehicle',
  params: {plate: 'AA123BB'},
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
    "plate" => "AA123BB"
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
params = {"plate": "AA123BB"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
```

  </TabItem>
</Tabs>

### 响应

<Tabs>
  <TabItem value="200" label="200">

```json
{
  "data": {
    "brand": "HERMANN",
    "codeRegistrySectional": "2097",
    "isPlateMercosur": "true",
    "model": "FURGON",
    "plate": "AA123BB",
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


## 用例

- **保险**：用于确认车辆详情
- **经销商**：购车前验证车辆信息
- **车队管理**：管理公司车辆信息
- **合规**：确认登记与名义
- **尽职调查**：交易前确认车辆信息
