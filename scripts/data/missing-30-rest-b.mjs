import { L, sandbox3, miss, notFound } from "./missing-30-endpoints.mjs";

const page = (spec) => ({
	notFound,
	missing: spec.missing || miss(spec.missingMessage || "missing parameter"),
	sandbox: spec.sandbox || sandbox3(spec.sandParams, spec.sandResults),
	...spec,
});

const hit = (flag) =>
	L(
		[`200 and ${flag} is true on a hit.`, "409 when no search value is sent.", `200 and ${flag} is false on a clean miss. That miss is not 404.`],
		[`200 y ${flag} es true en un acierto.`, "409 si no envía ningún valor.", `200 y ${flag} es false en una ausencia limpia. Esa ausencia no es 404.`],
		[`200 et ${flag} vaut true en cas de correspondance.`, "409 si aucune valeur n'est envoyée.", `200 et ${flag} vaut false en cas d'absence nette. Ce n'est pas un 404.`],
		[`200 e ${flag} é true num acerto.`, "409 se nenhum valor for enviado.", `200 e ${flag} é false numa ausência limpa. Isso não é 404.`],
		[`일치하면 200이고 ${flag}는 true.`, "검색 값이 없으면 409.", `단순히 없으면 200이고 ${flag}는 false. 404가 아닙니다.`],
		[`一致すると 200 で ${flag} は true。`, "検索値が無いと 409。", `単に無ければ 200 で ${flag} は false。404 ではありません。`],
		[`命中为 200 且 ${flag} 为 true。`, "没有检索值时为 409。", `单纯未命中为 200 且 ${flag} 为 false。不是 404。`],
	);

const co = [
	{
		name: "documentNumber",
		type: "string",
		req: "cond",
		example: "900123456",
		desc: L(
			"NIT or person number. Alias `nit`. Required if you send no name.",
			"NIT o número de persona. Alias `nit`. Obligatorio si no envía nombre.",
			"NIT ou numéro. Alias `nit`. Obligatoire sans nom.",
			"NIT ou número. Alias `nit`. Obrigatório sem nome.",
			"NIT 또는 번호. 별칭 `nit`. 이름이 없으면 필수.",
			"NIT または番号。別名 `nit`。名前が無いと必須。",
			"NIT 或号码。别名 `nit`。没有名称时必填。",
		),
	},
	{
		name: "businessName",
		type: "string",
		req: "cond",
		example: "INDUSTRIAS EJEMPLO SAS",
		desc: L(
			"Name, 2 to 200 characters. Aliases `companyName` and `fullName`. Required if you send no number.",
			"Nombre, de 2 a 200 caracteres. Alias `companyName` y `fullName`. Obligatorio si no envía número.",
			"Nom, 2 à 200 caractères. Alias `companyName` et `fullName`. Obligatoire sans numéro.",
			"Nome, de 2 a 200 caracteres. Alias `companyName` e `fullName`. Obrigatório sem número.",
			"이름. 2–200자. 별칭 `companyName`, `fullName`. 번호가 없으면 필수.",
			"名称。2–200文字。別名 `companyName` と `fullName`。番号が無いと必須。",
			"名称，2 到 200 个字符。别名 `companyName` 与 `fullName`。没有号码时必填。",
		),
	},
	{
		name: "documentType",
		type: "string",
		req: "no",
		example: "NIT",
		desc: L(
			"Optional: `NIT`, `CC`, `CE`, `PAS`, or `TI`.",
			"Opcional: `NIT`, `CC`, `CE`, `PAS` o `TI`.",
			"Facultatif : `NIT`, `CC`, `CE`, `PAS` ou `TI`.",
			"Opcional: `NIT`, `CC`, `CE`, `PAS` ou `TI`.",
			"선택: `NIT`, `CC`, `CE`, `PAS`, `TI`.",
			"任意: `NIT`、`CC`、`CE`、`PAS`、`TI`。",
			"可选：`NIT`、`CC`、`CE`、`PAS` 或 `TI`。",
		),
	},
];

