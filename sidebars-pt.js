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
			items: [
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 Chile — Veículo (placa)" },
				{
					type: "category",
					label: "🇨🇴 Colômbia",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - Multas",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - Consulta",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - Acordos de pagamento",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - Resoluções",
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
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 Costa Rica — Veículo por placa" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 México",
				},
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 Paraguai — Informações do veículo" },
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 Espanha" },
			],
		},
		{
			type: "category",
			label: "Identidade",
			items: [
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Cidadão chileno (RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 Chile — Contribuinte (RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 Chile — Validação de documento de identidade" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Cidadão costa-riquenho (CCCR)" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 Cidadão mexicano" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Cidadão panamenho (CCPA)" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Cidadão paraguaio (CIC)" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Cidadão espanhol" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Cidadão venezuelano (CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 Venezuela — Cédula de estrangeiro (CEVE)" },
			],
		},
		{
			type: "category",
			label: "Empresas (KYB)",
			items: [
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 Chile — Empresa (RUT)" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 Empresa na Costa Rica (NITE)" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 Verificação de empresas no México" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 Verificação de empresas no México (FME)",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 Empresa panamenha (RUC)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 Empresa paraguaia (RUC)" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 Empresa espanhola (KYB)" },
			],
		},
		{
			type: "category",
			label: "Carteira de motorista",
			items: [
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 Chile — Carteira de motorista",
				},
			],
		},
		{
			type: "category",
			label: "ANTECEDENTES",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 Brasil" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 Contratos públicos" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 Antecedentes policiais" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 RNMC / medidas corretivas" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 Contraloria" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 Disciplinares (Procuradoria)" },
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
