import { L, sandbox3, miss, notFound } from "./missing-30-endpoints.mjs";
import { finalEndpoints } from "./missing-30-final.mjs";

const page = (s) => ({
	notFound,
	missing: s.missing || miss(s.missingMessage || "missing parameter"),
	sandbox: s.sandbox || sandbox3(s.sandParams, s.sandResults),
	...s,
});
const T = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);
const B = (en, es, fr, pt, ko, ja, zh) => L(en, es, fr, pt, ko, ja, zh);
const neg = (flag) =>
	T(
		[`200 with ${flag} true on a hit.`, "409 when no search value is sent.", `200 with ${flag} false. A clean miss is not 404.`],
		[`200 con ${flag} en true si hay acierto.`, "409 si no hay valor de búsqueda.", `200 con ${flag} en false. La ausencia limpia no es 404.`],
		[`200 avec ${flag} à true si ça correspond.`, "409 si aucune valeur n'est envoyée.", `200 avec ${flag} à false. L'absence nette n'est pas un 404.`],
		[`200 com ${flag} true num acerto.`, "409 se nenhum valor for enviado.", `200 com ${flag} false. A ausência limpa não é 404.`],
		[`일치하면 ${flag}가 true인 200.`, "검색 값이 없으면 409.", `${flag}가 false인 200. 단순 미검출은 404가 아닙니다.`],
		[`一致すると ${flag} が true の 200。`, "検索値が無いと 409。", `${flag} が false の 200。単なる未検出は 404 ではありません。`],
		[`命中时 ${flag} 为 true 的 200。`, "没有检索值时为 409。", `${flag} 为 false 的 200。单纯未命中不是 404。`],
	);
const cleanNotes = (flag) =>
	B(
		[`A clean miss is HTTP 200 with \`${flag}\` false.`, "Send at least one search value.", "Do not map that 200 to 404."],
		[`Una ausencia limpia es HTTP 200 con \`${flag}\` en false.`, "Envíe al menos un valor de búsqueda.", "No mapee ese 200 a 404."],
		[`Une absence nette est un HTTP 200 avec \`${flag}\` à false.`, "Envoyez au moins une valeur de recherche.", "Ne mappez pas ce 200 sur un 404."],
		[`Uma ausência limpa é HTTP 200 com \`${flag}\` false.`, "Envie pelo menos um valor de busca.", "Não mapeie esse 200 para 404."],
		[`단순 미검출은 \`${flag}\`가 false인 HTTP 200입니다.`, "검색 값을 하나 이상 보냅니다.", "그 200을 404로 매핑하지 않습니다."],
		[`単なる未検出は \`${flag}\` が false の HTTP 200 です。`, "検索値を一つ以上送ります。", "その 200 を 404 に割り当てないでください。"],
		[`单纯未命中是 HTTP 200，且 \`${flag}\` 为 false。`, "至少发送一个检索值。", "不要把这个 200 映射成 404。"],
	);