const pep = [
	{
		name: "fullName",
		type: "string",
		req: "cond",
		example: "MARIA LOPEZ",
		desc: L("Person name. Enough on its own.", "Nombre. Basta por sí solo.", "Nom. Il suffit seul.", "Nome. Basta sozinho.", "이름만으로 충분합니다.", "氏名だけで足ります。", "只发姓名即可。"),
	},
	{
		name: "documentNumber",
		type: "string",
		req: "cond",
		example: "80123456",
		desc: L("Identifier, 4 to 30 characters. Enough on its own.", "Identificador, de 4 a 30 caracteres.", "Identifiant, 4 à 30 caractères.", "Identificador, de 4 a 30 caracteres.", "식별자 4–30자.", "識別子 4–30文字。", "标识，4 到 30 个字符。"),
	},
	{
		name: "documentType",
		type: "string",
		req: "no",
		example: "CC",
		desc: L("Optional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Facultatif : `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "선택: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "任意: `CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。", "可选：`CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。"),
	},
];

const text = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);
const bullets = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);

const flagPage = (cfg) =>
	page({
		file: cfg.file,
		method: "GET",
		apiPath: cfg.api,
		code: cfg.code,
		group: cfg.group,
		example: cfg.example,
		sample: cfg.sample,
		noMatch: cfg.noMatch,
		missingMessage: cfg.missingMessage,
		params: cfg.params,
		title: cfg.title,
		sidebar: cfg.sidebar,
		description: cfg.description,
		intro: cfg.intro,
		after: cfg.after,
		fields: cfg.fields,
		uses: cfg.uses,
		notes: cfg.notes,
		sandParams: cfg.sandParams,
		sandResults: hit(cfg.flag),
	});

