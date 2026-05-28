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
			collapsible: false,
			items: [
				{ type: "doc", id: "vehicle-validation/chile", label: "🇨🇱 Chili — Véhicule (plaque)" },
				{ type: "doc", id: "vehicle-validation/chile/vehicle-validation-chile-transport-vehicle", label: "🇨🇱 Chili — Transport public" },
				{
					type: "category",
					label: "🇨🇴 Colombie",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-plate",
							label: "🇨🇴 Bogotá — taxi par plaque",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "🇨🇴 Bogotá — amendes véhicule",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "🇨🇴 Bogotá — taxe véhicule",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "🇨🇴 Bogotá — accidents",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "🇨🇴 Bogotá — Pico y Placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-values-by-plate",
							label: "🇨🇴 Fasecolda — valeur par plaque",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-vehicle-by-code",
							label: "🇨🇴 Fasecolda — valeur par code",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/colombia-fasecolda-claims-verification",
							label: "🇨🇴 Fasecolda — sinistres",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "🇨🇴 RUNT — Permis",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "🇨🇴 RUNT — véhicule par plaque (complet)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "🇨🇴 RUNT — véhicule par plaque (simplifié)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehiculo",
							label: "🇨🇴 RUNT — véhicule (base)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "🇨🇴 RUNT — par NIV",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "🇨🇴 SIMIT - Accords de paiement",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "🇨🇴 SIMIT - Amendes",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-comparendo-details",
							label: "🇨🇴 SIMIT - Détail comparendo",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-medellin-vehicle-fines",
							label: "🇨🇴 Medellín - Amendes",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-consultation",
							label: "🇨🇴 SIMIT - Consultation",
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
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "🇨🇴 SIMIT - Résolutions",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-suspensiones",
							label: "🇨🇴 SIMIT — Suspensions",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "🇨🇴 SISCONMP — formation transport",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxi-drivers-by-control-card",
							label: "🇨🇴 Bogotá - taxi par carte de contrôle",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogota-colombia",
							label: "🇨🇴 Bogotá — amendes (consultation)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-fines-check-in-bogot-tta-colombia",
							label: "🇨🇴 Bogotá — amendes (TTA)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-values-by-plate-fasecolda",
							label: "🇨🇴 Fasecolda — valeurs par plaque (v2)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-values-by-code-fasecolda",
							label: "🇨🇴 Fasecolda — valeurs par code (v2)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sinister-verification-fasecolda",
							label: "🇨🇴 Fasecolda — sinistres (v2)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-colombian-vehicle",
							label: "🇨🇴 RUNT — véhicule colombien",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-colombian-vehicle-information-service",
							label: "🇨🇴 RUNT — service info véhicule",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-by-plate-and-identification-card-only",
							label: "🇨🇴 RUNT — plaque + pièce d'identité",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-complete-vehicle-with-historical-records-by-license-plate-and-identification-card",
							label: "🇨🇴 RUNT — véhicule complet + historique",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-records-by-plate-number-simplified",
							label: "🇨🇴 RUNT — dossier simplifié par plaque",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-vehicle-s-soat-and-rtm-by-plate-and-identification-document",
							label: "🇨🇴 RUNT — SOAT et RTM",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license",
							label: "🇨🇴 RUNT — permis (drivers-license)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-driver-s-license",
							label: "🇨🇴 RUNT — permis (driver-s-license)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-drivers-license-verification",
							label: "🇨🇴 RUNT — vérification permis",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-identification-document",
							label: "🇨🇴 SIMIT — requête générale (document)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-general-query-of-simit-by-license-plate",
							label: "🇨🇴 SIMIT — requête générale (plaque)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-information-system-for-drivers-transporting-dangerous-goods",
							label: "🇨🇴 SISCONMP — matières dangereuses",
						},
						{
							type: "doc",
							id: "identity/colombia-situacion-militar",
							label: "🇨🇴 Situation militaire",
						},
					],
				},
				{ type: "doc", id: "vehicle-validation/costa-rica", label: "🇨🇷 Costa Rica — Véhicule par plaque" },
				{ type: "doc", id: "vehicle-validation/ecuador", label: "🇪🇨 Équateur — Amendes véhicule" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-brazil",
					label: "🇧🇷 Brésil — Véhicule (plaque)",
				},
				{ type: "doc", id: "vehicle-validation/bolivia", label: "🇧🇴 Bolivie — Informations véhicule" },
				{ type: "doc", id: "vehicle-validation/spain", label: "🇪🇸 Espagne" },
				{
					type: "doc",
					id: "vehicle-validation/vehicle-validation-mexico-alt",
					label: "🇲🇽 Mexique",
				},
				{ type: "doc", id: "vehicle-validation/argentina", label: "🇦🇷 Argentine — véhicule" },
				{ type: "doc", id: "vehicle-validation/paraguay", label: "🇵🇾 Paraguay — Informations véhicule" },
				{
					type: "category",
					label: "🇵🇪 Pérou",
					collapsible: true,
					items: [
						{ type: "doc", id: "vehicle-validation/peru", label: "🇵🇪 Pérou — Véhicules" },
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "🇵🇪 Pérou — Véhicule par plaque",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "🇵🇪 Pérou — Assurance SOAT",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Identité",
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/canada", label: "🇨🇦 Canada — Permis (CB et Ontario)" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Citoyen chilien (RUN)" },
				{ type: "doc", id: "identity/chile-taxpayer", label: "🇨🇱 Chili — Contribuable (RUT)" },
				{ type: "doc", id: "identity/chile-validate-documents", label: "🇨🇱 Chili — Validation de document d'identité" },
				{ type: "doc", id: "identity/identity-ip-lookup", label: "🌐 Géolocalisation IP" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Citoyen costaricien (CCCR)" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 Citoyen équatorien (CCEC)" },
				{ type: "doc", id: "identity/colombia-full-id", label: "🇨🇴 Colombie — CNI étendu" },
				{ type: "doc", id: "identity/colombia-registraduria-certificate", label: "🇨🇴 Colombie — Certificat Registraduría" },
				{ type: "doc", id: "identity/colombia-pep-id", label: "🇨🇴 Colombie — PEP" },
				{ type: "doc", id: "identity/colombia-ce", label: "🇨🇴 Colombie — CE" },
				{ type: "doc", id: "identity/colombia-ppt", label: "🇨🇴 Colombie — PPT" },
				{
					type: "doc",
					id: "identity-validation/colombia/identity-validation-colombia-colombian-politically-exposed-persons",
					label: "🇨🇴 Colombie — PEP (AML)",
				},
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Citoyen espagnol" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 Citoyen mexicain" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Citoyen panaméen (CCPA)" },
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 Citoyen argentin (DNI)" },
				{ type: "doc", id: "identity/argentina-extra", label: "🇦🇷 Argentine — identité étendue" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Citoyen paraguayen (CIC)" },
				{ type: "doc", id: "identity/identity-brazil", label: "🇧🇷 Brésil — Citoyen (CPF)" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 Citoyen bolivien (CI)" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 Pérou — Citoyen (DNI)" },
				{ type: "doc", id: "identity/peru-foreigner-id", label: "🇵🇪 Pérou — CE étranger" },
				{ type: "doc", id: "identity/peru-full-id", label: "🇵🇪 Pérou — DNI (données étendues)" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Citoyen vénézuélien (CCVE)" },
				{ type: "doc", id: "identity/venezuela-foreigner-id", label: "🇻🇪 Venezuela — Cédula d'étranger (CEVE)" },
			],
		},
		{
			type: "category",
			label: "Entreprises (KYB)",
			collapsible: false,
			items: [
				{ type: "doc", id: "business-validation/canada", label: "🇨🇦 Vérification d'entreprise au Canada" },
				{ type: "doc", id: "business-validation/chilean", label: "🇨🇱 Chili — Entreprise (RUT)" },
				{
					type: "doc",
					id: "business-validation/business-validation-colombia-rues-v3",
					label: "🇨🇴 Colombie — Consultation RUES (v3)",
				},
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 Colombie — RUES dossier complet",
				},
				{
					type: "doc",
					id: "business-validation/colombia-dian-verification",
					label: "🇨🇴 Colombie — Vérification DIAN",
				},
				{
					type: "doc",
					id: "business-validation/colombia-legal-invoicer-verification",
					label: "🇨🇴 Colombie — Facturier légal",
				},
				{ type: "doc", id: "business-validation/costa-rica", label: "🇨🇷 Entreprise costaricienne (NITE)" },
				{ type: "doc", id: "business-validation/spain", label: "🇪🇸 Espagne — Entreprise (CIF/NIF)" },
				{ type: "doc", id: "business-validation/mexico", label: "🇲🇽 Vérification d'entreprise au Mexique" },
				{
					type: "doc",
					id: "business-validation/business-validation-mexican-companies",
					label: "🇲🇽 Vérification d'entreprise au Mexique (FME)",
				},
				{ type: "doc", id: "business-validation/panama", label: "🇵🇦 Entreprise panaméenne (RUC)" },
				{ type: "doc", id: "business-validation/argentina", label: "🇦🇷 Entreprise argentine (CUIT)" },
				{ type: "doc", id: "business-validation/paraguay", label: "🇵🇾 Entreprise paraguayenne (RUC)" },
				{
					type: "doc",
					id: "business-validation/business-validation-brazil",
					label: "🇧🇷 Brésil — Entreprise (CNPJ)",
				},
				{ type: "doc", id: "business-validation/peru", label: "🇵🇪 Pérou — Entreprise (RUC)" },
			],
		},
		{
			type: "category",
			label: "Permis de conduire",
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 Colombie-Britannique — Permis de conduire",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 Ontario — Permis de conduire",
				},
				{
					type: "doc",
					id: "driver-validation/quebec-driver-license",
					label: "🇨🇦 Québec — Permis de conduire",
				},
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
				{ type: "doc", id: "background-check/colombia-police-record-check", label: "🇨🇴 Casier police" },
				{ type: "doc", id: "background-check/colombia-comptroller-certificate", label: "🇨🇴 Contraloría" },
				{ type: "doc", id: "background-check/colombia-public-contracts", label: "🇨🇴 Contrats publics" },
				{ type: "doc", id: "background-check/colombia-disciplinary-records-attorneys-office", label: "🇨🇴 Discipline (Procuraduría)" },
				{ type: "doc", id: "background-check/colombia-inpec", label: "🇨🇴 INPEC" },
				{ type: "doc", id: "background-check/colombia-sisben-score", label: "🇨🇴 SISBEN" },
				{ type: "doc", id: "background-check/colombia-police-compliance-corrective-measures", label: "🇨🇴 Mesures correctives (RNMC)" },
				{
					type: "doc",
					id: "background-check/colombia/background-check-colombia-verify-police-compliance-with-corrective-measures",
					label: "🇨🇴 RNMC — mesures correctives (v2 chemin)",
				},
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 Recherche d'avocats",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 Procès judiciaires",
				},
				{
					type: "doc",
					id: "legal/colombia-judicial-records",
					label: "🇨🇴 Casier judiciaire",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 Détail procès",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-number",
					label: "🇨🇴 SIGEP (doc)",
				},
				{
					type: "doc",
					id: "legal/sigep-public-servant-by-name",
					label: "🇨🇴 SIGEP (nom)",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 Certificat d'avocat (validité)",
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
			label: "Certificats",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "certificates/certificates-colombia-ministerio-trabajo-v3",
					label: "🇨🇴 Ministère du Travail (v3)",
				},
				{
					type: "doc",
					id: "certificates/certificates-sena-certificates",
					label: "🇨🇴 Certificats SENA",
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
