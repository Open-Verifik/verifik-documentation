/**
 * Generate the 101 missing global / US / EU watchlist MDX pages in all 7 locales
 * and register them in the sidebars.
 *
 * Source of the endpoint paths: production appfeatures (`v2/{slug}`),
 * mirrored in scripts/data/watchlist-101-catalog.mjs.
 *
 * Usage: node scripts/generate-watchlist-101-docs.mjs
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { lists } from "./data/watchlist-101-catalog.mjs";

const require = createRequire(import.meta.url);
const { aliasesFor } = require("./lib/endpoint-aliases.js");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const LOCALES = ["en", "es", "fr", "pt", "ko", "ja", "zh"];
const LOCALE_DIR = {
	en: "docs",
	es: "docs-es",
	fr: "docs-fr",
	pt: "docs-pt",
	ko: "docs-ko",
	ja: "docs-ja",
	zh: "docs-zh",
};

const GROUPS = ["us", "eu", "international"];

const GROUP_LABEL = {
	en: { us: "United States", eu: "European Union", international: "International" },
	es: { us: "Estados Unidos", eu: "Unión Europea", international: "Internacional" },
	fr: { us: "États-Unis", eu: "Union européenne", international: "International" },
	pt: { us: "Estados Unidos", eu: "União Europeia", international: "Internacional" },
	ko: { us: "미국", eu: "유럽연합", international: "국제" },
	ja: { us: "米国", eu: "欧州連合", international: "国際" },
	zh: { us: "美国", eu: "欧盟", international: "国际" },
};

const ROOT_LABEL = {
	en: "Watchlists and sanctions",
	es: "Listas restrictivas y sanciones",
	fr: "Listes de surveillance et sanctions",
	pt: "Listas de vigilância e sanções",
	ko: "감시 목록 및 제재",
	ja: "ウォッチリストと制裁",
	zh: "观察名单与制裁",
};

const cap = (value) => (value ? value.charAt(0).toLocaleUpperCase() + value.slice(1) : value);

const TOKEN = {
	en: "<your_token>",
	es: "<tu_token>",
	fr: "<votre_token>",
	pt: "<seu_token>",
	ko: "<token>",
	ja: "<token>",
	zh: "<token>",
};

const UI = {
	en: {
		apiRef: "API Reference",
		headers: [
			["Name", "Value", "Description"],
			["Content-Type", "`application/json`", "Request format"],
			["Accept", "`application/json`", "Response format"],
			["Authorization", "`Bearer <token>`", "Verifik JWT"],
		],
		paramCols: ["Parameter", "Type", "Required", "Example", "Description"],
		fullNameDesc:
			"Full legal name of the person, or the registered name of the organization. Required when `documentNumber` is not sent.",
		docNumDesc:
			"Identification number or corporate registration number, without spaces. Required when `fullName` is not sent.",
		conditional: "Conditional",
		useCases: "Use Cases",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200 (Match)", "200 (No match)", "409 (Missing parameters)"],
		notes: "Notes",
		authLink: "Create or renew the JWT with the [authentication API](/authentication/renew-your-token-jwt).",
		lead: (title, issuer, juris) =>
			`Screen a person or organization against the **${title}**. ${cap(issuer)} publishes this list for ${juris}.`,
		call: (found, hints) =>
			`Send \`fullName\`, \`documentNumber\`, or both. At least one of the two is required. The response sets \`${found}\` to \`true\` when the query matches a published record and to \`false\` when it does not. On a match, \`details\` includes ${hints}. Use the result in KYC, AML/CFT, vendor onboarding, and payment screening. Review every match before you rely on it. This call does not replace the official list and it is not a legal determination.`,
		afterUrl: (found, hints) =>
			`A successful response returns \`data.fullName\`, \`data.firstName\` and \`data.lastName\` when the source record splits the name, \`data.documentNumber\` when you sent one, \`data.${found}\`, and \`data.details\`. On a match, \`details\` includes ${hints}. The \`signature\` object includes \`dateTime\` and the message \`Certified by Verifik.co\`. When \`${found}\` is \`false\`, \`details\` is an empty object.`,
		description: (title, issuer) =>
			`Screen a person or organization against the ${title} published by ${issuer}.`,
		notesBullets: (found) => [
			`Send \`fullName\` or \`documentNumber\`. At least one is required. If both are missing, the API returns HTTP 409 with code \`MissingParameter\` and the message \`Either fullName or documentNumber must be provided\`.`,
			`\`${found}\` is \`true\` when the query matches a record on this list and \`false\` when it does not. \`details\` is an empty object when there is no match.`,
			`The match example shows the response shape. A live match returns the attributes published for that record on this list.`,
			`A match is a screening result for compliance review. It is not a legal determination and it does not replace the official source.`,
			`Authenticate with a Bearer JWT in the \`Authorization\` header. ${UI.en.authLink}`,
			`The result reflects the list at the time of the call. Run a new request when you need a later result.`,
		],
	},
	es: {
		apiRef: "Referencia de la API",
		headers: [
			["Nombre", "Valor", "Descripción"],
			["Content-Type", "`application/json`", "Formato de la solicitud"],
			["Accept", "`application/json`", "Formato de la respuesta"],
			["Authorization", "`Bearer <token>`", "JWT de Verifik"],
		],
		paramCols: ["Parámetro", "Tipo", "Requerido", "Ejemplo", "Descripción"],
		fullNameDesc:
			"Nombre legal completo de la persona o razón social de la organización. Obligatorio si no envía `documentNumber`.",
		docNumDesc:
			"Número de identificación o de registro societario, sin espacios. Obligatorio si no envía `fullName`.",
		conditional: "Condicional",
		useCases: "Casos de uso",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200 (Coincidencia)", "200 (Sin coincidencia)", "409 (Parámetros faltantes)"],
		notes: "Notas",
		authLink:
			"Cree o renueve el JWT con la [API de autenticación](/verifik-es/autenticacion/renovar-tu-token-jwt).",
		lead: (title, issuer, juris) =>
			`Consulte si una persona u organización figura en **${title}**. ${cap(issuer)} publica esta lista para ${juris}.`,
		call: (found, hints) =>
			`Envíe \`fullName\`, \`documentNumber\` o ambos. Al menos uno de los dos es obligatorio. La respuesta establece \`${found}\` en \`true\` cuando la consulta coincide con un registro publicado y en \`false\` cuando no coincide. Si hay coincidencia, \`details\` incluye ${hints}. Use el resultado en KYC, ALA/CFT, alta de proveedores y filtrado de pagos. Revise cada coincidencia antes de depender de ella. Esta llamada no sustituye la lista oficial y no es una determinación legal.`,
		afterUrl: (found, hints) =>
			`Una respuesta correcta devuelve \`data.fullName\`, \`data.firstName\` y \`data.lastName\` cuando el registro de origen separa el nombre, \`data.documentNumber\` si usted lo envió, \`data.${found}\` y \`data.details\`. Si hay coincidencia, \`details\` incluye ${hints}. El objeto \`signature\` incluye \`dateTime\` y el mensaje \`Certified by Verifik.co\`. Cuando \`${found}\` es \`false\`, \`details\` es un objeto vacío.`,
		description: (title, issuer) =>
			`Consulte si una persona u organización figura en ${title}, lista publicada por ${issuer}.`,
		notesBullets: (found) => [
			`Envíe \`fullName\` o \`documentNumber\`. Al menos uno es obligatorio. Si faltan ambos, la API responde HTTP 409 con código \`MissingParameter\` y el mensaje \`Either fullName or documentNumber must be provided\`.`,
			`\`${found}\` es \`true\` cuando la consulta coincide con un registro de esta lista y \`false\` cuando no coincide. \`details\` es un objeto vacío si no hay coincidencia.`,
			`El ejemplo de coincidencia muestra la forma de la respuesta. Una coincidencia real devuelve los atributos publicados para ese registro en esta lista.`,
			`Una coincidencia es un resultado de cribado para revisión de cumplimiento. No es una determinación legal y no sustituye la fuente oficial.`,
			`Autentique con un JWT Bearer en el encabezado \`Authorization\`. ${UI.es.authLink}`,
			`El resultado refleja la lista en el momento de la llamada. Haga una nueva solicitud cuando necesite un resultado posterior.`,
		],
	},
	fr: {
		apiRef: "Référence de l'API",
		headers: [
			["Nom", "Valeur", "Description"],
			["Content-Type", "`application/json`", "Format de la requête"],
			["Accept", "`application/json`", "Format de la réponse"],
			["Authorization", "`Bearer <token>`", "JWT Verifik"],
		],
		paramCols: ["Paramètre", "Type", "Requis", "Exemple", "Description"],
		fullNameDesc:
			"Nom légal complet de la personne ou dénomination de l'organisation. Obligatoire si `documentNumber` n'est pas envoyé.",
		docNumDesc:
			"Numéro d'identification ou d'immatriculation, sans espaces. Obligatoire si `fullName` n'est pas envoyé.",
		conditional: "Conditionnel",
		useCases: "Cas d'usage",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200 (Correspondance)", "200 (Aucune correspondance)", "409 (Paramètres manquants)"],
		notes: "Notes",
		authLink: null,
		lead: (title, issuer, juris) =>
			`Vérifiez si une personne ou une organisation figure sur **${title}**. ${cap(issuer)} publie cette liste pour ${juris}.`,
		call: (found, hints) =>
			`Envoyez \`fullName\`, \`documentNumber\`, ou les deux. Au moins l'un des deux est obligatoire. La réponse met \`${found}\` à \`true\` lorsque la requête correspond à un enregistrement publié et à \`false\` dans le cas contraire. En cas de correspondance, \`details\` contient ${hints}. Utilisez le résultat pour le KYC, la LCB-FT, l'intégration des fournisseurs et le filtrage des paiements. Examinez chaque correspondance avant de vous y fier. Cet appel ne remplace pas la liste officielle et ne constitue pas une décision juridique.`,
		afterUrl: (found, hints) =>
			`Une réponse réussie renvoie \`data.fullName\`, \`data.firstName\` et \`data.lastName\` lorsque la source sépare le nom, \`data.documentNumber\` si vous l'avez envoyé, \`data.${found}\` et \`data.details\`. En cas de correspondance, \`details\` contient ${hints}. L'objet \`signature\` contient \`dateTime\` et le message \`Certified by Verifik.co\`. Lorsque \`${found}\` vaut \`false\`, \`details\` est un objet vide.`,
		description: (title, issuer) =>
			`Vérifiez si une personne ou une organisation figure sur ${title}, liste publiée par ${issuer}.`,
		notesBullets: (found) => [
			`Envoyez \`fullName\` ou \`documentNumber\`. Au moins l'un des deux est obligatoire. S'ils manquent tous les deux, l'API renvoie HTTP 409 avec le code \`MissingParameter\` et le message \`Either fullName or documentNumber must be provided\`.`,
			`\`${found}\` vaut \`true\` lorsque la requête correspond à un enregistrement de cette liste et \`false\` dans le cas contraire. \`details\` est un objet vide s'il n'y a pas de correspondance.`,
			`L'exemple de correspondance montre la forme de la réponse. Une correspondance réelle renvoie les attributs publiés pour cet enregistrement sur cette liste.`,
			`Une correspondance est un résultat de criblage destiné à un examen de conformité. Ce n'est pas une décision juridique et cela ne remplace pas la source officielle.`,
			`Authentifiez-vous avec un JWT Bearer dans l'en-tête \`Authorization\`.`,
			`Le résultat reflète la liste au moment de l'appel. Relancez une requête lorsque vous avez besoin d'un résultat ultérieur.`,
		],
	},
	pt: {
		apiRef: "Referência da API",
		headers: [
			["Nome", "Valor", "Descrição"],
			["Content-Type", "`application/json`", "Formato da solicitação"],
			["Accept", "`application/json`", "Formato da resposta"],
			["Authorization", "`Bearer <token>`", "JWT da Verifik"],
		],
		paramCols: ["Parâmetro", "Tipo", "Obrigatório", "Exemplo", "Descrição"],
		fullNameDesc:
			"Nome legal completo da pessoa ou denominação da organização. Obrigatório quando `documentNumber` não é enviado.",
		docNumDesc:
			"Número de identificação ou de registro societário, sem espaços. Obrigatório quando `fullName` não é enviado.",
		conditional: "Condicional",
		useCases: "Casos de uso",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200 (Correspondência)", "200 (Sem correspondência)", "409 (Parâmetros ausentes)"],
		notes: "Notas",
		authLink: null,
		lead: (title, issuer, juris) =>
			`Consulte se uma pessoa ou organização consta em **${title}**. ${cap(issuer)} publica esta lista para ${juris}.`,
		call: (found, hints) =>
			`Envie \`fullName\`, \`documentNumber\` ou ambos. Pelo menos um dos dois é obrigatório. A resposta define \`${found}\` como \`true\` quando a consulta corresponde a um registro publicado e como \`false\` quando não corresponde. Em uma correspondência, \`details\` inclui ${hints}. Use o resultado em KYC, PLD/CFT, cadastro de fornecedores e triagem de pagamentos. Revise cada correspondência antes de depender dela. Esta chamada não substitui a lista oficial e não é uma determinação legal.`,
		afterUrl: (found, hints) =>
			`Uma resposta bem-sucedida devolve \`data.fullName\`, \`data.firstName\` e \`data.lastName\` quando a fonte separa o nome, \`data.documentNumber\` se você o enviou, \`data.${found}\` e \`data.details\`. Em uma correspondência, \`details\` inclui ${hints}. O objeto \`signature\` inclui \`dateTime\` e a mensagem \`Certified by Verifik.co\`. Quando \`${found}\` é \`false\`, \`details\` é um objeto vazio.`,
		description: (title, issuer) =>
			`Consulte se uma pessoa ou organização consta em ${title}, lista publicada por ${issuer}.`,
		notesBullets: (found) => [
			`Envie \`fullName\` ou \`documentNumber\`. Pelo menos um é obrigatório. Se ambos faltarem, a API retorna HTTP 409 com o código \`MissingParameter\` e a mensagem \`Either fullName or documentNumber must be provided\`.`,
			`\`${found}\` é \`true\` quando a consulta corresponde a um registro desta lista e \`false\` quando não corresponde. \`details\` é um objeto vazio quando não há correspondência.`,
			`O exemplo de correspondência mostra a forma da resposta. Uma correspondência real devolve os atributos publicados para esse registro nesta lista.`,
			`Uma correspondência é um resultado de triagem para revisão de conformidade. Não é uma determinação legal e não substitui a fonte oficial.`,
			`Autentique com um JWT Bearer no cabeçalho \`Authorization\`.`,
			`O resultado reflete a lista no momento da chamada. Faça uma nova solicitação quando precisar de um resultado posterior.`,
		],
	},
	ko: {
		apiRef: "API 레퍼런스",
		headers: [
			["이름", "값", "설명"],
			["Content-Type", "`application/json`", "요청 형식"],
			["Accept", "`application/json`", "응답 형식"],
			["Authorization", "`Bearer <token>`", "Verifik JWT"],
		],
		paramCols: ["파라미터", "유형", "필수", "예시", "설명"],
		fullNameDesc:
			"개인 또는 조직의 법적 명칭입니다. `documentNumber`를 보내지 않을 때 필요합니다.",
		docNumDesc:
			"공백 없는 신분증 번호 또는 법인 등록번호입니다. `fullName`을 보내지 않을 때 필요합니다.",
		conditional: "조건부",
		useCases: "사용 사례",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200 (일치)", "200 (불일치)", "409 (파라미터 누락)"],
		notes: "참고",
		authLink: null,
		lead: (title, issuer, juris) =>
			`개인 또는 조직이 **${title}**에 등재되어 있는지 조회합니다. ${cap(issuer)}가 ${juris} 관련 목록으로 이 명단을 공개합니다.`,
		call: (found, hints) =>
			`\`fullName\`, \`documentNumber\` 또는 둘 다 보낼 수 있습니다. 둘 중 하나 이상은 필수입니다. 조회가 공개 기록과 일치하면 응답의 \`${found}\`는 \`true\`이고, 일치하지 않으면 \`false\`입니다. 일치하면 \`details\`에 ${hints} 포함됩니다. KYC, AML/CFT, 공급업체 온보딩, 지급 심사에 사용하십시오. 결과를 그대로 쓰기 전에 일치 건을 검토하십시오. 이 호출은 공식 명단을 대체하지 않으며 법적 판단이 아닙니다.`,
		afterUrl: (found, hints) =>
			`성공 응답에는 \`data.fullName\`, 원천 기록이 이름을 나눌 때의 \`data.firstName\` 및 \`data.lastName\`, 요청에 포함한 경우 \`data.documentNumber\`, \`data.${found}\`, \`data.details\`가 있습니다. 일치하면 \`details\`에는 ${hints}이(가) 포함됩니다. \`signature\` 객체에는 \`dateTime\`과 메시지 \`Certified by Verifik.co\`가 있습니다. \`${found}\`가 \`false\`이면 \`details\`는 빈 객체입니다.`,
		description: (title, issuer) =>
			`${issuer}가 공개한 ${title}에서 개인 또는 조직을 조회합니다.`,
		notesBullets: (found) => [
			`\`fullName\` 또는 \`documentNumber\`를 보내십시오. 하나 이상은 필수입니다. 둘 다 없으면 API는 HTTP 409, 코드 \`MissingParameter\`, 메시지 \`Either fullName or documentNumber must be provided\`를 반환합니다.`,
			`\`${found}\`는 이 목록의 기록과 일치하면 \`true\`이고, 그렇지 않으면 \`false\`입니다. 불일치이면 \`details\`는 빈 객체입니다.`,
			`일치 예시는 응답 형식을 보여 줍니다. 실제 일치는 이 목록에 공개된 해당 기록의 속성을 반환합니다.`,
			`일치는 컴플라이언스 검토를 위한 스크리닝 결과입니다. 법적 판단이 아니며 공식 출처를 대체하지 않습니다.`,
			`\`Authorization\` 헤더에 Bearer JWT로 인증하십시오.`,
			`결과는 호출 시점의 목록을 반영합니다. 이후 결과가 필요하면 새로 요청하십시오.`,
		],
	},
	ja: {
		apiRef: "API リファレンス",
		headers: [
			["名前", "値", "説明"],
			["Content-Type", "`application/json`", "リクエスト形式"],
			["Accept", "`application/json`", "レスポンス形式"],
			["Authorization", "`Bearer <token>`", "Verifik の JWT"],
		],
		paramCols: ["パラメータ", "型", "必須", "例", "説明"],
		fullNameDesc:
			"個人の法的氏名、または組織の登録名です。`documentNumber` を送らない場合は必須です。",
		docNumDesc:
			"空白を含まない識別番号または法人登録番号です。`fullName` を送らない場合は必須です。",
		conditional: "条件付き",
		useCases: "用途",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200（一致）", "200（不一致）", "409（パラメータ不足）"],
		notes: "注意",
		authLink: null,
		lead: (title, issuer, juris) =>
			`人物または組織が**${title}**に掲載されているかを照会します。${cap(issuer)}が${juris}向けにこのリストを公開しています。`,
		call: (found, hints) =>
			`\`fullName\`、\`documentNumber\`、またはその両方を送信します。少なくとも一方は必須です。照会が公開記録と一致すると \`${found}\` は \`true\`、一致しないと \`false\` です。一致時の \`details\` には${hints}が含まれます。KYC、AML/CFT、取引先登録、支払い審査に使います。結果を用いる前に一致を確認してください。この呼び出しは公式リストの代わりではなく、法的判断でもありません。`,
		afterUrl: (found, hints) =>
			`成功レスポンスには \`data.fullName\`、原資料が氏名を分ける場合の \`data.firstName\` と \`data.lastName\`、送信した場合の \`data.documentNumber\`、\`data.${found}\`、\`data.details\` が含まれます。一致時の \`details\` には${hints}が含まれます。\`signature\` には \`dateTime\` とメッセージ \`Certified by Verifik.co\` が含まれます。\`${found}\` が \`false\` のとき \`details\` は空のオブジェクトです。`,
		description: (title, issuer) =>
			`${issuer}が公開する${title}に対して、人物または組織を照会します。`,
		notesBullets: (found) => [
			`\`fullName\` または \`documentNumber\` を送ってください。少なくとも一方は必須です。両方がない場合、API は HTTP 409、コード \`MissingParameter\`、メッセージ \`Either fullName or documentNumber must be provided\` を返します。`,
			`\`${found}\` は、このリストの記録と一致すると \`true\`、一致しないと \`false\` です。不一致のとき \`details\` は空のオブジェクトです。`,
			`一致例はレスポンスの形を示します。実際の一致では、このリストに公開されているその記録の属性が返ります。`,
			`一致はコンプライアンス審査のためのスクリーニング結果です。法的判断ではなく、公式の情報源に代わるものでもありません。`,
			`\`Authorization\` ヘッダーの Bearer JWT で認証してください。`,
			`結果は呼び出し時点のリストを反映します。後の結果が必要なときは、改めてリクエストしてください。`,
		],
	},
	zh: {
		apiRef: "API 参考",
		headers: [
			["名称", "值", "说明"],
			["Content-Type", "`application/json`", "请求格式"],
			["Accept", "`application/json`", "响应格式"],
			["Authorization", "`Bearer <token>`", "Verifik JWT"],
		],
		paramCols: ["参数", "类型", "是否必填", "示例", "说明"],
		fullNameDesc: "个人的法定姓名或组织的注册名称。未发送 `documentNumber` 时必填。",
		docNumDesc: "不含空格的身份证件号码或机构注册号。未发送 `fullName` 时必填。",
		conditional: "条件必填",
		useCases: "使用场景",
		reqTabs: ["Node.js / JavaScript", "Python", "cURL"],
		resTabs: ["200（命中）", "200（未命中）", "409（缺少参数）"],
		notes: "说明",
		authLink: null,
		lead: (title, issuer, juris) =>
			`查询个人或组织是否列入**${title}**。${cap(issuer)}发布该名单，用于${juris}。`,
		call: (found, hints) =>
			`可发送 \`fullName\`、\`documentNumber\` 或两者。至少提供其中一项。查询与已发布记录匹配时，\`${found}\` 为 \`true\`，否则为 \`false\`。命中时 \`details\` 包含${hints}。可将结果用于 KYC、反洗钱/反恐怖融资、供应商准入和付款筛查。在采信之前复核每一条命中。本次调用不替代官方名单，也不是法律认定。`,
		afterUrl: (found, hints) =>
			`成功响应包含 \`data.fullName\`、来源记录拆分姓名时的 \`data.firstName\` 与 \`data.lastName\`、请求中附带时的 \`data.documentNumber\`、\`data.${found}\` 以及 \`data.details\`。命中时，\`details\` 包含${hints}。\`signature\` 对象包含 \`dateTime\` 以及消息 \`Certified by Verifik.co\`。当 \`${found}\` 为 \`false\` 时，\`details\` 为空对象。`,
		description: (title, issuer) => `查询个人或组织是否列入${issuer}发布的${title}。`,
		notesBullets: (found) => [
			`请发送 \`fullName\` 或 \`documentNumber\`。至少提供一项。若两者都缺失，API 返回 HTTP 409，代码为 \`MissingParameter\`，消息为 \`Either fullName or documentNumber must be provided\`。`,
			`\`${found}\` 在查询命中本名单记录时为 \`true\`，未命中时为 \`false\`。未命中时 \`details\` 为空对象。`,
			`命中示例展示响应结构。实际命中会返回该记录在本名单上公布的属性。`,
			`命中是供合规复核的筛查结果。它不是法律认定，也不替代官方来源。`,
			`请在 \`Authorization\` 头中使用 Bearer JWT 进行认证。`,
			`结果反映调用当时的名单。需要更新结果时，请重新发起请求。`,
		],
	},
};

const USE_CASES = {
	sanctions: {
		en: [
			"**Sanctions screening:** Check customers, counterparties, and beneficiaries before onboarding or releasing a payment.",
			"**AML/CFT reviews:** Record a screen against this jurisdiction's published measures.",
			"**Audit trail:** Keep the certified response with the case file.",
		],
		es: [
			"**Cribado de sanciones:** Verifique clientes, contrapartes y beneficiarios antes del alta o de liberar un pago.",
			"**Revisiones ALA/CFT:** Deje constancia de la consulta frente a las medidas publicadas de esta jurisdicción.",
			"**Pista de auditoría:** Conserve la respuesta certificada en el expediente.",
		],
		fr: [
			"**Criblage de sanctions :** Vérifiez clients, contreparties et bénéficiaires avant l'entrée en relation ou le déblocage d'un paiement.",
			"**Revues LCB-FT :** Documentez un contrôle au regard des mesures publiées de cette juridiction.",
			"**Piste d'audit :** Conservez la réponse certifiée dans le dossier.",
		],
		pt: [
			"**Triagem de sanções:** Verifique clientes, contrapartes e beneficiários antes do cadastro ou da liberação de um pagamento.",
			"**Revisões de PLD/CFT:** Registre a consulta frente às medidas publicadas desta jurisdição.",
			"**Trilha de auditoria:** Guarde a resposta certificada no processo.",
		],
		ko: [
			"**제재 스크리닝:** 온보딩이나 지급 전에 고객, 거래 상대방, 수익자를 조회합니다.",
			"**AML/CFT 검토:** 이 관할의 공개 조치에 대한 조회를 기록합니다.",
			"**감사 추적:** 인증된 응답을 사건 파일에 보관합니다.",
		],
		ja: [
			"**制裁スクリーニング:** 取引開始や支払い実行の前に、顧客、相手方、受益者を照会します。",
			"**AML/CFT の確認:** この法域が公開している措置に対する照会を記録します。",
			"**監査証跡:** 認証済みレスポンスを案件ファイルに残します。",
		],
		zh: [
			"**制裁筛查：** 在准入或放行付款之前核查客户、交易对手和受益人。",
			"**反洗钱/反恐怖融资复核：** 记录针对该司法辖区已公布措施的筛查。",
			"**审计留痕：** 将经认证的响应保存在案件档案中。",
		],
	},
	wanted: {
		en: [
			"**Law-enforcement screening:** Check whether a subject is published as wanted by this authority.",
			"**Enhanced due diligence:** Review a name that matches a public wanted notice before you proceed.",
			"**Case records:** Store the certified response with the screening file.",
		],
		es: [
			"**Cribado policial:** Compruebe si un sujeto figura como buscado por esta autoridad.",
			"**Debida diligencia reforzada:** Revise un nombre que coincida con un aviso público de búsqueda antes de continuar.",
			"**Expediente:** Guarde la respuesta certificada con el archivo de cribado.",
		],
		fr: [
			"**Criblage policier :** Vérifiez si une personne est publiée comme recherchée par cette autorité.",
			"**Vigilance renforcée :** Examinez un nom qui correspond à un avis public de recherche avant de poursuivre.",
			"**Dossier :** Conservez la réponse certifiée avec le fichier de criblage.",
		],
		pt: [
			"**Triagem policial:** Verifique se uma pessoa consta como procurada por esta autoridade.",
			"**Diligência reforçada:** Revise um nome que coincida com um aviso público de procura antes de seguir.",
			"**Registro:** Guarde a resposta certificada no arquivo de triagem.",
		],
		ko: [
			"**수배 조회:** 이 기관이 공개한 수배자인지 확인합니다.",
			"**강화된 실사:** 공개 수배 공고와 일치하는 이름은 진행 전에 검토합니다.",
			"**사건 기록:** 인증된 응답을 스크리닝 파일에 보관합니다.",
		],
		ja: [
			"**指名手配の照会:** この機関が公開している被疑者・手配対象かどうかを確認します。",
			"**強化デューデリジェンス:** 公開手配に一致する氏名は、先に進む前に確認します。",
			"**記録:** 認証済みレスポンスをスクリーニング記録に残します。",
		],
		zh: [
			"**通缉筛查：** 核查对象是否被该机关公布为通缉人员。",
			"**加强尽职调查：** 姓名与公开通缉通知相符时，先复核再继续。",
			"**案件记录：** 将经认证的响应与筛查档案一并保存。",
		],
	},
	regulatory: {
		en: [
			"**Supervisory screening:** Check firms, directors, and counterparties against this regulator's published actions.",
			"**Financial-sector due diligence:** Use the result when onboarding a correspondent, broker, or vendor.",
			"**Policy evidence:** Retain the certified response when your procedure names this source.",
		],
		es: [
			"**Cribado supervisor:** Consulte firmas, directores y contrapartes frente a las actuaciones publicadas por este supervisor.",
			"**Debida diligencia financiera:** Use el resultado al dar de alta un corresponsal, intermediario o proveedor.",
			"**Evidencia de política:** Conserve la respuesta certificada cuando su procedimiento exige esta fuente.",
		],
		fr: [
			"**Criblage prudentiel :** Contrôlez sociétés, dirigeants et contreparties au regard des décisions publiées par ce régulateur.",
			"**Diligence du secteur financier :** Utilisez le résultat lors de l'entrée en relation avec un correspondant, un courtier ou un fournisseur.",
			"**Preuve de procédure :** Conservez la réponse certifiée lorsque votre procédure cite cette source.",
		],
		pt: [
			"**Triagem supervisora:** Consulte empresas, diretores e contrapartes nas ações publicadas por este regulador.",
			"**Diligência no setor financeiro:** Use o resultado ao cadastrar um correspondente, intermediário ou fornecedor.",
			"**Evidência de política:** Guarde a resposta certificada quando o procedimento exigir esta fonte.",
		],
		ko: [
			"**감독 스크리닝:** 이 감독당국이 공개한 조치와 회사, 임원, 거래 상대방을 대조합니다.",
			"**금융 실사:** 코레스은행, 중개업자 또는 공급업체를 받을 때 결과를 사용합니다.",
			"**정책 증빙:** 절차가 이 출처를 요구하면 인증된 응답을 보관합니다.",
		],
		ja: [
			"**監督上の照会:** 会社、役員、相手方を、この規制当局が公開した措置と照合します。",
			"**金融分野の確認:** コルレス、仲介者、取引先の登録時に結果を使います。",
			"**手続の証拠:** 手続がこの情報源を求めるときは、認証済みレスポンスを保管します。",
		],
		zh: [
			"**监管筛查：** 对照该监管机构已公布的措施核查公司、董事和交易对手。",
			"**金融业尽职调查：** 在准入代理行、中介或供应商时使用该结果。",
			"**制度证据：** 当内部程序点名该来源时，保留经认证的响应。",
		],
	},
	alert: {
		en: [
			"**Consumer-protection screening:** Check whether a firm is named on this public warning list before a customer sends funds.",
			"**Fraud prevention:** Review unauthorized-activity warnings during onboarding of a financial intermediary.",
			"**Records:** Keep the certified response with the onboarding file.",
		],
		es: [
			"**Protección al consumidor:** Compruebe si una firma figura en esta lista pública de alertas antes de que un cliente envíe fondos.",
			"**Prevención de fraude:** Revise avisos de actividad no autorizada al dar de alta un intermediario financiero.",
			"**Registro:** Conserve la respuesta certificada en el expediente de alta.",
		],
		fr: [
			"**Protection des consommateurs :** Vérifiez si une société figure sur cette liste publique d'alertes avant qu'un client n'envoie des fonds.",
			"**Prévention de la fraude :** Examinez les avertissements d'activité non autorisée lors de l'entrée en relation avec un intermédiaire financier.",
			"**Dossier :** Conservez la réponse certifiée dans le dossier d'entrée en relation.",
		],
		pt: [
			"**Proteção do consumidor:** Verifique se uma empresa consta nesta lista pública de alertas antes de um cliente enviar fundos.",
			"**Prevenção de fraude:** Revise avisos de atividade não autorizada ao cadastrar um intermediário financeiro.",
			"**Registro:** Guarde a resposta certificada no processo de cadastro.",
		],
		ko: [
			"**소비자 보호 조회:** 고객이 자금을 보내기 전에 이 공개 경고 목록에 회사가 있는지 확인합니다.",
			"**사기 예방:** 금융 중개자를 받을 때 무허가 활동 경고를 검토합니다.",
			"**기록:** 인증된 응답을 온보딩 파일에 보관합니다.",
		],
		ja: [
			"**消費者保護の照会:** 顧客が資金を送る前に、この公開警告リストに会社が載っていないか確認します。",
			"**不正防止:** 金融仲介者の登録時に、無許可営業の警告を確認します。",
			"**記録:** 認証済みレスポンスを登録ファイルに残します。",
		],
		zh: [
			"**消费者保护筛查：** 在客户汇出资金之前，核查公司是否出现在该公开警示名单上。",
			"**欺诈防范：** 在准入金融中介时复核未经授权活动的警示。",
			"**记录：** 将经认证的响应保存在准入档案中。",
		],
	},
	debarment: {
		en: [
			"**Procurement screening:** Check vendors and contractors before award or payment.",
			"**Market-access reviews:** Confirm whether a party is debarred from the activity this list covers.",
			"**Records:** Retain the certified response in the procurement file.",
		],
		es: [
			"**Cribado de compras:** Verifique proveedores y contratistas antes de la adjudicación o el pago.",
			"**Acceso al mercado:** Confirme si una parte está inhabilitada para la actividad que cubre esta lista.",
			"**Registro:** Conserve la respuesta certificada en el expediente de compra.",
		],
		fr: [
			"**Criblage achats :** Vérifiez fournisseurs et titulaires avant l'attribution ou le paiement.",
			"**Accès au marché :** Confirmez si une partie est exclue de l'activité couverte par cette liste.",
			"**Dossier :** Conservez la réponse certifiée dans le dossier d'achat.",
		],
		pt: [
			"**Triagem de compras:** Verifique fornecedores e contratados antes da adjudicação ou do pagamento.",
			"**Acesso ao mercado:** Confirme se uma parte está impedida da atividade coberta por esta lista.",
			"**Registro:** Guarde a resposta certificada no processo de compra.",
		],
		ko: [
			"**조달 스크리닝:** 낙찰이나 지급 전에 공급업체와 계약자를 조회합니다.",
			"**시장 참여:** 이 목록이 다루는 활동에서 배제되었는지 확인합니다.",
			"**기록:** 인증된 응답을 조달 파일에 보관합니다.",
		],
		ja: [
			"**調達スクリーニング:** 落札や支払いの前に、供給者や受注者を照会します。",
			"**市場参加:** このリストが対象とする活動から排除されていないか確認します。",
			"**記録:** 認証済みレスポンスを調達ファイルに残します。",
		],
		zh: [
			"**采购筛查：** 在授标或付款之前核查供应商和承包商。",
			"**市场准入：** 确认相关方是否被禁止从事该名单覆盖的活动。",
			"**记录：** 将经认证的响应保存在采购档案中。",
		],
	},
	procurement: {
		en: [
			"**Award screening:** Check a bidder or recipient before a federal award or payment.",
			"**Exclusion status:** Read the exclusion type and dates returned for the queried party.",
			"**Records:** Keep the certified response with the award file.",
		],
		es: [
			"**Cribado de adjudicación:** Consulte un oferente o beneficiario antes de una adjudicación o un pago federal.",
			"**Estado de exclusión:** Lea el tipo de exclusión y las fechas devueltas para la parte consultada.",
			"**Registro:** Conserve la respuesta certificada en el expediente de adjudicación.",
		],
		fr: [
			"**Criblage d'attribution :** Contrôlez un soumissionnaire ou un bénéficiaire avant une attribution ou un paiement fédéral.",
			"**Statut d'exclusion :** Lisez le type d'exclusion et les dates renvoyés pour la partie interrogée.",
			"**Dossier :** Conservez la réponse certifiée avec le dossier d'attribution.",
		],
		pt: [
			"**Triagem de adjudicação:** Consulte um licitante ou beneficiário antes de uma adjudicação ou pagamento federal.",
			"**Status de exclusão:** Leia o tipo de exclusão e as datas devolvidas para a parte consultada.",
			"**Registro:** Guarde a resposta certificada no processo de adjudicação.",
		],
		ko: [
			"**낙찰 스크리닝:** 연방 낙찰이나 지급 전에 입찰자 또는 수혜자를 조회합니다.",
			"**배제 상태:** 조회 대상에 대해 반환된 배제 유형과 날짜를 확인합니다.",
			"**기록:** 인증된 응답을 낙찰 파일에 보관합니다.",
		],
		ja: [
			"**交付前の照会:** 連邦の交付や支払いの前に、入札者または受領者を照会します。",
			"**排除の状態:** 照会先について返る排除の種類と日付を確認します。",
			"**記録:** 認証済みレスポンスを交付ファイルに残します。",
		],
		zh: [
			"**授标筛查：** 在联邦授标或付款之前核查投标人或受助方。",
			"**排除状态：** 阅读针对被查询方返回的排除类型和日期。",
			"**记录：** 将经认证的响应与授标档案一并保存。",
		],
	},
	terrorist: {
		en: [
			"**Terrorist-designation screening:** Check parties against this published designation list.",
			"**CFT controls:** Use the result in payment screening and counter-terrorist financing reviews.",
			"**Escalation:** Route a match to compliance review before you proceed.",
		],
		es: [
			"**Cribado de designaciones terroristas:** Consulte partes frente a esta lista publicada de designaciones.",
			"**Controles CFT:** Use el resultado en el filtrado de pagos y en revisiones de financiación del terrorismo.",
			"**Escalamiento:** Envíe una coincidencia a revisión de cumplimiento antes de continuar.",
		],
		fr: [
			"**Criblage des désignations terroristes :** Contrôlez les parties au regard de cette liste publiée.",
			"**Contrôles CFT :** Utilisez le résultat dans le filtrage des paiements et les revues de financement du terrorisme.",
			"**Escalade :** Transmettez une correspondance à la conformité avant de poursuivre.",
		],
		pt: [
			"**Triagem de designações terroristas:** Consulte partes nesta lista publicada de designações.",
			"**Controles de CFT:** Use o resultado na triagem de pagamentos e em revisões de financiamento do terrorismo.",
			"**Escalonamento:** Encaminhe uma correspondência à conformidade antes de seguir.",
		],
		ko: [
			"**테러 지정 스크리닝:** 이 공개 지정 목록과 대상을 대조합니다.",
			"**CFT 통제:** 지급 심사와 테러자금조달 방지 검토에 결과를 사용합니다.",
			"**에스컬레이션:** 진행하기 전에 일치 건을 컴플라이언스 검토로 올립니다.",
		],
		ja: [
			"**テロ指定の照会:** この公開指定リストと相手方を照合します。",
			"**CFT 管理:** 支払い審査とテロ資金供与対策の確認に結果を使います。",
			"**エスカレーション:** 進める前に、一致をコンプライアンス審査へ回します。",
		],
		zh: [
			"**恐怖分子指定筛查：** 对照该已公布的指定名单核查相关方。",
			"**反恐怖融资控制：** 将结果用于付款筛查和恐怖融资复核。",
			"**升级处理：** 在继续之前将命中提交合规复核。",
		],
	},
	visa: {
		en: [
			"**Travel and visa screening:** Check a person against this published visa-restriction list.",
			"**Sanctions programs:** Use the result where a compliance program references visa bans.",
			"**Records:** Store the certified response with the other screening results.",
		],
		es: [
			"**Cribado de viajes y visas:** Consulte a una persona frente a esta lista publicada de restricciones de visa.",
			"**Programas de sanciones:** Use el resultado cuando un programa de cumplimiento menciona prohibiciones de visa.",
			"**Registro:** Guarde la respuesta certificada junto con los demás resultados de cribado.",
		],
		fr: [
			"**Criblage voyages et visas :** Contrôlez une personne au regard de cette liste publiée de restrictions de visa.",
			"**Programmes de sanctions :** Utilisez le résultat lorsqu'un programme de conformité vise des interdictions de visa.",
			"**Dossier :** Conservez la réponse certifiée avec les autres résultats de criblage.",
		],
		pt: [
			"**Triagem de viagens e vistos:** Consulte uma pessoa nesta lista publicada de restrições de visto.",
			"**Programas de sanções:** Use o resultado quando um programa de conformidade mencionar proibições de visto.",
			"**Registro:** Guarde a resposta certificada com os demais resultados de triagem.",
		],
		ko: [
			"**여행·비자 스크리닝:** 이 공개 비자 제한 목록과 인물을 대조합니다.",
			"**제재 프로그램:** 컴플라이언스 프로그램이 비자 금지를 인용할 때 결과를 사용합니다.",
			"**기록:** 인증된 응답을 다른 스크리닝 결과와 함께 보관합니다.",
		],
		ja: [
			"**渡航・査証の照会:** この公開査証制限リストと人物を照合します。",
			"**制裁プログラム:** コンプライアンス手続が査証禁止に言及する場合に結果を使います。",
			"**記録:** 認証済みレスポンスを他のスクリーニング結果と一緒に保管します。",
		],
		zh: [
			"**旅行与签证筛查：** 对照该已公布的签证限制名单核查人员。",
			"**制裁项目：** 当合规程序涉及签证禁令时使用该结果。",
			"**记录：** 将经认证的响应与其他筛查结果一并保存。",
		],
	},
	director: {
		en: [
			"**Director screening:** Check a director or officer against this disqualification register.",
			"**Corporate onboarding:** Use the result before a board appointment or company formation.",
			"**Records:** Retain the certified response in the corporate file.",
		],
		es: [
			"**Cribado de directores:** Consulte un director o administrador frente a este registro de inhabilitaciones.",
			"**Alta societaria:** Use el resultado antes de un nombramiento al órgano de administración o de constituir una sociedad.",
			"**Registro:** Conserve la respuesta certificada en el expediente societario.",
		],
		fr: [
			"**Criblage des dirigeants :** Contrôlez un administrateur ou un dirigeant au regard de ce registre d'interdictions.",
			"**Entrée en relation sociétaire :** Utilisez le résultat avant une nomination ou une constitution de société.",
			"**Dossier :** Conservez la réponse certifiée dans le dossier sociétaire.",
		],
		pt: [
			"**Triagem de diretores:** Consulte um diretor ou administrador neste registro de inabilitações.",
			"**Cadastro societário:** Use o resultado antes de uma nomeação ao conselho ou da constituição de uma sociedade.",
			"**Registro:** Guarde a resposta certificada no processo societário.",
		],
		ko: [
			"**이사 스크리닝:** 이 결격 명부와 이사 또는 임원을 대조합니다.",
			"**법인 온보딩:** 이사회 선임이나 회사 설립 전에 결과를 사용합니다.",
			"**기록:** 인증된 응답을 법인 파일에 보관합니다.",
		],
		ja: [
			"**役員照会:** この欠格名簿と取締役または役員を照合します。",
			"**法人の登録:** 取締役の選任や会社設立の前に結果を使います。",
			"**記録:** 認証済みレスポンスを法人ファイルに残します。",
		],
		zh: [
			"**董事筛查：** 对照该取消资格登记册核查董事或高级管理人员。",
			"**公司准入：** 在董事会任命或设立公司之前使用该结果。",
			"**记录：** 将经认证的响应保存在公司档案中。",
		],
	},
	exclusion: {
		en: [
			"**Exclusion screening:** Check whether a company is excluded, observed, or otherwise restricted on this list.",
			"**Investment and supply-chain reviews:** Use the result before a holding, mandate, or contract.",
			"**Records:** Keep the certified response with the investment or vendor file.",
		],
		es: [
			"**Cribado de exclusiones:** Compruebe si una empresa está excluida, en observación o restringida en esta lista.",
			"**Inversión y cadena de suministro:** Use el resultado antes de una tenencia, un mandato o un contrato.",
			"**Registro:** Conserve la respuesta certificada en el expediente de inversión o de proveedor.",
		],
		fr: [
			"**Criblage d'exclusions :** Vérifiez si une société est exclue, sous observation ou autrement restreinte sur cette liste.",
			"**Investissement et chaîne d'approvisionnement :** Utilisez le résultat avant une détention, un mandat ou un contrat.",
			"**Dossier :** Conservez la réponse certifiée dans le dossier d'investissement ou de fournisseur.",
		],
		pt: [
			"**Triagem de exclusões:** Verifique se uma empresa está excluída, em observação ou de outro modo restrita nesta lista.",
			"**Investimento e cadeia de suprimentos:** Use o resultado antes de uma posição, um mandato ou um contrato.",
			"**Registro:** Guarde a resposta certificada no processo de investimento ou de fornecedor.",
		],
		ko: [
			"**배제 스크리닝:** 회사가 이 목록에서 배제, 관찰 또는 제한 상태인지 확인합니다.",
			"**투자와 공급망:** 보유, 위임 또는 계약 전에 결과를 사용합니다.",
			"**기록:** 인증된 응답을 투자 또는 공급업체 파일에 보관합니다.",
		],
		ja: [
			"**除外スクリーニング:** 会社がこのリストで除外、観察、またはその他の制限対象かを確認します。",
			"**投資とサプライチェーン:** 保有、委任、契約の前に結果を使います。",
			"**記録:** 認証済みレスポンスを投資または取引先ファイルに残します。",
		],
		zh: [
			"**排除筛查：** 核查公司在该名单上是否被排除、观察或受到其他限制。",
			"**投资与供应链：** 在持仓、委托或签约之前使用该结果。",
			"**记录：** 将经认证的响应保存在投资或供应商档案中。",
		],
	},
};

const DETAIL_HINTS = {
	sanctions: {
		en: "the listed name, entity type, regime or program, measures, country, identifiers, and remarks",
		es: "el nombre listado, el tipo de entidad, el régimen o programa, las medidas, el país, los identificadores y las observaciones",
		fr: "le nom publié, le type d'entité, le régime ou le programme, les mesures, le pays, les identifiants et les observations",
		pt: "o nome listado, o tipo de entidade, o regime ou programa, as medidas, o país, os identificadores e as observações",
		ko: "등재 이름, 실체 유형, 레짐 또는 프로그램, 조치, 국가, 식별자, 비고",
		ja: "掲載名、主体の種類、制度またはプログラム、措置、国、識別子、備考",
		zh: "列入姓名、实体类型、机制或项目、措施、国家、识别号和备注",
	},
	wanted: {
		en: "the listed name, the publishing agency, the notice type, and remarks",
		es: "el nombre listado, la autoridad que publica, el tipo de aviso y las observaciones",
		fr: "le nom publié, l'autorité de publication, le type d'avis et les observations",
		pt: "o nome listado, a autoridade que publica, o tipo de aviso e as observações",
		ko: "등재 이름, 공개 기관, 공고 유형, 비고",
		ja: "掲載名、公開機関、通知の種類、備考",
		zh: "列入姓名、发布机关、通知类型和备注",
	},
	regulatory: {
		en: "the party name, the regulator, the action type, the action date, and a short summary",
		es: "el nombre de la parte, el supervisor, el tipo de actuación, la fecha y un resumen breve",
		fr: "le nom de la partie, le régulateur, le type de décision, la date et un court résumé",
		pt: "o nome da parte, o regulador, o tipo de ação, a data e um resumo breve",
		ko: "당사자 이름, 감독기관, 조치 유형, 조치 날짜, 짧은 요약",
		ja: "当事者名、規制当局、措置の種類、措置日、短い要約",
		zh: "当事人名称、监管机构、措施类型、措施日期和简短摘要",
	},
	alert: {
		en: "the named party, the authority that issued the warning, the warning date, and the activity described",
		es: "la parte nombrada, la autoridad que emitió la alerta, la fecha de la alerta y la actividad descrita",
		fr: "la partie nommée, l'autorité qui a émis l'alerte, la date de l'alerte et l'activité décrite",
		pt: "a parte nomeada, a autoridade que emitiu o alerta, a data do alerta e a atividade descrita",
		ko: "거명된 당사자, 경고를 낸 기관, 경고 날짜, 설명된 활동",
		ja: "名称のある当事者、警告を出した当局、警告日、記載された活動",
		zh: "被点名的当事人、发出警示的机关、警示日期以及所描述的活动",
	},
	debarment: {
		en: "the party name, the authority, the ineligibility window, and the stated reason",
		es: "el nombre de la parte, la autoridad, el período de inhabilitación y el motivo indicado",
		fr: "le nom de la partie, l'autorité, la période d'inéligibilité et le motif indiqué",
		pt: "o nome da parte, a autoridade, o período de inelegibilidade e o motivo indicado",
		ko: "당사자 이름, 기관, 부적격 기간, 기재된 사유",
		ja: "当事者名、当局、不適格期間、記載された理由",
		zh: "当事人名称、主管机关、不适格期间和所载理由",
	},
	procurement: {
		en: "the excluded party, the exclusion type, the agency, and the active dates",
		es: "la parte excluida, el tipo de exclusión, la agencia y las fechas de vigencia",
		fr: "la partie exclue, le type d'exclusion, l'agence et les dates d'effet",
		pt: "a parte excluída, o tipo de exclusão, a agência e as datas de vigência",
		ko: "배제된 당사자, 배제 유형, 기관, 유효 날짜",
		ja: "排除された当事者、排除の種類、機関、有効日",
		zh: "被排除方、排除类型、机构和生效日期",
	},
	terrorist: {
		en: "the designated name, the authority, the designation date, aliases when the source provides them, and remarks",
		es: "el nombre designado, la autoridad, la fecha de designación, los alias cuando la fuente los aporta y las observaciones",
		fr: "le nom désigné, l'autorité, la date de désignation, les alias lorsque la source les fournit, et les observations",
		pt: "o nome designado, a autoridade, a data da designação, os aliases quando a fonte os informa e as observações",
		ko: "지정 이름, 기관, 지정 날짜, 출처가 제공하는 경우의 가명, 비고",
		ja: "指定名、当局、指定日、原資料がある場合の別名、備考",
		zh: "被指定姓名、主管机关、指定日期、来源提供时的别名以及备注",
	},
	visa: {
		en: "the listed name, the restriction program, the issuing authority, and remarks",
		es: "el nombre listado, el programa de restricción, la autoridad que lo emite y las observaciones",
		fr: "le nom publié, le programme de restriction, l'autorité émettrice et les observations",
		pt: "o nome listado, o programa de restrição, a autoridade emissora e as observações",
		ko: "등재 이름, 제한 프로그램, 발령 기관, 비고",
		ja: "掲載名、制限プログラム、発出当局、備考",
		zh: "列入姓名、限制项目、发布机关和备注",
	},
	director: {
		en: "the person name, the authority, the disqualification status, and the relevant dates",
		es: "el nombre de la persona, la autoridad, el estado de inhabilitación y las fechas pertinentes",
		fr: "le nom de la personne, l'autorité, le statut d'interdiction et les dates pertinentes",
		pt: "o nome da pessoa, a autoridade, o status de inabilitação e as datas pertinentes",
		ko: "인물 이름, 기관, 결격 상태, 관련 날짜",
		ja: "人物名、当局、欠格の状態、関連する日付",
		zh: "人员姓名、主管机关、取消资格状态和相关日期",
	},
	exclusion: {
		en: "the company name, the authority, the exclusion ground, the status, and the relevant dates",
		es: "el nombre de la empresa, la autoridad, el motivo de exclusión, el estado y las fechas pertinentes",
		fr: "le nom de la société, l'autorité, le motif d'exclusion, le statut et les dates pertinentes",
		pt: "o nome da empresa, a autoridade, o motivo da exclusão, o status e as datas pertinentes",
		ko: "회사 이름, 기관, 배제 사유, 상태, 관련 날짜",
		ja: "会社名、当局、除外理由、状態、関連する日付",
		zh: "公司名称、主管机关、排除事由、状态和相关日期",
	},
};

const yamlQuote = (value) => JSON.stringify(String(value));

const foundFieldFor = (slug) =>
	"foundIn" +
	slug
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");

const sampleDetails = (list) => {
	const name = "SAMPLE DESIGNATED NAME";
	const common = {
		name,
		entityType: "Individual",
		listName: list.title.en,
		sourceList: list.slug,
	};
	switch (list.kind) {
		case "sanctions":
			return {
				...common,
				regime: list.title.en,
				measures: ["Asset freeze"],
				country: list.jurisdiction.en,
				identifiers: ["SAMPLE-ID-001"],
				remarks: "Sample match payload for this sanctions list.",
			};
		case "wanted":
			return {
				...common,
				agency: list.issuer.en,
				noticeType: "Wanted notice",
				remarks: "Sample match payload for this wanted list.",
			};
		case "regulatory":
			return {
				...common,
				regulator: list.issuer.en,
				actionType: "Enforcement action",
				actionDate: "2024-06-15",
				summary: "Sample match payload for this regulatory list.",
			};
		case "alert":
			return {
				...common,
				authority: list.issuer.en,
				warningDate: "2024-06-15",
				activity: "Unauthorized activity",
				summary: "Sample match payload for this public warning list.",
			};
		case "debarment":
			return {
				...common,
				authority: list.issuer.en,
				ineligibleFrom: "2024-01-01",
				ineligibleTo: "2027-01-01",
				reason: "Sample debarment record.",
			};
		case "procurement":
			return {
				...common,
				exclusionType: "Ineligible",
				agency: list.issuer.en,
				activeDate: "2024-01-01",
				terminationDate: "2027-01-01",
			};
		case "terrorist":
			return {
				...common,
				authority: list.issuer.en,
				designationDate: "2024-01-01",
				aliases: ["SAMPLE ALIAS"],
				remarks: "Sample designation payload.",
			};
		case "visa":
			return {
				...common,
				program: list.title.en,
				authority: list.issuer.en,
				restriction: "Visa restriction",
				remarks: "Sample visa-restriction payload.",
			};
		case "director":
			return {
				...common,
				authority: list.issuer.en,
				status: "Disqualified",
				fromDate: "2024-01-01",
				toDate: "2029-01-01",
			};
		case "exclusion":
			return {
				...common,
				authority: list.issuer.en,
				ground: "Exclusion",
				status: "Excluded",
				fromDate: "2024-01-01",
			};
		default:
			throw new Error(`Unknown kind ${list.kind} for ${list.slug}`);
	}
};

const table = (rows) => {
	const widths = rows[0].map((_, index) => Math.max(...rows.map((row) => row[index].length)));
	const fmt = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
	const sep = `| ${widths.map((width) => "-".repeat(width)).join(" | ")} |`;
	return [fmt(rows[0]), sep, ...rows.slice(1).map(fmt)].join("\n");
};

const renderPage = (list, locale) => {
	const ui = UI[locale];
	const title = list.title[locale];
	const issuer = list.issuer[locale];
	const juris = list.jurisdiction[locale];
	const fact = list.fact[locale];
	const found = foundFieldFor(list.slug);
	const hints = DETAIL_HINTS[list.kind][locale];
	const endpoint = `https://api.verifik.co/v2/${list.slug}`;
	const slugPath = `/background-check/international/${list.slug}`;
	const keywords = [
		...aliasesFor(`v2/${list.slug}`),
		list.title.en,
		list.slug.replace(/-/g, " "),
	];
	const matchBody = {
		data: {
			fullName: "SAMPLE DESIGNATED NAME",
			firstName: "SAMPLE",
			lastName: "DESIGNATED NAME",
			[found]: true,
			details: sampleDetails(list),
		},
		signature: {
			dateTime: "2026-11-27 16:00:00",
			message: "Certified by Verifik.co",
		},
	};
	const cleanBody = {
		data: {
			fullName: "CLEAN SAMPLE NAME",
			firstName: "CLEAN",
			lastName: "SAMPLE NAME",
			[found]: false,
			details: {},
		},
		signature: {
			dateTime: "2026-11-27 16:00:00",
			message: "Certified by Verifik.co",
		},
	};
	const missingBody = {
		code: "MissingParameter",
		message: "Either fullName or documentNumber must be provided",
	};
	const token = TOKEN[locale];
	const headerRows = ui.headers;
	const paramRows = [
		ui.paramCols,
		["`fullName`", "string", ui.conditional, "`SAMPLE DESIGNATED NAME`", ui.fullNameDesc],
		["`documentNumber`", "string", ui.conditional, "`A1234567`", ui.docNumDesc],
	];
	const useCases = USE_CASES[list.kind][locale].map((line) => `- ${line}`).join("\n");
	const notes = ui.notesBullets(found).map((line) => `- ${line}`).join("\n");

	const keywordYaml = keywords.map((keyword) => `  - ${yamlQuote(keyword)}`).join("\n");

	return `---
id: ${list.slug}
title: ${yamlQuote(title)}
description: ${yamlQuote(ui.description(title, issuer))}
sidebar_label: ${yamlQuote(`${list.flag} ${title}`)}
slug: ${slugPath}
keywords:
${keywordYaml}
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# ${title}

${ui.lead(title, issuer, juris)}

${fact}

${ui.call(found, hints)}

## ${ui.apiRef}

### Endpoint

\`\`\`http
GET ${endpoint}
\`\`\`

${ui.afterUrl(found, hints)}

### Headers

${table(headerRows)}

### Parameters

${table(paramRows)}

### ${ui.useCases}

${useCases}

### Request

<Tabs>
<TabItem value="javascript" label="${ui.reqTabs[0]}">

\`\`\`javascript
import axios from "axios";

const options = {
  method: "GET",
  url: "${endpoint}",
  params: {
    fullName: "SAMPLE DESIGNATED NAME",
  },
  headers: {
    Accept: "application/json",
    Authorization: "Bearer ${token}",
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
<TabItem value="python" label="${ui.reqTabs[1]}">

\`\`\`python
import requests

url = "${endpoint}"
headers = {
    "Accept": "application/json",
    "Authorization": "Bearer ${token}",
}
params = {
    "fullName": "SAMPLE DESIGNATED NAME",
}

response = requests.get(url, headers=headers, params=params)
response.raise_for_status()
print(response.json())
\`\`\`

</TabItem>
<TabItem value="curl" label="${ui.reqTabs[2]}">

\`\`\`bash
curl -X GET "${endpoint}?fullName=SAMPLE%20DESIGNATED%20NAME" \\
  -H "Accept: application/json" \\
  -H "Authorization: Bearer ${token}"
\`\`\`

</TabItem>
</Tabs>

### Response

<Tabs>
<TabItem value="200-found" label="${ui.resTabs[0]}">

\`\`\`json
${JSON.stringify(matchBody, null, 2)}
\`\`\`

</TabItem>
<TabItem value="200-clean" label="${ui.resTabs[1]}">

\`\`\`json
${JSON.stringify(cleanBody, null, 2)}
\`\`\`

</TabItem>
<TabItem value="409" label="${ui.resTabs[2]}">

\`\`\`json
${JSON.stringify(missingBody, null, 2)}
\`\`\`

</TabItem>
</Tabs>

### Notes

${notes}
`;
};

const assertCatalog = () => {
	if (lists.length !== 101) {
		throw new Error(`Expected 101 lists, found ${lists.length}`);
	}
	const slugs = new Set();
	for (const list of lists) {
		if (slugs.has(list.slug)) throw new Error(`Duplicate slug ${list.slug}`);
		slugs.add(list.slug);
		if (!GROUPS.includes(list.group)) throw new Error(`Bad group ${list.group} on ${list.slug}`);
		if (!USE_CASES[list.kind]) throw new Error(`Bad kind ${list.kind} on ${list.slug}`);
		for (const locale of LOCALES) {
			for (const field of ["title", "issuer", "jurisdiction", "fact"]) {
				const value = list[field]?.[locale];
				if (!value || !String(value).trim()) {
					throw new Error(`Missing ${field}.${locale} for ${list.slug}`);
				}
			}
		}
		if (list.fact.en.length < 80) {
			throw new Error(`Fact too short for ${list.slug}`);
		}
	}

	const upload = "/home/ubuntu/.cursor/projects/agent-repos-verifik-documentation/uploads/missing-101-watchlists_7a10.json";
	if (fs.existsSync(upload)) {
		const live = JSON.parse(fs.readFileSync(upload, "utf8"));
		const liveSlugs = new Set(live.map((row) => row.dbRecord.url.replace(/^v2\//, "")));
		for (const slug of liveSlugs) {
			if (!slugs.has(slug)) throw new Error(`Catalog missing live slug ${slug}`);
		}
		for (const slug of slugs) {
			if (!liveSlugs.has(slug)) throw new Error(`Catalog has slug not in the live file: ${slug}`);
		}
	}
};

const writePages = () => {
	let count = 0;
	for (const list of lists) {
		for (const locale of LOCALES) {
			const dir = path.join(ROOT, LOCALE_DIR[locale], "background-check", "international");
			fs.mkdirSync(dir, { recursive: true });
			const file = path.join(dir, `${list.slug}.mdx`);
			const body = renderPage(list, locale);
			if (body.includes("`force`") || /\bforce=true\b/.test(body)) {
				throw new Error(`Staff param leaked into ${file}`);
			}
			if (!body.includes(`https://api.verifik.co/v2/${list.slug}`)) {
				throw new Error(`Endpoint missing in ${file}`);
			}
			for (const heading of ["### Endpoint", "### Headers", "### Parameters", "### Request", "### Response", "### Notes"]) {
				if (!body.includes(heading)) throw new Error(`${heading} missing in ${locale} ${list.slug}`);
			}
			fs.writeFileSync(file, body);
			count += 1;
		}
	}
	return count;
};

const sidebarBlock = (locale, copyIndex) => {
	const indent = "\t".repeat(4);
	const lines = [];
	const push = (depth, text) => lines.push(`${indent}${"\t".repeat(depth)}${text}`);
	push(0, "/* WATCHLISTS_101_START */");
	push(0, "{");
	push(1, 'type: "category",');
	push(1, `label: ${JSON.stringify(ROOT_LABEL[locale])},`);
	push(1, `key: ${JSON.stringify(`watchlists-101-${locale}-${copyIndex}`)},`);
	push(1, "collapsible: true,");
	push(1, "collapsed: true,");
	push(1, "items: [");
	for (const group of GROUPS) {
		const groupLists = lists
			.filter((list) => list.group === group)
			.slice()
			.sort((a, b) => a.title[locale].localeCompare(b.title[locale], locale, { sensitivity: "base" }));
		push(2, "{");
		push(3, 'type: "category",');
		push(3, `label: ${JSON.stringify(GROUP_LABEL[locale][group])},`);
		push(3, `key: ${JSON.stringify(`watchlists-101-${locale}-${copyIndex}-${group}`)},`);
		push(3, "collapsible: true,");
		push(3, "collapsed: true,");
		push(3, "items: [");
		for (const list of groupLists) {
			push(4, "{");
			push(5, 'type: "doc",');
			push(5, `id: "background-check/international/${list.slug}",`);
			push(5, `label: ${JSON.stringify(`${list.flag} ${list.title[locale]}`)},`);
			push(5, `key: ${JSON.stringify(`watchlist-${locale}-${copyIndex}-${list.slug}`)},`);
			push(4, "},");
		}
		push(3, "],");
		push(2, "},");
	}
	push(1, "],");
	push(0, "},");
	push(0, "/* WATCHLISTS_101_END */");
	return lines.join("\n");
};

