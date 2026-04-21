// @ts-check
/** French docs (partial tree); expand as `docs-fr/` grows.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	tutorialSidebar: [
		{ type: "doc", id: "intro", label: "Accueil" },
		{
			type: "category",
			label: "Validation véhicules",
			items: [
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 Chili — Véhicule (plaque)" },
				{
					type: "category",
					label: "🇨🇴 Colombie",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - Amendes",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - Consultation",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - Accords de paiement",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - Résolutions",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "🇨🇴 SIMIT - Requête générale par pièce d'identité",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "🇨🇴 SIMIT - Requête générale par plaque",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 Costa Rica — Véhicule par plaque" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 Mexique",
				},
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 Paraguay — Informations véhicule" },
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 Espagne" },
			],
		},
		{
			type: "category",
			label: "Identité",
			items: [
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Citoyen chilien (RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 Chili — Contribuable (RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 Chili — Validation de document d'identité" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Citoyen costaricien (CCCR)" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 Citoyen mexicain" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Citoyen panaméen (CCPA)" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Citoyen paraguayen (CIC)" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Citoyen espagnol" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Citoyen vénézuélien (CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 Venezuela — Cédula d'étranger (CEVE)" },
			],
		},
		{
			type: "category",
			label: "Entreprises (KYB)",
			items: [
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 Chili — Entreprise (RUT)" },
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 Entreprise costaricienne (NITE)" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 Vérification d'entreprise au Mexique" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 Vérification d'entreprise au Mexique (FME)",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 Entreprise panaméenne (RUC)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 Entreprise paraguayenne (RUC)" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 Entreprise espagnole (KYB)" },
			],
		},
		{
			type: "category",
			label: "Permis de conduire",
			items: [
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 Chili — Permis de conduire",
				},
			],
		},
		{
			type: "category",
			label: "ANTÉCÉDENTS",
			collapsible: false,
			items: [
				{ type: "doc", id: "background-check/brazil", label: "🇧🇷 Brésil" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 Contrats publics" },
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 Casier police" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 Mesures correctives (RNMC)" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 Contraloría" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 Discipline (Procuraduría)" },
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
