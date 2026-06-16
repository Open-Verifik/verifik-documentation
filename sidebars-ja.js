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
			collapsible: false,
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
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-plate",
							label: "🇨🇴 ボゴタ — タクシー（プレート）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
							label: "🇨🇴 ボゴタ - タクシー（管理カード）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "🇨🇴 ボゴタ — 車両反則金",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogota-colombia",
							label: "🇨🇴 ボゴタ — 反則金照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia",
							label: "🇨🇴 ボゴタ — 反則金（TTA）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "🇨🇴 ボゴタ — 車両税",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "🇨🇴 ボゴタ — 交通事故履歴",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "🇨🇴 ボゴタ — ピコ・イ・プラカ",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-values-by-plate",
							label: "🇨🇴 Fasecolda — ナンバー別車両価格",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-values-by-plate-fasecolda",
							label: "🇨🇴 Fasecolda — 価格（プレート）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-vehicle-by-code",
							label: "🇨🇴 Fasecolda — コード別車両価格",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-values-by-code-fasecolda",
							label: "🇨🇴 Fasecolda — 価格（コード）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-claims-verification",
							label: "🇨🇴 Fasecolda — 保険請求履歴",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sinister-verification-fasecolda",
							label: "🇨🇴 Fasecolda — 請求履歴（別名）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "🇨🇴 RUNT — 運転免許",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-driver-s-license",
							label: "🇨🇴 RUNT — 運転免許証",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license",
							label: "🇨🇴 RUNT — 運転免許（別名）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license-verification",
							label: "🇨🇴 RUNT — 免許検証",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "🇨🇴 RUNT — 車両（ナンバー・詳細）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-colombian-vehicle-information-service",
							label: "🇨🇴 RUNT — 車両情報サービス",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
							label: "🇨🇴 RUNT — 履歴付き車両",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-colombian-vehicle",
							label: "🇨🇴 RUNT — コロンビア車両",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-by-plate-and-identification-card-only",
							label: "🇨🇴 RUNT — プレート+身分証",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "🇨🇴 RUNT — 車両（ナンバー・簡易）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplified",
							label: "🇨🇴 RUNT — 簡易車両記録",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehiculo",
							label: "🇨🇴 RUNT — 車両(基本)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-s-soat-and-rtm-by-plate-and-identification-document",
							label: "🇨🇴 RUNT — SOAT/RTM",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "🇨🇴 RUNT — VIN",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - ナンバープレートによる一般照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-license-plate",
							label: "🇨🇴 SIMIT — プレート一般照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - 決議",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-suspensiones",
							label: "🇨🇴 SIMIT — 免許停止",
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
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-identification-document",
							label: "🇨🇴 SIMIT — 証明書一般照会",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 反則金",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-comparendo-details",
							label: "🇨🇴 SIMIT - 違反切符詳細",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-medellin-vehicle-fines",
							label: "🇨🇴 メデジン - 交通違反",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - 分割払い合意",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "🇨🇴 SISCONMP — 運送検証",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-information-system-for-drivers-transporting-dangerous-goods",
							label: "🇨🇴 SISCONMP — 危険物運搬",
						},
						{
							type: "doc",
							id: "identity/colombia-situacion-militar",
							label: "🇨🇴 兵役状況",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 スペイン" },
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 チリ — 車両（ナンバー）" },
				{ type: "doc", id: "vehicle-validation/chile/vehicle-validation-chile-transport-vehicle", label: "🇨🇱 チリ — 公共交通車両" },
				{ type: "doc", id: "vehicle-validation/ecuador", label: "🇪🇨 エクアドル — 車両罰金" },
				{ type: "doc", id: "vehicle-validation/bolivia", label: "🇧🇴 ボリビア — 車両情報" },
				{ type: "doc", id: "vehicle-validation/argentina", label: "🇦🇷 アルゼンチン — 車両情報" },
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 パラグアイ — 車両情報" },
				{
					type: "category",
					label: "🇺🇸 アメリカ",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/united-states", label: "車両（ナンバー・州）" },
						{ type: "doc", id: "vehicle-validation/united-states/vehicle-by-vin", label: "車両（VIN）" },
					],
				},
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
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/canada", label: "🇨🇦 カナダ — 運転免許（BC・オンタリオ）" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 コスタリカ国民（CCCR）" },
				{ type: "doc", id: "identity/colombia-full-id", label: "🇨🇴 国民ID（拡張）" },
				{ type: "doc", id: "identity/colombia-registraduria-certificate", label: "🇨🇴 選挙管理庁 有効性証明" },
				{ type: "doc", id: "identity/colombia-pep-id", label: "🇨🇴 PEP（特別滞在）" },
				{ type: "doc", id: "identity/colombia-ce", label: "🇨🇴 外国人 CE" },
				{
					type: "doc",
					id: "identity-validation/colombia/colombia-identity-documents-guide",
					label: "🇨🇴 コロンビア身分証ガイド",
				},
				{ type: "doc", id: "identity/colombia-ppt", label: "🇨🇴 PPT（一時保護）" },
				{
					type: "doc",
					id: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
					label: "🇨🇴 PEP 検索（AML）",
				},
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 スペイン国民" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 チリ国民（RUN）" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 チリ — 納税者（RUT）" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 チリ — 身分証の有効性確認" },
				{ type: "doc", id: "identity/identity-ip-lookup", label: "🌐 IP ジオロケーション" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 パナマ国民（CCPA）" },
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 アルゼンチン — 国民身分証" },
				{ type: "doc", id: "identity/argentina-extra", label: "🇦🇷 アルゼンチン — 拡張本人確認" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 パラグアイ国民（CIC）" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 ブラジル国民（CPF）" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 ベネズエラ国民（CCVE）" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 ベネズエラ — 外国人身分証（CEVE）" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 エクアドル国民（CCEC）" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 ボリビア国民（CI）" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 ペルー国民（DNI）" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 ペルー外国人CE" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 ペルーDNI（拡張）" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 メキシコ国民" },
				{ type: "doc", id: "identity/united-states", label: "🇺🇸 アメリカ — SSN" },
			],
		},
		{
			type: "category",
			label: "法人(KYB)",
			collapsible: false,
			items: [
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 カナダ法人検証" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 コスタリカ法人（NITE）" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 スペイン — 企業（CIF/NIF）" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 チリ — 企業（RUT）" },
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 コロンビア — RUES 企業フル",
				},
				{
					type: "doc",
					id: "business-validation/business-validation-colombia-rues-v3",
					label: "🇨🇴 コロンビア — RUES 企業照会 (v3)",
				},
				{
					type: "doc",
					id: "business-validation/colombia-dian-verification",
					label: "🇨🇴 コロンビア — DIAN 税務確認",
				},
				{
					type: "doc",
					id: "business-validation/colombia-legal-invoicer-verification",
					label: "🇨🇴 コロンビア — DIAN 法定請求者",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 パナマ企業（RUC）" },
				{ type: "doc", id: "business-validation/argentina", label: "🇦🇷 アルゼンチン — 法人検証" },
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
				{ type: "doc", id: "business-validation/united-states", label: "🇺🇸 アメリカ法人（SEC EDGAR）" },
			],
		},
		{
			type: "category",
			label: "証明書",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "certificates/certificates-colombia-ministerio-trabajo-v3",
					label: "🇨🇴 労働省証明書（v3）",
				},
				{
					type: "doc",
					id: "certificates/certificates-sena-certificates",
					label: "🇨🇴 SENA 証明書",
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
				{
					type: "doc",
					id: "driver-validation/florida-driver-license",
					label: "🇺🇸 フロリダ州 — 運転免許",
				},
				{
					type: "doc",
					id: "driver-validation/kansas-driver-license",
					label: "🇺🇸 カンザス州 — 運転免許",
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
				{ type: "doc", id: "background-check/colombia-sisben-score", label: "🇨🇴 SISBEN" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 是正措置" },
				{
					type: "doc",
					id: "background-check/colombia/background-check-colombia-verify-police-compliance-with-corrective-measures",
					label: "🇨🇴 RNMC — 是正措置照会",
				},
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 会計検査院証明" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 警察の犯罪経歴" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 公共契約" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 懲戒記録" },
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 弁護士照会",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 司法手続き",
				},
				{
					type: "doc",
					id: "legal/colombia-judicial-records",
					label: "🇨🇴 司法記録",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 司法手続き詳細",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-number",
					label: "🇨🇴 SIGEP（文書）",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-name",
					label: "🇨🇴 SIGEP（氏名）",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 法曹資格証明",
				},
				{ type: "doc", id: "background-check/dea-background-check", label: "🌐 DEA" },
				{ type: "doc", id: "background-check/europol-background-check", label: "🌐 Europol" },
				{ type: "doc", id: "background-check/fbi-background-check", label: "🌐 FBI" },
				{ type: "doc", id: "background-check/interpol-background-check", label: "🌐 Interpol" },
				{ type: "doc", id: "background-check/ofac-background-check", label: "🌐 OFAC" },
				{ type: "doc", id: "background-check/onu-background-check", label: "🌐 ONU" },
				{
					type: "doc",
					id: "background-check/united-states-passport-entries",
					label: "🇺🇸 パスポート・米国入出国",
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
