import { L, sandbox3, miss, notFound } from "./missing-30-endpoints.mjs";
import { tailEndpoints } from "./missing-30-tail.mjs";

const page = (spec) => ({
	notFound,
	missing: spec.missing || miss(spec.missingMessage || "missing parameter"),
	sandbox: spec.sandbox || sandbox3(spec.sandParams, spec.sandResults),
	...spec,
});

const T = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);
const B = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);

const companyParams = [
	{ name: "documentNumber", type: "string", req: "cond", example: "900123456", desc: T("NIT or person number. Alias `nit`. Required if no name is sent.", "NIT o número. Alias `nit`. Obligatorio sin nombre.", "NIT ou numéro. Alias `nit`. Obligatoire sans nom.", "NIT ou número. Alias `nit`. Obrigatório sem nome.", "NIT 또는 번호. 별칭 `nit`. 이름이 없으면 필수.", "NIT または番号。別名 `nit`。名前が無いと必須。", "NIT 或号码。别名 `nit`。没有名称时必填。") },
	{ name: "businessName", type: "string", req: "cond", example: "EJEMPLO SAS", desc: T("Name. Aliases `companyName` and `fullName`. Required if no number is sent.", "Nombre. Alias `companyName` y `fullName`. Obligatorio sin número.", "Nom. Alias `companyName` et `fullName`. Obligatoire sans numéro.", "Nome. Alias `companyName` e `fullName`. Obrigatório sem número.", "이름. 별칭 `companyName`, `fullName`. 번호가 없으면 필수.", "名称。別名 `companyName` と `fullName`。番号が無いと必須。", "名称。别名 `companyName` 与 `fullName`。没有号码时必填。") },
	{ name: "documentType", type: "string", req: "no", example: "NIT", desc: T("Optional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Opcional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Facultatif : `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Opcional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "선택: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "任意: `NIT`、`CC`、`CE`、`PAS`、`TI`。", "可选：`NIT`、`CC`、`CE`、`PAS`、`TI`。") },
];

const pepParams = [
	{ name: "fullName", type: "string", req: "cond", example: "MARIA LOPEZ", desc: T("Person name. Enough on its own.", "Nombre. Basta por sí solo.", "Nom. Il suffit seul.", "Nome. Basta sozinho.", "이름만으로 충분합니다.", "氏名だけで足ります。", "只发姓名即可。") },
	{ name: "documentNumber", type: "string", req: "cond", example: "80123456", desc: T("Identifier, 4 to 30 characters. Enough on its own.", "Identificador de 4 a 30 caracteres.", "Identifiant de 4 à 30 caractères.", "Identificador de 4 a 30 caracteres.", "식별자 4–30자.", "識別子 4–30文字。", "标识 4 到 30 个字符。") },
	{ name: "documentType", type: "string", req: "no", example: "CC", desc: T("Optional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Facultatif : `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "선택: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "任意: `CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。", "可选：`CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。") },
];

