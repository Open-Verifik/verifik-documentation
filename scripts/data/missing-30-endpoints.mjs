export const L = (en, es, fr, pt, ko, ja, zh) => ({ en, es, fr, pt, ko, ja, zh });

const scenario = {
	en: ["Record on file", "Missing required value", "Unknown value"],
	es: ["Registro en la fuente", "Falta un valor obligatorio", "Valor desconocido"],
	fr: ["Enregistrement à la source", "Valeur obligatoire absente", "Valeur inconnue"],
	pt: ["Registro na fonte", "Valor obrigatório ausente", "Valor desconhecido"],
	ko: ["원천에 기록 있음", "필수 값 누락", "알 수 없는 값"],
	ja: ["情報源に記録あり", "必須値が無い", "不明な値"],
	zh: ["数据源有记录", "缺少必填值", "未知的值"],
};

export const sandbox3 = (params, results) => {
	const out = {};
	for (const loc of Object.keys(scenario)) {
		out[loc] = [0, 1, 2].map((index) => ({
			scenario: scenario[loc][index],
			params: params[index],
			result: results[loc][index],
		}));
	}
	return out;
};

export const miss = (message) => ({ code: "MissingParameter", message });
export const notFound = { code: "NotFound", message: "Record not found." };

export const standardResults = L(
	["200 with the fields listed above.", "409 MissingParameter.", "404 NotFound when the source has no record."],
	["200 con los campos de arriba.", "409 MissingParameter.", "404 NotFound cuando la fuente no tiene el registro."],
	["200 avec les champs ci-dessus.", "409 MissingParameter.", "404 NotFound lorsque la source n'a pas l'enregistrement."],
	["200 com os campos acima.", "409 MissingParameter.", "404 NotFound quando a fonte não tem o registro."],
	["위에 적은 필드를 담은 200.", "409 MissingParameter.", "원천에 기록이 없으면 404 NotFound."],
	["上の項目を含む 200。", "409 MissingParameter。", "情報源に記録が無いと 404 NotFound。"],
	["包含上文所列字段的 200。", "409 MissingParameter。", "数据源没有该记录时为 404 NotFound。"],
);

const ep = (spec) => spec;

