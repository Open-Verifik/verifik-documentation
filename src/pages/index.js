import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

/**
 * The docs homepage used to render only a client-side redirect, so crawlers
 * saw an empty SPA shell. This page is real HTML and links into the guides.
 */
export default function Home() {
	return (
		<Layout
			title="API documentation"
			description="Verifik API documentation for identity verification, KYC, KYB, and background checks in Colombia, Mexico, and other countries."
		>
			<main className="container margin-vert--lg">
				<div className="row">
					<div className="col col--8 col--offset-2">
						<h1>Verifik API documentation</h1>
						<p>
							Reference for the Verifik identity, business, vehicle, and background-check APIs. Start with the guide for your language, or open a country endpoint directly.
						</p>
						<ul>
							<li>
								<Link to="/intro">English documentation</Link>
							</li>
							<li>
								<Link to="/verifik-es/intro">Documentación en español</Link>
							</li>
							<li>
								<Link to="/identity/colombia">Colombia ID verification API (cédula / Registraduría)</Link>
							</li>
							<li>
								<Link to="/verifik-es/identidad/colombia">API para validar cédula en Colombia (Registraduría)</Link>
							</li>
							<li>
								<Link to="/identity/mexico-ine">Mexico INE verification API (lista nominal)</Link>
							</li>
							<li>
								<Link to="/verifik-es/identity/mexico-ine">API para validar INE en México (lista nominal)</Link>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</Layout>
	);
}
