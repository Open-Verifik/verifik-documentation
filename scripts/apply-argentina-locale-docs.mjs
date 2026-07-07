#!/usr/bin/env node
/**
 * One-time helper: apply locale translations to Argentina vehicle sub-pages.
 * Run from repo root: node scripts/apply-argentina-locale-docs.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

const PAGES = [
	"vehicle-v3",
	"buenos-aires-traffic-infractions",
	"buenos-aires-technical-inspection",
	"rto",
];

const SECTION = {
	es: ["Endpoint", "Headers", "Parámetros", "Solicitud", "Respuesta", "Campos de respuesta", "Notas"],
	fr: ["Point d'accès", "En-têtes", "Paramètres", "Requête", "Réponse", "Champs de réponse", "Remarques"],
	pt: ["Endpoint", "Cabeçalhos", "Parâmetros", "Requisição", "Resposta", "Campos de resposta", "Notas"],
	ko: ["엔드포인트", "헤더", "매개변수", "요청", "응답", "응답 필드", "참고"],
	ja: ["エンドポイント", "ヘッダー", "パラメーター", "リクエスト", "レスポンス", "レスポンスフィールド", "メモ"],
	zh: ["端点", "请求头", "参数", "请求", "响应", "响应字段", "说明"],
};

const TABLE = {
	es: { Name: "Nombre", Type: "Tipo", Required: "Requerido", Description: "Descripción", Field: "Campo" },
	fr: { Name: "Nom", Type: "Type", Required: "Requis", Description: "Description", Field: "Champ" },
	pt: { Name: "Nome", Type: "Tipo", Required: "Obrigatório", Description: "Descrição", Field: "Campo" },
	ko: { Name: "이름", Type: "유형", Required: "필수", Description: "설명", Field: "필드" },
	ja: { Name: "名前", Type: "型", Required: "必須", Description: "説明", Field: "フィールド" },
	zh: { Name: "名称", Type: "类型", Required: "必填", Description: "说明", Field: "字段" },
};

const META = {
	"vehicle-v3": {
		es: {
			id: "validacion-vehiculos-argentina-vehicle-v3",
			title: "🇦🇷 Argentina - Vehículo v3",
			description:
				"Obtén los detalles de un vehículo argentino por placa, incluidos identificadores del vehículo, estado de la póliza y datos de ficha técnica cuando estén disponibles.",
			slug: "/validacion-vehiculos/argentina/vehicle-v3",
			h1: "# 🇦🇷 Argentina - Vehículo v3",
			intro:
				"Utiliza este endpoint para obtener los detalles de un vehículo argentino a partir de la placa. La respuesta incluye identificadores normalizados como número de motor, chasis, marca, modelo, año, color, tipo de unidad, estado de póliza activa y campos de ficha técnica cuando estén disponibles.",
			plateDesc:
				"Placa del vehículo a consultar, sin espacios ni signos de puntuación. Ejemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa del vehículo normalizada."],
				["engineNumber", "Número de motor devuelto por la fuente."],
				["chassis", "Identificador de chasis devuelto por la fuente."],
				["year", "Año del vehículo."],
				["brand", "Marca del vehículo."],
				["modelGroup", "Familia o grupo del modelo."],
				["model", "Etiqueta de modelo/versión del vehículo."],
				["color", "Color registrado."],
				["type", "Tipo de unidad del vehículo."],
				["isActivePolicyFound", "Indica si se encontró una póliza activa para el vehículo."],
				["technicalSheet", "Datos de ficha técnica cuando estén disponibles."],
			],
			notes: [
				"`technicalSheet` puede ser `null` o estar parcialmente poblado cuando no hay datos técnicos coincidentes.",
				"El servicio normaliza el formato de la placa antes de consultar la fuente.",
			],
		},
		fr: {
			title: "🇦🇷 Argentine — Véhicule v3",
			description:
				"Obtenez les détails d'un véhicule argentin par plaque, y compris les identifiants, le statut de police active et les données de fiche technique lorsqu'elles sont disponibles.",
			h1: "# 🇦🇷 Argentine — Véhicule v3",
			intro:
				"Utilisez ce point d'accès pour récupérer les détails d'un véhicule argentin à partir de la plaque. La réponse inclut des identifiants normalisés tels que le numéro de moteur, le châssis, la marque, le modèle, l'année, la couleur, le type d'unité, le statut de police active et les champs de fiche technique lorsqu'ils sont disponibles.",
			plateDesc:
				"Plaque d'immatriculation à interroger, sans espaces ni ponctuation. Exemple : `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Plaque normalisée."],
				["engineNumber", "Numéro de moteur renvoyé par la source."],
				["chassis", "Identifiant de châssis renvoyé par la source."],
				["year", "Année du véhicule."],
				["brand", "Marque du véhicule."],
				["modelGroup", "Famille ou groupe de modèle."],
				["model", "Libellé modèle/version."],
				["color", "Couleur enregistrée."],
				["type", "Type d'unité du véhicule."],
				["isActivePolicyFound", "Indique si une police active a été trouvée."],
				["technicalSheet", "Données de fiche technique lorsqu'elles sont disponibles."],
			],
			notes: [
				"`technicalSheet` peut être `null` ou partiellement renseigné lorsque les données techniques correspondantes ne sont pas disponibles.",
				"Le service normalise la casse de la plaque avant d'interroger la source.",
			],
		},
		pt: {
			title: "🇦🇷 Argentina — Veículo v3",
			description:
				"Obtenha detalhes de um veículo argentino pela placa, incluindo identificadores, status da apólice ativa e dados da ficha técnica quando disponíveis.",
			h1: "# 🇦🇷 Argentina — Veículo v3",
			intro:
				"Use este endpoint para recuperar detalhes de um veículo argentino a partir da placa. A resposta inclui identificadores normalizados como número do motor, chassi, marca, modelo, ano, cor, tipo de unidade, status da apólice ativa e campos da ficha técnica quando disponíveis.",
			plateDesc: "Placa do veículo a consultar, sem espaços ou pontuação. Exemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["engineNumber", "Número do motor retornado pela fonte."],
				["chassis", "Identificador do chassi retornado pela fonte."],
				["year", "Ano do veículo."],
				["brand", "Marca do veículo."],
				["modelGroup", "Família ou grupo do modelo."],
				["model", "Rótulo de modelo/versão."],
				["color", "Cor registrada."],
				["type", "Tipo de unidade do veículo."],
				["isActivePolicyFound", "Indica se uma apólice ativa foi encontrada."],
				["technicalSheet", "Dados da ficha técnica quando disponíveis."],
			],
			notes: [
				"`technicalSheet` pode ser `null` ou parcialmente preenchido quando não há dados técnicos correspondentes.",
				"O serviço normaliza o formato da placa antes de consultar a fonte.",
			],
		},
		ko: {
			title: "🇦🇷 아르헨티나 — 차량 v3",
			description:
				"번호판으로 아르헨티나 차량 상세 정보(차량 식별자, 활성 보험 상태, 기술 시트 데이터 등)를 조회합니다.",
			h1: "# 🇦🇷 아르헨티나 — 차량 v3",
			intro:
				"이 엔드포인트를 사용하여 번호판으로 아르헨티나 차량 상세 정보를 조회합니다. 응답에는 엔진 번호, 섀시, 브랜드, 모델, 연식, 색상, 차량 유형, 활성 보험 상태 및 기술 시트 필드(가능한 경우)가 포함됩니다.",
			plateDesc: "조회할 차량 번호판(공백 및 구두점 없음). 예: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "정규화된 차량 번호판."],
				["engineNumber", "소스에서 반환된 엔진 번호."],
				["chassis", "소스에서 반환된 섀시 식별자."],
				["year", "차량 연식."],
				["brand", "차량 브랜드."],
				["modelGroup", "모델군."],
				["model", "모델/버전 라벨."],
				["color", "등록 색상."],
				["type", "차량 유형."],
				["isActivePolicyFound", "활성 보험이 발견되었는지 여부."],
				["technicalSheet", "가능한 경우 기술 시트 데이터."],
			],
			notes: [
				"일치하는 기술 데이터가 없으면 `technicalSheet`는 `null`이거나 부분적으로 채워질 수 있습니다.",
				"서비스는 소스를 조회하기 전에 번호판 대소문자를 정규화합니다.",
			],
		},
		ja: {
			title: "🇦🇷 アルゼンチン — 車両 v3",
			description:
				"ナンバープレートでアルゼンチン車両の詳細（識別子、アクティブ保険の状態、技術シートデータなど）を取得します。",
			h1: "# 🇦🇷 アルゼンチン — 車両 v3",
			intro:
				"このエンドポイントでナンバープレートからアルゼンチン車両の詳細を取得します。レスポンスにはエンジン番号、シャシー、ブランド、モデル、年式、色、車両タイプ、アクティブ保険の状態、技術シートフィールド（利用可能な場合）が含まれます。",
			plateDesc: "照会するナンバープレート（スペース・句読点なし）。例: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "正規化されたナンバープレート。"],
				["engineNumber", "ソースから返されたエンジン番号。"],
				["chassis", "ソースから返されたシャシー識別子。"],
				["year", "車両年式。"],
				["brand", "車両ブランド。"],
				["modelGroup", "モデルファミリー。"],
				["model", "モデル/バージョンラベル。"],
				["color", "登録色。"],
				["type", "車両ユニットタイプ。"],
				["isActivePolicyFound", "アクティブ保険が見つかったかどうか。"],
				["technicalSheet", "利用可能な場合の技術シートデータ。"],
			],
			notes: [
				"一致する技術データがない場合、`technicalSheet` は `null` または部分的にのみ入力されることがあります。",
				"サービスはソース照会前にプレートの大文字小文字を正規化します。",
			],
		},
		zh: {
			title: "🇦🇷 阿根廷 — 车辆 v3",
			description: "通过车牌查询阿根廷车辆详情，包括车辆标识符、有效保单状态及技术参数表数据（如有）。",
			h1: "# 🇦🇷 阿根廷 — 车辆 v3",
			intro:
				"使用此端点通过车牌获取阿根廷车辆详情。响应包括标准化的车辆标识符，如发动机号、底盘号、品牌、型号、年份、颜色、车辆类型、有效保单状态及技术参数表字段（如有）。",
			plateDesc: "要查询的车牌，不含空格或标点。示例：`AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "标准化车牌。"],
				["engineNumber", "数据源返回的发动机号。"],
				["chassis", "数据源返回的底盘标识。"],
				["year", "车辆年份。"],
				["brand", "车辆品牌。"],
				["modelGroup", "车型系列。"],
				["model", "车型/版本标签。"],
				["color", "登记颜色。"],
				["type", "车辆类型。"],
				["isActivePolicyFound", "是否找到有效保单。"],
				["technicalSheet", "技术参数表数据（如有）。"],
			],
			notes: [
				"当无匹配技术数据时，`technicalSheet` 可能为 `null` 或部分填充。",
				"服务在查询数据源前会标准化车牌大小写。",
			],
		},
	},
	"buenos-aires-traffic-infractions": {
		es: {
			id: "validacion-vehiculos-argentina-buenos-aires-traffic-infractions",
			title: "Buenos Aires - Infracciones de Tránsito",
			description: "Consulta infracciones de tránsito en Buenos Aires por placa de vehículo argentina.",
			slug: "/validacion-vehiculos/argentina/buenos-aires-traffic-infractions",
			h1: "# Buenos Aires - Infracciones de Tránsito",
			intro:
				"Utiliza este endpoint para verificar si una placa tiene infracciones de tránsito en Buenos Aires. La respuesta incluye la placa, total de registros, números de caso y acta, estado, montos, autoridad emisora, fechas y detalles de infracción cuando se encuentren registros.",
			plateDesc:
				"Placa del vehículo a consultar, sin espacios ni signos de puntuación. Ejemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros devueltos por la fuente."],
				["infractions", "Registros de infracciones de tránsito asociados a la placa."],
				["infractions[].caseNumber", "Número de caso."],
				["infractions[].actNumber", "Número de acta."],
				["infractions[].status", "Estado público del caso."],
				["infractions[].isExpired", "Indica si el registro está vencido."],
				["infractions[].totalAmount", "Monto total devuelto por la fuente."],
				["infractions[].details", "Artículos y descripciones de la infracción."],
			],
			notes: [
				"Este endpoint está limitado a registros de infracciones de tránsito de Buenos Aires.",
				"`infractions` puede ser un array vacío cuando la placa no tiene infracciones devueltas.",
			],
		},
		fr: {
			title: "Buenos Aires — Infractions routières",
			description: "Vérifiez les infractions routières de Buenos Aires par plaque d'immatriculation argentine.",
			h1: "# Buenos Aires — Infractions routières",
			intro:
				"Utilisez ce point d'accès pour vérifier si une plaque présente des infractions routières à Buenos Aires. La réponse inclut la plaque, le total des enregistrements, les numéros de dossier et d'acte, le statut, les montants, l'autorité émettrice, les dates et les détails d'infraction lorsque des enregistrements sont trouvés.",
			plateDesc:
				"Plaque à interroger, sans espaces ni ponctuation. Exemple : `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Plaque normalisée."],
				["totalRecords", "Nombre d'enregistrements renvoyés par la source."],
				["infractions", "Enregistrements d'infractions associés à la plaque."],
				["infractions[].caseNumber", "Numéro de dossier."],
				["infractions[].actNumber", "Numéro d'acte."],
				["infractions[].status", "Statut public du dossier."],
				["infractions[].isExpired", "Indique si l'enregistrement est expiré."],
				["infractions[].totalAmount", "Montant total renvoyé par la source."],
				["infractions[].details", "Articles et descriptions de l'infraction."],
			],
			notes: [
				"Ce point d'accès est limité aux infractions routières de Buenos Aires.",
				"`infractions` peut être un tableau vide lorsque la plaque n'a pas d'infractions renvoyées.",
			],
		},
		pt: {
			title: "Buenos Aires — Infrações de trânsito",
			description: "Consulte infrações de trânsito em Buenos Aires pela placa do veículo argentino.",
			h1: "# Buenos Aires — Infrações de trânsito",
			intro:
				"Use este endpoint para verificar se uma placa possui infrações de trânsito em Buenos Aires. A resposta inclui a placa, total de registros, números de caso e auto, status, valores, autoridade emissora, datas e detalhes da infração quando registros forem encontrados.",
			plateDesc: "Placa a consultar, sem espaços ou pontuação. Exemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros retornados pela fonte."],
				["infractions", "Registros de infrações associados à placa."],
				["infractions[].caseNumber", "Número do caso."],
				["infractions[].actNumber", "Número do auto."],
				["infractions[].status", "Status público do caso."],
				["infractions[].isExpired", "Indica se o registro está vencido."],
				["infractions[].totalAmount", "Valor total retornado pela fonte."],
				["infractions[].details", "Artigos e descrições da infração."],
			],
			notes: [
				"Este endpoint está limitado a registros de infrações de trânsito de Buenos Aires.",
				"`infractions` pode ser um array vazio quando a placa não possui infrações retornadas.",
			],
		},
		ko: {
			title: "부에노스아이레스 — 교통 위반",
			description: "아르헨티나 차량 번호판으로 부에노스아이레스 교통 위반을 조회합니다.",
			h1: "# 부에노스아이레스 — 교통 위반",
			intro:
				"이 엔드포인트로 번호판의 부에노스아이레스 교통 위반 여부를 확인합니다. 응답에는 번호판, 총 기록 수, 사건 및 조서 번호, 상태, 금액, 발행 기관, 날짜 및 위반 상세(기록이 있는 경우)가 포함됩니다.",
			plateDesc: "조회할 번호판(공백 및 구두점 없음). 예: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "정규화된 번호판."],
				["totalRecords", "소스에서 반환된 기록 수."],
				["infractions", "번호판과 연결된 교통 위반 기록."],
				["infractions[].caseNumber", "사건 번호."],
				["infractions[].actNumber", "조서 번호."],
				["infractions[].status", "사건의 공개 상태."],
				["infractions[].isExpired", "기록 만료 여부."],
				["infractions[].totalAmount", "소스에서 반환된 총 금액."],
				["infractions[].details", "위반 조항 및 설명."],
			],
			notes: [
				"이 엔드포인트는 부에노스아이레스 교통 위반 기록으로 제한됩니다.",
				"번호판에 반환된 위반이 없으면 `infractions`는 빈 배열일 수 있습니다.",
			],
		},
		ja: {
			title: "ブエノスアイレス — 交通違反",
			description: "アルゼンチンのナンバープレートでブエノスアイレスの交通違反を照会します。",
			h1: "# ブエノスアイレス — 交通違反",
			intro:
				"このエンドポイントでナンバープレートにブエノスアイレスの交通違反があるか確認します。レスポンスにはプレート、記録総数、事件番号・通告番号、ステータス、金額、発行機関、日付、違反詳細（記録がある場合）が含まれます。",
			plateDesc: "照会するナンバープレート（スペース・句読点なし）。例: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "正規化されたプレート。"],
				["totalRecords", "ソースから返された記録数。"],
				["infractions", "プレートに関連する交通違反記録。"],
				["infractions[].caseNumber", "事件番号。"],
				["infractions[].actNumber", "通告番号。"],
				["infractions[].status", "事件の公開ステータス。"],
				["infractions[].isExpired", "記録が期限切れかどうか。"],
				["infractions[].totalAmount", "ソースから返された合計金額。"],
				["infractions[].details", "違反条項と説明。"],
			],
			notes: [
				"このエンドポイントはブエノスアイレスの交通違反記録に限定されます。",
				"プレートに返された違反がない場合、`infractions` は空配列になり得ます。",
			],
		},
		zh: {
			title: "布宜诺斯艾利斯 — 交通违章",
			description: "通过阿根廷车牌查询布宜诺斯艾利斯交通违章记录。",
			h1: "# 布宜诺斯艾利斯 — 交通违章",
			intro:
				"使用此端点检查车牌在布宜诺斯艾利斯是否有交通违章。响应包括车牌、记录总数、案件与文书编号、状态、金额、签发机构、日期及违章详情（如有记录）。",
			plateDesc: "要查询的车牌，不含空格或标点。示例：`AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "标准化车牌。"],
				["totalRecords", "数据源返回的记录数。"],
				["infractions", "与车牌关联的交通违章记录。"],
				["infractions[].caseNumber", "案件编号。"],
				["infractions[].actNumber", "文书编号。"],
				["infractions[].status", "案件公开状态。"],
				["infractions[].isExpired", "记录是否过期。"],
				["infractions[].totalAmount", "数据源返回的总金额。"],
				["infractions[].details", "违章条款与描述。"],
			],
			notes: [
				"此端点仅涵盖布宜诺斯艾利斯交通违章记录。",
				"车牌无返回违章时，`infractions` 可能为空数组。",
			],
		},
	},
	"buenos-aires-technical-inspection": {
		es: {
			id: "validacion-vehiculos-argentina-buenos-aires-technical-inspection",
			title: "Buenos Aires - Inspección Técnica",
			description: "Consulta el historial de inspección técnica vehicular en Buenos Aires por placa argentina.",
			slug: "/validacion-vehiculos/argentina/buenos-aires-technical-inspection",
			h1: "# Buenos Aires - Inspección Técnica",
			intro:
				"Utiliza este endpoint para consultar el historial de inspección técnica vehicular en Buenos Aires por placa. La respuesta devuelve registros con identificadores de verificación, fechas de verificación y vencimiento, tipo de resultado, número de oblea, comentarios, marca y modelo del vehículo, y nombre de la planta de inspección.",
			plateDesc:
				"Placa del vehículo a consultar, sin espacios ni signos de puntuación. Ejemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros de inspección técnica devueltos."],
				["inspections", "Registros de inspección técnica."],
				["inspections[].verificationId", "Identificador de verificación."],
				["inspections[].verificationDate", "Fecha de verificación de la inspección."],
				["inspections[].resultTypeId", "Identificador del tipo de resultado devuelto por la fuente."],
				["inspections[].stickerNumber", "Número de oblea de inspección."],
				["inspections[].expirationDate", "Fecha de vencimiento de la inspección."],
				["inspections[].brand", "Marca del vehículo."],
				["inspections[].model", "Modelo del vehículo."],
				["inspections[].plantName", "Nombre de la planta de inspección."],
			],
			notes: [
				"Este endpoint está limitado a registros de inspección técnica de Buenos Aires.",
				"Los campos de fecha se normalizan cuando la fuente devuelve un valor día/mes/año reconocible.",
			],
		},
		fr: {
			title: "Buenos Aires — Contrôle technique",
			description: "Consultez l'historique de contrôle technique à Buenos Aires par plaque argentine.",
			h1: "# Buenos Aires — Contrôle technique",
			intro:
				"Utilisez ce point d'accès pour consulter l'historique de contrôle technique à Buenos Aires par plaque. La réponse renvoie des enregistrements avec identifiants de vérification, dates de vérification et d'expiration, type de résultat, numéro de vignette, commentaires, marque et modèle du véhicule, et nom du centre de contrôle.",
			plateDesc:
				"Plaque à interroger, sans espaces ni ponctuation. Exemple : `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Plaque normalisée."],
				["totalRecords", "Nombre d'enregistrements de contrôle technique renvoyés."],
				["inspections", "Enregistrements de contrôle technique."],
				["inspections[].verificationId", "Identifiant de vérification."],
				["inspections[].verificationDate", "Date de vérification du contrôle."],
				["inspections[].resultTypeId", "Identifiant du type de résultat renvoyé par la source."],
				["inspections[].stickerNumber", "Numéro de vignette de contrôle."],
				["inspections[].expirationDate", "Date d'expiration du contrôle."],
				["inspections[].brand", "Marque du véhicule."],
				["inspections[].model", "Modèle du véhicule."],
				["inspections[].plantName", "Nom du centre de contrôle."],
			],
			notes: [
				"Ce point d'accès est limité aux contrôles techniques de Buenos Aires.",
				"Les champs de date sont normalisés lorsque la source renvoie une valeur jour/mois/année reconnaissable.",
			],
		},
		pt: {
			title: "Buenos Aires — Inspeção técnica",
			description: "Consulte o histórico de inspeção técnica em Buenos Aires pela placa argentina.",
			h1: "# Buenos Aires — Inspeção técnica",
			intro:
				"Use este endpoint para consultar o histórico de inspeção técnica em Buenos Aires pela placa. A resposta retorna registros com identificadores de verificação, datas de verificação e vencimento, tipo de resultado, número do selo, comentários, marca e modelo do veículo, e nome da planta de inspeção.",
			plateDesc: "Placa a consultar, sem espaços ou pontuação. Exemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros de inspeção técnica retornados."],
				["inspections", "Registros de inspeção técnica."],
				["inspections[].verificationId", "Identificador de verificação."],
				["inspections[].verificationDate", "Data de verificação da inspeção."],
				["inspections[].resultTypeId", "Identificador do tipo de resultado retornado pela fonte."],
				["inspections[].stickerNumber", "Número do selo de inspeção."],
				["inspections[].expirationDate", "Data de vencimento da inspeção."],
				["inspections[].brand", "Marca do veículo."],
				["inspections[].model", "Modelo do veículo."],
				["inspections[].plantName", "Nome da planta de inspeção."],
			],
			notes: [
				"Este endpoint está limitado a registros de inspeção técnica de Buenos Aires.",
				"Campos de data são normalizados quando a fonte retorna um valor dia/mês/ano reconhecível.",
			],
		},
		ko: {
			title: "부에노스아이레스 — 기술 검사",
			description: "아르헨티나 번호판으로 부에노스아이레스 차량 기술 검사 이력을 조회합니다.",
			h1: "# 부에노스아이레스 — 기술 검사",
			intro:
				"이 엔드포인트로 번호판 기준 부에노스아이레스 차량 기술 검사 이력을 조회합니다. 응답에는 검증 ID, 검증 및 만료 날짜, 결과 유형, 스티커 번호, 코멘트, 차량 브랜드 및 모델, 검사소 이름이 포함됩니다.",
			plateDesc: "조회할 번호판(공백 및 구두점 없음). 예: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "정규화된 번호판."],
				["totalRecords", "반환된 기술 검사 기록 수."],
				["inspections", "기술 검사 기록."],
				["inspections[].verificationId", "검증 식별자."],
				["inspections[].verificationDate", "검사 검증 날짜."],
				["inspections[].resultTypeId", "소스에서 반환된 결과 유형 ID."],
				["inspections[].stickerNumber", "검사 스티커 번호."],
				["inspections[].expirationDate", "검사 만료 날짜."],
				["inspections[].brand", "차량 브랜드."],
				["inspections[].model", "차량 모델."],
				["inspections[].plantName", "검사소 이름."],
			],
			notes: [
				"이 엔드포인트는 부에노스아이레스 기술 검사 기록으로 제한됩니다.",
				"소스가 인식 가능한 일/월/년 값을 반환하면 날짜 필드가 정규화됩니다.",
			],
		},
		ja: {
			title: "ブエノスアイレス — 技術検査",
			description: "アルゼンチンのナンバープレートでブエノスアイレスの車両技術検査履歴を照会します。",
			h1: "# ブエノスアイレス — 技術検査",
			intro:
				"このエンドポイントでナンバープレートからブエノスアイレスの車両技術検査履歴を照会します。レスポンスには検証ID、検証日・有効期限、結果タイプ、ステッカー番号、コメント、車両ブランド・モデル、検査場名が含まれます。",
			plateDesc: "照会するナンバープレート（スペース・句読点なし）。例: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "正規化されたプレート。"],
				["totalRecords", "返された技術検査記録数。"],
				["inspections", "技術検査記録。"],
				["inspections[].verificationId", "検証識別子。"],
				["inspections[].verificationDate", "検査検証日。"],
				["inspections[].resultTypeId", "ソースから返された結果タイプID。"],
				["inspections[].stickerNumber", "検査ステッカー番号。"],
				["inspections[].expirationDate", "検査有効期限。"],
				["inspections[].brand", "車両ブランド。"],
				["inspections[].model", "車両モデル。"],
				["inspections[].plantName", "検査場名。"],
			],
			notes: [
				"このエンドポイントはブエノスアイレスの技術検査記録に限定されます。",
				"ソースが認識可能な日/月/年値を返す場合、日付フィールドは正規化されます。",
			],
		},
		zh: {
			title: "布宜诺斯艾利斯 — 技术检验",
			description: "通过阿根廷车牌查询布宜诺斯艾利斯车辆技术检验历史。",
			h1: "# 布宜诺斯艾利斯 — 技术检验",
			intro:
				"使用此端点通过车牌查询布宜诺斯艾利斯车辆技术检验历史。响应返回检验记录，包括验证标识、检验与到期日期、结果类型、检验贴纸编号、备注、车辆品牌型号及检验站名称。",
			plateDesc: "要查询的车牌，不含空格或标点。示例：`AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "标准化车牌。"],
				["totalRecords", "返回的技术检验记录数。"],
				["inspections", "技术检验记录。"],
				["inspections[].verificationId", "验证标识。"],
				["inspections[].verificationDate", "检验验证日期。"],
				["inspections[].resultTypeId", "数据源返回的结果类型标识。"],
				["inspections[].stickerNumber", "检验贴纸编号。"],
				["inspections[].expirationDate", "检验到期日期。"],
				["inspections[].brand", "车辆品牌。"],
				["inspections[].model", "车辆型号。"],
				["inspections[].plantName", "检验站名称。"],
			],
			notes: [
				"此端点仅涵盖布宜诺斯艾利斯技术检验记录。",
				"当数据源返回可识别的日/月/年值时，日期字段会被标准化。",
			],
		},
	},
	rto: {
		es: {
			id: "validacion-vehiculos-argentina-rto",
			title: "Argentina - RTO",
			description: "Consulta registros de inspección RTO argentinos por placa de vehículo.",
			slug: "/validacion-vehiculos/argentina/rto",
			h1: "# Argentina - RTO",
			intro:
				"Utiliza este endpoint para consultar registros de inspección RTO argentinos por placa. La respuesta incluye resultado de inspección, tipo de inspección, fechas de inspección y vencimiento, certificado, categoría de escalabilidad, centro de inspección y tipo de alerta.",
			plateDesc:
				"Placa del vehículo a consultar, sin espacios ni signos de puntuación. Ejemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros RTO devueltos."],
				["inspections", "Registros de inspección RTO."],
				["inspections[].result", "Resultado de la inspección."],
				["inspections[].inspectionType", "Etiqueta del tipo de inspección."],
				["inspections[].inspectionDate", "Fecha de inspección."],
				["inspections[].expirationDate", "Fecha de vencimiento."],
				["inspections[].certificate", "Identificador del certificado."],
				["inspections[].scalabilityCategory", "Categoría de escalabilidad devuelta por la fuente."],
				["inspections[].inspectionCenter", "Nombre del centro de inspección."],
				["inspections[].alertType", "Tipo de alerta de la fuente cuando esté disponible."],
			],
			notes: [
				"Los campos de fecha se normalizan cuando la fuente devuelve un valor día/mes/año reconocible.",
				"Los registros RTO se devuelven como un array `inspections` para manejar múltiples registros por placa.",
			],
		},
		fr: {
			title: "🇦🇷 Argentine — RTO",
			description: "Consultez les enregistrements d'inspection RTO argentine par plaque.",
			h1: "# 🇦🇷 Argentine — RTO",
			intro:
				"Utilisez ce point d'accès pour consulter les enregistrements d'inspection RTO argentine par plaque. La réponse inclut le résultat, le type d'inspection, les dates d'inspection et d'expiration, le certificat, la catégorie d'évolutivité, le centre d'inspection et le type d'alerte.",
			plateDesc:
				"Plaque à interroger, sans espaces ni ponctuation. Exemple : `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Plaque normalisée."],
				["totalRecords", "Nombre d'enregistrements RTO renvoyés."],
				["inspections", "Enregistrements d'inspection RTO."],
				["inspections[].result", "Résultat de l'inspection."],
				["inspections[].inspectionType", "Libellé du type d'inspection."],
				["inspections[].inspectionDate", "Date d'inspection."],
				["inspections[].expirationDate", "Date d'expiration."],
				["inspections[].certificate", "Identifiant du certificat."],
				["inspections[].scalabilityCategory", "Catégorie d'évolutivité renvoyée par la source."],
				["inspections[].inspectionCenter", "Nom du centre d'inspection."],
				["inspections[].alertType", "Type d'alerte de la source lorsqu'il est disponible."],
			],
			notes: [
				"Les champs de date sont normalisés lorsque la source renvoie une valeur jour/mois/année reconnaissable.",
				"Les enregistrements RTO sont renvoyés dans un tableau `inspections` pour gérer plusieurs enregistrements par plaque.",
			],
		},
		pt: {
			title: "🇦🇷 Argentina — RTO",
			description: "Consulte registros de inspeção RTO argentina pela placa do veículo.",
			h1: "# 🇦🇷 Argentina — RTO",
			intro:
				"Use este endpoint para consultar registros de inspeção RTO argentina pela placa. A resposta inclui resultado da inspeção, tipo de inspeção, datas de inspeção e vencimento, certificado, categoria de escalabilidade, centro de inspeção e tipo de alerta.",
			plateDesc: "Placa a consultar, sem espaços ou pontuação. Exemplo: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "Placa normalizada."],
				["totalRecords", "Número de registros RTO retornados."],
				["inspections", "Registros de inspeção RTO."],
				["inspections[].result", "Resultado da inspeção."],
				["inspections[].inspectionType", "Rótulo do tipo de inspeção."],
				["inspections[].inspectionDate", "Data da inspeção."],
				["inspections[].expirationDate", "Data de vencimento."],
				["inspections[].certificate", "Identificador do certificado."],
				["inspections[].scalabilityCategory", "Categoria de escalabilidade retornada pela fonte."],
				["inspections[].inspectionCenter", "Nome do centro de inspeção."],
				["inspections[].alertType", "Tipo de alerta da fonte quando disponível."],
			],
			notes: [
				"Campos de data são normalizados quando a fonte retorna um valor dia/mês/ano reconhecível.",
				"Registros RTO são retornados como array `inspections` para lidar com múltiplos registros por placa.",
			],
		},
		ko: {
			title: "🇦🇷 아르헨티나 — RTO",
			description: "차량 번호판으로 아르헨티나 RTO 검사 기록을 조회합니다.",
			h1: "# 🇦🇷 아르헨티나 — RTO",
			intro:
				"이 엔드포인트로 번호판 기준 아르헨티나 RTO 검사 기록을 조회합니다. 응답에는 검사 결과, 검사 유형, 검사 및 만료 날짜, 인증서, 확장성 카테고리, 검사 센터 및 알림 유형이 포함됩니다.",
			plateDesc: "조회할 번호판(공백 및 구두점 없음). 예: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "정규화된 번호판."],
				["totalRecords", "반환된 RTO 기록 수."],
				["inspections", "RTO 검사 기록."],
				["inspections[].result", "검사 결과."],
				["inspections[].inspectionType", "검사 유형 라벨."],
				["inspections[].inspectionDate", "검사 날짜."],
				["inspections[].expirationDate", "만료 날짜."],
				["inspections[].certificate", "인증서 식별자."],
				["inspections[].scalabilityCategory", "소스에서 반환된 확장성 카테고리."],
				["inspections[].inspectionCenter", "검사 센터 이름."],
				["inspections[].alertType", "가능한 경우 소스 알림 유형."],
			],
			notes: [
				"소스가 인식 가능한 일/월/년 값을 반환하면 날짜 필드가 정규화됩니다.",
				"RTO 기록은 동일 번호판의 여러 기록을 처리하기 위해 `inspections` 배열로 반환됩니다.",
			],
		},
		ja: {
			title: "🇦🇷 アルゼンチン — RTO",
			description: "ナンバープレートでアルゼンチンRTO検査記録を照会します。",
			h1: "# 🇦🇷 アルゼンチン — RTO",
			intro:
				"このエンドポイントでナンバープレートからアルゼンチンRTO検査記録を照会します。レスポンスには検査結果、検査タイプ、検査日・有効期限、証明書、スケーラビリティカテゴリ、検査センター、アラートタイプが含まれます。",
			plateDesc: "照会するナンバープレート（スペース・句読点なし）。例: `AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "正規化されたプレート。"],
				["totalRecords", "返されたRTO記録数。"],
				["inspections", "RTO検査記録。"],
				["inspections[].result", "検査結果。"],
				["inspections[].inspectionType", "検査タイプラベル。"],
				["inspections[].inspectionDate", "検査日。"],
				["inspections[].expirationDate", "有効期限。"],
				["inspections[].certificate", "証明書識別子。"],
				["inspections[].scalabilityCategory", "ソースから返されたスケーラビリティカテゴリ。"],
				["inspections[].inspectionCenter", "検査センター名。"],
				["inspections[].alertType", "利用可能な場合のソースアラートタイプ。"],
			],
			notes: [
				"ソースが認識可能な日/月/年値を返す場合、日付フィールドは正規化されます。",
				"RTO記録は同一プレートの複数記録に対応するため `inspections` 配列で返されます。",
			],
		},
		zh: {
			title: "🇦🇷 阿根廷 — RTO",
			description: "通过车辆车牌查询阿根廷 RTO 检验记录。",
			h1: "# 🇦🇷 阿根廷 — RTO",
			intro:
				"使用此端点通过车牌查询阿根廷 RTO 检验记录。响应包括检验结果、检验类型、检验与到期日期、证书、扩展类别、检验中心及警报类型。",
			plateDesc: "要查询的车牌，不含空格或标点。示例：`AA123BB`, without spaces or punctuation).",
			fields: [
				["plate", "标准化车牌。"],
				["totalRecords", "返回的 RTO 记录数。"],
				["inspections", "RTO 检验记录。"],
				["inspections[].result", "检验结果。"],
				["inspections[].inspectionType", "检验类型标签。"],
				["inspections[].inspectionDate", "检验日期。"],
				["inspections[].expirationDate", "到期日期。"],
				["inspections[].certificate", "证书标识。"],
				["inspections[].scalabilityCategory", "数据源返回的扩展类别。"],
				["inspections[].inspectionCenter", "检验中心名称。"],
				["inspections[].alertType", "数据源警报类型（如有）。"],
			],
			notes: [
				"当数据源返回可识别的日/月/年值时，日期字段会被标准化。",
				"RTO 记录以 `inspections` 数组返回，以便处理同一车牌的多条记录。",
			],
		},
	},
};

const EN_ID = {
	"vehicle-v3": "vehicle-validation-argentina-vehicle-v3",
	"buenos-aires-traffic-infractions": "vehicle-validation-argentina-buenos-aires-traffic-infractions",
	"buenos-aires-technical-inspection": "vehicle-validation-argentina-buenos-aires-technical-inspection",
	rto: "vehicle-validation-argentina-rto",
};

const applyLocale = (content, locale, page, meta) => {
	const [endpoint, headers, params, request, response, responseFields, notes] = SECTION[locale];
	const t = TABLE[locale];
	let out = content;

	if (locale === "es" && meta.id) {
		out = out.replace(/^id: vehicle-validation-argentina-[^\n]+/m, `id: ${meta.id}`);
		out = out.replace(/^slug: \/vehicle-validation\/argentina\/[^\n]+/m, `slug: ${meta.slug}`);
	}

	out = out.replace(/^title: .+$/m, `title: ${meta.title}`);
	out = out.replace(/^description: .+$/m, `description: ${meta.description}`);

	const h1Match = content.match(/^# .+$/m);
	if (h1Match) out = out.replace(/^# .+$/m, meta.h1);

	const introMatch = content.match(/^Use this endpoint[\s\S]*?\n\n### Headers/m);
	if (introMatch) {
		out = out.replace(introMatch[0], `${meta.intro}\n\n### ${headers}`);
	}

	out = out
		.replace(/^### Endpoint$/m, `### ${endpoint}`)
		.replace(/^### Headers$/m, `### ${headers}`)
		.replace(/^### Parameters$/m, `### ${params}`)
		.replace(/^### Request$/m, `### ${request}`)
		.replace(/^### Response$/m, `### ${response}`)
		.replace(/^### Response fields$/m, `### ${responseFields}`)
		.replace(/^### Notes$/m, `### ${notes}`);

	out = out
		.replace(/\| Name \| Type \| Required \| Description \|/g, `| ${t.Name} | ${t.Type} | ${t.Required} | ${t.Description} |`)
		.replace(/\| Field \| Type \| Description \|/g, `| ${t.Field} | ${t.Type} | ${t.Description} |`);

	const plateRow = out.match(/\| `plate` \| string \| \*\*Yes\*\* \| [^|]+ \|/);
	if (plateRow) {
		out = out.replace(plateRow[0], `| \`plate\` | string | **Yes** | ${meta.plateDesc} |`);
	}

	const extractFieldRows = (src) => {
		const start = src.indexOf("### Response fields");
		if (start === -1) return [];
		const end = src.indexOf("\n### Notes", start);
		const block = end === -1 ? src.slice(start) : src.slice(start, end);
		return [...block.matchAll(/^\| `([^`]+)` \| (.+?) \| (.+?) \|$/gm)].map((m) => ({
			field: m[1],
			type: m[2].trim(),
			desc: m[3].trim(),
		}));
	};

	const enFields = extractFieldRows(content);
	const rebuilt = enFields
		.map(({ field, type }) => {
			const translated = meta.fields.find(([f]) => f === field)?.[1] ?? field;
			return `| \`${field}\` | ${type} | ${translated} |`;
		})
		.join("\n");

	const fieldsHeading = `### ${responseFields}`;
	const notesHeading = `### ${notes}`;
	const fieldsStart = out.indexOf(fieldsHeading);
	if (fieldsStart !== -1) {
		const sepLine = out.indexOf("| ----- |", fieldsStart);
		let notesStart = out.indexOf(`\n${notesHeading}`, fieldsStart);
		if (notesStart === -1) notesStart = out.indexOf("\n### ", fieldsStart + fieldsHeading.length);
		if (sepLine !== -1 && notesStart !== -1) {
			const headerEnd = out.indexOf("\n", sepLine) + 1;
			const tableHeader = out.slice(fieldsStart, headerEnd);
			out = `${out.slice(0, fieldsStart)}${tableHeader}${rebuilt}\n\n${out.slice(notesStart + 1)}`;
		}
	}

	const notesBlock = meta.notes.map((n) => `- ${n}`).join("\n");
	const notesRegex = new RegExp(`### ${notes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n\\n(?:- .+\\n)+`);
	if (notesRegex.test(out)) {
		out = out.replace(notesRegex, `${notesHeading}\n\n${notesBlock}\n`);
	} else {
		out = out.replace(/### Notes\n\n(?:- .+\n)+/m, `${notesHeading}\n\n${notesBlock}\n`);
	}

	return out;
};

for (const page of PAGES) {
	const enPath = path.join(ROOT, "docs/vehicle-validation/argentina", `${page}.mdx`);
	const enContent = fs.readFileSync(enPath, "utf8");

	for (const locale of ["es", "fr", "pt", "ko", "ja", "zh"]) {
		const meta = META[page][locale];
		const folder =
			locale === "es"
				? path.join(ROOT, "docs-es/validacion-vehiculos/argentina")
				: path.join(ROOT, `docs-${locale}/vehicle-validation/argentina`);
		const target = path.join(folder, `${page}.mdx`);
		const translated = applyLocale(enContent, locale, page, meta);
		fs.writeFileSync(target, translated);
		console.log(`wrote ${path.relative(ROOT, target)}`);
	}
}

console.log("done");
