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
			items: [
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 智利 — 车辆（号牌）" },
				{
					type: "category",
					label: "🇨🇴 哥伦比亚",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 罚款",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - 查询",
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
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - 按身份证件综合查询",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - 按车牌综合查询",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 哥斯达黎加 — 车辆（号牌）" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 墨西哥",
				},
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 巴拉圭 — 车辆信息" },
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 西班牙" },
			],
		},
		{
			type: "category",
			label: "身份核验",
			items: [
				{ type: "doc", id: "identity/chile", label: "🇨🇱 智利国民身份证（RUN）" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 智利 — 纳税人（RUT）" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 智利 — 身份证件有效性" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 哥斯达黎加国民身份证（CCCR）" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 墨西哥公民" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 巴拿马国民身份证（CCPA）" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 巴拉圭公民（CIC）" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 西班牙公民" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 委内瑞拉国民（CCVE）" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 委内瑞拉 — 外国人身份证（CEVE）" },
			],
		},
		{
			type: "category",
			label: "企业(KYB)",
			items: [
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 智利 — 企业（RUT）" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 哥斯达黎加企业（NITE）" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 墨西哥企业核验" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 墨西哥企业核验 (FME)",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 巴拿马企业（RUC）" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 巴拉圭企业（RUC）" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 西班牙企业（KYB）" },
			],
		},
		{
			type: "category",
			label: "驾驶证",
			items: [
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
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 警方犯罪记录" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 纠正措施" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 审计署证明" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 纪律处分记录" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/dea-background-check", label: "🌐 DEA" },
				{ type: "doc", id: "background-check/europol-background-check", label: "🌐 Europol" },
				{ type: "doc", id: "background-check/fbi-background-check", label: "🌐 FBI" },
				{ type: "doc", id: "background-check/interpol-background-check", label: "🌐 Interpol" },
				{ type: "doc", id: "background-check/ofac-background-check", label: "🌐 OFAC" },
				{ type: "doc", id: "background-check/onu-background-check", label: "🌐 ONU" },
			],
		},
	],
};

export default sidebars;