const consumeDocItem = (lines, index, output) => {
	const line = lines[index];
	if (line.trimEnd().endsWith("},")) return index;
	let cursor = index;
	while (cursor + 1 < lines.length && !/^\t+\},$/.test(lines[cursor + 1])) {
		cursor += 1;
		output.push(lines[cursor]);
	}
	if (cursor + 1 < lines.length && /^\t+\},$/.test(lines[cursor + 1])) {
		cursor += 1;
		output.push(lines[cursor]);
	}
	return cursor;
};

const insertOrReplace = (filePath, locale, occurrences) => {
	let text = fs.readFileSync(filePath, "utf8");
	const blockRe = /\/\* WATCHLISTS_101_START \*\/[\s\S]*?\/\* WATCHLISTS_101_END \*\//g;
	const existing = text.match(blockRe);
	if (existing) {
		if (existing.length !== occurrences) {
			throw new Error(`${filePath} has ${existing.length} watchlist blocks, expected ${occurrences}`);
		}
		let index = 0;
		text = text.replace(blockRe, () => sidebarBlock(locale, index++));
		fs.writeFileSync(filePath, text);
		return existing.length;
	}

	let inserted = 0;
	const lines = text.split("\n");
	const next = [];
	for (let i = 0; i < lines.length; i += 1) {
		next.push(lines[i]);
		const isAnchor =
			locale === "en" || locale === "es"
				? lines[i].includes('id: "background-check/international/icij-offshore-leaks"')
				: lines[i].includes('id: "background-check/onu-background-check"');
		if (!isAnchor) continue;
		i = consumeDocItem(lines, i, next);
		next.push(sidebarBlock(locale, inserted));
		inserted += 1;
	}
	if (inserted !== occurrences) {
		throw new Error(`${filePath}: inserted ${inserted}, expected ${occurrences}`);
	}
	fs.writeFileSync(filePath, next.join("\n"));
	return inserted;
};

const patchSidebars = () => {
	const plan = [
		["sidebars.js", "en", 1],
		["sidebars-es.js", "es", 1],
		["sidebars-fr.js", "fr", 3],
		["sidebars-pt.js", "pt", 3],
		["sidebars-ko.js", "ko", 3],
		["sidebars-ja.js", "ja", 3],
		["sidebars-zh.js", "zh", 3],
	];
	for (const [file, locale, occurrences] of plan) {
		const count = insertOrReplace(path.join(ROOT, file), locale, occurrences);
		console.log(`sidebar ${file}: ${count} block(s)`);
	}
};

assertCatalog();
const pages = writePages();
patchSidebars();
console.log(`wrote ${pages} watchlist pages`);
