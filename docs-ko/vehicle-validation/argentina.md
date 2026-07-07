---
id: argentina
title: 🇦🇷 아르헨티나 — 차량 정보
description: 번호판으로 아르헨티나 차량 정보를 조회합니다.
slug: /vehicle-validation/argentina
---

# 🇦🇷 아르헨티나 — 차량 정보

아르헨티나 차량 정보 서비스는 번호판으로 국내 등록 차량의 상세 정보를 제공합니다. 제조사, 모델, 연식, 엔진 사양, 등록 정보 등 포괄적인 데이터를 반환합니다.

### 엔드포인트

```
GET https://api.verifik.co/v2/ar/vehicle
```

번호판(**`plate`**)으로 아르헨티나 차량을 조회합니다. 차량 상세 및 등록 정보를 반환하여 **차량 검증** 및 **컴플라이언스**에 활용할 수 있습니다.

### 관련 아르헨티나 차량 서비스

- [아르헨티나 차량 v3](/verifik-ko/vehicle-validation/argentina/vehicle-v3)는 차량 식별자, 활성 보험 상태 및 기술 시트 데이터(가능한 경우)를 반환합니다.
- [부에노스아이레스 — 교통 위반](/verifik-ko/vehicle-validation/argentina/buenos-aires-traffic-infractions)은 번호판으로 교통 위반 기록을 조회합니다.
- [부에노스아이레스 — 기술 검사](/verifik-ko/vehicle-validation/argentina/buenos-aires-technical-inspection)는 VTV 기술 검사 이력을 조회합니다.
- [아르헨티나 RTO](/verifik-ko/vehicle-validation/argentina/rto)는 RTO 검사 기록을 조회합니다.

### 헤더

| 이름          | 값                 |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

### 매개변수

| 이름   | 형식   | 필수 | 설명                                    | 예시    |
| ------ | ------ | ---- | --------------------------------------- | ------- |
| plate  | String | 예 | 조회할 번호판(공백 또는 마침표 없음). | `ABC123` |

### 요청

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

### 응답

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


## 사용 사례

- **보험**: 차량 상세 확인
- **딜러**: 구매 전 차량 정보 검증
- **플리트 관리**: 회사 차량 정보 관리
- **컴플라이언스**: 등록 및 명의 확인
- **실사**: 거래 전 차량 정보 확인
