---
id: smart-batch
title: SmartBatch
description: 카탈로그 조회를 배치로 실행합니다 — 백그라운드 Async 또는 단계 체인 Sync. ai.verifik.co 또는 async.verifik.co
slug: /smart-batch
---

import { Layers, Zap, RefreshCw, Bell, FileSpreadsheet, Globe } from 'lucide-react';

# SmartBatch

**SmartBatch**는 하나 또는 여러 카탈로그 조회를 배치로 실행합니다. 엔드포인트를 고르고, 입력 필드를 매핑하고, 배치 실행 방식을 선택합니다. Smart-Agent UI([ai.verifik.co](https://ai.verifik.co)) 또는 API([async.verifik.co](https://async.verifik.co))에서 사용할 수 있습니다.

**배치 구성**은 재사용 가능한 레시피입니다. 이름, 국가, 단계(카탈로그 기능), 병합 전략, 실행 모드, 선택적 알림이 포함됩니다. 파일을 업로드하거나 조회를 큐에 넣을 때마다 SmartBatch는 그 레시피로 배치를 만듭니다.

## 개요

SmartBatch는 이미 사용하는 SmartCheck 카탈로그 위에 있습니다. Sync는 현재 요청에서 기다립니다. Async는 즉시 응답하고 탭을 닫은 뒤에도 계속 처리합니다. 구성이 **Async**이면 파일 배치와 한 행 API 호출이 같은 워커를 공유합니다.

백엔드에서 카탈로그 경로를 큐로 호출하려면 [엔드포인트를 큐로 호출 (async)](/verifik-ko/smart-batch/async-queue)를 보세요.

## 주요 기능

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Zap size={20} style={{display: 'inline', marginRight: '8px'}} />Async</h3>
      </div>
      <div className="card__body">
        <p>백그라운드에서 실행됩니다. 이 탭을 닫아도 배치는 계속됩니다.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><RefreshCw size={20} style={{display: 'inline', marginRight: '8px'}} />Sync</h3>
      </div>
      <div className="card__body">
        <p>서버에서 단계를 이어서 실행합니다. 다음 단계가 이전 결과를 써야 할 때 적합합니다.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Layers size={20} style={{display: 'inline', marginRight: '8px'}} />카탈로그 단계</h3>
      </div>
      <div className="card__body">
        <p>카탈로그 URL이 있는 SmartCheck 엔드포인트를 검증 단계로 추가합니다.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Bell size={20} style={{display: 'inline', marginRight: '8px'}} />알림</h3>
      </div>
      <div className="card__body">
        <p>웹훅 URL과 완료 이메일은 구성에 저장됩니다. 쿼리 파라미터가 아닙니다.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><FileSpreadsheet size={20} style={{display: 'inline', marginRight: '8px'}} />파일 또는 API</h3>
      </div>
      <div className="card__body">
        <p>스프레드시트를 업로드하거나 <code>type=queue</code>로 한 행을 큐에 넣습니다. 둘 다 같은 Async 워커를 재사용합니다.</p>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3><Globe size={20} style={{display: 'inline', marginRight: '8px'}} />대시보드</h3>
      </div>
      <div className="card__body">
        <p>배치 대시보드에서 진행률, 시도, 행당 비용, 연결된 웹훅을 확인합니다.</p>
      </div>
    </div>
  </div>
</div>

## Async vs Sync

마법사와 대시보드는 제품 라벨 **Async**와 **Sync**를 사용합니다.

| 실행 모드 | 동작 | 사용 시점 |
| --- | --- | --- |
| **Async** (기본값) | 배치가 백그라운드에서 실행됩니다. Smart-Agent 탭을 닫아도 됩니다. 워커가 각 행을 가져오고, 기능 URL을 호출하고, 시도를 기록합니다. | 즉시 응답이 필요한 조회, 큰 파일, 웹훅 흐름. |
| **Sync** | 서버가 단계를 체인으로 실행하고 각 결과를 기다립니다. 이후 단계는 이전 출력을 사용할 수 있습니다. | 2단계가 1단계 결과에 의존하는 다중 단계 레시피. |

크레딧은 기능이 실제로 실행될 때 차감됩니다(Async는 워커 호출, Sync는 단계 호출). 행을 큐에 넣을 때는 차감되지 않습니다.

:::note API `type` 값
`async.verifik.co`에서는 `type`을 생략하거나 `type=sync`를 보내 결과를 기다립니다. `type=queue`를 보내 큐에 넣습니다. UI에서는 `queue`나 `featureRunner`를 전달하지 않습니다.
:::

## ai.verifik.co에서 구성 만들기

[https://ai.verifik.co](https://ai.verifik.co)를 열고 **Smart Batch**에서 **생성**을 선택합니다.

### 1. 기본 정보

구성 이름, 설명, 국가를 입력합니다. **실행 모드**를 선택합니다.

- **Async** — 백그라운드에서 실행됩니다. 이 탭을 닫아도 배치는 계속됩니다.
- **Sync** — 서버에서 단계를 이어서 실행합니다. 다음 단계가 이전 결과를 써야 할 때 적합합니다.

기본값은 Async입니다.

### 2. 엔드포인트 선택

카탈로그를 검색하고 필요한 검증 단계를 추가합니다. 각 단계는 URL이 있는 SmartCheck 기능입니다(신원, 가입, 차량 등). 카탈로그 URL이 없는 기능(passwordless, PDF 생성기)은 배치 단계로 실행할 수 없습니다.

### 3. 매개변수 검토

각 단계의 필수 매개변수를 확인합니다. 해당 필드는 업로드한 파일 헤더(또는 한 행을 큐에 넣을 때 API `inputData`)에서 매핑됩니다.

### 4. 검토 및 생성

요약을 확인합니다. 선택적으로 **알림**을 엽니다.

- **웹훅 URL** — 행 및 배치 완료 이벤트를 이 주소로 POST합니다. 계속하기 전에 URL을 테스트하세요.
- **완료 시 이메일** — 배치가 끝나면 메시지를 받을 선택적 주소입니다.

구성을 저장합니다. 알림은 구성에 남습니다. 이후 `type=queue` 호출은 새 구성을 만들지 않고 일치하는 Async 구성(`Queue …`)을 재사용합니다.

## 배치 실행 및 확인

구성에서 파일을 업로드하거나 실행을 시작할 수 있습니다. **대시보드**에는 다음이 표시됩니다.

- 행별 상태와 진행률
- 각 행의 시도 기록
- 행당 비용
- 연결된 웹훅(클릭하면 Smart Monitor로 이동)

연결된 배치 구성은 Smart Monitor의 웹훅 목록과 상세에도 나타납니다.

## 파일 배치와 한 행 API 호출

| 시작 방법 | 호스트 | 결과 |
| --- | --- | --- |
| Smart-Agent에서 파일 업로드 | [ai.verifik.co](https://ai.verifik.co) | N행 배치 |
| 카탈로그 경로에 `type=queue`로 `GET`/`POST` | [async.verifik.co](https://async.verifik.co) | `202`와 한 행 배치 |

구성이 **Async**이면 두 경로 모두 같은 백그라운드 워커를 사용합니다. API A–Z는 [엔드포인트를 큐로 호출 (async)](/verifik-ko/smart-batch/async-queue)를 보세요.

## 관련

- [엔드포인트를 큐로 호출 (async)](/verifik-ko/smart-batch/async-queue)
- [페루 — 시민 (DNI)](/verifik-ko/identity/peru)