const co = [
	{ name: "documentNumber", type: "string", req: "cond", example: "900123456", desc: T("NIT or person number. Alias `nit`.", "NIT o número. Alias `nit`.", "NIT ou numéro. Alias `nit`.", "NIT ou número. Alias `nit`.", "NIT 또는 번호. 별칭 `nit`.", "NIT または番号。別名 `nit`。", "NIT 或号码。别名 `nit`。") },
	{ name: "businessName", type: "string", req: "cond", example: "EJEMPLO SAS", desc: T("Name. Aliases `companyName` and `fullName`.", "Nombre. Alias `companyName` y `fullName`.", "Nom. Alias `companyName` et `fullName`.", "Nome. Alias `companyName` e `fullName`.", "이름. 별칭 `companyName`, `fullName`.", "名称。別名 `companyName` と `fullName`。", "名称。别名 `companyName` 与 `fullName`。") },
	{ name: "documentType", type: "string", req: "no", example: "NIT", desc: T("Optional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Opcional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Facultatif : `NIT`, `CC`, `CE`, `PAS`, `TI`.", "Opcional: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "선택: `NIT`, `CC`, `CE`, `PAS`, `TI`.", "任意: `NIT`、`CC`、`CE`、`PAS`、`TI`。", "可选：`NIT`、`CC`、`CE`、`PAS`、`TI`。") },
];
const pepP = [
	{ name: "fullName", type: "string", req: "cond", example: "MARIA LOPEZ", desc: T("Person name. Enough on its own. Alias searches also accept `partyName`, `entityName`, or `country` where that directory has them.", "Nombre. Basta por sí solo. También se aceptan `partyName`, `entityName` o `country` cuando el directorio los tiene.", "Nom. Il suffit seul. `partyName`, `entityName` ou `country` sont aussi acceptés quand l'annuaire les a.", "Nome. Basta sozinho. `partyName`, `entityName` ou `country` também são aceitos quando o diretório os tem.", "이름만으로 충분합니다. 디렉터리에 있으면 `partyName`, `entityName`, `country`도 받습니다.", "氏名だけで足ります。名簿にあれば `partyName`、`entityName`、`country` も受けます。", "只发姓名即可。名录有这些字段时也接受 `partyName`、`entityName` 或 `country`。") },
	{ name: "documentNumber", type: "string", req: "cond", example: "80123456", desc: T("Identifier, 4 to 30 characters. Enough on its own.", "Identificador de 4 a 30 caracteres.", "Identifiant de 4 à 30 caractères.", "Identificador de 4 a 30 caracteres.", "식별자 4–30자.", "識別子 4–30文字。", "标识 4 到 30 个字符。") },
	{ name: "documentType", type: "string", req: "no", example: "CC", desc: T("Optional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Facultatif : `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "Opcional: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "선택: `CC`, `NIT`, `CE`, `PAS`, `TI`, `CD`.", "任意: `CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。", "可选：`CC`、`NIT`、`CE`、`PAS`、`TI`、`CD`。") },
];

const pep = (file, api, code, flag, extraFlag, title, what) =>
	page({
		file,
		method: "GET",
		apiPath: api,
		code,
		group: "pep",
		example: { fullName: "MARIA LOPEZ" },
		sample: { fullName: "MARIA LOPEZ", documentNumber: "80123456", isPEP: true, ...(extraFlag ? { [extraFlag]: true } : {}), matches: [{ fullName: "MARIA LOPEZ" }] },
		noMatch: { fullName: "CLEAN NAME", isPEP: false, ...(extraFlag ? { [extraFlag]: false } : {}), matches: [] },
		missingMessage: "At least one search parameter (documentNumber, fullName, partyName, entityName, or country) must be provided.",
		params: pepP,
		title,
		sidebar: title,
		description: what,
		intro: what,
		after: T(
			`A hit sets \`isPEP\` true${extraFlag ? ` and \`${extraFlag}\` true` : ""}. A person who is simply not in this directory is HTTP 200 with \`isPEP\` false and an empty \`matches\` array. That clean miss is not 404.`,
			`Un acierto pone \`isPEP\` en true${extraFlag ? ` y \`${extraFlag}\` en true` : ""}. Quien simplemente no está en este directorio es HTTP 200 con \`isPEP\` en false y \`matches\` vacío. Esa ausencia no es 404.`,
			`Une correspondance met \`isPEP\` à true${extraFlag ? ` et \`${extraFlag}\` à true` : ""}. Une personne simplement absente de cet annuaire est un HTTP 200 avec \`isPEP\` à false et \`matches\` vide. Ce n'est pas un 404.`,
			`Um acerto põe \`isPEP\` em true${extraFlag ? ` e \`${extraFlag}\` em true` : ""}. Quem simplesmente não está neste diretório é HTTP 200 com \`isPEP\` false e \`matches\` vazio. Isso não é 404.`,
			`일치하면 \`isPEP\`가 true${extraFlag ? `이고 \`${extraFlag}\`도 true` : ""}입니다. 이 명부에 없으면 HTTP 200이고 \`isPEP\`는 false이며 \`matches\`는 비어 있습니다. 404가 아닙니다.`,
			`一致すると \`isPEP\` は true${extraFlag ? ` で \`${extraFlag}\` も true` : ""} です。この名簿に無い人は HTTP 200 で \`isPEP\` は false、\`matches\` は空です。404 ではありません。`,
			`命中时 \`isPEP\` 为 true${extraFlag ? `，且 \`${extraFlag}\` 为 true` : ""}。只是不在本名录中是 HTTP 200，\`isPEP\` 为 false，\`matches\` 为空。不是 404。`,
		),
		fields: B(
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` and `documentNumber`", "`matches` — empty on a clean miss"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` y `documentNumber`", "`matches` vacío en una ausencia limpia"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` et `documentNumber`", "`matches` vide en cas d'absence nette"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` e `documentNumber`", "`matches` vazio numa ausência limpa"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName`과 `documentNumber`", "단순 미검출이면 빈 `matches`"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` と `documentNumber`", "単なる未検出では空の `matches`"],
			["`isPEP`", extraFlag ? `\`${extraFlag}\`` : "`matches`", "`fullName` 与 `documentNumber`", "单纯未命中时 `matches` 为空"],
		),
		uses: B(
			["Screen a Colombian PEP directory before you onboard.", "Keep a not-listed person as HTTP 200.", "Search by name or by document number."],
			["Criba un directorio PEP de Colombia antes del alta.", "Guarde a quien no está listado como HTTP 200.", "Busque por nombre o por número de documento."],
			["Filtrez un annuaire PEP de Colombie avant l'entrée en relation.", "Conservez une personne non listée comme HTTP 200.", "Cherchez par nom ou par numéro."],
			["Filtre um diretório PEP da Colômbia antes da admissão.", "Guarde quem não está listado como HTTP 200.", "Busque por nome ou por número."],
			["온보딩 전에 콜롬비아 PEP 명부를 대조합니다.", "미등재 인물을 HTTP 200으로 보관합니다.", "이름 또는 문서 번호로 검색합니다."],
			["受付の前にコロンビアの PEP 名簿を照合します。", "未掲載の人物を HTTP 200 として保存します。", "氏名または文書番号で検索します。"],
			["准入前对照哥伦比亚 PEP 名录。", "把未列入的人存为 HTTP 200。", "按姓名或证件号检索。"],
		),
		notes: cleanNotes("isPEP"),
		sandParams: ['`fullName: "MARIA LOPEZ"`', "Omit every search value", '`fullName: "CLEAN NAME"`'],
		sandResults: neg(flag),
	});

