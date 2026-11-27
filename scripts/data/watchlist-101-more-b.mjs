import { moreListsC } from "./watchlist-101-more-c.mjs";

const L = (...parts) => {
	if (parts.length !== 7) throw new Error(`Expected 7, got ${parts.length}: ${parts[0]}`);
	const [en, es, fr, pt, ko, ja, zh] = parts;
	return { en, es, fr, pt, ko, ja, zh };
};
const entry = (slug, group, flag, kind, title, issuer, jurisdiction, fact) => ({
	slug, group, flag, kind,
	title: L(...title), issuer: L(...issuer), jurisdiction: L(...jurisdiction), fact: L(...fact),
});

const ar = ["Argentina", "Argentina", "l'Argentine", "a Argentina", "아르헨티나", "アルゼンチン", "阿根廷"];
const au = ["Australia", "Australia", "l'Australie", "a Austrália", "호주", "オーストラリア", "澳大利亚"];
const at = ["Austria", "Austria", "l'Autriche", "a Áustria", "오스트리아", "オーストリア", "奥地利"];
const az = ["Azerbaijan", "Azerbaiyán", "l'Azerbaïdjan", "o Azerbaijão", "아제르바이잔", "アゼルバイジャン", "阿塞拜疆"];
const be = ["Belgium", "Bélgica", "la Belgique", "a Bélgica", "벨기에", "ベルギー", "比利时"];
const de = ["Germany", "Alemania", "l'Allemagne", "a Alemanha", "독일", "ドイツ", "德国"];
const bg = ["Bulgaria", "Bulgaria", "la Bulgarie", "a Bulgária", "불가리아", "ブルガリア", "保加利亚"];
const ca = ["Canada", "Canadá", "le Canada", "o Canadá", "캐나다", "カナダ", "加拿大"];
const cn = ["China", "China", "la Chine", "a China", "중국", "中国", "中国"];
const cz = ["the Czech Republic", "la República Checa", "la République tchèque", "a República Tcheca", "체코", "チェコ", "捷克"];
const eg = ["Egypt", "Egipto", "l'Égypte", "o Egito", "이집트", "エジプト", "埃及"];
const ee = ["Estonia", "Estonia", "l'Estonie", "a Estônia", "에스토니아", "エストニア", "爱沙尼亚"];
const fr = ["France", "Francia", "la France", "a França", "프랑스", "フランス", "法国"];
const ge = ["Georgia", "Georgia", "la Géorgie", "a Geórgia", "조지아", "ジョージア", "格鲁吉亚"];
const gg = ["Guernsey", "Guernsey", "Guernesey", "Guernsey", "건지", "ガーンジー", "根西"];
const ind = ["India", "la India", "l'Inde", "a Índia", "인도", "インド", "印度"];
const idn = ["Indonesia", "Indonesia", "l'Indonésie", "a Indonésia", "인도네시아", "インドネシア", "印度尼西亚"];
const ir = ["Iran", "Irán", "l'Iran", "o Irã", "이란", "イラン", "伊朗"];
const ie = ["Ireland", "Irlanda", "l'Irlande", "a Irlanda", "아일랜드", "アイルランド", "爱尔兰"];
const im = ["the Isle of Man", "la Isla de Man", "l'île de Man", "a Ilha de Man", "맨섬", "マン島", "马恩岛"];
const il = ["Israel", "Israel", "Israël", "Israel", "이스라엘", "イスラエル", "以色列"];
const jp = ["Japan", "Japón", "le Japon", "o Japão", "일본", "日本", "日本"];
const kz = ["Kazakhstan", "Kazajistán", "le Kazakhstan", "o Cazaquistão", "카자흐스탄", "カザフスタン", "哈萨克斯坦"];
const kg = ["Kyrgyzstan", "Kirguistán", "le Kirghizistan", "o Quirguistão", "키르기스스탄", "キルギス", "吉尔吉斯斯坦"];
const lv = ["Latvia", "Letonia", "la Lettonie", "a Letônia", "라트비아", "ラトビア", "拉脱维亚"];
const lt = ["Lithuania", "Lituania", "la Lituanie", "a Lituânia", "리투아니아", "リトアニア", "立陶宛"];
const lu = ["Luxembourg", "Luxemburgo", "le Luxembourg", "Luxemburgo", "룩셈부르크", "ルクセンブルク", "卢森堡"];

