import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

/**
 * Server-rendered docs homepage. Crawlers need real HTML here: a single H1,
 * the title and description on Layout, and ordinary links. Do not redirect.
 *
 * Locale routes come from the docs plugins in docusaurus.config.js
 * (routeBasePath), not from Docusaurus i18n. English and Spanish are the
 * primary paths. The other navbar languages are secondary links.
 *
 * Official CCPA / GDPR / iBeta / HIPAA badge files are not in static/.
 * The trust row is a typographic treatment of those same standards.
 */

const OTHER_LOCALES = [
	{ href: "/verifik-fr/intro", label: "Français" },
	{ href: "/verifik-pt/intro", label: "Português" },
	{ href: "/verifik-ko/intro", label: "한국어" },
	{ href: "/verifik-ja/intro", label: "日本語" },
	{ href: "/verifik-zh/intro", label: "中文" },
];

const QUICK_LINKS = [
	{
		href: "/identity/colombia",
		locale: "EN",
		text: "Colombia ID verification API (cédula / Registraduría)",
	},
	{
		href: "/verifik-es/identidad/colombia",
		locale: "ES",
		text: "API para validar cédula en Colombia (Registraduría)",
	},
	{
		href: "/identity/mexico-ine",
		locale: "EN",
		text: "Mexico INE verification API (lista nominal)",
	},
	{
		href: "/verifik-es/identity/mexico-ine",
		locale: "ES",
		text: "API para validar INE en México (lista nominal)",
	},
];

const PRODUCTS = [
	{
		href: "/identity/ekyc-identity-verification-guide",
		title: "Identity",
		text: "Government ID and KYC checks against official sources.",
		icon: "id",
	},
	{
		href: "/smartenroll",
		title: "Biometrics & Smart Enroll",
		text: "Face liveness, comparison, and no-code onboarding.",
		icon: "face",
	},
	{
		href: "/business-validation/kyb-business-verification-guide",
		title: "Business",
		text: "Company records and KYB verification by country.",
		icon: "business",
	},
	{
		href: "/vehicle-validation/vehicle-data-verification-guide",
		title: "Vehicles",
		text: "Plate, VIN, and registration lookups.",
		icon: "vehicle",
	},
	{
		href: "/background-check",
		title: "Background checks",
		text: "Criminal and watchlist screening where available.",
		icon: "shield",
	},
];

function ArrowIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true" className={styles.arrow}>
			<path
				d="M4 10h12M11 5l5 5-5 5"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ProductIcon({ name }) {
	const common = {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.7,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": true,
		className: styles.productSvg,
	};
	if (name === "id") {
		return (
			<svg {...common}>
				<rect x="3" y="5" width="18" height="14" rx="2.5" />
				<circle cx="9" cy="12" r="2" />
				<path d="M14 10h4M14 14h3" />
			</svg>
		);
	}
	if (name === "face") {
		return (
			<svg {...common}>
				<circle cx="12" cy="12" r="8" />
				<path d="M8.5 10.5v1M15.5 10.5v1M9 15c.8.7 1.8 1 3 1s2.2-.3 3-1" />
				<path d="M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9M20 9V6.5A2.5 2.5 0 0 0 17.5 4H15M4 15v2.5A2.5 2.5 0 0 0 6.5 20H9M20 15v2.5a2.5 2.5 0 0 1-2.5 2.5H15" />
			</svg>
		);
	}
	if (name === "business") {
		return (
			<svg {...common}>
				<path d="M4 20V7.5A1.5 1.5 0 0 1 5.5 6H14v14" />
				<path d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V20" />
				<path d="M8 10h2M8 14h2M4 20h16" />
			</svg>
		);
	}
	if (name === "vehicle") {
		return (
			<svg {...common}>
				<path d="M4 15h16v3a1 1 0 0 1-1 1h-1.2a1.8 1.8 0 0 1-3.6 0H9.8a1.8 1.8 0 0 1-3.6 0H5a1 1 0 0 1-1-1v-3Z" />
				<path d="M5.2 15 7 9.8A2 2 0 0 1 8.9 8.5h6.2A2 2 0 0 1 17 9.8L18.8 15" />
			</svg>
		);
	}
	return (
		<svg {...common}>
			<path d="M12 3.5 5 6.2v5.3c0 3.6 2.4 6.4 7 8 4.6-1.6 7-4.4 7-8V6.2L12 3.5Z" />
			<path d="M9 12.1 11 14l4-4.2" />
		</svg>
	);
}