const watchParams = [
	{ name: "fullName", type: "string", req: "cond", example: "SAMPLE NAME", desc: T("Name to screen. Enough on its own. For a wallet list, put the address here.", "Nombre a cribar. Basta por sí solo. En una lista de billeteras, ponga la dirección aquí.", "Nom à filtrer. Il suffit seul. Pour une liste de portefeuilles, mettez l'adresse ici.", "Nome a filtrar. Basta sozinho. Numa lista de carteiras, ponha o endereço aqui.", "대조할 이름. 이것만으로 충분합니다. 지갑 목록이면 주소를 여기에 넣습니다.", "照合する名前。これだけで足ります。ウォレット一覧なら住所をここに置きます。", "用于筛查的名称。只发它即可。钱包名单请把地址放在这里。") },
	{ name: "documentType", type: "string", req: "cond", example: "CPF", desc: T("Required with `documentNumber` when `fullName` is omitted. CPF, CI, CCPA, DUI, or CCUY also need `dateOfBirth`.", "Obligatorio con `documentNumber` si omite `fullName`. CPF, CI, CCPA, DUI o CCUY también exigen `dateOfBirth`.", "Obligatoire avec `documentNumber` si `fullName` est omis. CPF, CI, CCPA, DUI ou CCUY exigent aussi `dateOfBirth`.", "Obrigatório com `documentNumber` se omitir `fullName`. CPF, CI, CCPA, DUI ou CCUY também exigem `dateOfBirth`.", "`fullName`을 생략하면 `documentNumber`와 함께 필수입니다. CPF, CI, CCPA, DUI, CCUY는 `dateOfBirth`도 필요합니다.", "`fullName` を省くと `documentNumber` とセットで必須です。CPF、CI、CCPA、DUI、CCUY は `dateOfBirth` も必要です。", "省略 `fullName` 时必须与 `documentNumber` 一起发送。CPF、CI、CCPA、DUI 或 CCUY 还需要 `dateOfBirth`。") },
	{ name: "documentNumber", type: "string", req: "cond", example: "12345678901", desc: T("Identifier of at least 5 characters. Required with `documentType` when `fullName` is omitted.", "Identificador de al menos 5 caracteres. Obligatorio con `documentType` si omite `fullName`.", "Identifiant d'au moins 5 caractères. Obligatoire avec `documentType` si `fullName` est omis.", "Identificador de pelo menos 5 caracteres. Obrigatório com `documentType` se omitir `fullName`.", "5자 이상 식별자. `fullName`을 생략하면 `documentType`과 함께 필수입니다.", "5文字以上の識別子。`fullName` を省くと `documentType` とセットで必須です。", "至少 5 个字符的标识。省略 `fullName` 时必须与 `documentType` 一起发送。") },
	{ name: "dateOfBirth", type: "string", req: "cond", example: "1990-01-15", desc: T("Required when `fullName` is omitted and `documentType` is CPF, CI, CCPA, DUI, or CCUY.", "Obligatoria si omite `fullName` y el tipo es CPF, CI, CCPA, DUI o CCUY.", "Obligatoire si `fullName` est omis et que le type est CPF, CI, CCPA, DUI ou CCUY.", "Obrigatória se omitir `fullName` e o tipo for CPF, CI, CCPA, DUI ou CCUY.", "`fullName`을 생략하고 유형이 CPF, CI, CCPA, DUI, CCUY일 때 필수입니다.", "`fullName` を省き種別が CPF、CI、CCPA、DUI、CCUY のとき必須です。", "省略 `fullName` 且类型为 CPF、CI、CCPA、DUI 或 CCUY 时必填。") },
];

const neg = (flag) =>
	T(
		[`200 with ${flag} true on a hit.`, "409 when no search value is sent.", `200 with ${flag} false. A clean miss is not 404.`],
		[`200 con ${flag} en true si hay acierto.`, "409 si no envía ningún valor.", `200 con ${flag} en false. Una ausencia limpia no es 404.`],
		[`200 avec ${flag} à true en cas de correspondance.`, "409 si aucune valeur n'est envoyée.", `200 avec ${flag} à false. Une absence nette n'est pas un 404.`],
		[`200 com ${flag} true num acerto.`, "409 se nenhum valor for enviado.", `200 com ${flag} false. Uma ausência limpa não é 404.`],
		[`일치하면 ${flag}가 true인 200.`, "검색 값이 없으면 409.", `${flag}가 false인 200. 단순 미검출은 404가 아닙니다.`],
		[`一致すると ${flag} が true の 200。`, "検索値が無いと 409。", `${flag} が false の 200。単なる未検出は 404 ではありません。`],
		[`命中时 ${flag} 为 true 的 200。`, "没有检索值时为 409。", `${flag} 为 false 的 200。单纯未命中不是 404。`],
	);

const coMiss = { documentNumber: "800000111", matches: [] };

