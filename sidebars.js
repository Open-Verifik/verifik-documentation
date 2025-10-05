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
				"enroll/enroll",
				"smart-scan/smart-scan",
			],
		},
		{
			type: "category",
			label: "BIOMETRICS API'S",
			collapsible: false,
			items: ["biometrics/liveness", "biometrics/compare", "biometrics/search"],
		},
		{
			type: "category",
			label: "SCAN DOCS API'S",
			collapsible: false,
			items: ["scandocs/scan-studio", "scandocs/scan-prompt"],
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
					type: "doc",
					id: "vehicle-validation/colombia",
					label: "🇨🇴 Colombia",
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
					type: "doc",
					id: "vehicle-validation/peru",
					label: "🇵🇪 Peru",
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
					label: "🇨🇦 British Columbia Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/florida-driver-license",
					label: "🇺🇸 Florida Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/kansas-driver-license",
					label: "🇺🇸 Kansas Driver License",
				},
				{
					type: "doc",
					id: "driver-validation/ontario-driver-license",
					label: "🇨🇦 Ontario Driver License",
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
			label: "RESOURCES",
			collapsible: false,
			items: [
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
					label: "App Logins",
					collapsible: true,
					items: [
						"resources/the-app-login-object",
						"resources/create-an-app-login",
						"resources/retrieve-an-app-login",
						"resources/list-all-app-logins",
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
				{
					type: "category",
					label: "Credits",
					collapsible: true,
					items: ["resources/the-credit-object", "resources/list-all-credit-records", "resources/retrieve-a-credit-record"],
				},
				{
					type: "category",
					label: "Persons",
					collapsible: true,
					items: ["resources/the-person-object", "resources/create-a-person", "resources/retrieve-a-person", "resources/list-all-persons"],
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
			label: "VERIFIK LLC",
			collapsible: false,
			items: [
				"legal/privacy-policy",
				"legal/politicas-de-privacidad",
				"legal/terminos-y-condiciones",
				"legal/terms-and-conditions",
				"legal/acuerdo-de-niveles-de-servicio",
				"legal/service-level-agreement",
				"legal/verifik-for-enterprises-hub-esp",
				"legal/verifik-for-enterprises-hub-eng",
				"legal/smartcheck-terms-and-conditions-of-use",
			],
		},
	],
};

export default sidebars;
