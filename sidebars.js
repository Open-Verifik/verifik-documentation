// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	// Complete sidebar structure matching Verifik organization
	tutorialSidebar: [
		{
			type: "doc",
			id: "intro",
			label: "Home",
		},
		{
			type: "category",
			label: "AUTHENTICATION",
			collapsible: false,
			items: [
				"authentication/api-key-access-via-email",
				"authentication/api-key-access-via-phone",
				"authentication/renew-your-token-jwt",
				"authentication/create-new-token-and-revoke-previous-tokens",
			],
		},
		{
			type: "category",
			label: "CLIENTS",
			collapsible: false,
			items: ["clients/account-information"],
		},
		{
			type: "category",
			label: "SERVICES",
			collapsible: false,
			items: [
				"smartcheck/smartcheck",
				"smartaccess/smartaccess",
				"access/access",
				"smartenroll/smartenroll",
				"smart-enroll-self-hosted/smart-enroll-self-hosted",
				"smart-scan/smart-scan",
			],
		},
		{
			type: "category",
			label: "API's",
			collapsible: true,
			items: [
				{
					type: "category",
					label: "Projects",
					collapsible: true,
					items: [
						"api/projects/projects-list",
						"api/projects/projects-show",
						"api/projects/projects-create",
						"api/projects/projects-update",
						"api/projects/projects-delete",
					],
				},
				{
					type: "category",
					label: "Project Flows",
					collapsible: true,
					items: ["api/project-flows/project-flows-update", "api/project-flows/project-flows-delete"],
				},
			],
		},
		{
			type: "category",
			label: "BIOMETRICS API'S",
			collapsible: false,
			items: [
				"biometrics/liveness",
				{
					type: "category",
					label: "Face Comparison",
					collapsible: true,
					items: ["biometrics/compare", "biometrics/compare-live", "biometrics/compare-with-liveness"],
				},
				{
					type: "category",
					label: "Face Search",
					collapsible: true,
					items: ["biometrics/search", "biometrics/search-live-face", "biometrics/search-active-user", "biometrics/search-crops"],
				},
			],
		},
		{
			type: "category",
			label: "SCAN DOCS API'S",
			collapsible: false,
			items: ["ocr-engines/scan-studio", "ocr-engines/scan-prompt"],
		},
		{
			type: "category",
			label: "IDENTITY VALIDATION",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "identity/argentina",
					label: "🇦🇷 Argentina",
				},
				{
					type: "doc",
					id: "identity/bolivia",
					label: "🇧🇴 Bolivia",
				},
				{
					type: "doc",
					id: "identity/brazil",
					label: "🇧🇷 Brazil",
				},
				{
					type: "doc",
					id: "identity/canada",
					label: "🇨🇦 Canada",
				},
				{
					type: "doc",
					id: "identity/chile",
					label: "🇨🇱 Chile",
				},
				{
					type: "doc",
					id: "identity/colombia",
					label: "🇨🇴 Colombia",
				},
				{
					type: "doc",
					id: "identity/colombia-full-id",
					label: "🇨🇴 Colombia - Full ID",
				},
				{
					type: "doc",
					id: "identity/colombia-foreigner-id",
					label: "🇨🇴 Colombia - Foreigner ID",
				},
				{
					type: "doc",
					id: "identity/colombia-pep-id",
					label: "🇨🇴 Colombia - PEP ID",
				},
				{
					type: "doc",
					id: "identity/colombia-ppt",
					label: "🇨🇴 Colombia - PPT",
				},
				{
					type: "doc",
					id: "identity/costa-rica",
					label: "🇨🇷 Costa Rica",
				},
				{
					type: "doc",
					id: "identity/dominican-republic",
					label: "🇩🇴 Dominican Republic",
				},
				{
					type: "doc",
					id: "identity/ecuador",
					label: "🇪🇨 Ecuador",
				},
				{
					type: "doc",
					id: "identity/el-salvador",
					label: "🇸🇻 El Salvador",
				},
				{
					type: "doc",
					id: "identity/guatemala",
					label: "🇬🇹 Guatemala",
				},
				{
					type: "doc",
					id: "identity/honduras",
					label: "🇭🇳 Honduras",
				},
				{
					type: "doc",
					id: "identity/mexico",
					label: "🇲🇽 Mexico",
				},
				{
					type: "doc",
					id: "identity/panama",
					label: "🇵🇦 Panama",
				},
				{
					type: "doc",
					id: "identity/paraguay",
					label: "🇵🇾 Paraguay",
				},
				{
					type: "doc",
					id: "identity/peru",
					label: "🇵🇪 Peru",
				},
				{
					type: "doc",
					id: "identity/peru-foreigner-id",
					label: "🇵🇪 Peru - Foreigner ID",
				},
				{
					type: "doc",
					id: "identity/peru-full-id",
					label: "🇵🇪 Peru - Full ID",
				},
				{
					type: "doc",
					id: "identity/spain-citizen",
					label: "🇪🇸 Spain Citizen",
				},
				{
					type: "doc",
					id: "identity/united-states",
					label: "🇺🇸 United States",
				},
				{
					type: "doc",
					id: "identity/uruguay",
					label: "🇺🇾 Uruguay",
				},
				{
					type: "doc",
					id: "identity/venezuela",
					label: "🇻🇪 Venezuela",
				},
				{
					type: "doc",
					id: "identity/venezuela-foreigner-id",
					label: "🇻🇪 Venezuela - Foreigner ID",
				},
			],
		},
		{
			type: "category",
			label: "BUSINESS VALIDATION",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "business-validation/argentina",
					label: "🇦🇷 Argentina",
				},
				{
					type: "doc",
					id: "business-validation/bolivia",
					label: "🇧🇴 Bolivia",
				},
				{
					type: "doc",
					id: "business-validation/brazil",
					label: "🇧🇷 Brazil",
				},
				{
					type: "doc",
					id: "business-validation/canada",
					label: "🇨🇦 Canada",
				},
				{
					type: "doc",
					id: "business-validation/chilean",
					label: "🇨🇱 Chilean",
				},
				{
					type: "doc",
					id: "business-validation/colombia-rues-business-information",
					label: "🇨🇴 Colombia - RUES Business Information",
				},
				{
					type: "doc",
					id: "business-validation/colombia-rues-business-registry",
					label: "🇨🇴 Colombia - RUES Business Registry",
				},
				{
					type: "doc",
					id: "business-validation/colombia-dian-verification",
					label: "🇨🇴 Colombia - DIAN Verification",
				},
				{
					type: "doc",
					id: "business-validation/colombia-legal-invoicer-verification",
					label: "🇨🇴 Colombia - Legal Invoicer Verification",
				},
				{
					type: "doc",
					id: "business-validation/rues-complete-v3",
					label: "🇨🇴 RUES Business validation",
				},
				{
					type: "doc",
					id: "business-validation/costa-rica",
					label: "🇨🇷 Costa Rica",
				},
				{
					type: "doc",
					id: "business-validation/mexico",
					label: "🇲🇽 Mexico",
				},
				{
					type: "doc",
					id: "business-validation/panama",
					label: "🇵🇦 Panama",
				},
				{
					type: "doc",
					id: "business-validation/paraguay",
					label: "🇵🇾 Paraguay",
				},
				{
					type: "doc",
					id: "business-validation/peru",
					label: "🇵🇪 Peru",
				},
				{
					type: "doc",
					id: "business-validation/spain",
					label: "🇪🇸 Spain",
				},
				{
					type: "doc",
					id: "business-validation/united-states",
					label: "🇺🇸 United States",
				},
			],
		},
		{
			type: "category",
			label: "VEHICLE VALIDATION",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "vehicle-validation/argentina",
					label: "🇦🇷 Argentina",
				},
				{
					type: "doc",
					id: "vehicle-validation/bolivia",
					label: "🇧🇴 Bolivia",
				},
				{
					type: "doc",
					id: "vehicle-validation/brazil",
					label: "🇧🇷 Brazil",
				},
				{
					type: "doc",
					id: "vehicle-validation/chile",
					label: "🇨🇱 Chile",
				},
				{
					type: "category",
					label: "🇨🇴 Colombia",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/colombia",
							label: "Overview",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-taxes",
							label: "Taxes in Bogotá",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-fines",
							label: "Vehicle Fines Check",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-vehicle-accidentality",
							label: "Vehicle Accidentality",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-bogota-pico-y-placa",
							label: "Pico y Placa",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-fasecolda-values-by-plate",
							label: "Vehicle Values by Plate",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-fasecolda-vehicle-by-code",
							label: "Vehicle by Code",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-fasecolda-sinister-verification",
							label: "Sinister Verification",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-drivers-license",
							label: "RUNT - Driver's License",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate",
							label: "RUNT - Vehicle records by plate number",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-plate-simplified",
							label: "RUNT - Vehicle records by plate number (simplified)",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-by-vin",
							label: "RUNT - Vehicle records by VIN",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-runt-vehicle-soat-rtm",
							label: "RUNT - SOAT and RTM",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-fines",
							label: "SIMIT - Fines",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-agreements",
							label: "SIMIT - Agreements",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-resolutions",
							label: "SIMIT - Resolutions",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-document",
							label: "General query by identification document",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-simit-general-query-by-plate",
							label: "General query by plate number",
						},
						{
							type: "doc",
							id: "vehicle-validation/colombia/vehicle-validation-colombia-sisconmp-trainings",
							label: "SISCONMP Training Records",
						},
					],
				},
				{
					type: "doc",
					id: "vehicle-validation/costa-rica",
					label: "🇨🇷 Costa Rica",
				},
				{
					type: "doc",
					id: "vehicle-validation/ecuador",
					label: "🇪🇨 Ecuador",
				},
				{
					type: "doc",
					id: "vehicle-validation/mexico",
					label: "🇲🇽 Mexico",
				},
				{
					type: "doc",
					id: "vehicle-validation/paraguay",
					label: "🇵🇾 Paraguay",
				},
				{
					type: "category",
					label: "🇵🇪 Peru",
					collapsible: true,
					items: [
						{
							type: "doc",
							id: "vehicle-validation/peru",
							label: "Overview",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-information",
							label: "Vehicle Information",
						},
						{
							type: "doc",
							id: "vehicle-validation/peru/peru-vehicle-insurance",
							label: "Vehicle Insurance",
						},
					],
				},
				{
					type: "doc",
					id: "vehicle-validation/united-states",
					label: "🇺🇸 United States",
				},
			],
		},
		{
			type: "category",
			label: "DRIVER VALIDATION",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "driver-validation/british-columbia-driver-license",
					label: "🇨🇦 British Columbia - Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/chile-driver-license",
					label: "🇨🇱 Chile - Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/florida-driver-license",
					label: "🇺🇸 Florida - Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/kansas-driver-license",
					label: "🇺🇸 Kansas - Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 Ontario - Driver License",
				},
			],
		},
		{
			type: "category",
			label: "BACKGROUND CHECK",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "background-check/brazil",
					label: "🇧🇷 Brazil",
				},
				{
					type: "doc",
					id: "background-check/colombia-public-contracts",
					label: "🇨🇴 Colombia - Public Contracts",
				},
				{
					type: "doc",
					id: "background-check/colombia-police-record-check",
					label: "🇨🇴 Colombia - Colombian Police Record Check",
				},
				{
					type: "doc",
					id: "background-check/colombia-police-compliance-corrective-measures",
					label: "🇨🇴 Colombia - Verify Police Compliance with Corrective Measures",
				},
				{
					type: "doc",
					id: "background-check/colombia-comptroller-certificate",
					label: "🇨🇴 Colombia - Comptroller Certificate",
				},
				{
					type: "doc",
					id: "background-check/colombia-disciplinary-records-attorneys-office",
					label: "🇨🇴 Colombia - Disciplinary Records in Colombia (attorney's office)",
				},
				{
					type: "doc",
					id: "background-check/dea-background-check",
					label: "🌐 DEA Background Check",
				},
				{
					type: "doc",
					id: "background-check/europol-background-check",
					label: "🌐 Europol Background Check",
				},
				{
					type: "doc",
					id: "background-check/fbi-background-check",
					label: "🌐 FBI Background Check",
				},
				{
					type: "doc",
					id: "background-check/interpol-background-check",
					label: "🌐 Interpol Background Check",
				},
				{
					type: "doc",
					id: "background-check/ofac-background-check",
					label: "🌐 OFAC Background Check",
				},
				{
					type: "doc",
					id: "background-check/onu-background-check",
					label: "🌐 ONU Background Check",
				},
			],
		},
		{
			type: "category",
			label: "VOTING",
			collapsible: false,
			items: ["legal/voting"],
		},
		{
			type: "category",
			label: "HEALTH",
			collapsible: false,
			items: ["legal/health", "legal/verify-colombian-affiliations"],
		},
		{
			type: "category",
			label: "LEGAL VERIFICATIONS",
			collapsible: false,
			items: [
				{
					type: "doc",
					id: "legal/lawyer-verification",
					label: "🇨🇴 Colombian Lawyer Verification",
				},
				{
					type: "doc",
					id: "legal/colombian-legal-processes",
					label: "🇨🇴 Colombian Legal Processes",
				},
				{
					type: "doc",
					id: "legal/retrieve-details-of-a-legal-process-by-number",
					label: "🇨🇴 Colombian Legal Process Details",
				},
				{
					type: "doc",
					id: "legal/certificate-of-validity-for-legal-professionals",
					label: "🇨🇴 Colombian Legal Professional Validity",
				},
			],
		},
		{
			type: "category",
			label: "RESOURCES",
			collapsible: false,
			items: [
				{
					type: "category",
					label: "App Logins",
					collapsible: true,
					items: [
						"resources/the-app-login-object",
						"resources/create-an-app-login",
						"resources/retrieve-an-app-login",
						"resources/list-all-app-logins",
						"resources/create-an-app-login-biometric-validation",
						"resources/validate-an-app-login-biometric-validation",
						"resources/email-access-example",
					],
				},
				{
					type: "category",
					label: "App Registrations",
					collapsible: true,
					items: [
						"resources/the-app-registration-object",
						"resources/create-an-app-registration",
						"resources/retrieve-an-app-registration",
						"resources/list-all-app-registrations",
					],
				},
				{
					type: "category",
					label: "Biometric Validations",
					collapsible: true,
					items: [
						"resources/the-biometric-validation-object",
						"resources/create-a-biometric-validation",
						"resources/create-an-app-login-biometric-validation",
						"resources/retrieve-a-biometric-validation",
						"resources/list-all-biometric-validations",
					],
				},
				{
					type: "category",
					label: "Collections",
					collapsible: true,
					items: [
						"resources/the-collection-object",
						"resources/create-a-collection",
						"resources/list-all-collections",
						"resources/retrieve-a-collection",
					],
				},
				{
					type: "category",
					label: "Credits",
					collapsible: true,
					items: ["resources/the-credit-object", "resources/list-all-credit-records", "resources/retrieve-a-credit-record"],
				},
				{
					type: "category",
					label: "Document Liveness",
					collapsible: true,
					items: [
						"resources/the-document-liveness-object",
						"resources/create-a-document-liveness",
						"resources/retrieve-a-document-liveness",
						"resources/list-all-document-liveness",
					],
				},
				{
					type: "category",
					label: "Document Validations",
					collapsible: true,
					items: [
						"resources/the-document-validation-object",
						"resources/create-a-name-validation",
						"resources/retrieve-a-document-validation",
						"resources/list-all-document-validations",
						"resources/update-a-document-validation",
						"resources/delete-a-document-validation",
						"resources/validate-an-app-login-biometric-validation",
					],
				},
				{
					type: "category",
					label: "Email Validations",
					collapsible: true,
					items: [
						"resources/the-email-validation-object",
						"resources/create-an-email-validation",
						"resources/retrieve-an-email-validation",
						"resources/list-all-email-validations",
						"resources/validate-an-email-validation",
					],
				},
				{
					type: "category",
					label: "Persons",
					collapsible: true,
					items: ["resources/the-person-object", "resources/create-a-person", "resources/retrieve-a-person", "resources/list-all-persons"],
				},
				{
					type: "category",
					label: "Phone Validations",
					collapsible: true,
					items: [
						"resources/the-phone-validation-object",
						"resources/create-a-phone-validation",
						"resources/retrieve-a-phone-validation",
						"resources/list-all-phone-validations",
						"resources/validate-a-phone-validation",
					],
				},
				{
					type: "category",
					label: "Projects",
					collapsible: true,
					items: [
						"resources/the-project-object",
						"resources/create-a-project",
						"resources/retrieve-a-project",
						"resources/list-all-projects",
						"resources/update-a-project",
					],
				},
				{
					type: "category",
					label: "Project Flows",
					collapsible: true,
					items: [
						"resources/the-project-flow-object",
						"resources/create-a-project-flow",
						"resources/retrieve-a-project-flow",
						"resources/list-all-project-flows",
						"resources/update-a-project-flow",
					],
				},
				{
					type: "category",
					label: "Support Tickets",
					collapsible: true,
					items: [
						"resources/the-support-ticket-object",
						"resources/create-a-support-ticket",
						"resources/retrieve-a-support-ticket",
						"resources/list-all-support-tickets",
					],
				},
				{
					type: "category",
					label: "Webhooks",
					collapsible: true,
					items: [
						"resources/the-webhook-object",
						"resources/create-a-webhook",
						"resources/retrieve-a-webhook",
						"resources/list-all-webhooks",
						"resources/update-a-webhook",
						"resources/delete-a-webhook",
					],
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
