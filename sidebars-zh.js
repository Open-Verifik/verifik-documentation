// @ts-check
/** Chinese (Simplified) docs (partial tree); expand as `docs-zh/` grows.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	tutorialSidebar: [
		{ type: "doc", id: "intro", label: "主页" },
		{
			type: "category",
			label: "车辆核验",
			collapsible: false,
			items: [
				{ type: "doc", id: "vehicle-validation/argentina", label: "🇦🇷 阿根廷 — 车辆信息" },
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 巴拉圭 — 车辆信息" },
				{
					type: "category",
					label: "🇨🇴 哥伦比亚",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-plate",
							label: "🇨🇴 波哥大 — 出租车（车牌）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
							label: "🇨🇴 波哥大 - 出租车（控制卡）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "🇨🇴 波哥大 — 车辆罚单",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "🇨🇴 波哥大 — 车辆税费",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "🇨🇴 波哥大 — 事故记录",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "🇨🇴 波哥大 — Pico y Placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-values-by-plate",
							label: "🇨🇴 Fasecolda — 按车牌车辆价值",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-vehicle-by-code",
							label: "🇨🇴 Fasecolda — 按代码车辆价值",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-claims-verification",
							label: "🇨🇴 Fasecolda — 理赔记录",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "🇨🇴 RUNT — 驾驶证",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "🇨🇴 RUNT — 按车牌车辆(完整)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "🇨🇴 RUNT — 按车牌车辆(简化)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehiculo",
							label: "🇨🇴 RUNT — 车辆(基本)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "🇨🇴 RUNT — 车辆(VIN)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - 按车牌综合查询",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - 按身份证件综合查询",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - 查询",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 罚款",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-comparendo-details",
							label: "🇨🇴 SIMIT - 罚单详情",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-medellin-vehicle-fines",
							label: "🇨🇴 麦德林 - 交通罚单",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - 分期付款协议",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - 决议",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-suspensiones",
							label: "🇨🇴 SIMIT — 驾照停用",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "🇨🇴 SISCONMP — 运输培训核验",
						},
						{
							type: "doc",
							id: "identity/colombia-situacion-militar",
							label: "🇨🇴 兵役状况",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 哥斯达黎加 — 车辆（号牌）" },
				{ type: "doc", id: "vehicle-validation/bolivia", label: "🇧🇴 玻利维亚 — 车辆信息" },
				{ type: "doc", id: "vehicle-validation/ecuador", label: "🇪🇨 厄瓜多尔 — 车辆罚单" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-brazil",
					label: "🇧🇷 巴西 — 车辆（号牌）",
				},
				{
					type: "category",
					label: "🇵🇪 秘鲁",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/peru", label: "🇵🇪 秘鲁 — 车辆" },
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "🇵🇪 秘鲁 — 车辆（号牌）",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "🇵🇪 秘鲁 — SOAT 保险",
						},
					],
				},
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 墨西哥",
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 西班牙" },
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 智利 — 车辆（号牌）" },
				{ type: "doc", id: "vehicle-validation/chile/vehicle-validation-chile-transport-vehicle", label: "🇨🇱 智利 — 公共交通车辆" },
			],
		},
		{
			type: "category",
			label: "身份核验",
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 阿根廷公民（DNI）" },
				{ type: "doc", id: "identity/argentina-extra", label: "🇦🇷 阿根廷 — 扩展身份" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 巴拉圭公民（CIC）" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 巴西公民（CPF）" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 玻利维亚公民（CI）" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 巴拿马国民身份证（CCPA）" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 哥斯达黎加国民身份证（CCCR）" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 厄瓜多尔公民（CCEC）" },
				{ type: "doc", id: "identity/colombia", label: "🇨🇴 哥伦比亚公民（CC / PPT）" },
				{ type: "doc", id: "identity/colombia-full-id", label: "🇨🇴 国民身份证（扩展）" },
				{
					type: "doc",
					id: "identity-validation/colombia/colombian-citizen",
					label: "🇨🇴 哥伦比亚公民（身份核验）",
				},
				{ type: "doc", id: "identity/colombia-registraduria-certificate", label: "🇨🇴 选举机构有效性证明" },
				{ type: "doc", id: "identity/colombia-pep-id", label: "🇨🇴 PEP（特别居留）" },
				{ type: "doc", id: "identity/colombia-ce", label: "🇨🇴 外国人 CE" },
				{
					type: "doc",
					id: "identity-validation/colombia/colombia-identity-documents-guide",
					label: "🇨🇴 哥伦比亚证件指南",
				},
				{ type: "doc", id: "identity/colombia-ppt", label: "🇨🇴 PPT（临时保护）" },
				{
					type: "doc",
					id: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
					label: "🇨🇴 PEP 查询（AML）",
				},
				{ type: "doc", id: "identity/canada", label: "🇨🇦 加拿大 — 驾驶证（BC 与安大略）" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 秘鲁公民（DNI）" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 秘鲁外国人 CE" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 秘鲁 DNI（扩展）" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 墨西哥公民" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 委内瑞拉国民（CCVE）" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 委内瑞拉 — 外国人身份证（CEVE）" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 西班牙公民" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 智利国民身份证（RUN）" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 智利 — 纳税人（RUT）" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 智利 — 身份证件有效性" },
				{ type: "doc", id: "identity/identity-ip-lookup", label: "🌐 IP 地理定位" },
			],
		},
		{
			type: "category",
			label: "企业(KYB)",
			collapsible: false,
			items: [
				{ type: "doc", id: "business-validation/argentina", label: "🇦🇷 阿根廷企业（CUIT）" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 巴拉圭企业（RUC）" },
				{
					type: "doc",
					id: "business-validation/business-validation-brazil",
					label: "🇧🇷 巴西企业（CNPJ）",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 巴拿马企业（RUC）" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 哥斯达黎加企业（NITE）" },
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 加拿大企业核验" },
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 秘鲁企业（RUC）" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 墨西哥企业核验" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 墨西哥企业核验 (FME)",
				},
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 西班牙 — 企业（CIF/NIF）" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 智利 — 企业（RUT）" },
				{
					type: "doc",
					id: "business-validation/colombia-dian-verification",
					label: "🇨🇴 DIAN 税务核验",
				},
				{
					type: "doc",
					id: "business-validation/colombia-legal-invoicer-verification",
					label: "🇨🇴 法定开票人核验",
				},
				{
					type: "doc",
					id: "business-validation/business-validation-colombia-rues-v3",
					label: "🇨🇴 RUES 企业查询 (v3)",
				},
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 RUES 完整核验 (v3)",
				},
				{
					type: "doc",
					id: "business-validation/colombia-rues-v2",
					label: "🇨🇴 RUES 企业查询 (v2)",
				},
			],
		},
		{
			type: "category",
			label: "驾驶证",
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 不列颠哥伦比亚 — 驾驶证",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 安大略 — 驾驶证",
				},
				{
					type: "doc",
					id: "driver-validation/quebec-driver-license",
					label: "🇨🇦 魁北克 — 驾驶证",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 智利 — 驾驶证",
				},
			],
		},
		{
			type: "category",
			label: "背景调查",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 巴西" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 公共合同" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 纪律处分记录" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 警方犯罪记录" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 审计署证明" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/colombia-sisben-score", label: "🇨🇴 SISBEN 分数" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 纠正措施" },
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 律师查询",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 司法程序",
				},
				{
					type: "doc",
					id: "legal/colombia-judicial-records",
					label: "🇨🇴 司法记录",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 司法程序详情",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-number",
					label: "🇨🇴 SIGEP（证件）",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-name",
					label: "🇨🇴 SIGEP（姓名）",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 律师资格证明",
				},
				{ type: "doc", id: "background-check/dea-background-check", label: "🌐 DEA" },
				{ type: "doc", id: "background-check/europol-background-check", label: "🌐 Europol" },
				{ type: "doc", id: "background-check/fbi-background-check", label: "🌐 FBI" },
				{ type: "doc", id: "background-check/interpol-background-check", label: "🌐 Interpol" },
				{ type: "doc", id: "background-check/ofac-background-check", label: "🌐 OFAC" },
				{ type: "doc", id: "background-check/onu-background-check", label: "🌐 ONU" },
			],
		},
		{
			type: "category",
			label: "证书",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "certificates/certificates-colombia-ministerio-trabajo-v3",
					label: "🇨🇴 劳动部证书 (v3)",
				},
				{
					type: "doc",
					id: "certificates/certificates-sena-certificates",
					label: "🇨🇴 SENA 证书",
				},
			],
		},
		{
			type: "category",
			label: "VERIFIK LLC",
			collapsible: false,
			items: [
				"legal/privacy-policy",
				"legal/terms-and-conditions",
				"legal/service-level-agreement",
				"legal/verifik-for-enterprises-hub-eng",
				"legal/smartcheck-terms-and-conditions-of-use",
			],
		},
	],
};

export default sidebars;