export const finishEndpoints = [
	page({
		file: "business-validation/colombia-financial-insolvency.mdx",
		method: "GET",
		apiPath: "v2/co/superfinanciera/concordatos",
		code: "colombia_api_superfinanciera_concordatos",
		group: "businessCo",
		example: { documentNumber: "860000001" },
		sample: { documentNumber: "860000001", businessName: "FINANCIERA EJEMPLO SA", inConcordatoOrLiquidation: true, status: "EN LIQUIDACION FORZOSA ADMINISTRATIVA", entityType: "Sociedad comisionista" },
		noMatch: { ...coMiss, inConcordatoOrLiquidation: false, status: "ACTIVA / SIN PROCESO DE CONCORDATO O LIQUIDACION" },
		params: companyParams,
		title: T("Colombia — Financial insolvency and liquidation", "Colombia — Concordatos y liquidaciones financieras", "Colombie — Concordats et liquidations financières", "Colômbia — Concordatas e liquidações financeiras", "콜롬비아 — 금융 회생과 청산", "コロンビア — 金融の和議と清算", "哥伦比亚 — 金融和解与清算"),
		sidebar: T("🇨🇴 Colombia — Financial insolvency", "🇨🇴 Colombia — Concordatos financieros", "🇨🇴 Colombie — Insolvabilité financière", "🇨🇴 Colômbia — Insolvência financeira", "🇨🇴 콜롬비아 — 금융 회생", "🇨🇴 コロンビア — 金融の和議", "🇨🇴 哥伦比亚 — 金融和解"),
		description: T("Screen Superintendencia Financiera concordato and liquidation records. A clean miss is HTTP 200 with inConcordatoOrLiquidation false.", "Criba concordatos y liquidaciones de la Superintendencia Financiera. Una ausencia limpia es HTTP 200 con inConcordatoOrLiquidation en false.", "Filtrez les concordats et liquidations de la Superintendencia Financiera. Une absence nette est un HTTP 200 avec inConcordatoOrLiquidation à false.", "Filtre concordatas e liquidações da Superintendencia Financiera. Uma ausência limpa é HTTP 200 com inConcordatoOrLiquidation false.", "금융감독원 회생·청산 기록을 대조합니다. 단순 미검출은 inConcordatoOrLiquidation이 false인 HTTP 200입니다.", "金融監督当局の和議・清算記録を照合します。単なる未検出は inConcordatoOrLiquidation が false の HTTP 200 です。", "对照金融监管局的和解与清算记录。单纯未命中是 HTTP 200，且 inConcordatoOrLiquidation 为 false。"),
		intro: T("The **financial insolvency** lookup reads Superintendencia Financiera concordato and liquidation rows. Send a NIT or a name. `inConcordatoOrLiquidation` is true only when a proceeding is on file. A company with no proceeding is still HTTP 200, with the flag false and a status that says there is no concordato or liquidation. This route does not use 404 for that clean miss.", "La consulta de **insolvencia financiera** lee concordatos y liquidaciones de la Superintendencia Financiera. Envíe un NIT o un nombre. `inConcordatoOrLiquidation` es true solo si hay un proceso. Una sociedad sin proceso sigue siendo HTTP 200, con la bandera en false. Esta ruta no usa 404 para esa ausencia limpia.", "La consultation d'**insolvabilité financière** lit les concordats et liquidations de la Superintendencia Financiera. Envoyez un NIT ou un nom. `inConcordatoOrLiquidation` vaut true seulement s'il y a une procédure. Une société sans procédure reste un HTTP 200, avec l'indicateur à false. Cette route n'utilise pas 404 pour cette absence nette.", "A consulta de **insolvência financeira** lê concordatas e liquidações da Superintendencia Financiera. Envie um NIT ou um nome. `inConcordatoOrLiquidation` é true só se houver um processo. Uma sociedade sem processo continua HTTP 200, com a bandeira false. Esta rota não usa 404 nessa ausência limpa.", "**금융 회생** 조회는 Superintendencia Financiera의 회생·청산 행을 읽습니다. NIT 또는 이름을 보냅니다. 절차가 있을 때만 `inConcordatoOrLiquidation`이 true입니다. 절차가 없어도 HTTP 200이고 플래그는 false입니다. 이 경로는 그 단순 미검출에 404를 쓰지 않습니다.", "**金融の和議**照会は Superintendencia Financiera の和議・清算の行を読みます。NIT または名称を送ります。手続があるときだけ `inConcordatoOrLiquidation` は true です。手続が無くても HTTP 200 でフラグは false です。この経路はその単なる未検出に 404 を使いません。", "**金融和解**查询读取金融监管局的和解与清算记录。发送 NIT 或名称。仅当存在程序时 `inConcordatoOrLiquidation` 为 true。没有程序仍是 HTTP 200，标志为 false。本接口不对这种单纯未命中使用 404。"),
		after: T("A hit includes `status`, `entityType`, and `inConcordatoOrLiquidation` true. A clean miss keeps HTTP 200 and sets the flag false.", "Un acierto incluye `status`, `entityType` e `inConcordatoOrLiquidation` en true. Una ausencia limpia mantiene HTTP 200 y la bandera en false.", "Une correspondance contient `status`, `entityType` et `inConcordatoOrLiquidation` à true. Une absence nette reste en HTTP 200 avec l'indicateur à false.", "Um acerto inclui `status`, `entityType` e `inConcordatoOrLiquidation` true. Uma ausência limpa mantém HTTP 200 e a bandeira false.", "일치에는 `status`, `entityType`, true인 `inConcordatoOrLiquidation`이 있습니다. 단순 미검출은 HTTP 200이고 플래그는 false입니다.", "一致には `status`、`entityType`、true の `inConcordatoOrLiquidation` があります。単なる未検出は HTTP 200 でフラグは false です。", "命中含 `status`、`entityType`，且 `inConcordatoOrLiquidation` 为 true。单纯未命中保持 HTTP 200，标志为 false。"),
		fields: B(["`inConcordatoOrLiquidation`", "`status` and `entityType`", "`matches` — empty on a clean miss"], ["`inConcordatoOrLiquidation`", "`status` y `entityType`", "`matches` vacío en una ausencia limpia"], ["`inConcordatoOrLiquidation`", "`status` et `entityType`", "`matches` vide en cas d'absence nette"], ["`inConcordatoOrLiquidation`", "`status` e `entityType`", "`matches` vazio numa ausência limpa"], ["`inConcordatoOrLiquidation`", "`status`와 `entityType`", "단순 미검출이면 빈 `matches`"], ["`inConcordatoOrLiquidation`", "`status` と `entityType`", "単なる未検出では空の `matches`"], ["`inConcordatoOrLiquidation`", "`status` 与 `entityType`", "单纯未命中时 `matches` 为空"]),
		uses: B(["Stop onboarding a financial entity already in liquidation.", "Keep a clean financial screen as 200.", "Search by NIT or legal name."], ["Detenga el alta de una entidad financiera ya en liquidación.", "Guarde un cribado limpio como 200.", "Busque por NIT o razón social."], ["Arrêtez l'entrée en relation d'une entité déjà en liquidation.", "Conservez un filtrage net comme 200.", "Cherchez par NIT ou raison sociale."], ["Interrompa a admissão de uma entidade já em liquidação.", "Guarde uma triagem limpa como 200.", "Busque por NIT ou razão social."], ["이미 청산 중인 금융회사의 온보딩을 멈춥니다.", "깨끗한 금융 조회를 200으로 보관합니다.", "NIT 또는 법인명으로 검색합니다."], ["すでに清算中の金融会社の受付を止めます。", "きれいな金融照会を 200 として保存します。", "NIT または法人名で検索します。"], ["停止已在清算中的金融机构的准入。", "把干净的金融筛查存为 200。", "按 NIT 或法定名称检索。"]),
		notes: B(["A clean miss is HTTP 200 with `inConcordatoOrLiquidation` false.", "Send a number or a name.", "Do not map that 200 to 404."], ["Una ausencia limpia es HTTP 200 con `inConcordatoOrLiquidation` en false.", "Envíe un número o un nombre.", "No mapee ese 200 a 404."], ["Une absence nette est un HTTP 200 avec `inConcordatoOrLiquidation` à false.", "Envoyez un numéro ou un nom.", "Ne mappez pas ce 200 sur un 404."], ["Uma ausência limpa é HTTP 200 com `inConcordatoOrLiquidation` false.", "Envie um número ou um nome.", "Não mapeie esse 200 para 404."], ["단순 미검출은 `inConcordatoOrLiquidation`이 false인 HTTP 200입니다.", "번호 또는 이름을 보냅니다.", "그 200을 404로 매핑하지 않습니다."], ["単なる未検出は `inConcordatoOrLiquidation` が false の HTTP 200 です。", "番号または名前を送ります。", "その 200 を 404 に割り当てないでください。"], ["单纯未命中是 HTTP 200，且 `inConcordatoOrLiquidation` 为 false。", "发送号码或名称。", "不要把这个 200 映射成 404。"]),
		sandParams: ['`documentNumber: "860000001"`', "Omit number and name", '`documentNumber: "800000111"`'],
		sandResults: neg("inConcordatoOrLiquidation"),
	}),
];

finishEndpoints.push(...tailEndpoints);
