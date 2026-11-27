import { L, sandbox3, miss, notFound, standardResults } from "./missing-30-endpoints.mjs";

const doc = (spec) => ({
	notFound: spec.notFound || notFound,
	missing: spec.missing || miss(spec.missingMessage),
	sandbox: spec.sandbox || sandbox3(spec.sandParams, spec.sandResults || standardResults),
	...spec,
});

const watchResults = L(
	[
		"200 with the list flag true and details when the query matches.",
		"409 MissingParameter when fullName and the document pair are both absent.",
		"A name that is simply absent is HTTP 200 with the flag false. 404 NotFound is the shared not-found body.",
	],
	[
		"200 con la bandera de la lista en true y details si hay coincidencia.",
		"409 MissingParameter si faltan fullName y el par de documento.",
		"Un nombre que simplemente no está es HTTP 200 con la bandera en false. 404 NotFound es el cuerpo compartido de no encontrado.",
	],
	[
		"200 avec l'indicateur de liste à true et details en cas de correspondance.",
		"409 MissingParameter si fullName et la paire documentaire manquent.",
		"Un nom simplement absent est un HTTP 200 avec l'indicateur à false. 404 NotFound est le corps partagé.",
	],
	[
		"200 com a bandeira da lista em true e details quando há correspondência.",
		"409 MissingParameter se faltarem fullName e o par de documento.",
		"Um nome simplesmente ausente é HTTP 200 com a bandeira false. 404 NotFound é o corpo compartilhado.",
	],
	[
		"일치하면 목록 플래그가 true이고 details가 있는 200.",
		"fullName과 문서 쌍이 모두 없으면 409 MissingParameter.",
		"단순히 없는 이름은 플래그 false인 HTTP 200입니다. 404 NotFound는 공통 미발견 본문입니다.",
	],
	[
		"一致すると一覧フラグが true で details 付きの 200。",
		"fullName と文書の組が両方無いと 409 MissingParameter。",
		"単に載っていない名前はフラグ false の HTTP 200 です。404 NotFound は共通の未検出本文です。",
	],
	[
		"命中时为 200，列表标志为 true 并带 details。",
		"fullName 和证件组合都缺失时为 409 MissingParameter。",
		"仅仅不在名单上是 HTTP 200 且标志为 false。404 NotFound 是共用的未找到正文。",
	],
);

const nameDocParams = [
	{
		name: "fullName",
		type: "string",
		req: "cond",
		example: "MARIA LOPEZ",
		desc: L(
			"Full name to screen. Enough on its own. If you omit it, send both `documentType` and `documentNumber`.",
			"Nombre completo a cribar. Basta por sí solo. Si lo omite, envíe `documentType` y `documentNumber`.",
			"Nom complet à filtrer. Il suffit seul. Si vous l'omettez, envoyez `documentType` et `documentNumber`.",
			"Nome completo a filtrar. Basta sozinho. Se o omitir, envie `documentType` e `documentNumber`.",
			"조회할 전체 이름. 이것만으로 충분합니다. 생략하면 `documentType`과 `documentNumber`를 함께 보냅니다.",
			"照合する氏名。これだけで足ります。省略するときは `documentType` と `documentNumber` を両方送ります。",
			"用于筛查的全名。只发它即可。若省略，则同时发送 `documentType` 和 `documentNumber`。",
		),
	},
	{
		name: "documentType",
		type: "string",
		req: "cond",
		example: "CPF",
		desc: L(
			"Document family. Required together with `documentNumber` when `fullName` is omitted. For CPF, CI, CCPA, DUI, or CCUY without a name, also send `dateOfBirth`.",
			"Familia del documento. Obligatoria junto con `documentNumber` si omite `fullName`. Para CPF, CI, CCPA, DUI o CCUY sin nombre, envíe también `dateOfBirth`.",
			"Famille du document. Obligatoire avec `documentNumber` si `fullName` est omis. Pour CPF, CI, CCPA, DUI ou CCUY sans nom, envoyez aussi `dateOfBirth`.",
			"Família do documento. Obrigatória com `documentNumber` se omitir `fullName`. Para CPF, CI, CCPA, DUI ou CCUY sem nome, envie também `dateOfBirth`.",
			"문서 종류. `fullName`을 생략하면 `documentNumber`와 함께 필수입니다. 이름 없이 CPF, CI, CCPA, DUI, CCUY이면 `dateOfBirth`도 보냅니다.",
			"文書の種類。`fullName` を省略するときは `documentNumber` とセットで必須です。氏名なしの CPF、CI、CCPA、DUI、CCUY では `dateOfBirth` も送ります。",
			"证件类型。省略 `fullName` 时必须与 `documentNumber` 一起发送。无姓名的 CPF、CI、CCPA、DUI 或 CCUY 还要发送 `dateOfBirth`。",
		),
	},
	{
		name: "documentNumber",
		type: "string",
		req: "cond",
		example: "12345678901",
		desc: L(
			"Identifier, at least 5 characters. Required with `documentType` when `fullName` is omitted.",
			"Identificador, al menos 5 caracteres. Obligatorio con `documentType` si omite `fullName`.",
			"Identifiant, au moins 5 caractères. Obligatoire avec `documentType` si `fullName` est omis.",
			"Identificador, pelo menos 5 caracteres. Obrigatório com `documentType` se omitir `fullName`.",
			"식별자. 5자 이상. `fullName`을 생략하면 `documentType`과 함께 필수입니다.",
			"識別子。5文字以上。`fullName` を省略するときは `documentType` とセットで必須です。",
			"标识，至少 5 个字符。省略 `fullName` 时必须与 `documentType` 一起发送。",
		),
	},
	{
		name: "dateOfBirth",
		type: "string",
		req: "cond",
		example: "1990-01-15",
		desc: L(
			"Birth date. Required when `fullName` is omitted and `documentType` is CPF, CI, CCPA, DUI, or CCUY.",
			"Fecha de nacimiento. Obligatoria si omite `fullName` y `documentType` es CPF, CI, CCPA, DUI o CCUY.",
			"Date de naissance. Obligatoire si `fullName` est omis et que `documentType` vaut CPF, CI, CCPA, DUI ou CCUY.",
			"Data de nascimento. Obrigatória se omitir `fullName` e `documentType` for CPF, CI, CCPA, DUI ou CCUY.",
			"생년월일. `fullName`을 생략하고 `documentType`이 CPF, CI, CCPA, DUI, CCUY일 때 필수입니다.",
			"生年月日。`fullName` を省略し `documentType` が CPF、CI、CCPA、DUI、CCUY のとき必須です。",
			"出生日期。省略 `fullName` 且 `documentType` 为 CPF、CI、CCPA、DUI 或 CCUY 时必填。",
		),
	},
];

import { professionAndLists } from "./missing-30-lists.mjs";
import { routesAndProducts } from "./missing-30-rest.mjs";
import { finishEndpoints } from "./missing-30-finish.mjs";

export const moreEndpoints = [...professionAndLists, ...routesAndProducts, ...finishEndpoints];
