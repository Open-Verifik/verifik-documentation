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
			id: "intro",
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
				{ type: "doc", id: "identity/argentina", label: "🇦🇷 Argentina" },
				{ type: "doc", id: "identity/bolivia", label: "🇧🇴 Bolivia" },
				{ type: "doc", id: "identity/brazil", label: "🇧🇷 Brasil" },
				{ type: "doc", id: "identity/canada", label: "🇨🇦 Canadá" },
				{ type: "doc", id: "identity/chile", label: "🇨🇱 Chile" },
				{ type: "doc", id: "identity/colombia", label: "🇨🇴 Ciudadano Colombiano" },
				{ type: "doc", id: "identity/costa-rica", label: "🇨🇷 Costa Rica" },
				{ type: "doc", id: "identity/dominican-republic", label: "🇩🇴 República Dominicana" },
				{ type: "doc", id: "identity/ecuador", label: "🇪🇨 Ecuador" },
				{ type: "doc", id: "identity/el-salvador", label: "🇸🇻 El Salvador" },
				{ type: "doc", id: "identity/guatemala", label: "🇬🇹 Guatemala" },
				{ type: "doc", id: "identity/honduras", label: "🇭🇳 Honduras" },
				{ type: "doc", id: "identity/mexico", label: "🇲🇽 México" },
				{ type: "doc", id: "identity/panama", label: "🇵🇦 Panamá" },
				{ type: "doc", id: "identity/paraguay", label: "🇵🇾 Paraguay" },
				{ type: "doc", id: "identity/peru", label: "🇵🇪 Perú" },
				{ type: "doc", id: "identity/spain-citizen", label: "🇪🇸 Ciudadano Español" },
				{ type: "doc", id: "identity/united-states", label: "🇺🇸 Estados Unidos" },
				{ type: "doc", id: "identity/uruguay", label: "🇺🇾 Uruguay" },
				{ type: "doc", id: "identity/venezuela", label: "🇻🇪 Venezuela" },
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