export const tailEndpoints = [
	page({
		file: "business-validation/colombia-solidarity-sanctions.mdx",
		method: "GET",
		apiPath: "v2/co/supersolidaria/sanciones",
		code: "colombia_api_supersolidaria_sanciones",
		group: "businessCo",
		example: { documentNumber: "900555111" },
		sample: { documentNumber: "900555111", businessName: "COOPERATIVA EJEMPLO", isSanctioned: true, status: "SANCIONADO", sanctionsCount: 1 },
		noMatch: { documentNumber: "800000111", isSanctioned: false, status: "SIN SANCIONES REGISTRADAS", sanctionsCount: 0, matches: [] },
		missingMessage: "Either documentNumber/nit or businessName/fullName must be provided.",
		params: co,
		title: T("Colombia — Solidarity-sector sanctions", "Colombia — Sanciones del sector solidario", "Colombie — Sanctions du secteur solidaire", "Colômbia — Sanções do setor solidário", "콜롬비아 — 연대 부문 제재", "コロンビア — 連帯部門の制裁", "哥伦比亚 — 互助部门处分"),
		sidebar: T("🇨🇴 Colombia — Solidarity sanctions", "🇨🇴 Colombia — Sanciones solidarias", "🇨🇴 Colombie — Sanctions solidaires", "🇨🇴 Colômbia — Sanções solidárias", "🇨🇴 콜롬비아 — 연대 제재", "🇨🇴 コロンビア — 連帯制裁", "🇨🇴 哥伦比亚 — 互助处分"),
		description: T("Read Supersolidaria sanctions for a cooperative or person. A clean miss is HTTP 200 with isSanctioned false.", "Lee sanciones de Supersolidaria para una cooperativa o persona. Una ausencia limpia es HTTP 200 con isSanctioned en false.", "Lit les sanctions Supersolidaria d'une coopérative ou d'une personne. Une absence nette est un HTTP 200 avec isSanctioned à false.", "Lê sanções da Supersolidaria para uma cooperativa ou pessoa. Uma ausência limpa é HTTP 200 com isSanctioned false.", "협동조합이나 개인의 Supersolidaria 제재를 읽습니다. 단순 미검출은 isSanctioned가 false인 HTTP 200입니다.", "協同組合または個人の Supersolidaria 制裁を読みます。単なる未検出は isSanctioned が false の HTTP 200 です。", "读取合作社或个人的 Supersolidaria 处分。单纯未命中是 HTTP 200，且 isSanctioned 为 false。"),
		intro: T("The **solidarity sanctions** lookup reads the Supersolidaria bulletin of sanctioned entities and persons. Send a number or a name. `isSanctioned` is true only when a sanction is on file. A clean miss is HTTP 200 with `isSanctioned` false, `sanctionsCount` 0, and status `SIN SANCIONES REGISTRADAS`. This route does not return 404 for that miss.", "La consulta de **sanciones solidarias** lee el boletín de sancionados de Supersolidaria. Envíe un número o un nombre. `isSanctioned` es true solo si hay una sanción. Una ausencia limpia es HTTP 200 con `isSanctioned` en false, `sanctionsCount` 0 y estado `SIN SANCIONES REGISTRADAS`. Esta ruta no responde 404 por esa ausencia.", "La consultation des **sanctions solidaires** lit le bulletin des sanctionnés de Supersolidaria. Envoyez un numéro ou un nom. `isSanctioned` vaut true seulement s'il y a une sanction. Une absence nette est un HTTP 200 avec `isSanctioned` à false, `sanctionsCount` 0 et le statut `SIN SANCIONES REGISTRADAS`. Cette route ne répond pas 404 pour cette absence.", "A consulta de **sanções solidárias** lê o boletim de sancionados da Supersolidaria. Envie um número ou um nome. `isSanctioned` é true só se houver sanção. Uma ausência limpa é HTTP 200 com `isSanctioned` false, `sanctionsCount` 0 e estado `SIN SANCIONES REGISTRADAS`. Esta rota não responde 404 nessa ausência.", "**연대 제재** 조회는 Supersolidaria 제재 게시판을 읽습니다. 번호 또는 이름을 보냅니다. 제재가 있을 때만 `isSanctioned`가 true입니다. 단순 미검출은 HTTP 200이고 `isSanctioned`는 false, `sanctionsCount`는 0, 상태는 `SIN SANCIONES REGISTRADAS`입니다. 이 경로는 그 미검출에 404를 쓰지 않습니다.", "**連帯制裁**照会は Supersolidaria の制裁掲示を読みます。番号または名称を送ります。制裁があるときだけ `isSanctioned` は true です。単なる未検出は HTTP 200 で `isSanctioned` は false、`sanctionsCount` は 0、状態は `SIN SANCIONES REGISTRADAS` です。この経路はその未検出に 404 を使いません。", "**互助处分**查询读取 Supersolidaria 的受处分公告。发送号码或名称。仅当存在处分时 `isSanctioned` 为 true。单纯未命中是 HTTP 200，`isSanctioned` 为 false，`sanctionsCount` 为 0，状态为 `SIN SANCIONES REGISTRADAS`。本接口不对这种未命中返回 404。"),
		after: T("A hit includes `sanctionsCount` and `matches`. A clean miss is HTTP 200 with `isSanctioned` false.", "Un acierto incluye `sanctionsCount` y `matches`. Una ausencia limpia es HTTP 200 con `isSanctioned` en false.", "Une correspondance contient `sanctionsCount` et `matches`. Une absence nette est un HTTP 200 avec `isSanctioned` à false.", "Um acerto inclui `sanctionsCount` e `matches`. Uma ausência limpa é HTTP 200 com `isSanctioned` false.", "일치에는 `sanctionsCount`와 `matches`가 있습니다. 단순 미검출은 `isSanctioned`가 false인 HTTP 200입니다.", "一致には `sanctionsCount` と `matches` があります。単なる未検出は `isSanctioned` が false の HTTP 200 です。", "命中含 `sanctionsCount` 和 `matches`。单纯未命中是 HTTP 200，且 `isSanctioned` 为 false。"),
		fields: B(["`isSanctioned` and `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned` y `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned` et `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned` e `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned`와 `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned` と `sanctionsCount`", "`status`", "`matches`"], ["`isSanctioned` 与 `sanctionsCount`", "`status`", "`matches`"]),
		uses: B(["Screen a cooperative before you fund it.", "Record a clean solidarity check as 200.", "Search by NIT or by the sanctioned name."], ["Criba una cooperativa antes de financiarla.", "Registre un cheque limpio como 200.", "Busque por NIT o por el nombre sancionado."], ["Filtrez une coopérative avant de la financer.", "Enregistrez un contrôle net comme 200.", "Cherchez par NIT ou par le nom sanctionné."], ["Filtre uma cooperativa antes de financiá-la.", "Registre uma checagem limpa como 200.", "Busque por NIT ou pelo nome sancionado."], ["자금을 주기 전에 협동조합을 대조합니다.", "깨끗한 연대 조회를 200으로 기록합니다.", "NIT 또는 제재된 이름으로 검색합니다."], ["資金を出す前に協同組合を照合します。", "きれいな連帯照会を 200 として記録します。", "NIT または制裁された名称で検索します。"], ["放款前筛查合作社。", "把干净的互助检查存为 200。", "按 NIT 或受处分名称检索。"]),
		notes: cleanNotes("isSanctioned"),
		sandParams: ['`documentNumber: "900555111"`', "Omit number and name", '`documentNumber: "800000111"`'],
		sandResults: neg("isSanctioned"),
	}),
	pep("background-check/colombia-pep-electoral-candidates.mdx", "v2/co/pep/candidatos", "colombia_api_pep_candidatos", "isPEP", "isCandidate", T("Colombia — PEP electoral candidates", "Colombia — PEP candidatos electorales", "Colombie — PEP candidats électoraux", "Colômbia — PEP candidatos eleitorais", "콜롬비아 — PEP 선거 후보", "コロンビア — PEP 選挙候補", "哥伦比亚 — PEP 选举候选人"), T("Screen electoral candidates who are politically exposed persons in Colombia.", "Criba candidatos electorales que son personas expuestas políticamente en Colombia.", "Filtrez les candidats électoraux qui sont des personnes politiquement exposées en Colombie.", "Filtre candidatos eleitorais que são pessoas politicamente expostas na Colômbia.", "콜롬비아에서 정치적 노출 인물인 선거 후보를 대조합니다.", "コロンビアで政治的に露出した選挙候補を照合します。", "筛查哥伦比亚选举中的政治公众人物候选人。")),
	pep("background-check/colombia-pep-political-parties.mdx", "v2/co/pep/partidos-politicos", "colombia_api_pep_partidos_politicos", "isPEP", null, T("Colombia — PEP political party officials", "Colombia — PEP funcionarios de partidos políticos", "Colombie — PEP responsables de partis politiques", "Colômbia — PEP dirigentes de partidos políticos", "콜롬비아 — PEP 정당 임원", "コロンビア — PEP 政党役員", "哥伦比亚 — PEP 政党官员"), T("Screen officials of Colombian political parties.", "Criba funcionarios de partidos políticos de Colombia.", "Filtrez les responsables des partis politiques de Colombie.", "Filtre dirigentes de partidos políticos da Colômbia.", "콜롬비아 정당 임원을 대조합니다.", "コロンビアの政党役員を照合します。", "筛查哥伦比亚政党官员。")),
	pep("background-check/colombia-pep-government-structure.mdx", "v2/co/pep/estructura-gobierno", "colombia_api_pep_estructura_gobierno", "isPEP", null, T("Colombia — PEP government structure", "Colombia — PEP estructura de gobierno", "Colombie — PEP structure du gouvernement", "Colômbia — PEP estrutura de governo", "콜롬비아 — PEP 정부 구조", "コロンビア — PEP 政府機構", "哥伦比亚 — PEP 政府架构"), T("Screen public officials in the Colombian government structure.", "Criba servidores públicos de la estructura de gobierno de Colombia.", "Filtrez les agents publics de la structure gouvernementale colombienne.", "Filtre servidores públicos da estrutura de governo da Colômbia.", "콜롬비아 정부 구조의 공직자를 대조합니다.", "コロンビア政府機構の公務員を照合します。", "筛查哥伦比亚政府架构中的公职人员。")),
	pep("background-check/colombia-pep-diplomatic-corps.mdx", "v2/co/pep/cuerpo-diplomatico", "colombia_api_pep_cuerpo_diplomatico", "isPEP", "isDiplomat", T("Colombia — PEP diplomatic corps", "Colombia — PEP cuerpo diplomático", "Colombie — PEP corps diplomatique", "Colômbia — PEP corpo diplomático", "콜롬비아 — PEP 외교단", "コロンビア — PEP 外交団", "哥伦比亚 — PEP 外交使团"), T("Screen the diplomatic corps accredited in Colombia.", "Criba el cuerpo diplomático acreditado en Colombia.", "Filtrez le corps diplomatique accrédité en Colombie.", "Filtre o corpo diplomático acreditado na Colômbia.", "콜롬비아에 신임된 외교단을 대조합니다.", "コロンビアに接受された外交団を照合します。", "筛查派驻哥伦比亚的外交使团。")),
	pep("background-check/colombia-pep-foreign-missions.mdx", "v2/co/pep/misiones-exterior", "colombia_api_pep_misiones_exterior", "isPEP", "isForeignMissionOfficial", T("Colombia — PEP foreign missions", "Colombia — PEP misiones en el exterior", "Colombie — PEP missions à l'étranger", "Colômbia — PEP missões no exterior", "콜롬비아 — PEP 재외 공관", "コロンビア — PEP 在外公館", "哥伦比亚 — PEP 驻外使团"), T("Screen officials of Colombian missions and consulates abroad.", "Criba funcionarios de misiones y consulados de Colombia en el exterior.", "Filtrez les agents des missions et consulats de Colombie à l'étranger.", "Filtre funcionários de missões e consulados da Colômbia no exterior.", "콜롬비아 재외 공관과 영사관 직원을 대조합니다.", "コロンビアの在外公館と領事館の職員を照合します。", "筛查哥伦比亚驻外使领馆人员。")),
];

tailEndpoints.push(...finalEndpoints);