export const endpoints = [
	ep({
		file: "identity/colombia-cedula-vigencia.mdx",
		method: "GET",
		apiPath: "v2/co/cedula/vigencia",
		code: "colombia_api_identity_lookup_vigencia",
		group: "identityCo",
		example: { documentNumber: "1121329661" },
		sample: {
			documentType: "CC",
			documentNumber: "1121329661",
			exists: true,
			isAlive: true,
			documentStatus: "VIGENTE",
		},
		missing: miss("missing documentNumber"),
		notFound,
		params: [
			{
				name: "documentNumber",
				type: "string",
				req: "yes",
				example: "1121329661",
				desc: L(
					"Colombian cédula de ciudadanía, 5 to 10 digits, without spaces or punctuation.",
					"Cédula de ciudadanía colombiana, de 5 a 10 dígitos, sin espacios ni puntuación.",
					"Cédula de ciudadanía colombienne, 5 à 10 chiffres, sans espaces ni ponctuation.",
					"Cédula de ciudadanía colombiana, de 5 a 10 dígitos, sem espaços nem pontuação.",
					"콜롬비아 시민증 번호. 5자리에서 10자리 숫자이며 공백과 기호는 넣지 않습니다.",
					"コロンビアの市民証番号。5桁から10桁の数字で、空白や記号は付けません。",
					"哥伦比亚公民身份证号，5 到 10 位数字，不要带空格或标点。",
				),
			},
		],
		title: L(
			"Colombia — National ID status (CC)",
			"Colombia — Estado de cédula (CC)",
			"Colombie — Statut de la cédula (CC)",
			"Colômbia — Estado da cédula (CC)",
			"콜롬비아 — 시민증 상태 (CC)",
			"コロンビア — 市民証の状態（CC）",
			"哥伦比亚 — 公民身份证状态（CC）",
		),
		sidebar: L(
			"🇨🇴 Colombia — ID status (CC)",
			"🇨🇴 Colombia — Estado de cédula (CC)",
			"🇨🇴 Colombie — Statut de la cédula",
			"🇨🇴 Colômbia — Estado da cédula",
			"🇨🇴 콜롬비아 — 시민증 상태",
			"🇨🇴 コロンビア — 市民証の状態",
			"🇨🇴 哥伦比亚 — 身份证状态",
		),
		description: L(
			"Read the Registraduría vigencia of a Colombian cédula: whether the number exists and whether the holder is recorded as alive.",
			"Consulta la vigencia en la Registraduría de una cédula colombiana: si el número existe y si el titular figura como vivo.",
			"Lit la vigencia Registraduría d'une cédula colombienne : le numéro existe-t-il et le titulaire est-il enregistré comme vivant.",
			"Lê a vigência na Registraduría de uma cédula colombiana: se o número existe e se o titular consta como vivo.",
			"콜롬비아 시민증의 Registraduría 유효 상태를 조회합니다. 번호 존재 여부와 생존 기록 여부를 반환합니다.",
			"コロンビア市民証の Registraduría 上の有効状態を読みます。番号の有無と生存記録を返します。",
			"查询哥伦比亚公民身份证在 Registraduría 的有效状态：号码是否存在，以及持证人是否被记录为在世。",
		),
		intro: L(
			"The **Colombia national ID status** lookup reads the Registraduría vigencia for a cédula de ciudadanía. Send `documentNumber`. The payload says whether that number exists and whether the holder is recorded as alive, together with the status text published by the registry. Use it when onboarding needs a current CC status before a fuller identity lookup.",
			"La consulta de **estado de cédula en Colombia** lee la vigencia de la Registraduría. Envíe `documentNumber`. La respuesta indica si el número existe y si el titular figura como vivo, junto con el texto de estado que publica el registro. Úsela cuando el alta necesita el estado vigente de la CC antes de una consulta de identidad más amplia.",
			"La consultation du **statut de la cédula en Colombie** lit la vigencia de la Registraduría. Envoyez `documentNumber`. La réponse indique si le numéro existe et si le titulaire est enregistré comme vivant, avec le libellé publié par le registre. Utilisez-la lorsqu'une entrée en relation exige l'état courant de la CC avant une recherche d'identité plus large.",
			"A consulta de **estado da cédula na Colômbia** lê a vigência da Registraduría. Envie `documentNumber`. A resposta diz se o número existe e se o titular consta como vivo, com o texto de estado publicado pelo registro. Use-a quando a admissão precisa do estado atual da CC antes de uma consulta de identidade mais ampla.",
			"**콜롬비아 시민증 상태** 조회는 Registraduría 유효 상태를 읽습니다. `documentNumber`를 보냅니다. 응답은 번호 존재 여부, 생존 기록 여부, 등록부가 게시한 상태 문구를 담습니다. 더 넓은 신원 조회 전에 현재 CC 상태가 필요할 때 사용합니다.",
			"**コロンビア市民証の状態**照会は Registraduría の有効状態を読みます。`documentNumber` を送ります。応答は番号の有無、生存記録、登録機関が公開する状態文言を含みます。より広い本人確認の前に現在の CC 状態が必要なときに使います。",
			"**哥伦比亚公民身份证状态**查询读取 Registraduría 的有效状态。发送 `documentNumber`。响应说明该号码是否存在、持证人是否被记录为在世，以及登记机关公布的状态文字。在做更完整的身份查询之前，需要当前 CC 状态时使用。",
		),
		after: L(
			"A successful payload includes `documentType` (CC), `documentNumber`, `exists`, `isAlive`, and `documentStatus`. `exists` is false when the registry says the number is not on file. `isAlive` is true, false, or null when the source does not settle that question. Run it in a KYC file that needs the current vigencia.",
			"Una respuesta correcta incluye `documentType` (CC), `documentNumber`, `exists`, `isAlive` y `documentStatus`. `exists` es false cuando el registro indica que el número no está. `isAlive` es true, false o null si la fuente no resuelve esa pregunta. Úsela en un expediente KYC que necesite la vigencia actual.",
			"Une réponse réussie contient `documentType` (CC), `documentNumber`, `exists`, `isAlive` et `documentStatus`. `exists` vaut false lorsque le registre indique que le numéro n'existe pas. `isAlive` vaut true, false ou null si la source ne tranche pas. Utilisez-la dans un dossier KYC qui a besoin de la vigencia courante.",
			"Uma resposta bem-sucedida inclui `documentType` (CC), `documentNumber`, `exists`, `isAlive` e `documentStatus`. `exists` é false quando o registro diz que o número não consta. `isAlive` é true, false ou null se a fonte não resolver essa pergunta. Use-a num dossiê KYC que precise da vigência atual.",
			"성공 응답에는 `documentType`(CC), `documentNumber`, `exists`, `isAlive`, `documentStatus`가 있습니다. 등록부에 번호가 없으면 `exists`는 false입니다. 원천이 생존 여부를 확정하지 않으면 `isAlive`는 true, false 또는 null입니다. 현재 유효 상태가 필요한 KYC 파일에서 실행합니다.",
			"成功時の応答には `documentType`（CC）、`documentNumber`、`exists`、`isAlive`、`documentStatus` があります。登録に番号が無いと `exists` は false です。情報源がその点を確定しないとき `isAlive` は true、false、または null です。現在の有効状態が必要な KYC ファイルで使います。",
			"成功响应包含 `documentType`（CC）、`documentNumber`、`exists`、`isAlive` 和 `documentStatus`。登记机关称该号码不存在时 `exists` 为 false。数据源未能确定生存状态时 `isAlive` 为 true、false 或 null。在需要当前有效状态的 KYC 档案中调用。",
		),
		fields: L(
			["`documentType` — CC", "`documentNumber` — the cédula you sent", "`exists` — whether the registry has the number", "`isAlive` — true, false, or null", "`documentStatus` — the vigencia text from the registry"],
			["`documentType` — CC", "`documentNumber` — la cédula enviada", "`exists` — si el registro tiene el número", "`isAlive` — true, false o null", "`documentStatus` — el texto de vigencia del registro"],
			["`documentType` — CC", "`documentNumber` — la cédula envoyée", "`exists` — le registre a-t-il le numéro", "`isAlive` — true, false ou null", "`documentStatus` — le libellé de vigencia du registre"],
			["`documentType` — CC", "`documentNumber` — a cédula enviada", "`exists` — se o registro tem o número", "`isAlive` — true, false ou null", "`documentStatus` — o texto de vigência do registro"],
			["`documentType` — CC", "`documentNumber` — 보낸 시민증 번호", "`exists` — 등록부에 번호가 있는지", "`isAlive` — true, false 또는 null", "`documentStatus` — 등록부가 준 유효 상태 문구"],
			["`documentType` — CC", "`documentNumber` — 送った市民証番号", "`exists` — 登録に番号があるか", "`isAlive` — true、false、または null", "`documentStatus` — 登録機関の有効状態文言"],
			["`documentType` — CC", "`documentNumber` — 你发送的身份证号", "`exists` — 登记机关是否有该号码", "`isAlive` — true、false 或 null", "`documentStatus` — 登记机关给出的有效状态文字"],
		),
		uses: L(
			["Confirm a CC is on file before you open an account.", "Separate a deceased record from a vigente cédula during KYC.", "Store the registry status text next to the document number."],
			["Confirme que la CC está en el registro antes de abrir una cuenta.", "Separe un registro de persona fallecida de una cédula vigente en el KYC.", "Guarde el texto de estado junto al número de documento."],
			["Confirmez qu'une CC est au registre avant d'ouvrir un compte.", "Séparez un dossier de personne décédée d'une cédula vigente pendant le KYC.", "Conservez le libellé de statut à côté du numéro."],
			["Confirme que a CC está no registro antes de abrir uma conta.", "Separe um registro de pessoa falecida de uma cédula vigente no KYC.", "Guarde o texto de estado junto do número do documento."],
			["계좌를 열기 전에 CC가 등록되어 있는지 확인합니다.", "KYC 중 사망 기록과 유효한 시민증을 구분합니다.", "문서 번호 옆에 상태 문구를 보관합니다."],
			["口座開設の前に CC が登録にあることを確認します。", "KYC で死亡記録と有効な市民証を分けます。", "文書番号の横に状態文言を保存します。"],
			["开户前确认该 CC 已在登记机关备案。", "在 KYC 中把死亡记录与有效身份证分开。", "把状态文字和证件号码一起留存。"],
		),
		notes: L(
			["`documentNumber` is required and must be 5 to 10 characters.", "`isAlive` can be null when the registry returns a status that does not settle life or death.", "This route is the vigencia lookup. It does not replace a full citizen profile."],
			["`documentNumber` es obligatorio y debe tener de 5 a 10 caracteres.", "`isAlive` puede ser null si el registro devuelve un estado que no define vida o muerte.", "Esta ruta es la consulta de vigencia. No sustituye un perfil completo del ciudadano."],
			["`documentNumber` est obligatoire et doit compter 5 à 10 caractères.", "`isAlive` peut valoir null si le registre renvoie un statut qui ne tranche pas la vie ou le décès.", "Cette route est la consulta de vigencia. Elle ne remplace pas un profil citoyen complet."],
			["`documentNumber` é obrigatório e deve ter de 5 a 10 caracteres.", "`isAlive` pode ser null se o registro devolver um estado que não define vida ou morte.", "Esta rota é a consulta de vigência. Não substitui um perfil completo do cidadão."],
			["`documentNumber`는 필수이며 5자에서 10자입니다.", "등록부가 생사를 확정하지 않는 상태를 주면 `isAlive`는 null일 수 있습니다.", "이 경로는 유효 상태 조회입니다. 전체 시민 프로필을 대체하지 않습니다."],
			["`documentNumber` は必須で、5文字から10文字です。", "登録が生死を確定しない状態を返すと `isAlive` は null になり得ます。", "この経路は有効状態の照会です。完全な市民プロファイルの代わりにはなりません。"],
			["`documentNumber` 必填，长度为 5 到 10 个字符。", "登记机关返回的状态不能判定生死时，`isAlive` 可以为 null。", "本接口是有效状态查询，不能代替完整的公民档案。"],
		),
		sandbox: sandbox3(
			['`documentNumber: "1121329661"`', "Omit `documentNumber`", '`documentNumber: "0000000000"`'],
			standardResults,
		),
	}),
];