function TrustMark({ kind }) {
	if (kind === "lock") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<rect x="6" y="11" width="12" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
				<path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" fill="none" stroke="currentColor" strokeWidth="1.7" />
			</svg>
		);
	}
	if (kind === "scan") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
				<path d="M5 9V6.5A1.5 1.5 0 0 1 6.5 5H9M19 9V6.5A1.5 1.5 0 0 0 17.5 5H15M5 15v2.5A1.5 1.5 0 0 0 6.5 19H9M19 15v2.5a1.5 1.5 0 0 1-1.5 1.5H15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
			</svg>
		);
	}
	if (kind === "plus") {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 7v10M7 12h10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
				<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.7" />
			</svg>
		);
	}
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 4.2 5.5 6.6v5c0 3.3 2.2 5.8 6.5 7.4 4.3-1.6 6.5-4.1 6.5-7.4v-5L12 4.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
		</svg>
	);
}

function HeroVisual() {
	return (
		<div className={styles.visual} aria-hidden="true">
			<div className={styles.visualGlow} />
			<svg className={styles.mesh} viewBox="0 0 480 560">
				<defs>
					<linearGradient id="vkPanel" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor="#1c2c6b" />
						<stop offset="48%" stopColor="#141c42" />
						<stop offset="100%" stopColor="#0a1026" />
					</linearGradient>
					<radialGradient id="vkFace" cx="50%" cy="40%" r="58%">
						<stop offset="0%" stopColor="#9aafff" stopOpacity="0.42" />
						<stop offset="62%" stopColor="#3a5afe" stopOpacity="0.08" />
						<stop offset="100%" stopColor="#3a5afe" stopOpacity="0" />
					</radialGradient>
					<clipPath id="vkHead">
						<path d="M246 104c58 2 104 46 110 112 6 62-16 118-52 156-20 22-40 40-58 48-18-8-38-26-58-48-36-38-58-94-52-156 6-66 52-110 110-112z" />
					</clipPath>
				</defs>
				<rect x="36" y="28" width="408" height="504" rx="36" fill="url(#vkPanel)" stroke="rgba(255,255,255,0.16)" />
				<ellipse cx="246" cy="250" rx="158" ry="186" fill="url(#vkFace)" />
				<g clipPath="url(#vkHead)" fill="none" stroke="#d5defa" strokeWidth="1.05" opacity="0.9">
					<path d="M150 156c32-16 64-24 96-24s64 8 96 24" />
					<path d="M136 188c36-16 72-24 110-24s74 8 110 24" />
					<path d="M128 220c40-14 78-20 118-20s78 6 118 20" />
					<path d="M126 252c42-8 82-12 120-12s78 4 120 12" />
					<path d="M130 284c40 6 78 10 116 10s76-4 116-10" />
					<path d="M142 316c36 12 70 18 104 18s68-6 104-18" />
					<path d="M162 346c28 14 54 20 84 20s56-6 84-20" />
					<path d="M186 374c20 12 40 16 60 16s40-4 60-16" />
					<path d="M168 132c18 78 22 160 8 236" />
					<path d="M198 118c12 86 14 172 2 252" />
					<path d="M226 112c6 90 6 180 0 258" />
					<path d="M246 110v262" />
					<path d="M266 112c-6 90-6 180 0 258" />
					<path d="M294 118c-12 86-14 172-2 252" />
					<path d="M324 132c-18 78-22 160-8 236" />
				</g>
				<path d="M246 104c58 2 104 46 110 112 6 62-16 118-52 156-20 22-40 40-58 48-18-8-38-26-58-48-36-38-58-94-52-156 6-66 52-110 110-112z" fill="none" stroke="#b7c6ff" strokeWidth="1.5" />
				<path d="M206 228c10-8 22-10 32-4M254 224c10-6 22-4 32 4" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
				<path d="M246 236c-2 18-2 32 0 48" fill="none" stroke="#ffffff" strokeWidth="1.35" strokeLinecap="round" opacity="0.7" />
				<path d="M228 292c6 8 12 12 18 12s12-4 18-12" fill="none" stroke="#ffffff" strokeWidth="1.35" strokeLinecap="round" opacity="0.75" />
				<circle cx="246" cy="252" r="172" fill="none" stroke="rgba(90,120,255,0.4)" strokeWidth="1" strokeDasharray="2 7" />
				<circle cx="186" cy="220" r="2.2" fill="#9eb0ff" />
				<circle cx="306" cy="220" r="2.2" fill="#9eb0ff" />
				<circle cx="246" cy="268" r="2.2" fill="#d6defc" />
				<circle cx="214" cy="312" r="2" fill="#9eb0ff" />
				<circle cx="278" cy="312" r="2" fill="#9eb0ff" />
			</svg>
			<div className={`${styles.floatCard} ${styles.floatTop}`}>
				<span className={styles.liveDot} />
				Liveness confirmed
			</div>
			<div className={`${styles.floatCard} ${styles.floatBottom}`}>
				<span className={styles.matchDot} />
				ID matched
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<Layout
			title="API documentation"
			description="Verifik API documentation for identity verification, KYC, KYB, and background checks in Colombia, Mexico, and other countries."
		>
			<main className={styles.page}>
				<section className={styles.hero}>
					<div className={styles.wrap}>
						<div className={styles.heroGrid}>
							<div className={styles.heroCopy}>
								<p className={styles.eyebrow}>Identity · Biometrics · Business · Vehicles · Background checks</p>
								<h1 className={styles.title}>
									<span className={styles.brand}>Verifik</span>
									<span className={styles.titleLine}>API documentation</span>
									<span className={styles.titleLine}>
										for <em>every</em>
									</span>
									<span className={styles.titleLine}>verification need</span>
								</h1>
								<p className={styles.subtitle}>
									Reference for the Verifik identity, business, vehicle, and background-check APIs. Start with the guide for your language, or open a country endpoint directly.
								</p>
								<div className={styles.ctaRow}>
									<Link className={styles.cta} to="/intro">
										English documentation
										<ArrowIcon />
									</Link>
									<Link className={styles.cta} to="/verifik-es/intro">
										Documentación en español
										<ArrowIcon />
									</Link>
								</div>
								<nav className={styles.langNav} aria-label="Other languages">
									<span className={styles.langLabel}>Other languages</span>
									<ul className={styles.langList}>
										{OTHER_LOCALES.map((locale) => (
											<li key={locale.href}>
												<Link to={locale.href}>{locale.label}</Link>
											</li>
										))}
									</ul>
								</nav>
								<ul className={styles.trust} aria-label="Compliance standards">
									<li>
										<TrustMark kind="shield" />
										CCPA
									</li>
									<li>
										<TrustMark kind="lock" />
										GDPR
									</li>
									<li>
										<TrustMark kind="scan" />
										iBeta
									</li>
									<li>
										<TrustMark kind="plus" />
										HIPAA
									</li>
								</ul>
							</div>
							<HeroVisual />
						</div>
					</div>
				</section>

				<section className={styles.section} aria-labelledby="popular-endpoints">
					<div className={styles.wrap}>
						<h2 id="popular-endpoints">Popular endpoints</h2>
						<p className={styles.lede}>Colombia cédula and Mexico INE, in English and Spanish.</p>
						<div className={styles.quickGrid}>
							{QUICK_LINKS.map((item) => (
								<article key={item.href} className={styles.quick}>
									<span className={styles.quickLocale} aria-hidden="true">
										{item.locale}
									</span>
									<Link className={styles.quickAnchor} to={item.href}>
										{item.text}
									</Link>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className={styles.sectionAlt} aria-labelledby="explore-apis">
					<div className={styles.wrap}>
						<h2 id="explore-apis">Explore the APIs</h2>
						<p className={styles.lede}>Guides for the products behind the reference.</p>
						<div className={styles.productGrid}>
							{PRODUCTS.map((product) => (
								<Link key={product.href} className={styles.card} to={product.href}>
									<span className={styles.icon}>
										<ProductIcon name={product.icon} />
									</span>
									<span className={styles.cardTitle}>{product.title}</span>
									<span className={styles.cardText}>{product.text}</span>
								</Link>
							))}
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
}
