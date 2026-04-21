// @ts-check
/** Korean docs (partial tree); expand as `docs-ko/` grows.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	tutorialSidebar: [
		{ type: "doc", id: "intro", label: "홈" },
		{
			type: "category",
			label: "차량 검증",
			items: [
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 멕시코",
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 스페인" },
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 칠레 — 차량(번호판)" },
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 코스타리카 — 차량(번호판)" },
				{
					type: "category",
					label: "🇨🇴 콜롬비아",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - 결의",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 과태료",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - 번호판 기반 일반 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - 분할 납부 합의",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - 신분증 기반 일반 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - 조회",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 파라과이 — 차량 정보" },
				{
					type: "category",
					label: "🇵🇪 페루",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/peru", label: "🇵🇪 페루 — 차량" },
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "🇵🇪 페루 — 차량(번호판)",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "🇵🇪 페루 — SOAT 보험",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "신원",
			items: [
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 멕시코 시민" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 베네수엘라 국민(CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 베네수엘라 — 외국인 신분증(CEVE)" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 스페인 국민" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 칠레 국민 식별(RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 칠레 — 납세자(RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 칠레 — 신분증 유효성 검증" },
				{ type: "doc", id: "identity/canada", label: "🇨🇦 캐나다 — 운전면허(BC·온타리오)" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 코스타리카 국민 신분증(CCCR)" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 파나마 국민 (CCPA)" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 파라과이 국민 (CIC)" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 페루 국민(DNI)" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 페루 외국인 CE" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 페루 DNI(확장)" },
			],
		},
		{
			type: "category",
			label: "기업(KYB)",
			items: [
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 멕시코 기업 검증" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 멕시코 기업 검증 (FME)",
				},
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 스페인 기업(KYB)" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 칠레 — 기업(RUT)" },
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 캐나다 기업 검증" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 코스타리카 기업(NITE)" },
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 파나마 기업 (RUC)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 파라과이 기업 (RUC)" },
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 페루 기업(RUC)" },
			],
		},
		{
			type: "category",
			label: "운전면허",
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 브리티시컬럼비아 — 운전면허",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 온타리오 — 운전면허",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 칠레 — 운전면허",
				},
			],
		},
		{
			type: "category",
			label: "배경 조회",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 브라질" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 감사원 증명" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 경찰 범죄 경력" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 공공 계약" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 징계 기록" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 시정 조치" },
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
