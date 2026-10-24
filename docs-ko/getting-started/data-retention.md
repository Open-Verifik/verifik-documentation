---
id: data-retention
title: 데이터 보존
description: Verifik가 문서 이미지, 추출 필드, 얼굴 이미지를 보관하고 마스킹하고 삭제하는 방식.
slug: /getting-started/data-retention
---

# 데이터 보존

계정, 프로젝트, 프로젝트 플로우 설정이 문서 이미지, 저장된 추출 필드, 얼굴 이미지, 문서 라이브니스 이미지를 Verifik가 얼마나 보관하는지 정합니다. 정책은 새 레코드가 만들어질 때 찍힙니다. 이후의 변경은 이미 있는 레코드를 그대로 둡니다.

이미지가 삭제되어도 청구 기록, 크레딧 차감, 사용 이력은 남습니다.

## 모드

| 모드 | 효과 |
| --- | --- |
| `store` | 레코드를 보관합니다. `retentionHours`가 0보다 크면 그 시간 뒤에 삭제 대상이 됩니다. 생략하면 기한 없이 보관합니다. `retentionHours`는 SmartEnroll에서도 적용됩니다. |
| `ephemeral` | 웹훅이 있으면 웹훅 보관 시간 동안 보관한 뒤 삭제 대상이 됩니다. |
| `none` | 웹훅 보관 시간이 지나면 보관하지 않습니다. 이 모드의 얼굴 이미지는 문서와 셀피 비교가 끝날 수 있도록 보관 시간이 끝날 때까지 남고, 그 뒤에 제거됩니다. 이 모드의 문서 라이브니스 이미지는 저장되지 않습니다. |

## 적용 유형

| 키 | 대상 |
| --- | --- |
| `documentImages` | 문서 검증의 앞면과 뒷면 사진. |
| `ocrExtraction` | 그 검증에 저장된 추출 결과. |
| `faceImages` | 셀피와 문서 얼굴 이미지. |
| `documentLiveness` | 문서 라이브니스 이미지. `none`이면 저장되지 않습니다. |

정책의 모드는 자기 모드가 없는 모든 적용 유형에 쓰입니다. `livenessResults`와 `apiResponseLogs`는 거부됩니다.

## 이 정책 밖

- Smart Access가 다시 온 사람을 맞출 때 쓰는 생체 템플릿과 얼굴 컬렉션
- Human Auth 암호화 자격 증명, 영지식 산출물, 라이브니스 영상
- Human Auth 자격 증명의 저장 위치
- 보존 스탬프가 생기기 전에 만들어진 문서 검증과 신원 이미지

호스팅된 문서 이미지는 비공개입니다. `url`과 `backUrl`은 한 시간 뒤 만료되는 `https` 링크입니다. `data:` URI가 아닙니다.

## 우선순위

더 엄격한 설정은 아래 단계에서 느슨해질 수 없습니다. `none`이 `ephemeral`보다 엄격하고, `ephemeral`이 `store`보다 엄격합니다.

1. **계정.** 기본 정책입니다. 설정이 없으면 모든 적용 유형은 기한 없는 `store`이고, 웹훅 보관은 24시간입니다.
2. **프로젝트.** `dataRetention`은 새 모드가 같거나 더 엄격할 때 계정의 해당 필드를 바꿉니다.
3. **플로우.** 프로젝트에 대해 같은 규칙입니다.

프로젝트가 없는 스캔은 계정 정책을 사용합니다. 기본값은 `store`입니다.

## 웹훅 보관

`webhookHoldHours`는 24에서 72 사이의 정수입니다. 기본값은 24입니다.

SmartEnroll에서 `none`과 `ephemeral` 이미지는 `onboarding_app_registration_completed` 또는 `onboarding_app_registration_completed_without_kyc`가 전달된 뒤에만 삭제 대상이 됩니다. 삭제 시각은 그 전달과 보관 종료 중 더 늦은 쪽입니다. 같은 등록의 이전 웹훅은 삭제를 시작하지 않습니다.

저장된 웹훅 본문은 전달 뒤에 가려집니다.

## 삭제

| 동작 | 필드 |
| --- | --- |
| 제거 | 이미지 파일. `url`, `backUrl`, 파일 목록이 비워집니다. |
| 마스킹 | 행에 남는 개인 필드와 저장된 추출 결과. 마지막 4글자를 남깁니다. |
| 유지 | 사용량 집계를 위한 검증 행(상태, 유형, `createdAt`). |

스캔의 HTTP 응답에는 전체 추출 결과가 있습니다. 저장된 값만 마스킹됩니다. 청구와 사용 이력은 남고, 차감은 되돌리지 않습니다.

## 수동 삭제

`allowManualDelete`가 true일 때:

```
DELETE https://api.verifik.co/v2/document-validations/{id}/files
DELETE https://api.verifik.co/v2/app-registrations/{id}/data
POST https://api.verifik.co/v2/data-retention/erase
```

나머지 API와 같은 인증 헤더가 필요합니다. `allowManualDelete`가 false이면 호출은 거부됩니다.

## 실행 시점

레코드는 `retention.purgeAfter`에 삭제 대상이 됩니다. SmartEnroll의 `none` 또는 `ephemeral` 이미지는 종료 웹훅 전달과 `webhookHoldHours` 종료 중 더 늦은 시각입니다. 예약된 삭제는 약 15분마다 대상 레코드를 제거합니다.

정책은 저장된 뒤에 만들어진 레코드에 적용됩니다. 이미 있는 레코드는 자기 스탬프를 유지합니다.

## Smart Access와 Human Auth

`faceImages`가 `none`이면 셀피는 문서와 셀피 비교를 위해 보관 시간이 끝날 때까지 남습니다. Smart Access 생체 템플릿은 남습니다. `documentLiveness`가 `none`이면 그 이미지는 저장되지 않습니다. 라이브니스 영상, 영지식 산출물, Human Auth 암호화 자격 증명은 자체 규칙을 따릅니다.

## `dataRetention` 객체

`PUT /v3/projects/{id}`로 보냅니다. `null`은 계정 정책을 다시 상속합니다. 프로젝트는 계정보다 느슨한 모드를 둘 수 없습니다. 플로우의 같은 형태는 같거나 더 엄격할 때 프로젝트를 대체합니다.

```json
{
  "dataRetention": {
    "mode": "none",
    "webhookHoldHours": 24,
    "allowManualDelete": true,
    "types": {
      "documentImages": { "mode": "none" },
      "ocrExtraction": { "mode": "none" },
      "faceImages": { "mode": "store", "retentionHours": 72 },
      "documentLiveness": { "mode": "none" }
    }
  }
}
```
