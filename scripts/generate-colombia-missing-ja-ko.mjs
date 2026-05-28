#!/usr/bin/env node
/**
 * One-off generator: missing Colombia vehicle + cert docs for docs-ja / docs-ko.
 * Run from repo root: node scripts/generate-colombia-missing-ja-ko.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const JA = {
	endpoint: "### エンドポイント",
	serviceUrl: "### サービスURL",
	headers: "### ヘッダー",
	params: "### パラメーター",
	request: "### リクエスト",
	response: "### レスポンス",
	notes: "### 注意事項",
	name: "名前",
	value: "値",
	type: "型",
	required: "必須",
	desc: "説明",
	yes: "はい",
};

const KO = {
	endpoint: "### 엔드포인트",
	serviceUrl: "### 엔드포인트",
	headers: "### 헤더(Headers)",
	params: "### 매개변수(Parameters)",
	request: "### 요청(Request)",
	response: "### 응답(Response)",
	notes: "### 비고",
	name: "이름",
	value: "값",
	type: "형식",
	required: "필수",
	desc: "설명",
	yes: "예",
};

const cloneFrontMatter = (source, meta) => {
	const fmEnd = source.indexOf("---", 3);
	const body = source.slice(fmEnd + 3).replace(/^\n/, "");
	const fm = `---
id: ${meta.id}
title: ${meta.title}
description: ${meta.description}${meta.sidebar_label ? `\nsidebar_label: ${meta.sidebar_label}` : ""}
slug: ${meta.slug}
---

`;
	return fm + body;
};

const patchFrontMatter = (content, meta) => {
	return content.replace(/^---[\s\S]*?---\n/, () =>
		`---
id: ${meta.id}
title: ${meta.title}
description: ${meta.description}${meta.sidebar_label ? `\nsidebar_label: ${meta.sidebar_label}` : ""}
slug: ${meta.slug}
---
`
	);
};

const read = (localeDir, rel) => fs.readFileSync(path.join(ROOT, localeDir, rel), "utf8");
const write = (localeDir, rel, content) => {
	const dest = path.join(ROOT, localeDir, rel);
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	fs.writeFileSync(dest, content);
};

/** @type {Array<{ rel: string, ja: object, ko: object, build?: (locale: 'ja'|'ko') => string }>} */
const SPECS = [
	{
		rel: "vehicle-validation/colombia/bogota-taxi-drivers-by-control-card.mdx",
		ja: {
			id: "vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
			title: "ボゴタ — タクシー運転者（管理カード）",
			description: "管理カード番号でボゴタのタクシー運転者および運行カード情報を取得します。",
			sidebar_label: "ボゴタ — タクシー（管理カード）",
			slug: "/vehicle-validation/colombia/bogota-taxi-drivers-by-control-card",
		},
		ko: {
			id: "vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
			title: "🇨🇴 보고타 — 택시 운전자（관리 카드）",
			description: "관리 카드 번호로 보고타 택시 운전자 및 운행 카드 정보를 조회합니다.",
			sidebar_label: "보고타 — 택시（관리 카드）",
			slug: "/vehicle-validation/colombia/bogota-taxi-drivers-by-control-card",
		},
		build: (locale) => {
			const L = locale === "ja" ? JA : KO;
			const intro =
				locale === "ja"
					? "管理カード番号（`controlCardNumber`）を指定して、ボゴタのタクシー運転者および運行カードの詳細を取得します。"
					: "관리 카드 번호(`controlCardNumber`)로 보고타 택시 운전자 및 운행 카드 세부 정보를 조회합니다.";
			const paramDesc =
				locale === "ja"
					? "照会する管理カード番号。"
					: "조회할 관리 카드 번호.";
			return `---
id: vehicle-validation-colombia-bogota-taxi-drivers-by-control-card
title: ${locale === "ja" ? "ボゴタ — タクシー運転者（管理カード）" : "🇨🇴 보고타 — 택시 운전자（관리 카드）"}
description: ${locale === "ja" ? "管理カード番号でボゴタのタクシー運転者および運行カード情報を取得します。" : "관리 카드 번호로 보고타 택시 운전자 및 운행 카드 정보를 조회합니다."}
sidebar_label: ${locale === "ja" ? "ボゴタ — タクシー（管理カード）" : "보고타 — 택시（관리 카드）"}
slug: /vehicle-validation/colombia/bogota-taxi-drivers-by-control-card
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

${L.endpoint}

\`\`\`
GET https://api.verifik.co/v2/co/bogota/taxi-drivers/card/{controlCardNumber}
\`\`\`

${intro}

${L.headers}

| ${L.name} | ${L.value} |
| --- | --- |
| Accept | \`application/json\` |
| Authorization | \`Bearer <token>\` |

${L.params}

| ${L.name} | ${L.type} | ${L.required} | ${L.desc} |
| --- | --- | --- | --- |
| \`controlCardNumber\` | string | ${L.yes} | ${paramDesc} |

${L.request}

<Tabs>
  <TabItem value="node" label="Node.js">

\`\`\`javascript
import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/bogota/taxi-drivers/card/3002873", {
  headers: {
    Accept: "application/json",
    Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\`,
  },
});
console.log(data);
\`\`\`

  </TabItem>
  <TabItem value="python" label="Python">

\`\`\`python
import os, requests

url = "https://api.verifik.co/v2/co/bogota/taxi-drivers/card/3002873"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
r = requests.get(url, headers=headers)
print(r.json())
\`\`\`

  </TabItem>
</Tabs>

${L.response}

<Tabs>
  <TabItem value="200" label="200">

\`\`\`json
{
  "data": {
    "arl": "POSITIVA COMPAÑÍA DE SEGUROS",
    "bloodType": "O+",
    "companyName": "TAX EXPRESS S.A.",
    "companyNit": "8001749098",
    "controlCardNumber": "3002873",
    "controlCardStatus": "0",
    "driverDTO": {
      "bloodGroup": null,
      "foto": null,
      "person": {
        "address": null,
        "birthDate": null,
        "cellPhone": null,
        "documentIssueDate": null,
        "firstName": "ADINAEL",
        "identificationNumber": "1232891942",
        "identificationType": null,
        "identificationTypeDesc": null,
        "lastName": "SANCHEZ  MELO"
      },
      "photoUri": null,
      "rhFactor": null
    },
    "effectiveDate": "05-04-2026",
    "eps": "SANITAS",
    "fixedPhoneType": false,
    "foto": "",
    "issueDate": "06-03-2026",
    "operationCardExpirationDate": "19-02-2027",
    "operationCardNumber": "2148724",
    "paymentMethodName": "PLATAFORMA TECNÓLOGICA",
    "plate": "LSZ913",
    "qualityFactor": false,
    "rtmExpirationDate": "18-04-2026",
    "rtmNumber": "1",
    "soatExpirationDate": "16-04-2026",
    "soatNumber": "408004743304000",
    "validityDate": "16-04-2026"
  },
  "signature": {
    "dateTime": "March 25, 2026 12:11 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "FYG0N"
}
\`\`\`

  </TabItem>
  <TabItem value="404" label="404">

\`\`\`json
{
  "code": "NotFound",
  "message": "No_result_found_for_the_indicated_control_card"
}
\`\`\`

  </TabItem>
  <TabItem value="409" label="409">

\`\`\`json
{
  "code": "MissingParameter",
  "message": "missing controlCardNumber\\n"
}
\`\`\`

  </TabItem>
</Tabs>
`;
		},
	},
	{
		rel: "vehicle-validation/colombia/general-query-of-simit-by-license-plate.mdx",
		sourceJa: "vehicle-validation/colombia/simit-general-query-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/simit-general-query-by-plate.mdx",
		ja: {
			id: "vehicle-validation-colombia-general-query-of-simit-by-license-plate",
			title: "SIMIT — ナンバープレートによる一般照会",
			description: "ナンバープレート別の SIMIT 包括的データ照会サービス。",
			sidebar_label: "SIMIT — プレート一般照会",
			slug: "/vehicle-validation/colombia/general-query-of-simit-by-license-plate",
		},
		ko: {
			id: "vehicle-validation-colombia-general-query-of-simit-by-license-plate",
			title: "🇨🇴 SIMIT — 번호판 기반 일반 조회",
			description: "번호판별 SIMIT 종합 데이터 서비스.",
			sidebar_label: "SIMIT — 번호판 일반 조회",
			slug: "/vehicle-validation/colombia/general-query-of-simit-by-license-plate",
		},
	},
	{
		rel: "vehicle-validation/colombia/general-query-of-simit-by-identification-document.mdx",
		sourceJa: "vehicle-validation/colombia/simit-general-query-by-document.mdx",
		sourceKo: "vehicle-validation/colombia/simit-general-query-by-document.mdx",
		ja: {
			id: "vehicle-validation-colombia-general-query-of-simit-by-identification-document",
			title: "SIMIT — 身分証明書による一般照会",
			description: "身分証明書別の SIMIT 包括的データ照会サービス。",
			sidebar_label: "SIMIT — 証明書一般照会",
			slug: "/vehicle-validation/colombia/general-query-of-simit-by-identification-document",
		},
		ko: {
			id: "vehicle-validation-colombia-general-query-of-simit-by-identification-document",
			title: "🇨🇴 SIMIT — 신분증 기반 일반 조회",
			description: "신분증별 SIMIT 종합 데이터 서비스.",
			sidebar_label: "SIMIT — 신분증 일반 조회",
			slug: "/vehicle-validation/colombia/general-query-of-simit-by-identification-document",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia.mdx",
		sourceJa: "vehicle-validation/colombia/bogota-vehicle-fines.mdx",
		sourceKo: "vehicle-validation/colombia/bogota-vehicle-fines.mdx",
		ja: {
			id: "vehicle-validation-colombia-vehicle-fines-check-in-bogota-colombia",
			title: "ボゴタ — 車両反則金照会",
			description: "ボゴタ登録車両のナンバーで交通反則金・違反を照会します。",
			sidebar_label: "ボゴタ — 反則金照会",
			slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia",
		},
		ko: {
			id: "vehicle-validation-colombia-vehicle-fines-check-in-bogota-colombia",
			title: "🇨🇴 보고타 — 차량 과태료 조회",
			description: "보고타 등록 차량 번호판으로 교통 과태료 및 위반을 조회합니다.",
			sidebar_label: "보고타 — 과태료 조회",
			slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogota-colombia",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia.mdx",
		sourceJa: "vehicle-validation/colombia/bogota-vehicle-fines.mdx",
		sourceKo: "vehicle-validation/colombia/bogota-vehicle-fines.mdx",
		ja: {
			id: "vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia",
			title: "ボゴタ — 車両反則金（TTA）",
			description: "ボゴタ交通当局（TTA）経由の車両反則金照会サービス。",
			sidebar_label: "ボゴタ — 反則金（TTA）",
			slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia",
		},
		ko: {
			id: "vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia",
			title: "🇨🇴 보고타 — 차량 과태료（TTA）",
			description: "보고타 교통 당국(TTA) 경로의 차량 과태료 조회 서비스.",
			sidebar_label: "보고타 — 과태료（TTA）",
			slug: "/vehicle-validation/colombia/vehicle-fines-check-in-bogot-tta-colombia",
		},
	},
	{
		rel: "vehicle-validation/colombia/sinister-verification-fasecolda.mdx",
		sourceJa: "vehicle-validation/colombia/fasecolda-sinister-verification.mdx",
		sourceKo: "vehicle-validation/colombia/fasecolda-sinister-verification.mdx",
		ja: {
			id: "vehicle-validation-colombia-sinister-verification-fasecolda",
			title: "Fasecolda — 保険請求・事故履歴",
			description: "Fasecolda 公式データでコロンビア車両の保険事故・請求履歴を照会します。",
			sidebar_label: "Fasecolda — 請求履歴（別名）",
			slug: "/vehicle-validation/colombia/sinister-verification-fasecolda",
		},
		ko: {
			id: "vehicle-validation-colombia-sinister-verification-fasecolda",
			title: "🇨🇴 Fasecolda — 보험 청구·사고 이력",
			description: "Fasecolda 공식 데이터로 콜롬비아 차량의 보험 사고·청구 이력을 조회합니다.",
			sidebar_label: "Fasecolda — 청구 이력（별칭）",
			slug: "/vehicle-validation/colombia/sinister-verification-fasecolda",
		},
	},
	{
		rel: "vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods.mdx",
		sourceJa: "vehicle-validation/colombia/sisconmp-trainings.mdx",
		sourceKo: "vehicle-validation/colombia/sisconmp-trainings.mdx",
		ja: {
			id: "vehicle-validation-colombia-information-system-for-drivers-transporting-dangerous-goods",
			title: "SISCONMP — 危険物運搬者研修記録",
			description: "危険物運搬に関する SISCONMP 研修・受講記録を照会します。",
			sidebar_label: "SISCONMP — 危険物運搬",
			slug: "/vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods",
		},
		ko: {
			id: "vehicle-validation-colombia-information-system-for-drivers-transporting-dangerous-goods",
			title: "🇨🇴 SISCONMP — 위험물 운송자 교육 기록",
			description: "위험물 운송 관련 SISCONMP 교육·수강 기록을 조회합니다.",
			sidebar_label: "SISCONMP — 위험물 운송",
			slug: "/vehicle-validation/colombia/information-system-for-drivers-transporting-dangerous-goods",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-values-by-plate-fasecolda.mdx",
		sourceJa: "vehicle-validation/colombia/fasecolda-values-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/fasecolda-values-by-plate.mdx",
		ja: {
			id: "vehicle-values-by-plate-fasecolda",
			title: "Fasecolda — ナンバー別車両価格",
			description: "ナンバープレートで Fasecolda 車両価格・仕様情報を取得します。",
			sidebar_label: "Fasecolda — 価格（プレート）",
			slug: "/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda",
		},
		ko: {
			id: "vehicle-values-by-plate-fasecolda",
			title: "🇨🇴 Fasecolda — 번호판별 차량 가치",
			description: "번호판으로 Fasecolda 차량 가치·사양 정보를 조회합니다.",
			sidebar_label: "Fasecolda — 가치（번호판）",
			slug: "/vehicle-validation/colombia/vehicle-values-by-plate-fasecolda",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-values-by-code-fasecolda.mdx",
		sourceJa: "vehicle-validation/colombia/fasecolda-vehicle-by-code.mdx",
		sourceKo: "vehicle-validation/colombia/fasecolda-vehicle-by-code.mdx",
		ja: {
			id: "vehicle-validation-colombia-vehicle-values-by-code-fasecolda",
			title: "Fasecolda — コード別車両価格",
			description: "Fasecolda コードで車両価格・仕様情報を取得します。",
			sidebar_label: "Fasecolda — 価格（コード）",
			slug: "/vehicle-validation/colombia/vehicle-values-by-code-fasecolda",
		},
		ko: {
			id: "vehicle-validation-colombia-vehicle-values-by-code-fasecolda",
			title: "🇨🇴 Fasecolda — 코드별 차량 가치",
			description: "Fasecolda 코드로 차량 가치·사양 정보를 조회합니다.",
			sidebar_label: "Fasecolda — 가치（코드）",
			slug: "/vehicle-validation/colombia/vehicle-values-by-code-fasecolda",
		},
	},
	{
		rel: "vehicle-validation/colombia/colombian-vehicle-information-service.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		ja: {
			id: "vehicle-validation-colombia-colombian-vehicle-information-service",
			title: "RUNT — コロンビア車両情報サービス",
			description: "ナンバーと名義人証番号で RUNT 車両情報を照会します。",
			sidebar_label: "RUNT — 車両情報サービス",
			slug: "/vehicle-validation/colombia/colombian-vehicle-information-service",
		},
		ko: {
			id: "vehicle-validation-colombia-colombian-vehicle-information-service",
			title: "🇨🇴 RUNT — 콜롬비아 차량 정보 서비스",
			description: "번호판과 명의인 신분증으로 RUNT 차량 정보를 조회합니다.",
			sidebar_label: "RUNT — 차량 정보 서비스",
			slug: "/vehicle-validation/colombia/colombian-vehicle-information-service",
		},
	},
	{
		rel: "vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		ja: {
			id: "vehicle-validation-colombia-complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
			title: "RUNT — 車両履歴（プレート＋身分証）",
			description: "ナンバーと身分証で RUNT の車両履歴・技術情報を取得します。",
			sidebar_label: "RUNT — 履歴付き車両",
			slug: "/vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
		},
		ko: {
			id: "vehicle-validation-colombia-complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
			title: "🇨🇴 RUNT — 차량 이력（번호판+신분증）",
			description: "번호판과 신분증으로 RUNT 차량 이력·기술 정보를 조회합니다.",
			sidebar_label: "RUNT — 이력 포함 차량",
			slug: "/vehicle-validation/colombia/complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
		},
	},
	{
		rel: "vehicle-validation/colombia/runt-colombian-vehicle.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		ja: {
			id: "vehicle-validation-colombia-runt-colombian-vehicle",
			title: "RUNT — コロンビア車両照会",
			description: "RUNT でコロンビア登録車両の公式情報を照会します。",
			sidebar_label: "RUNT — コロンビア車両",
			slug: "/vehicle-validation/colombia/runt-colombian-vehicle",
		},
		ko: {
			id: "vehicle-validation-colombia-runt-colombian-vehicle",
			title: "🇨🇴 RUNT — 콜롬비아 차량 조회",
			description: "RUNT에서 콜롬비아 등록 차량의 공식 정보를 조회합니다.",
			sidebar_label: "RUNT — 콜롬비아 차량",
			slug: "/vehicle-validation/colombia/runt-colombian-vehicle",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehicle-by-plate.mdx",
		ja: {
			id: "vehicle-validation-colombia-vehicle-by-plate-and-identification-card-only",
			title: "RUNT — 車両（プレート＋身分証のみ）",
			description: "ナンバーと身分証のみで RUNT 車両情報を照会します。",
			sidebar_label: "RUNT — プレート+身分証",
			slug: "/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only",
		},
		ko: {
			id: "vehicle-validation-colombia-vehicle-by-plate-and-identification-card-only",
			title: "🇨🇴 RUNT — 차량（번호판+신분증）",
			description: "번호판과 신분증만으로 RUNT 차량 정보를 조회합니다.",
			sidebar_label: "RUNT — 번호판+신분증",
			slug: "/vehicle-validation/colombia/vehicle-by-plate-and-identification-card-only",
		},
	},
	{
		rel: "vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehicle-by-plate-simplified.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehicle-by-plate-simplified.mdx",
		ja: {
			id: "vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplified",
			title: "RUNT — ナンバー別車両（簡易・別名）",
			description: "ナンバーと名義人証番号から RUNT 車両の要点情報を取得します。",
			sidebar_label: "RUNT — 簡易車両記録",
			slug: "/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified",
		},
		ko: {
			id: "vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplified",
			title: "🇨🇴 RUNT — 번호판별 차량（간편·별칭）",
			description: "번호판과 명의인 신분증으로 RUNT 차량 핵심 정보를 조회합니다.",
			sidebar_label: "RUNT — 간편 차량 기록",
			slug: "/vehicle-validation/colombia/runt-vehicle-records-by-plate-number-simplified",
		},
	},
	{
		rel: "vehicle-validation/colombia/driver-s-license.mdx",
		sourceJa: "vehicle-validation/colombia/runt-drivers-license.mdx",
		sourceKo: "vehicle-validation/colombia/runt-drivers-license.mdx",
		ja: {
			id: "vehicle-validation-colombia-driver-s-license",
			title: "RUNT — 運転免許証",
			description: "証番号で RUNT 運転免許の状態・区分・有効期限を照会します。",
			sidebar_label: "RUNT — 運転免許証",
			slug: "/vehicle-validation/colombia/driver-s-license",
		},
		ko: {
			id: "vehicle-validation-colombia-driver-s-license",
			title: "🇨🇴 RUNT — 운전면허증",
			description: "신분증 번호로 RUNT 운전면허 상태·등급·만료일을 조회합니다.",
			sidebar_label: "RUNT — 운전면허증",
			slug: "/vehicle-validation/colombia/driver-s-license",
		},
	},
	{
		rel: "vehicle-validation/colombia/drivers-license.mdx",
		sourceJa: "vehicle-validation/colombia/runt-drivers-license.mdx",
		sourceKo: "vehicle-validation/colombia/runt-drivers-license.mdx",
		ja: {
			id: "vehicle-validation-colombia-drivers-license",
			title: "RUNT — 運転免許",
			description: "コロンビア RUNT で運転免許情報を照会します。",
			sidebar_label: "RUNT — 運転免許",
			slug: "/vehicle-validation/colombia/drivers-license",
		},
		ko: {
			id: "vehicle-validation-colombia-drivers-license",
			title: "🇨🇴 RUNT — 운전면허",
			description: "콜롬비아 RUNT에서 운전면허 정보를 조회합니다.",
			sidebar_label: "RUNT — 운전면허",
			slug: "/vehicle-validation/colombia/drivers-license",
		},
	},
	{
		rel: "vehicle-validation/colombia/drivers-license-verification.mdx",
		sourceJa: "vehicle-validation/colombia/runt-drivers-license.mdx",
		sourceKo: "vehicle-validation/colombia/runt-drivers-license.mdx",
		ja: {
			id: "vehicle-validation-colombia-drivers-license-verification",
			title: "RUNT — 運転免許検証",
			description: "RUNT で運転免許の有効性・区分・違反履歴を検証します。",
			sidebar_label: "RUNT — 免許検証",
			slug: "/vehicle-validation/colombia/drivers-license-verification",
		},
		ko: {
			id: "vehicle-validation-colombia-drivers-license-verification",
			title: "🇨🇴 RUNT — 운전면허 검증",
			description: "RUNT에서 운전면허 유효성·등급·위반 이력을 검증합니다.",
			sidebar_label: "RUNT — 면허 검증",
			slug: "/vehicle-validation/colombia/drivers-license-verification",
		},
	},
	{
		rel: "vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document.mdx",
		sourceJa: "vehicle-validation/colombia/runt-vehiculo.mdx",
		sourceKo: "vehicle-validation/colombia/runt-vehiculo.mdx",
		ja: {
			id: "vehicle-validation-colombia-vehicle-s-soat-and-rtm-by-plate-and-identification-document",
			title: "RUNT — SOAT・RTM 検証",
			description: "ナンバーと身分証で SOAT（任意保険）と RTM（車検）の状態を照会します。",
			sidebar_label: "RUNT — SOAT/RTM",
			slug: "/vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document",
		},
		ko: {
			id: "vehicle-validation-colombia-vehicle-s-soat-and-rtm-by-plate-and-identification-document",
			title: "🇨🇴 RUNT — SOAT·RTM 검증",
			description: "번호판과 신분증으로 SOAT 및 RTM(기술 검사) 상태를 조회합니다.",
			sidebar_label: "RUNT — SOAT/RTM",
			slug: "/vehicle-validation/colombia/vehicle-s-soat-and-rtm-by-plate-and-identification-document",
		},
	},
];

const created = { ja: [], ko: [] };

for (const spec of SPECS) {
	for (const locale of ["ja", "ko"]) {
		const localeDir = locale === "ja" ? "docs-ja" : "docs-ko";
		const meta = spec[locale];
		let content;
		if (spec.build) {
			content = spec.build(locale);
		} else {
			const source = read(localeDir, spec[`source${locale === "ja" ? "Ja" : "Ko"}`]);
			content = patchFrontMatter(source, meta);
		}
		write(localeDir, spec.rel, content);
		created[locale].push(spec.rel);
	}
}

// certificates
const certJa = `---
id: certificates-colombia-ministerio-trabajo-v3
title: コロンビア — 労働省証明書（v3）
description: コロンビア労働省の証明書（高所作業 curso de alturas 等）を GET /v3/co/ministerio-de-trabajo/certificados で照会します。
slug: /certificates/colombia-ministerio-trabajo-certificados-v3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# コロンビア — 労働省証明書（v3）

本エンドポイントは、コロンビア国民の**労働省**証明書情報（**高所作業・職業安全**研修 *curso de alturas* 等）を返します。Verifik の**ボゴタ・マイクロサービス**経由です。**v3** はマイクロサービスの**完全ペイロード**を返し、証明書行は **records**（上流 constances のマッピング）に含まれます。

**雇用コンプライアンス**、**請負業者オンボーディング**、**職場安全**確認に利用できます。

## 返却データ

- **records** — 統合が返す証明書・constance 行（上流 constances から改名）
- \`data\` 上のマイクロサービス追加フィールド（構造はソースに依存）
- Verifik **署名**付きレスポンス

## API リファレンス

${JA.endpoint}

\`\`\`
GET https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados
\`\`\`

**GET** のみ（**v3** ルーターに POST なし）。クエリ: **documentType**, **documentNumber**。

${JA.headers}

| ${JA.name} | ${JA.value} |
| --- | --- |
| Accept | \`application/json\` |
| Authorization | \`Bearer <token>\` |

${JA.params}

| name | type | required | description |
| --- | --- | --- | --- |
| documentType | string | yes | **CC**, **CE**, **PPT**, **PA** のいずれか。 |
| documentNumber | string | yes | スペース・句読点なしの証番号。 |

${JA.request}

<Tabs>
  <TabItem value="javascript" label="JavaScript">

\`\`\`javascript
import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados", {
	params: {
		documentType: "CC",
		documentNumber: "123456789",
	},
	headers: {
		Accept: "application/json",
		Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\`,
	},
});
console.log(data);
\`\`\`

  </TabItem>
  <TabItem value="python" label="Python">

\`\`\`python
import os, requests

url = "https://api.verifik.co/v3/co/ministerio-de-trabajo/certificados"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())
\`\`\`

  </TabItem>
</Tabs>

${JA.response}

<Tabs>
  <TabItem value="200" label="200">

\`\`\`json
{
	"data": {
		"records": []
	},
	"signature": {
		"dateTime": "January 16, 2024 3:44 PM",
		"message": "Certified by Verifik.co"
	}
}
\`\`\`

  </TabItem>
  <TabItem value="404" label="404">

\`\`\`json
{
	"code": "NotFound",
	"message": "Record not found."
}
\`\`\`

  </TabItem>
  <TabItem value="409" label="409">

\`\`\`json
{
	"code": "MissingParameter",
	"message": "documentType must be one of [CC, CE, PPT, PA]"
}
\`\`\`

  </TabItem>
</Tabs>

${JA.notes}

- 高所作業情報がない場合、上流は **404**（例: *「No registra información en Curso de Alturas.」*）となることがあります。
- **v2** エンドポイント **/v2/co/ministerio-de-trabajo/certificados** は同じマイクロサービスですが、より狭いペイロードです。**records** と完全オブジェクトが必要なら **v3** を推奨します。
- マイクロサービスのトークン・可用性は環境依存です。障害時は **5xx** の可能性があります。
- 結果はコロンビア法および社内ポリシーに従い個人・労働データとして取り扱ってください。
`;

const certKo = certJa
	.replace(/コロンビア — 労働省証明書（v3）/g, "🇨🇴 콜롬비아 — 노동부 증명서（v3）")
	.replace(
		/description: .+/,
		"description: 콜롬비아 노동부 증명서(고소 작업 curso de alturas 등)를 GET /v3/co/ministerio-de-trabajo/certificados로 조회합니다."
	)
	.replace(/### エンドポイント/g, KO.endpoint)
	.replace(/### ヘッダー/g, KO.headers)
	.replace(/### パラメーター/g, KO.params)
	.replace(/### リクエスト/g, KO.request)
	.replace(/### レスポンス/g, KO.response)
	.replace(/### 注意事項/g, KO.notes);

write("docs-ja", "certificates/colombia-ministerio-trabajo-certificados-v3.mdx", certJa);
write("docs-ko", "certificates/colombia-ministerio-trabajo-certificados-v3.mdx", certKo);
created.ja.push("certificates/colombia-ministerio-trabajo-certificados-v3.mdx");
created.ko.push("certificates/colombia-ministerio-trabajo-certificados-v3.mdx");

// background-check at English path
const bgSourceJa = read("docs-ja", "background-check/colombia-police-compliance-corrective-measures.mdx");
const bgJa = patchFrontMatter(bgSourceJa, {
	id: "background-check-colombia-verify-police-compliance-with-corrective-measures",
	title: "コロンビア — 警察の是正措置遵守確認",
	description: "コロンビア RNMC で是正措置の遵守状況を照会します。",
	slug: "/background-check/colombia/verify-police-compliance-with-corrective-measures",
});
write("docs-ja", "background-check/colombia/verify-police-compliance-with-corrective-measures.mdx", bgJa);
created.ja.push("background-check/colombia/verify-police-compliance-with-corrective-measures.mdx");

const bgSourceKo = read("docs-ko", "background-check/colombia-police-compliance-corrective-measures.mdx");
const bgKo = patchFrontMatter(bgSourceKo, {
	id: "background-check-colombia-verify-police-compliance-with-corrective-measures",
	title: "🇨🇴 콜롬비아 — 경찰 시정 조치 준수 확인",
	description: "콜롬비아 RNMC에서 시정 조치 준수 여부를 조회합니다.",
	slug: "/background-check/colombia/verify-police-compliance-with-corrective-measures",
});
write("docs-ko", "background-check/colombia/verify-police-compliance-with-corrective-measures.mdx", bgKo);
created.ko.push("background-check/colombia/verify-police-compliance-with-corrective-measures.mdx");

console.log(JSON.stringify({ ja: created.ja.length, ko: created.ko.length, files: created }, null, 2));