export const moreListsB = [
	entry("argentina-repet", "international", "🇦🇷", "sanctions",
		["Argentina RePET Sanctions", "Sanciones RePET de Argentina", "Sanctions RePET de l'Argentine", "Sanções RePET da Argentina", "아르헨티나 RePET 제재", "アルゼンチンRePET制裁", "阿根廷RePET制裁"],
		["the Argentine Public Registry of Persons and Entities Linked to Terrorist Acts (RePET)", "el Registro Público de Personas y Entidades vinculadas a actos de Terrorismo (RePET)", "le registre public argentin des personnes et entités liées à des actes de terrorisme (RePET)", "o Registro Público de Pessoas e Entidades vinculadas a atos de Terrorismo (RePET)", "테러 행위 관련 개인·단체 공공등록부(RePET)", "テロ行為に関連する個人・団体の公的登録（RePET）", "与恐怖活动有关的人员与实体公共登记册（RePET）"],
		ar,
		["RePET is Argentina's public registry of persons and entities linked to terrorist acts and terrorist financing, used by obligated parties in AML/CFT controls.",
			"RePET es el registro público argentino de personas y entidades vinculadas a actos de terrorismo y su financiación, usado por los sujetos obligados en controles ALA/CFT.",
			"RePET est le registre public argentin des personnes et entités liées à des actes de terrorisme et à son financement, utilisé par les assujettis dans les contrôles LCB-FT.",
			"O RePET é o registro público argentino de pessoas e entidades ligadas a atos de terrorismo e ao seu financiamento, usado pelos obrigados nos controles de PLD/CFT.",
			"RePET는 테러 행위 및 테러자금조달과 연결된 개인과 단체의 아르헨티나 공공 등록부로, AML/CFT 통제에서 의무 기관이 사용합니다.",
			"RePETは、テロ行為およびテロ資金供与に関連する個人と団体のアルゼンチンの公的登録で、AML/CFTの義務主体が用います。",
			"RePET是阿根廷与恐怖活动及其融资有关的人员与实体公共登记册，义务机构在反洗钱/反恐怖融资控制中使用。"]),
	entry("australia-sanctions", "international", "🇦🇺", "sanctions",
		["Australian Sanctions Consolidated List", "Lista consolidada de sanciones de Australia", "Liste consolidée des sanctions australiennes", "Lista consolidada de sanções da Austrália", "호주 제재 통합 명단", "オーストラリア制裁統合リスト", "澳大利亚综合制裁名单"],
		["the Department of Foreign Affairs and Trade", "el Departamento de Asuntos Exteriores y Comercio", "le ministère des Affaires étrangères et du Commerce", "o Departamento de Negócios Estrangeiros e Comércio", "외교무역부", "外務貿易省", "外交贸易部"],
		au,
		["DFAT publishes the consolidated list of persons and entities subject to Australian targeted financial sanctions and related travel bans.",
			"El DFAT publica la lista consolidada de personas y entidades sujetas a sanciones financieras selectivas de Australia y a las prohibiciones de viaje conexas.",
			"Le DFAT publie la liste consolidée des personnes et entités soumises aux sanctions financières ciblées de l'Australie et aux interdictions de voyage liées.",
			"O DFAT publica a lista consolidada de pessoas e entidades sujeitas a sanções financeiras direcionadas da Austrália e às proibições de viagem conexas.",
			"DFAT는 호주의 표적 금융제재와 관련 여행금지 대상인 개인과 단체를 통합 명단으로 공개합니다.",
			"DFATは、オーストラリアの対象を特定した金融制裁と関連する渡航禁止の対象となる個人と団体の統合リストを公開します。",
			"外交贸易部公布受澳大利亚定向金融制裁及相关旅行禁令约束的个人和实体综合名单。"]),
	entry("austria-sanctions", "international", "🇦🇹", "sanctions",
		["Austrian National Bank Terrorism Financing Restrictions", "Restricciones de financiación del terrorismo del Banco Nacional de Austria", "Restrictions de financement du terrorisme de la Banque nationale d'Autriche", "Restrições de financiamento do terrorismo do Banco Nacional da Áustria", "오스트리아 국립은행 테러자금조달 제한", "オーストリア国立銀行のテロ資金供与制限", "奥地利国家银行恐怖融资限制"],
		["the Oesterreichische Nationalbank", "el Oesterreichische Nationalbank", "l'Oesterreichische Nationalbank", "o Oesterreichische Nationalbank", "오스트리아 국립은행", "オーストリア国立銀行", "奥地利国家银行"],
		at,
		["The Austrian National Bank list records restrictions related to the financing of terrorism under Austrian measures.",
			"La lista del Banco Nacional de Austria registra restricciones relacionadas con la financiación del terrorismo conforme a las medidas austriacas.",
			"La liste de la Banque nationale d'Autriche recense les restrictions liées au financement du terrorisme au titre des mesures autrichiennes.",
			"A lista do Banco Nacional da Áustria registra restrições ligadas ao financiamento do terrorismo segundo as medidas austríacas.",
			"오스트리아 국립은행 명단은 오스트리아 조치에 따른 테러자금조달 관련 제한을 기록합니다.",
			"オーストリア国立銀行のリストは、オーストリアの措置に基づくテロ資金供与に関する制限を記録します。",
			"奥地利国家银行名单记录根据奥地利措施与恐怖融资有关的限制。"]),
	entry("azerbaijan-fms-sanctions", "international", "🇦🇿", "sanctions",
		["Azerbaijan Domestic List", "Lista nacional de Azerbaiyán", "Liste nationale de l'Azerbaïdjan", "Lista nacional do Azerbaijão", "아제르바이잔 국내 명단", "アゼルバイジャン国内リスト", "阿塞拜疆国内名单"],
		["the Financial Monitoring Service of Azerbaijan", "el Servicio de Monitoreo Financiero de Azerbaiyán", "le service de surveillance financière de l'Azerbaïdjan", "o Serviço de Monitoramento Financeiro do Azerbaijão", "아제르바이잔 금융모니터링청", "アゼルバイジャン金融監視庁", "阿塞拜疆金融监测局"],
		az,
		["Azerbaijan's financial monitoring authority publishes this domestic list of designated persons and entities for sanctions screening.",
			"La autoridad de monitoreo financiero de Azerbaiyán publica esta lista nacional de personas y entidades designadas para el cribado de sanciones.",
			"L'autorité de surveillance financière de l'Azerbaïdjan publie cette liste nationale de personnes et entités désignées pour le criblage des sanctions.",
			"A autoridade de monitoramento financeiro do Azerbaijão publica esta lista nacional de pessoas e entidades designadas para triagem de sanções.",
			"아제르바이잔 금융모니터링 당국은 제재 스크리닝을 위한 지정 개인 및 단체의 국내 명단을 공개합니다.",
			"アゼルバイジャンの金融監視当局は、制裁スクリーニングのための指定個人・団体の国内リストを公開します。",
			"阿塞拜疆金融监测机关公布这份用于制裁筛查的国内被指定人员与实体名单。"]),
	entry("belgium-sanctions", "international", "🇧🇪", "sanctions",
		["Belgian Financial Sanctions", "Sanciones financieras de Bélgica", "Sanctions financières belges", "Sanções financeiras da Bélgica", "벨기에 금융제재", "ベルギーの金融制裁", "比利时金融制裁"],
		["the Belgian Federal Public Service Finance", "el Servicio Público Federal de Finanzas de Bélgica", "le Service public fédéral Finances de Belgique", "o Serviço Público Federal de Finanças da Bélgica", "벨기에 연방 재정공공서비스", "ベルギー連邦財務公サービス", "比利时联邦财政公共服务局"],
		be,
		["The Belgian financial sanctions list records persons and entities subject to financial sanctions that must be applied in Belgium, including asset freezes.",
			"La lista belga de sanciones financieras registra personas y entidades sujetas a sanciones financieras que deben aplicarse en Bélgica, incluidos embargos de bienes.",
			"La liste belge des sanctions financières recense les personnes et entités soumises à des sanctions financières applicables en Belgique, y compris les gels d'avoirs.",
			"A lista belga de sanções financeiras registra pessoas e entidades sujeitas a sanções financeiras que devem ser aplicadas na Bélgica, incluindo congelamento de bens.",
			"벨기에 금융제재 명단은 자산 동결을 포함해 벨기에에서 적용해야 하는 금융제재 대상 개인과 단체를 기록합니다.",
			"ベルギーの金融制裁リストは、資産凍結を含めベルギーで適用すべき金融制裁の対象となる個人と団体を記録します。",
			"比利时金融制裁名单记录必须在比利时执行的金融制裁对象，包括资产冻结。"]),
	entry("bka-wanted", "international", "🇩🇪", "wanted",
		["Germany BKA Wanted Fugitives", "Prófugos buscados por el BKA de Alemania", "Fugitifs recherchés par le BKA d'Allemagne", "Foragidos procurados pelo BKA da Alemanha", "독일 BKA 지명수배자", "ドイツBKAの手配逃亡者", "德国BKA通缉逃犯"],
		["the Bundeskriminalamt", "la Oficina Federal de Investigación Criminal (BKA)", "l'Office fédéral de police criminelle (BKA)", "o Departamento Federal de Investigação Criminal (BKA)", "연방범죄수사청(BKA)", "連邦刑事庁（BKA）", "联邦刑事警察局（BKA）"],
		de,
		["The Bundeskriminalamt publishes persons sought by German police. A match means the queried name appears on that public wanted list.",
			"La Oficina Federal de Investigación Criminal publica personas buscadas por la policía alemana. Una coincidencia significa que el nombre consultado aparece en esa lista pública.",
			"L'Office fédéral de police criminelle publie des personnes recherchées par la police allemande. Une correspondance signifie que le nom interrogé figure sur cette liste publique.",
			"O Departamento Federal de Investigação Criminal publica pessoas procuradas pela polícia alemã. Uma correspondência significa que o nome consultado aparece nessa lista pública.",
			"연방범죄수사청은 독일 경찰이 추적하는 사람을 공개합니다. 일치하면 조회한 이름이 그 공개 수배 명단에 있습니다.",
			"連邦刑事庁は、ドイツ警察が追跡する人を公開します。一致は、照会した氏名がその公開手配リストにあることを意味します。",
			"联邦刑事警察局公布德国警方通缉的人员。命中表示所查询的姓名出现在该公开通缉名单上。"]),
	entry("bulgaria-sanctions", "international", "🇧🇬", "sanctions",
		["Bulgarian Persons of Interest", "Personas de interés de Bulgaria", "Personnes d'intérêt de Bulgarie", "Pessoas de interesse da Bulgária", "불가리아 관심 인물", "ブルガリアの関心対象者", "保加利亚关注人员"],
		["the Bulgarian competent authorities", "las autoridades competentes de Bulgaria", "les autorités compétentes bulgares", "as autoridades competentes da Bulgária", "불가리아 관할 당국", "ブルガリアの所管当局", "保加利亚主管机关"],
		bg,
		["This national list records persons of interest designated for screening under Bulgarian measures. Use it as a published domestic screening source, not as a finding by itself.",
			"Esta lista nacional registra personas de interés designadas para cribado conforme a medidas búlgaras. Úsela como fuente nacional publicada, no como una determinación por sí sola.",
			"Cette liste nationale recense des personnes d'intérêt désignées pour un criblage au titre de mesures bulgares. Utilisez-la comme source nationale publiée, et non comme une décision en soi.",
			"Esta lista nacional registra pessoas de interesse designadas para triagem segundo medidas búlgaras. Use-a como fonte nacional publicada, e não como uma determinação por si só.",
			"이 국가 명단은 불가리아 조치에 따라 스크리닝 대상으로 지정된 관심 인물을 기록합니다. 그 자체로 판단이 아니라 공개된 국내 출처로 사용하십시오.",
			"この国内リストは、ブルガリアの措置に基づきスクリーニング対象として指定された関心対象者を記録します。それ自体の判断ではなく、公開された国内情報源として使ってください。",
			"该国内名单记录根据保加利亚措施被指定供筛查的关注人员。请将其作为已公布的国内来源，而不是单独的认定。"]),
	entry("canada-autonomous-sanctions", "international", "🇨🇦", "sanctions",
		["Canadian Consolidated Autonomous Sanctions List", "Lista consolidada de sanciones autónomas de Canadá", "Liste consolidée des sanctions autonomes du Canada", "Lista consolidada de sanções autônomas do Canadá", "캐나다 자율제재 통합 명단", "カナダ自主制裁統合リスト", "加拿大自主制裁综合名单"],
		["Global Affairs Canada", "Asuntos Globales de Canadá", "Affaires mondiales Canada", "o Global Affairs Canada", "캐나다 글로벌사무부", "カナダグローバル問題省", "加拿大全球事务部"],
		ca,
		["Global Affairs Canada publishes the consolidated list of persons and entities designated under Canada's autonomous sanctions regulations.",
			"Asuntos Globales de Canadá publica la lista consolidada de personas y entidades designadas conforme a los reglamentos autónomos de sanciones de Canadá.",
			"Affaires mondiales Canada publie la liste consolidée des personnes et entités désignées au titre des règlements de sanctions autonomes du Canada.",
			"O Global Affairs Canada publica a lista consolidada de pessoas e entidades designadas segundo os regulamentos de sanções autônomas do Canadá.",
			"캐나다 글로벌사무부는 캐나다 자율제재 규정에 따라 지정된 개인과 단체의 통합 명단을 공개합니다.",
			"カナダグローバル問題省は、カナダの自主制裁規則に基づき指定された個人と団体の統合リストを公開します。",
			"加拿大全球事务部公布根据加拿大自主制裁条例被指定的个人和实体综合名单。"]),
	entry("canada-facfoa", "international", "🇨🇦", "sanctions",
		["Canadian Freezing Assets of Corrupt Foreign Officials Act", "Ley canadiense de congelación de bienes de funcionarios extranjeros corruptos", "Loi canadienne sur le blocage des biens de dirigeants étrangers corrompus", "Lei canadense de congelamento de bens de agentes públicos estrangeiros corruptos", "캐나다 부패 외국공직자 자산동결법", "カナダ腐敗外国公務員資産凍結法", "加拿大冻结腐败外国官员资产法"],
		["Global Affairs Canada", "Asuntos Globales de Canadá", "Affaires mondiales Canada", "o Global Affairs Canada", "캐나다 글로벌사무부", "カナダグローバル問題省", "加拿大全球事务部"],
		ca,
		["The Freezing Assets of Corrupt Foreign Officials Act list names foreign politically exposed persons whose property may be frozen under a Canadian order.",
			"La lista de la Ley de congelación de bienes de funcionarios extranjeros corruptos nombra a personas políticamente expuestas extranjeras cuyos bienes pueden congelarse por una orden canadiense.",
			"La liste de la loi sur le blocage des biens de dirigeants étrangers corrompus nomme des personnes politiquement exposées étrangères dont les biens peuvent être gelés par un décret canadien.",
			"A lista da lei de congelamento de bens de agentes públicos estrangeiros corruptos nomeia pessoas politicamente expostas estrangeiras cujos bens podem ser congelados por ordem canadense.",
			"부패 외국공직자 자산동결법 명단은 캐나다 명령으로 재산이 동결될 수 있는 외국 정치적 노출자를 수록합니다.",
			"腐敗外国公務員資産凍結法のリストは、カナダの命令により財産が凍結され得る外国の政治的に露出した者を掲載します。",
			"《冻结腐败外国官员资产法》名单列入其财产可根据加拿大命令被冻结的外国政治公众人物。"]),
	entry("canada-nro", "international", "🇨🇦", "exclusion",
		["Canadian Named Research Organizations", "Organizaciones de investigación designadas de Canadá", "Organisations de recherche désignées du Canada", "Organizações de pesquisa designadas do Canadá", "캐나다 지정 연구기관", "カナダの指定研究機関", "加拿大列名研究机构"],
		["the Government of Canada", "el Gobierno de Canadá", "le gouvernement du Canada", "o Governo do Canadá", "캐나다 정부", "カナダ政府", "加拿大政府"],
		ca,
		["Canada's Named Research Organizations list identifies research organizations for which certain sensitive-technology research partnerships are restricted.",
			"La lista canadiense de organizaciones de investigación designadas identifica organismos con los que están restringidas ciertas alianzas de investigación en tecnología sensible.",
			"La liste canadienne des organisations de recherche désignées identifie les organismes pour lesquels certains partenariats de recherche en technologies sensibles sont restreints.",
			"A lista canadense de organizações de pesquisa designadas identifica organismos para os quais certas parcerias de pesquisa em tecnologia sensível são restritas.",
			"캐나다 지정 연구기관 명단은 특정 민감기술 연구 협력이 제한되는 연구기관을 식별합니다.",
			"カナダの指定研究機関リストは、特定の機微技術に関する研究提携が制限される研究機関を識別します。",
			"加拿大列名研究机构名单标识某些敏感技术研究合作受到限制的研究机构。"]),
	entry("canada-terrorist-entities", "international", "🇨🇦", "terrorist",
		["Canadian Listed Terrorist Entities", "Entidades terroristas listadas de Canadá", "Entités terroristes inscrites du Canada", "Entidades terroristas listadas do Canadá", "캐나다 등재 테러 단체", "カナダのテロ団体指定", "加拿大列名恐怖实体"],
		["Public Safety Canada", "Seguridad Pública de Canadá", "Sécurité publique Canada", "o Public Safety Canada", "캐나다 공공안전부", "カナダ公共安全省", "加拿大公共安全部"],
		ca,
		["Public Safety Canada publishes entities listed as terrorist entities under the Criminal Code. Dealings with listed property are prohibited.",
			"Seguridad Pública de Canadá publica las entidades listadas como terroristas conforme al Código Penal. Están prohibidas las operaciones con bienes listados.",
			"Sécurité publique Canada publie les entités inscrites comme entités terroristes au titre du Code criminel. Les opérations sur des biens inscrits sont interdites.",
			"O Public Safety Canada publica as entidades listadas como terroristas segundo o Código Penal. Operações com bens listados são proibidas.",
			"캐나다 공공안전부는 형법에 따라 테러 단체로 등재된 단체를 공개합니다. 등재 재산과의 거래는 금지됩니다.",
			"カナダ公共安全省は、刑法に基づきテロ団体として記載された団体を公開します。記載された財産との取引は禁止されます。",
			"加拿大公共安全部公布根据《刑法》列为恐怖实体的实体。与被列财产进行交易受到禁止。"]),
	...moreListsC,
];
