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
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 멕시코",
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 스페인" },
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 칠레 — 차량(번호판)" },
				{ type: "doc", id: "vehicle-validation/chile/vehicle-validation-chile-transport-vehicle", label: "🇨🇱 칠레 — 대중교통 차량" },
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 코스타리카 — 차량(번호판)" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-brazil",
					label: "🇧🇷 브라질 — 차량(번호판)",
				},
				{
					type: "category",
					label: "🇨🇴 콜롬비아",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-plate",
							label: "🇨🇴 보고타 — 택시（번호판）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
							label: "🇨🇴 보고타 - 택시（관리 카드）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "🇨🇴 보고타 — 차량 과태료",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogota-colombia",
							label: "🇨🇴 보고타 — 과태료 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia",
							label: "🇨🇴 보고타 — 과태료（TTA）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "🇨🇴 보고타 — 차량세",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "🇨🇴 보고타 — 사고 이력",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "🇨🇴 보고타 — 피코이플라카",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-values-by-plate",
							label: "🇨🇴 Fasecolda — 번호판 차량 가치",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-values-by-plate-fasecolda",
							label: "🇨🇴 Fasecolda — 가치（번호판）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-vehicle-by-code",
							label: "🇨🇴 Fasecolda — 코드별 차량 가치",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-values-by-code-fasecolda",
							label: "🇨🇴 Fasecolda — 가치（코드）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-claims-verification",
							label: "🇨🇴 Fasecolda — 보험 청구",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sinister-verification-fasecolda",
							label: "🇨🇴 Fasecolda — 청구 이력（별칭）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "🇨🇴 RUNT — 운전면허",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-driver-s-license",
							label: "🇨🇴 RUNT — 운전면허증",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license",
							label: "🇨🇴 RUNT — 운전면허（별칭）",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license-verification",
							label: "🇨🇴 RUNT — 면허 검증",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "🇨🇴 RUNT — 차량 확인",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-colombian-vehicle-information-service",
							label: "🇨🇴 RUNT — 차량 정보 서비스",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
							label: "🇨🇴 RUNT — 이력 포함 차량",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-colombian-vehicle",
							label: "🇨🇴 RUNT — 콜롬비아 차량",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-by-plate-and-identification-card-only",
							label: "🇨🇴 RUNT — 번호판+신분증",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "🇨🇴 RUNT — 차량 확인(간편)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplified",
							label: "🇨🇴 RUNT — 간편 차량 기록",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehiculo",
							label: "🇨🇴 RUNT — 차량 확인(기본)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-s-soat-and-rtm-by-plate-and-identification-document",
							label: "🇨🇴 RUNT — SOAT/RTM",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "🇨🇴 RUNT — VIN 차량 확인",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - 결의",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-suspensiones",
							label: "🇨🇴 SIMIT — 면허 정지",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - 과태료",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-comparendo-details",
							label: "🇨🇴 SIMIT - 범칙금 상세",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-medellin-vehicle-fines",
							label: "🇨🇴 메데인 - 교통 벌금",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - 번호판 기반 일반 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-license-plate",
							label: "🇨🇴 SIMIT — 번호판 일반 조회",
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
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-identification-document",
							label: "🇨🇴 SIMIT — 신분증 일반 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - 조회",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "🇨🇴 SISCONMP — 운송 검증",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-information-system-for-drivers-transporting-dangerous-goods",
							label: "🇨🇴 SISCONMP — 위험물 운송",
						},
						{
							type: "doc",
							id: "identity/colombia-situacion-militar",
							label: "🇨🇴 군 복무 기록",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/ecuador", label: "🇪🇨 에콰도르 — 차량 벌금" },
				{ type: "doc", id: "vehicle-validation/bolivia", label: "🇧🇴 볼리비아 — 차량 정보" },
				{ type: "doc", id: "vehicle-validation/argentina", label: "🇦🇷 아르헨티나 — 차량 정보" },
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
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 멕시코 시민" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 베네수엘라 국민(CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 베네수엘라 — 외국인 신분증(CEVE)" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 스페인 국민" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 칠레 국민 식별(RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 칠레 — 납세자(RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 칠레 — 신분증 유효성 검증" },
				{ type: "doc", id: "identity/identity-ip-lookup", label: "🌐 IP 지리적 위치" },
				{ type: "doc", id: "identity/canada", label: "🇨🇦 캐나다 — 운전면허(BC·온타리오)" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 코스타리카 국민 신분증(CCCR)" },
				{
					type: "doc",
					id: "identity-validation/colombia/colombian-citizen",
					label: "🇨🇴 콜롬비아 — 국민 신분증(CC·PPT)",
				},
				{ type: "doc", id: "identity/colombia-full-id", label: "🇨🇴 국민ID (확장)" },
				{ type: "doc", id: "identity/colombia-registraduria-certificate", label: "🇨🇴 선거청 유효성 증명" },
				{ type: "doc", id: "identity/colombia-pep-id", label: "🇨🇴 PEP (특별 체류)" },
				{ type: "doc", id: "identity/colombia-ce", label: "🇨🇴 외국인 CE" },
				{ type: "doc", id: "identity/colombia-ppt", label: "🇨🇴 PPT (임시 보호)" },
				{
					type: "doc",
					id: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
					label: "🇨🇴 PEP 조회 (AML)",
				},
				{ type: "doc", id: "identity/panama", label: "🇵🇦 파나마 국민 (CCPA)" },
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 아르헨티나 시민(DNI)" },
				{ type: "doc", id: "identity/argentina-extra", label: "🇦🇷 아르헨티나 — 확장 신원" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 파라과이 국민 (CIC)" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 브라질 국민(CPF)" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 에콰도르 국민(CCEC)" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 볼리비아 국민(CI)" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 페루 국민(DNI)" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 페루 외국인 CE" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 페루 DNI(확장)" },
			],
		},
		{
			type: "category",
			label: "기업(KYB)",
			collapsible: false,
			items: [
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 멕시코 기업 검증" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 멕시코 기업 검증 (FME)",
				},
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 스페인 — 기업(CIF/NIF)" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 칠레 — 기업(RUT)" },
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 콜롬비아 — RUES 전체 검증",
				},
				{
					type: "doc",
					id: "business-validation/business-validation-colombia-rues-v3",
					label: "🇨🇴 콜롬비아 — RUES 기업 조회 (v3)",
				},
				{
					type: "doc",
					id: "business-validation/colombia-dian-verification",
					label: "🇨🇴 콜롬비아 — 세금 정보 확인 (DIAN)",
				},
				{
					type: "doc",
					id: "business-validation/colombia-legal-invoicer-verification",
					label: "🇨🇴 콜롬비아 — DIAN 전자 청구",
				},
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 캐나다 기업 검증" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 코스타리카 기업(NITE)" },
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 파나마 기업 (RUC)" },
				{ type: "doc", id: "business-validation/argentina", label: "🇦🇷 아르헨티나 기업(CUIT)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 파라과이 기업 (RUC)" },
				{
					type: "doc",
					id: "business-validation/business-validation-brazil",
					label: "🇧🇷 브라질 기업(CNPJ)",
				},
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 페루 기업(RUC)" },
			],
		},
		{
			type: "category",
			label: "증명서",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "certificates/certificates-colombia-ministerio-trabajo-v3",
					label: "🇨🇴 노동부 증명서（v3）",
				},
				{
					type: "doc",
					id: "certificates/certificates-sena-certificates",
					label: "🇨🇴 SENA 증명서",
				},
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
					id: "driver-validation/quebec-driver-license",
					label: "🇨🇦 퀘벡 — 운전면허",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 칠레 — 운전면허",
				},
				{
					type: "doc",
					id: "driver-validation/kansas-driver-license",
					label: "🇺🇸 캔자스주 — 운전면허",
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
				{ type: "doc", id: "background-check/colombia-sisben-score", label: "🇨🇴 SISBEN 점수" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC 시정 조치" },
				{
					type: "doc",
					id: "background-check/colombia/background-check-colombia-verify-police-compliance-with-corrective-measures",
					label: "🇨🇴 RNMC — 시정 조치 조회",
				},
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 변호사 조회",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 사법 절차",
				},
				{
					type: "doc",
					id: "legal/colombia-judicial-records",
					label: "🇨🇴 사법 기록",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 사법 절차 세부",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-number",
					label: "🇨🇴 SIGEP (문서번호)",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-name",
					label: "🇨🇴 SIGEP (이름)",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 변호사 자격 증명",
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