export const restEndpoints = [
	flagPage({
		file: "business-validation/colombia-siis.mdx",
		api: "v2/co/supersociedades/siis",
		code: "colombia_api_supersociedades_siis",
		group: "businessCo",
		flag: "found",
		example: { documentNumber: "900673447" },
		sample: { documentNumber: "900673447", businessName: "EJEMPLO SAS", found: true, status: "ACTIVA", inLiquidationOrReorganization: false },
		noMatch: { documentNumber: "800000111", found: false, status: "NO REGISTRADA EN SIIS SUPERSOCIEDADES", filings: [] },
		params: co,
		title: text("Colombia — Corporate information system (SIIS)", "Colombia — Sistema integrado de información societaria (SIIS)", "Colombie — Système intégré d'information sociétaire (SIIS)", "Colômbia — Sistema integrado de informação societária (SIIS)", "콜롬비아 — 통합 회사 정보 (SIIS)", "コロンビア — 統合会社情報（SIIS）", "哥伦比亚 — 综合公司信息（SIIS）"),
		sidebar: text("🇨🇴 Colombia — SIIS", "🇨🇴 Colombia — SIIS", "🇨🇴 Colombie — SIIS", "🇨🇴 Colômbia — SIIS", "🇨🇴 콜롬비아 — SIIS", "🇨🇴 コロンビア — SIIS", "🇨🇴 哥伦比亚 — SIIS"),
		description: text(
			"Read Supersociedades SIIS filings by NIT or company name. A company that is not in SIIS is HTTP 200 with found false.",
			"Lee los reportes SIIS de Supersociedades por NIT o razón social. Una sociedad que no está en el SIIS es HTTP 200 con found en false.",
			"Lit les dépôts SIIS de Supersociedades par NIT ou raison sociale. Une société absente du SIIS est un HTTP 200 avec found à false.",
			"Lê os registros SIIS da Supersociedades por NIT ou razão social. Uma sociedade fora do SIIS é HTTP 200 com found false.",
			"NIT 또는 회사명으로 Supersociedades SIIS 신고를 읽습니다. SIIS에 없으면 found가 false인 HTTP 200입니다.",
			"NIT または社名で Supersociedades の SIIS 届出を読みます。SIIS に無い会社は found が false の HTTP 200 です。",
			"按 NIT 或公司名称读取 Supersociedades 的 SIIS 申报。不在 SIIS 中是 HTTP 200，且 found 为 false。",
		),
		intro: text(
			"The **SIIS** lookup reads the integrated corporate filings supervised by Supersociedades. Send a NIT or a company name. `found` is true when a filing exists and false when the company is simply not in SIIS. That clean miss is HTTP 200, with status `NO REGISTRADA EN SIIS SUPERSOCIEDADES`. Use `inLiquidationOrReorganization` to see a concurso alert.",
			"La consulta **SIIS** lee los reportes societarios supervisados por Supersociedades. Envíe un NIT o una razón social. `found` es true si hay un reporte y false si la sociedad simplemente no está en el SIIS. Esa ausencia limpia es HTTP 200, con estado `NO REGISTRADA EN SIIS SUPERSOCIEDADES`. Use `inLiquidationOrReorganization` para ver una alerta concursal.",
			"La consultation **SIIS** lit les dépôts sociétaires supervisés par Supersociedades. Envoyez un NIT ou une raison sociale. `found` vaut true s'il existe un dépôt et false si la société n'est simplement pas dans le SIIS. Cette absence nette est un HTTP 200, avec le statut `NO REGISTRADA EN SIIS SUPERSOCIEDADES`. Utilisez `inLiquidationOrReorganization` pour une alerte de procédure collective.",
			"A consulta **SIIS** lê os registros societários supervisionados pela Supersociedades. Envie um NIT ou uma razão social. `found` é true se houver registro e false se a sociedade simplesmente não estiver no SIIS. Essa ausência limpa é HTTP 200, com estado `NO REGISTRADA EN SIIS SUPERSOCIEDADES`. Use `inLiquidationOrReorganization` para um alerta concursal.",
			"**SIIS** 조회는 Supersociedades가 감독하는 회사 신고를 읽습니다. NIT 또는 회사명을 보냅니다. 신고가 있으면 `found`는 true이고, SIIS에 없으면 false입니다. 그 단순 미검출은 HTTP 200이며 상태는 `NO REGISTRADA EN SIIS SUPERSOCIEDADES`입니다. 도산 경보는 `inLiquidationOrReorganization`을 봅니다.",
			"**SIIS** 照会は Supersociedades が監督する会社届出を読みます。NIT または社名を送ります。届出があれば `found` は true、SIIS に無ければ false です。その単なる未検出は HTTP 200 で、状態は `NO REGISTRADA EN SIIS SUPERSOCIEDADES` です。倒産警報は `inLiquidationOrReorganization` を見ます。",
			"**SIIS** 查询读取 Supersociedades 监管的公司申报。发送 NIT 或公司名称。有申报时 `found` 为 true，只是不在 SIIS 中时为 false。该单纯未命中是 HTTP 200，状态为 `NO REGISTRADA EN SIIS SUPERSOCIEDADES`。用 `inLiquidationOrReorganization` 看破产预警。",
		),
		after: text(
			"A filing includes `status`, `ciiu`, address fields, `financialSummary`, and `filings`. `found` false means the company is not in SIIS. Both are HTTP 200.",
			"Un reporte incluye `status`, `ciiu`, dirección, `financialSummary` y `filings`. `found` false significa que la sociedad no está en el SIIS. Ambos son HTTP 200.",
			"Un dépôt contient `status`, `ciiu`, l'adresse, `financialSummary` et `filings`. `found` à false signifie que la société n'est pas dans le SIIS. Les deux sont des HTTP 200.",
			"Um registro inclui `status`, `ciiu`, endereço, `financialSummary` e `filings`. `found` false significa que a sociedade não está no SIIS. Ambos são HTTP 200.",
			"신고에는 `status`, `ciiu`, 주소, `financialSummary`, `filings`가 있습니다. `found`가 false이면 SIIS에 없습니다. 둘 다 HTTP 200입니다.",
			"届出には `status`、`ciiu`、住所、`financialSummary`、`filings` があります。`found` が false なら SIIS にありません。どちらも HTTP 200 です。",
			"申报含 `status`、`ciiu`、地址、`financialSummary` 和 `filings`。`found` 为 false 表示不在 SIIS。两者都是 HTTP 200。",
		),
		fields: bullets(
			["`found` and `inLiquidationOrReorganization`", "`ciiu`, sector, and city", "`financialSummary` when a filing exists", "`filings` — empty on a clean miss"],
			["`found` e `inLiquidationOrReorganization`", "`ciiu`, sector y ciudad", "`financialSummary` si hay reporte", "`filings` — vacío en una ausencia limpia"],
			["`found` et `inLiquidationOrReorganization`", "`ciiu`, secteur et ville", "`financialSummary` s'il y a un dépôt", "`filings` — vide en cas d'absence nette"],
			["`found` e `inLiquidationOrReorganization`", "`ciiu`, setor e cidade", "`financialSummary` se houver registro", "`filings` — vazio numa ausência limpa"],
			["`found`와 `inLiquidationOrReorganization`", "`ciiu`, 부문, 도시", "신고가 있으면 `financialSummary`", "단순 미검출이면 빈 `filings`"],
			["`found` と `inLiquidationOrReorganization`", "`ciiu`、部門、都市", "届出があれば `financialSummary`", "単なる未検出では空の `filings`"],
			["`found` 与 `inLiquidationOrReorganization`", "`ciiu`、行业与城市", "有申报时的 `financialSummary`", "单纯未命中时 `filings` 为空"],
		),
		uses: bullets(
			["Pull the latest SIIS filing before you extend credit.", "Flag a company already in reorganization.", "Record a not-in-SIIS result as 200, not as a missing page."],
			["Traiga el último reporte SIIS antes de extender crédito.", "Marque una sociedad ya en reorganización.", "Registre un no-está-en-SIIS como 200, no como página ausente."],
			["Récupérez le dernier dépôt SIIS avant d'accorder un crédit.", "Signalez une société déjà en réorganisation.", "Enregistrez un absent-du-SIIS comme 200, pas comme une page manquante."],
			["Traga o último registro SIIS antes de estender crédito.", "Marque uma sociedade já em reorganização.", "Registre um fora-do-SIIS como 200, não como página ausente."],
			["신용을 주기 전에 최신 SIIS 신고를 가져옵니다.", "이미 회생 중인 회사를 표시합니다.", "SIIS에 없음을 404가 아닌 200으로 기록합니다."],
			["与信の前に最新の SIIS 届出を取ります。", "すでに更生中の会社に印を付けます。", "SIIS に無い結果を 404 ではなく 200 として記録します。"],
			["授信前拉取最新 SIIS 申报。", "标记已进入重组的公司。", "把不在 SIIS 记为 200，而不是 404。"],
		),
		notes: bullets(
			["Send a NIT or a name.", "`found` false is a successful clean miss.", "Do not map that body to HTTP 404."],
			["Envíe un NIT o un nombre.", "`found` false es una ausencia limpia exitosa.", "No mapee ese cuerpo a HTTP 404."],
			["Envoyez un NIT ou un nom.", "`found` à false est une absence nette réussie.", "Ne mappez pas ce corps sur un HTTP 404."],
			["Envie um NIT ou um nome.", "`found` false é uma ausência limpa bem-sucedida.", "Não mapeie esse corpo para HTTP 404."],
			["NIT 또는 이름을 보냅니다.", "`found` false는 성공한 단순 미검출입니다.", "그 본문을 HTTP 404로 매핑하지 않습니다."],
			["NIT または名前を送ります。", "`found` が false は成功した単なる未検出です。", "その本文を HTTP 404 に割り当てないでください。"],
			["发送 NIT 或名称。", "`found` 为 false 是成功的单纯未命中。", "不要把该正文映射成 HTTP 404。"],
		),
		sandParams: ['`documentNumber: "900673447"`', "Omit number and name", '`documentNumber: "800000111"`'],
	}),
];
