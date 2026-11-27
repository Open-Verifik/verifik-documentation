/**
 * Generate the 30 individual endpoint pages in all 7 locales and register sidebars.
 * Usage: node scripts/generate-missing-30-docs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { endpoints as firstEndpoints } from "./data/missing-30-endpoints.mjs";
import { moreEndpoints } from "./data/missing-30-more.mjs";

const endpoints = [...firstEndpoints, ...moreEndpoints];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const LOCALES = ["en", "es", "fr", "pt", "ko", "ja", "zh"];
const DIR = {
	en: "docs",
	es: "docs-es",
	fr: "docs-fr",
	pt: "docs-pt",
	ko: "docs-ko",
	ja: "docs-ja",
	zh: "docs-zh",
};

const UI = {
	en: {
		returns: "What the call returns",
		uses: "Use cases",
		api: "API Reference",
		headers: [
			["Name", "Value", "Description"],
			["Content-Type", "`application/json`", "Request payload format"],
			["Accept", "`application/json`", "Response format"],
			["Authorization", "`Bearer <your_token>`", "Client JWT"],
		],
		cols: ["Name", "Type", "Required", "Example", "Description"],
		yes: "**Yes**",
		no: "No",
		cond: "**Conditional**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (Record found)",
			"200miss": "200 (No match)",
			"409": "409 (Missing parameter)",
			"404": "404 (Not found)",
			"401": "401 (Unauthorized)",
			"500": "500 (Source unavailable)",
		},
		notes: "Notes",
		sandbox: "Sandbox",
		sandCols: ["Scenario", "Parameters", "Result"],
		auth: "Send a Bearer JWT in the `Authorization` header.",
		sample: "The JSON sample illustrates the fields. A live call returns the record for the values you send.",
		staff: "Do not send a cache-bypass flag. This page documents only the client parameters.",
	},
	es: {
		returns: "Qué devuelve la llamada",
		uses: "Casos de uso",
		api: "Referencia de la API",
		headers: [
			["Nombre", "Valor", "Descripción"],
			["Content-Type", "`application/json`", "Formato de la solicitud"],
			["Accept", "`application/json`", "Formato de la respuesta"],
			["Authorization", "`Bearer <tu_token>`", "JWT del cliente"],
		],
		cols: ["Nombre", "Tipo", "Requerido", "Ejemplo", "Descripción"],
		yes: "**Sí**",
		no: "No",
		cond: "**Condicional**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (Registro encontrado)",
			"200miss": "200 (Sin coincidencia)",
			"409": "409 (Parámetro faltante)",
			"404": "404 (No encontrado)",
			"401": "401 (No autorizado)",
			"500": "500 (Fuente no disponible)",
		},
		notes: "Notas",
		sandbox: "Sandbox",
		sandCols: ["Escenario", "Parámetros", "Resultado"],
		auth: "Envíe un JWT Bearer en el encabezado `Authorization`.",
		sample: "El JSON de ejemplo ilustra los campos. Una llamada real devuelve el registro de los valores que envíe.",
		staff: "No envíe un indicador de omisión de caché. Esta página documenta solo los parámetros de cliente.",
	},
	fr: {
		returns: "Ce que l'appel renvoie",
		uses: "Cas d'usage",
		api: "Référence de l'API",
		headers: [
			["Nom", "Valeur", "Description"],
			["Content-Type", "`application/json`", "Format de la requête"],
			["Accept", "`application/json`", "Format de la réponse"],
			["Authorization", "`Bearer <votre_token>`", "JWT client"],
		],
		cols: ["Nom", "Type", "Requis", "Exemple", "Description"],
		yes: "**Oui**",
		no: "Non",
		cond: "**Conditionnel**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (Enregistrement trouvé)",
			"200miss": "200 (Sans correspondance)",
			"409": "409 (Paramètre manquant)",
			"404": "404 (Introuvable)",
			"401": "401 (Non autorisé)",
			"500": "500 (Source indisponible)",
		},
		notes: "Notes",
		sandbox: "Bac à sable",
		sandCols: ["Scénario", "Paramètres", "Résultat"],
		auth: "Envoyez un JWT Bearer dans l'en-tête `Authorization`.",
		sample: "Le JSON d'exemple illustre les champs. Un appel réel renvoie l'enregistrement des valeurs envoyées.",
		staff: "N'envoyez pas d'indicateur de contournement du cache. Cette page ne documente que les paramètres client.",
	},
	pt: {
		returns: "O que a chamada devolve",
		uses: "Casos de uso",
		api: "Referência da API",
		headers: [
			["Nome", "Valor", "Descrição"],
			["Content-Type", "`application/json`", "Formato da solicitação"],
			["Accept", "`application/json`", "Formato da resposta"],
			["Authorization", "`Bearer <seu_token>`", "JWT do cliente"],
		],
		cols: ["Nome", "Tipo", "Obrigatório", "Exemplo", "Descrição"],
		yes: "**Sim**",
		no: "Não",
		cond: "**Condicional**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (Registro encontrado)",
			"200miss": "200 (Sem correspondência)",
			"409": "409 (Parâmetro ausente)",
			"404": "404 (Não encontrado)",
			"401": "401 (Não autorizado)",
			"500": "500 (Fonte indisponível)",
		},
		notes: "Notas",
		sandbox: "Sandbox",
		sandCols: ["Cenário", "Parâmetros", "Resultado"],
		auth: "Envie um JWT Bearer no cabeçalho `Authorization`.",
		sample: "O JSON de exemplo ilustra os campos. Uma chamada real devolve o registro dos valores enviados.",
		staff: "Não envie um indicador de bypass de cache. Esta página documenta apenas os parâmetros de cliente.",
	},
	ko: {
		returns: "응답에 포함되는 값",
		uses: "사용 사례",
		api: "API 레퍼런스",
		headers: [
			["이름", "값", "설명"],
			["Content-Type", "`application/json`", "요청 형식"],
			["Accept", "`application/json`", "응답 형식"],
			["Authorization", "`Bearer <token>`", "클라이언트 JWT"],
		],
		cols: ["이름", "유형", "필수", "예시", "설명"],
		yes: "**예**",
		no: "아니오",
		cond: "**조건부**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (레코드 있음)",
			"200miss": "200 (일치 없음)",
			"409": "409 (파라미터 누락)",
			"404": "404 (없음)",
			"401": "401 (인증 실패)",
			"500": "500 (원천 사용 불가)",
		},
		notes: "참고",
		sandbox: "샌드박스",
		sandCols: ["시나리오", "파라미터", "결과"],
		auth: "`Authorization` 헤더에 Bearer JWT를 보냅니다.",
		sample: "JSON 예시는 필드 모양입니다. 실제 호출은 보낸 값의 레코드를 반환합니다.",
		staff: "캐시 우회 플래그는 보내지 않습니다. 이 페이지는 클라이언트 파라미터만 설명합니다.",
	},
	ja: {
		returns: "応答に含まれる項目",
		uses: "用途",
		api: "API リファレンス",
		headers: [
			["名前", "値", "説明"],
			["Content-Type", "`application/json`", "リクエスト形式"],
			["Accept", "`application/json`", "レスポンス形式"],
			["Authorization", "`Bearer <token>`", "クライアント JWT"],
		],
		cols: ["名前", "型", "必須", "例", "説明"],
		yes: "**はい**",
		no: "いいえ",
		cond: "**条件付き**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200 (レコードあり)",
			"200miss": "200 (一致なし)",
			"409": "409 (パラメータ不足)",
			"404": "404 (該当なし)",
			"401": "401 (未認証)",
			"500": "500 (情報源が利用不可)",
		},
		notes: "注意",
		sandbox: "サンドボックス",
		sandCols: ["シナリオ", "パラメータ", "結果"],
		auth: "`Authorization` ヘッダーに Bearer JWT を付けます。",
		sample: "JSON サンプルは項目の形を示します。実呼出しは送った値のレコードを返します。",
		staff: "キャッシュ迂回フラグは送りません。このページはクライアント向けパラメータだけを説明します。",
	},
	zh: {
		returns: "调用返回的内容",
		uses: "使用场景",
		api: "API 参考",
		headers: [
			["名称", "值", "说明"],
			["Content-Type", "`application/json`", "请求格式"],
			["Accept", "`application/json`", "响应格式"],
			["Authorization", "`Bearer <token>`", "客户端 JWT"],
		],
		cols: ["名称", "类型", "必填", "示例", "说明"],
		yes: "**是**",
		no: "否",
		cond: "**条件必填**",
		tabs: ["Node.js / JavaScript", "Python", "cURL"],
		res: {
			"200": "200（找到记录）",
			"200miss": "200（未命中）",
			"409": "409（缺少参数）",
			"404": "404（未找到）",
			"401": "401（未授权）",
			"500": "500（数据源不可用）",
		},
		notes: "说明",
		sandbox: "沙盒",
		sandCols: ["场景", "参数", "结果"],
		auth: "在 `Authorization` 头中发送 Bearer JWT。",
		sample: "JSON 示例只说明字段形状。实际调用返回你所发送数值对应的记录。",
		staff: "不要发送绕过缓存的标志。本页只记录客户端参数。",
	},
};

const reqLabel = (ui, req) => (req === "yes" ? ui.yes : req === "cond" ? ui.cond : ui.no);

const yaml = (value) => JSON.stringify(String(value));

const docIdFromFile = (file) => file.replace(/\.mdx$/, "").split("/").pop();

const sidebarId = (file) => file.replace(/\.mdx$/, "");

const slugOf = (file) => `/${file.replace(/\.mdx$/, "")}`;

const queryString = (example) =>
	Object.entries(example)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join("&");

const jsObject = (example, indent) =>
	Object.entries(example)
		.map(([key, value]) => `${indent}${key}: ${JSON.stringify(value)},`)
		.join("\n");

const pyLiteral = (value) => {
	if (value === true) return "True";
	if (value === false) return "False";
	if (value === null) return "None";
	return JSON.stringify(value);
};

const pyObject = (example, indent) =>
	Object.entries(example)
		.map(([key, value]) => `${indent}"${key}": ${pyLiteral(value)},`)
		.join("\n");

const signature = {
	dateTime: "November 27, 2026 12:00 PM",
	message: "Certified by Verifik.co",
};

const unauthorized = { code: "UNAUTHORIZED", message: "Authentication required" };
const unavailable = {
	code: "InternalServerError",
	message: "The official source is temporarily unavailable. Please retry shortly.",
};

const renderRequests = (ep, ui, url) => {
	const transport = ep.transport || "query";
	if (transport === "query") {
		return `<Tabs>
<TabItem value="javascript" label="${ui.tabs[0]}">

\`\`\`javascript
import axios from "axios";

const options = {
  method: "${ep.method}",
  url: "${url}",
  params: {
${jsObject(ep.example, "    ")}
  },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer <your_token>",
  },
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error.response ? error.response.data : error.message);
}
\`\`\`

</TabItem>
<TabItem value="python" label="${ui.tabs[1]}">

\`\`\`python
import requests

url = "${url}"
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer <your_token>",
}
params = {
${pyObject(ep.example, "    ")}
}

response = requests.get(url, headers=headers, params=params)
print(response.json())
\`\`\`

</TabItem>
<TabItem value="curl" label="${ui.tabs[2]}">

\`\`\`bash
curl -X ${ep.method} "${url}?${queryString(ep.example)}" \\
  -H "Accept: application/json" \\
  -H "Authorization: Bearer <your_token>"
\`\`\`

</TabItem>
</Tabs>`;
	}

	const body = JSON.stringify(ep.example, null, 2);
	return `<Tabs>
<TabItem value="javascript" label="${ui.tabs[0]}">

\`\`\`javascript
import axios from "axios";

const options = {
  method: "${ep.method}",
  url: "${url}",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer <your_token>",
  },
  data: ${body.replace(/\n/g, "\n  ")},
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error.response ? error.response.data : error.message);
}
\`\`\`

</TabItem>
<TabItem value="python" label="${ui.tabs[1]}">

\`\`\`python
import requests

url = "${url}"
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer <your_token>",
}
payload = {
${pyObject(ep.example, "    ")}
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())
\`\`\`

</TabItem>
<TabItem value="curl" label="${ui.tabs[2]}">

\`\`\`bash
curl -X ${ep.method} "${url}" \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json" \\
  -H "Authorization: Bearer <your_token>" \\
  -d '${JSON.stringify(ep.example)}'
\`\`\`

</TabItem>
</Tabs>`;
};

const renderPage = (ep, locale) => {
	const ui = UI[locale];
	const title = ep.title[locale];
	const description = ep.description[locale];
	const sidebar = ep.sidebar[locale];
	const intro = ep.intro[locale];
	const after = ep.after[locale];
	const url = `https://api.verifik.co/${ep.apiPath}`;
	const fileId = docIdFromFile(ep.file);
	const slug = slugOf(ep.file);
	const keywords = [
		ep.apiPath,
		`/${ep.apiPath}`,
		`api.verifik.co/${ep.apiPath}`,
		`${ep.method} /${ep.apiPath}`,
		`${ep.method} https://api.verifik.co/${ep.apiPath}`,
		ep.code,
	];
	const paramRows = ep.params
		.map((param) => {
			const required = reqLabel(ui, param.req);
			return `| \`${param.name}\` | ${param.type} | ${required} | \`${param.example}\` | ${param.desc[locale]} |`;
		})
		.join("\n");
	const fields = ep.fields[locale].map((item) => `- ${item}`).join("\n");
	const uses = ep.uses[locale].map((item) => `- ${item}`).join("\n");
	const notes = [...ep.notes[locale], ui.auth, ui.sample, ui.staff].map((item) => `- ${item}`).join("\n");
	const sandbox = ep.sandbox[locale]
		.map((row) => `| ${row.scenario} | ${row.params} | ${row.result} |`)
		.join("\n");
	const found = {
		data: ep.sample,
		signature,
	};
	const missing = ep.missing;
	const notFound = ep.notFound || { code: "NotFound", message: "Record not found." };
	const missTab = ep.noMatch
		? `<TabItem value="200-miss" label="${ui.res["200miss"]}">

\`\`\`json
${JSON.stringify({ data: ep.noMatch, signature }, null, 2)}
\`\`\`

</TabItem>`
		: `<TabItem value="404" label="${ui.res["404"]}">

\`\`\`json
${JSON.stringify(notFound, null, 2)}
\`\`\`

</TabItem>`;

	return `---
id: ${fileId}
title: ${yaml(title)}
description: ${yaml(description)}
sidebar_label: ${yaml(sidebar)}
slug: ${yaml(slug)}
keywords:
${keywords.map((item) => `  - ${yaml(item)}`).join("\n")}
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# ${title}

${intro}

## ${ui.returns}

${fields}

## ${ui.uses}

${uses}

---

## ${ui.api}

### Endpoint

\`\`\`http
${ep.method} ${url}
\`\`\`

${after}

### Headers

| ${ui.headers[0][0]} | ${ui.headers[0][1]} | ${ui.headers[0][2]} |
| :--- | :--- | :--- |
| ${ui.headers[1][0]} | ${ui.headers[1][1]} | ${ui.headers[1][2]} |
| ${ui.headers[2][0]} | ${ui.headers[2][1]} | ${ui.headers[2][2]} |
| ${ui.headers[3][0]} | ${ui.headers[3][1]} | ${ui.headers[3][2]} |

### Parameters

| ${ui.cols[0]} | ${ui.cols[1]} | ${ui.cols[2]} | ${ui.cols[3]} | ${ui.cols[4]} |
| :--- | :--- | :--- | :--- | :--- |
${paramRows}

---

### Request

${renderRequests(ep, ui, url)}

---

### Response

<Tabs>
<TabItem value="200" label="${ui.res["200"]}">

\`\`\`json
${JSON.stringify(found, null, 2)}
\`\`\`

</TabItem>
<TabItem value="409" label="${ui.res["409"]}">

\`\`\`json
${JSON.stringify(missing, null, 2)}
\`\`\`

</TabItem>
${missTab}
<TabItem value="401" label="${ui.res["401"]}">

\`\`\`json
${JSON.stringify(unauthorized, null, 2)}
\`\`\`

</TabItem>
<TabItem value="500" label="${ui.res["500"]}">

\`\`\`json
${JSON.stringify(unavailable, null, 2)}
\`\`\`

</TabItem>
</Tabs>

---

### ${ui.notes}

${notes}

---

## ${ui.sandbox}

| ${ui.sandCols[0]} | ${ui.sandCols[1]} | ${ui.sandCols[2]} |
| :--- | :--- | :--- |
${sandbox}

401 when the bearer token is missing or rejected.
`;
};

const writePages = () => {
	let count = 0;
	for (const ep of endpoints) {
		for (const locale of LOCALES) {
			const abs = path.join(ROOT, DIR[locale], ep.file);
			fs.mkdirSync(path.dirname(abs), { recursive: true });
			fs.writeFileSync(abs, renderPage(ep, locale));
			count += 1;
		}
	}
	console.log(`wrote ${count} pages`);
};

const insertAfterDoc = (content, docId, block) => {
	const needle = `"${docId}"`;
	const lines = content.split("\n");
	const at = [];
	for (let i = 0; i < lines.length; i += 1) {
		if (!lines[i].includes(needle)) continue;
		if (/\},\s*$/.test(lines[i]) && lines[i].includes("type")) {
			at.push(i + 1);
			continue;
		}
		let closed = false;
		for (let j = i + 1; j < Math.min(lines.length, i + 12); j += 1) {
			if (/^\s*\},?\s*$/.test(lines[j])) {
				at.push(j + 1);
				closed = true;
				break;
			}
		}
		if (!closed) throw new Error(`Could not close doc object for ${docId} near line ${i + 1}`);
	}
	if (!at.length) throw new Error(`Anchor not found: ${docId}`);
	const blockLines = block.replace(/\s+$/, "").split("\n");
	for (let k = at.length - 1; k >= 0; k -= 1) {
		lines.splice(at[k], 0, ...blockLines);
	}
	return lines.join("\n");
};

const item = (id, label) => `\t\t\t\t{ type: "doc", id: "${id}", label: ${JSON.stringify(label)} },`;

const grouped = (group, locale) =>
	endpoints
		.filter((ep) => ep.group === group)
		.map((ep) => item(sidebarId(ep.file), ep.sidebar[locale]))
		.join("\n");

const patchSidebar = (file, locale, anchors) => {
	const abs = path.join(ROOT, file);
	let text = fs.readFileSync(abs, "utf8");
	const before = text;
	for (const [group, anchor] of Object.entries(anchors)) {
		if (!group || group.startsWith("_")) continue;
		const block = grouped(group, locale);
		if (!block) continue;
		text = insertAfterDoc(text, anchor, block);
	}
	if (text === before) throw new Error(`No sidebar edits in ${file}`);
	fs.writeFileSync(abs, text);
	console.log(`patched ${file}`);
};

const replaceOnceEach = (file, pairs) => {
	const abs = path.join(ROOT, file);
	let text = fs.readFileSync(abs, "utf8");
	for (const [from, to] of pairs) {
		const hits = text.split(from).length - 1;
		if (!hits) throw new Error(`Missing snippet in ${file}: ${from.slice(0, 80)}`);
		text = text.split(from).join(to);
	}
	fs.writeFileSync(abs, text);
	console.log(`snippets ${file}`);
};

const communicationCategory = (locale) => {
	const labels = {
		en: "COMMUNICATION",
		es: "COMUNICACIÓN",
		fr: "Communication",
		pt: "Comunicação",
		ko: "커뮤니케이션",
		ja: "コミュニケーション",
		zh: "通信",
	};
	const scan = {
		en: "SCAN DOCS API'S",
		es: "SCAN DOCS API'S",
		fr: "Numérisation",
		pt: "Digitalização",
		ko: "문서 스캔",
		ja: "書類スキャン",
		zh: "证件扫描",
	};
	const face = endpoints.find((ep) => ep.code === "face_recognition_detect_face");
	const scanEp = endpoints.find((ep) => ep.code === "ocr_scan_gpt");
	const comm = endpoints.filter((ep) => ep.group === "communication");
	const lines = [
		"\t\t{",
		"\t\t\ttype: \"category\",",
		`\t\t\tlabel: ${JSON.stringify(scan[locale])},`,
		"\t\t\tcollapsible: false,",
		"\t\t\titems: [",
		`\t\t\t\t{ type: "doc", id: "${sidebarId(scanEp.file)}", label: ${JSON.stringify(scanEp.sidebar[locale])} },`,
		"\t\t\t],",
		"\t\t},",
		"\t\t{",
		"\t\t\ttype: \"category\",",
		`\t\t\tlabel: ${JSON.stringify(labels[locale])},`,
		"\t\t\tcollapsible: false,",
		"\t\t\titems: [",
		...comm.map((ep) => `\t\t\t\t{ type: "doc", id: "${sidebarId(ep.file)}", label: ${JSON.stringify(ep.sidebar[locale])} },`),
		"\t\t\t],",
		"\t\t},",
	];
	return { faceLabel: face.sidebar[locale], faceId: sidebarId(face.file), block: lines.join("\n") };
};

const patchPartials = () => {
	if (fs.readFileSync(path.join(ROOT, "sidebars-fr.js"), "utf8").includes('"identity/colombia-cedula-vigencia"')) {
		console.log("partial sidebars already patched");
		return;
	}
	const files = {
		fr: ["sidebars-fr.js", "Identité"],
		pt: ["sidebars-pt.js", "Identidade"],
		ko: ["sidebars-ko.js", "신원"],
		ja: ["sidebars-ja.js", "本人確認"],
		zh: ["sidebars-zh.js", "身份核验"],
	};
	for (const [locale, [file, identityLabel]] of Object.entries(files)) {
		const abs = path.join(ROOT, file);
		let text = fs.readFileSync(abs, "utf8");
		const anchors = {
			identityCo: "identity/colombia-situacion-militar",
			identityEc: "identity/ecuador",
			identityPa: "identity/panama",
			identityPe: "identity/peru-full-id",
			identityScore: "identity/united-states-citizen",
			businessCo: "business-validation/colombia-dian-verification",
			vehicleCr: "vehicle-validation/costa-rica",
			vehicleEc: "vehicle-validation/ecuador",
			pep: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
			watch: "background-check/international/uae-local-terrorists",
		};
		for (const [group, anchor] of Object.entries(anchors)) {
			text = insertAfterDoc(text, anchor, grouped(group, locale));
		}
		const comm = communicationCategory(locale);
		const faceHits = text.split('id: "biometrics/face-image-requirements"').length - 1;
		if (faceHits < 1) throw new Error(`${file} face anchors ${faceHits}`);
		text = text
			.split("\n")
			.flatMap((line) => {
				if (!line.includes('id: "biometrics/face-image-requirements"')) return [line];
				return [line, `\t\t\t\t{ type: "doc", id: "${comm.faceId}", label: ${JSON.stringify(comm.faceLabel)} },`];
			})
			.join("\n");
		const identityNeedle = `\t\t{\n\t\t\ttype: "category",\n\t\t\tlabel: ${JSON.stringify(identityLabel)},`;
		const idHits = text.split(identityNeedle).length - 1;
		if (idHits < 1) throw new Error(`${file} identity label hits ${idHits}`);
		text = text.split(identityNeedle).join(`${comm.block}\n${identityNeedle}`);
		fs.writeFileSync(abs, text);
		console.log(`patched ${file}`);
	}
};

const patchEnglishAndSpanish = () => {
	if (fs.readFileSync(path.join(ROOT, "sidebars.js"), "utf8").includes('"identity/colombia-cedula-vigencia"')) {
		console.log("english and spanish sidebars already patched");
		return;
	}
	patchSidebar("sidebars.js", "en", {
		identityCo: "identity/colombia-situacion-militar",
		identityEc: "identity/ecuador",
		identityPa: "identity/panama-health-worker",
		identityPe: "identity/peru-full-id",
		identityScore: "identity/united-states-citizen",
		businessCo: "business-validation/colombia-dian-verification",
		vehicleCr: "vehicle-validation/costa-rica",
		vehicleEc: "vehicle-validation/ecuador",
		pep: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
		watch: "background-check/international/uae-local-terrorists",
	});
	patchSidebar("sidebars-es.js", "es", {
		identityCo: "identity/colombia-situacion-militar",
		identityEc: "identity/ecuador",
		identityPa: "identity/panama-health-worker",
		identityPe: "identity/peru-full-id",
		identityScore: "identity/united-states-citizen",
		businessCo: "validacion-empresarial/colombia-verificacion-dian",
		vehicleCr: "validacion-vehiculos/costa-rica",
		vehicleEc: "validacion-vehiculos/ecuador",
		pep: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
		watch: "background-check/international/uae-local-terrorists",
	});

	const face = sidebarId(endpoints.find((ep) => ep.code === "face_recognition_detect_face").file);
	const scan = sidebarId(endpoints.find((ep) => ep.code === "ocr_scan_gpt").file);
	const commItems = endpoints
		.filter((ep) => ep.group === "communication")
		.map((ep) => `{ type: "doc", id: "${sidebarId(ep.file)}", label: ${JSON.stringify(ep.sidebar.en)} }`)
		.join(", ");
	const commItemsEs = endpoints
		.filter((ep) => ep.group === "communication")
		.map((ep) => `{ type: "doc", id: "${sidebarId(ep.file)}", label: ${JSON.stringify(ep.sidebar.es)} }`)
		.join(", ");

	replaceOnceEach("sidebars.js", [
		[
			`items: ["biometrics/search", "biometrics/search-live-face", "biometrics/search-active-user", "biometrics/search-crops"]`,
			`items: ["biometrics/search", "biometrics/search-live-face", "biometrics/search-active-user", "biometrics/search-crops", "${face}"]`,
		],
		[
			`items: ["ocr-engines/scan-studio", "ocr-engines/scan-prompt", "ocr-engines/scan-agent"]`,
			`items: ["ocr-engines/scan-studio", "ocr-engines/scan-prompt", "ocr-engines/scan-agent", "${scan}"]`,
		],
		[
			`label: "IDENTITY VERIFICATION",`,
			`label: "COMMUNICATION",\n\t\t\tcollapsible: false,\n\t\t\titems: [${commItems}],\n\t\t},\n\t\t{\n\t\t\ttype: "category",\n\t\t\tlabel: "IDENTITY VERIFICATION",`,
		],
	]);
	replaceOnceEach("sidebars-es.js", [
		[
			`items: ["biometrics/buscar", "biometrics/buscar-cara-en-vivo", "biometrics/buscar-usuario-activo", "biometrics/buscar-recortes"]`,
			`items: ["biometrics/buscar", "biometrics/buscar-cara-en-vivo", "biometrics/buscar-usuario-activo", "biometrics/buscar-recortes", "${face}"]`,
		],
		[
			`items: ["ocr-engines/escaneo-estudio", "ocr-engines/escaneo-prompt", "ocr-engines/scan-agent"]`,
			`items: ["ocr-engines/escaneo-estudio", "ocr-engines/escaneo-prompt", "ocr-engines/scan-agent", "${scan}"]`,
		],
		[
			`label: "VERIFICACIÓN DE IDENTIDAD",`,
			`label: "COMUNICACIÓN",\n\t\t\tcollapsible: false,\n\t\t\titems: [${commItemsEs}],\n\t\t},\n\t\t{\n\t\t\ttype: "category",\n\t\t\tlabel: "VERIFICACIÓN DE IDENTIDAD",`,
		],
	]);
};

const assertNoPremium = () => {
	const banned = ["cedula/premium", "Scan-GPT", "OCR Document Scan Prompt", "scan-gpt prompt"];
	for (const ep of endpoints) {
		if (ep.apiPath.includes("cedula/premium")) throw new Error("premium slipped in");
		for (const locale of LOCALES) {
			const text = fs.readFileSync(path.join(ROOT, DIR[locale], ep.file), "utf8");
			if (ep.code === "ocr_scan_gpt") {
				if (/Scan-GPT|OCR Document Scan Prompt|Escaneo OCR de Documentos GPT/.test(text)) {
					throw new Error(`banned scan name in ${locale} ${ep.file}`);
				}
				if (!text.includes("https://api.verifik.co/v2/ocr/scan-gpt")) {
					throw new Error("scan URL missing");
				}
			}
			for (const word of banned) {
				if (word === "Scan-GPT" || word === "OCR Document Scan Prompt") continue;
				if (text.includes("cedula/premium")) throw new Error("premium url in page");
			}
		}
	}
};

writePages();
patchEnglishAndSpanish();
patchPartials();
assertNoPremium();
console.log("endpoints", endpoints.length);
