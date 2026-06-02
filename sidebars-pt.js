// @ts-check
/** Portuguese docs (partial tree); expand as `docs-pt/` grows.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	tutorialSidebar: [
		{ type: "doc", id: "intro", label: "Início" },
		{
			type: "category",
			label: "Validação de veículos",
			collapsible: false,
			items: [
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 Chile — Veículo (placa)" },
				{
					type: "category",
					label: "🇨🇴 Colômbia",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-plate",
							label: "🇨🇴 Bogotá — táxi por placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "🇨🇴 Bogotá — multas de veículo",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "🇨🇴 Bogotá — imposto veículo",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "🇨🇴 Bogotá — acidentes",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "🇨🇴 Bogotá — Pico y Placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-values-by-plate",
							label: "🇨🇴 Fasecolda — valores por placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-vehicle-by-code",
							label: "🇨🇴 Fasecolda — valores por código",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-claims-verification",
							label: "🇨🇴 Fasecolda — sinistros",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "🇨🇴 RUNT — CNH",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "🇨🇴 RUNT — veículo por placa (completo)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "🇨🇴 RUNT — veículo por placa (simplificado)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehiculo",
							label: "🇨🇴 RUNT — veículo (básico)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "🇨🇴 RUNT — por VIN",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - Acordos de pagamento",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - Consulta",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - Consulta geral por documento de identificação",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - Consulta geral por placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - Multas",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - Resoluções",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-suspensiones",
							label: "🇨🇴 SIMIT — Suspensões",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "🇨🇴 SISCONMP — formação (transporte)",
						},
						{
							type: "doc",
							id: "identity/colombia-situacion-militar",
							label: "🇨🇴 Situação militar",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 Costa Rica — Veículo por placa" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-brazil",
					label: "🇧🇷 Brasil — Veículo por placa",
				},
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 Espanha" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 México",
				},
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 Paraguai — Informações do veículo" },
				{
					type: "category",
					label: "🇺🇸 Estados Unidos",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/united-states", label: "Veículo por placa (estado)" },
						{ type: "doc", id: "vehicle-validation/united-states/vehicle-by-vin", label: "Veículo por VIN" },
					],
				},
				{
					type: "category",
					label: "🇵🇪 Peru",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/peru", label: "🇵🇪 Peru — Veículos" },
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "🇵🇪 Peru — Veículo por placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "🇵🇪 Peru — Seguro SOAT",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Identidade",
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/canada", label: "🇨🇦 Canadá — Habilitação (BC e ON)" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Cidadão chileno (RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 Chile — Contribuinte (RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 Chile — Validação de documento de identidade" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Cidadão costa-riquenho (CCCR)" },
				{ type: "doc", id: "identity/colombia-full-id", label: "🇨🇴 Colômbia — RG estendido" },
				{
					type: "doc",
					id: "identity-validation/colombia/colombian-cedula-premium",
					label: "🇨🇴 Colômbia — Cédula premium (CC)",
				},
				{ type: "doc", id: "identity/colombia-registraduria-certificate", label: "🇨🇴 Colômbia — Certificado Registraduría" },
				{ type: "doc", id: "identity/colombia-pep-id", label: "🇨🇴 Colômbia — PEP" },
				{ type: "doc", id: "identity/colombia-ce", label: "🇨🇴 Colômbia — CE" },
				{ type: "doc", id: "identity/colombia-ppt", label: "🇨🇴 Colômbia — PPT" },
				{
					type: "doc",
					id: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
					label: "🇨🇴 Colômbia — PEP (AML)",
				},
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Cidadão espanhol" },
				{ type: "doc", id: "identity/united-states", label: "🇺🇸 EUA — SSN (Social Security Number)" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 Cidadão mexicano" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Cidadão panamenho (CCPA)" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Cidadão paraguaio (CIC)" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 Brasil — Cidadão (CPF)" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 Peru — Cidadão (DNI)" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 Peru — Cédula de estrangeiro (CE)" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 Peru — DNI (dados estendidos)" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Cidadão venezuelano (CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 Venezuela — Cédula de estrangeiro (CEVE)" },
			],
		},
		{
			type: "category",
			label: "Empresas (KYB)",
			collapsible: false,
			items: [
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 Verificação de empresas no Canadá" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 Chile — Empresa (RUT)" },
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 Colômbia — RUES empresa completa",
				},
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 Empresa na Costa Rica (NITE)" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 Espanha — Empresa (CIF/NIF)" },
				{ type: "doc", id: "business-validation/united-states", label: "🇺🇸 EUA — Empresa (SEC EDGAR)" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 Verificação de empresas no México" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 Verificação de empresas no México (FME)",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 Empresa panamenha (RUC)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 Empresa paraguaia (RUC)" },
				{
					type: "doc",
					id: "business-validation/business-validation-brazil",
					label: "🇧🇷 Brasil — Empresa (CNPJ)",
				},
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 Peru — Empresa (RUC)" },
			],
		},
		{
			type: "category",
			label: "Carteira de motorista",
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 Colúmbia Britânica — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 Ontário — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/quebec-driver-license",
					label: "🇨🇦 Quebec — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 Chile — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/peru-driver-license",
					label: "🇵🇪 Peru — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/florida-driver-license",
					label: "🇺🇸 Flórida (EUA) — Carteira de motorista",
				},
				{
					type: "doc",
					id: "driver-validation/kansas-driver-license",
					label: "🇺🇸 Kansas (EUA) — Carteira de motorista",
				},
			],
		},
		{
			type: "category",
			label: "ANTECEDENTES",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 Brasil" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 Antecedentes policiais" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 Contraloria" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 Contratos públicos" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 Disciplinares (Procuradoria)" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/colombia-sisben-score", label: "🇨🇴 SISBEN" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC / medidas corretivas" },
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 Consulta de advogados",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 Processos judiciais",
				},
				{
					type: "doc",
					id: "legal/colombia-judicial-records",
					label: "🇨🇴 Antecedentes judiciais",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 Detalhe do processo",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-number",
					label: "🇨🇴 SIGEP (doc)",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-name",
					label: "🇨🇴 SIGEP (nome)",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 Certificado de advogado (validade)",
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
