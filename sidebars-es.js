// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Spanish sidebar configuration for Zelf Documentation
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
	// Spanish sidebar structure
	tutorialSidebar: [
		{
			type: "doc",
			id: "inicio",
			label: "Bienvenido a Verifik",
		},
		{
			type: "category",
			label: "AUTENTICACIÓN",
			collapsible: false,
			items: [
				"autenticacion/api-key-acceso-por-email",
				"autenticacion/api-key-acceso-por-telefono",
				"autenticacion/renovar-tu-token-jwt",
				"autenticacion/crear-nuevo-token-y-revocar-tokens-previos",
			],
		},
		{
			type: "category",
			label: "CLIENTES",
			collapsible: false,
			items: ["clients/informacion-cuenta"],
		},
		{
			type: "category",
			label: "SERVICIOS",
			collapsible: false,
			items: [
				"smartcheck/verificacion-inteligente",
				"smartaccess/acceso-inteligente",
				"access/acceso",
				"smartenroll/inscripcion-inteligente",
				"enroll/inscripcion",
				"smart-scan/escaneo-inteligente",
			],
		},
		{
			type: "category",
			label: "BIOMETRICS API'S",
			collapsible: false,
			items: [
				"biometrics/deteccion-vitalidad",
				{
					type: "category",
					label: "Comparación Facial",
					collapsible: true,
					items: ["biometrics/comparar", "biometrics/comparar-en-vivo", "biometrics/comparar-con-deteccion-vitalidad"],
				},
				{
					type: "category",
					label: "Búsqueda Facial",
					collapsible: true,
					items: ["biometrics/buscar", "biometrics/buscar-cara-en-vivo", "biometrics/buscar-usuario-activo", "biometrics/buscar-recortes"],
				},
			],
		},
		{
			type: "category",
			label: "SCAN DOCS API'S",
			collapsible: false,
			items: ["scandocs/escaneo-estudio", "scandocs/escaneo-prompt"],
		},
		{
			type: "category",
			label: "VALIDACIÓN DE IDENTIDAD",
			collapsible: false,
			items: [
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-argentina", label: "🇦🇷 Argentina" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-bolivia", label: "🇧🇴 Bolivia" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-brasil", label: "🇧🇷 Brasil" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-canada", label: "🇨🇦 Canadá" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-chile", label: "🇨🇱 Chile" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-colombia", label: "🇨🇴 Ciudadano Colombiano" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-costa-rica", label: "🇨🇷 Costa Rica" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-republica-dominicana", label: "🇩🇴 República Dominicana" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-ecuador", label: "🇪🇨 Ecuador" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-el-salvador", label: "🇸🇻 El Salvador" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-guatemala", label: "🇬🇹 Guatemala" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-honduras", label: "🇭🇳 Honduras" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-mexico", label: "🇲🇽 México" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-panama", label: "🇵🇦 Panamá" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-paraguay", label: "🇵🇾 Paraguay" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-peru", label: "🇵🇪 Perú" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-espana", label: "🇪🇸 Ciudadano Español" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-estados-unidos", label: "🇺🇸 Estados Unidos" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-uruguay", label: "🇺🇾 Uruguay" },
				{ type: "doc", id: "identity/verificacion-legal-de-id-de-venezuela", label: "🇻🇪 Venezuela" },
			],
		},
		{
			type: "category",
			label: "VALIDACIÓN EMPRESARIAL",
			collapsible: false,
			items: [
				{ type: "doc", id: "validacion-empresarial/argentina", label: "🇦🇷 Argentina" },
				{ type: "doc", id: "validacion-empresarial/bolivia", label: "🇧🇴 Bolivia" },
				{ type: "doc", id: "validacion-empresarial/brazil", label: "🇧🇷 Brasil" },
			],
		},
		{
			type: "category",
			label: "VERIFIK LLC",
			collapsible: false,
			items: [
				"legal/politica-privacidad",
				"legal/terminos-y-condiciones",
				"legal/acuerdo-de-niveles-de-servicio",
				"legal/verifik-for-enterprises-hub-esp",
				"legal/smartcheck-terminos-y-condiciones-de-uso",
			],
		},
		// Secciones restantes se añadirán conforme se migren desde EN a ES
	],
};

export default sidebars;
