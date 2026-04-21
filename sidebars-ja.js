// @ts-check
/** Japanese docs (partial tree); expand as `docs-ja/` grows.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	tutorialSidebar: [
		{ type: "doc", id: "intro", label: "ホーム" },
		{
			type: "category",
			label: "車両検証",
			items: [
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 コスタリカ — 車両（ナンバー）" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-brazil",
					label: "🇧🇷 ブラジル — 車両検証",
				},
				{
					type: "category",
					label: "🇨🇴 コロンビア",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - ナンバープレートによる一般照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - 決議",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - 照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - 身分証明書による一般照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 反則金",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - 分割払い合意",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 スペイン" },
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 チリ — 車両（ナンバー）" },
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 パラグアイ — 車両情報" },
				{
					type: "category",
					label: "🇵🇪 ペルー",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/peru", label: "🇵🇪 ペルー — 車両" },
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "🇵🇪 ペルー — 車両（ナンバー）",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "🇵🇪 ペルー — SOAT保険",
						},
					],
				},
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 メキシコ",
				},
			],
		},
		{
			type: "category",
			label: "本人確認",
			items: [
				{ type: "doc", id: "identity/canada", label: "🇨🇦 カナダ — 運転免許（BC・オンタリオ）" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 コスタリカ国民（CCCR）" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 スペイン国民" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 チリ国民（RUN）" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 チリ — 納税者（RUT）" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 チリ — 身分証の有効性確認" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 パナマ国民（CCPA）" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 パラグアイ国民（CIC）" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 ブラジル国民（CPF）" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 ベネズエラ国民（CCVE）" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 ベネズエラ — 外国人身分証（CEVE）" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 ペルー国民（DNI）" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 ペルー外国人CE" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 ペルーDNI（拡張）" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 メキシコ国民" },
			],
		},
		{
			type: "category",
			label: "法人(KYB)",
			items: [
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 カナダ法人検証" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 コスタリカ法人（NITE）" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 スペイン企業（KYB）" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 チリ — 企業（RUT）" },
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 パナマ企業（RUC）" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 パラグアイ企業（RUC）" },
				{
					type: "doc",
					id: "business-validation/business-validation-brazil",
					label: "🇧🇷 ブラジル企業（CNPJ）",
				},
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 ペルー企業（RUC）" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 メキシコ法人検証" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 メキシコ法人検証 (FME)",
				},
			],
		},
		{
			type: "category",
			label: "運転免許",
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 ブリティッシュコロンビア — 運転免許",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 オンタリオ — 運転免許",
				},
				{
					type: "doc",
					id: "driver-validation/quebec-driver-license",
					label: "🇨🇦 ケベック — 運転免許",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 チリ — 運転免許",
				},
			],
		},
		{
			type: "category",
			label: "背景調査",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 ブラジル" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 是正措置" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 会計検査院証明" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 警察の犯罪経歴" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 公共契約" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 懲戒記録" },
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
