import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Head from "@docusaurus/Head";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/verifik-es/validacion-empresarial/colombia-verificacion-dian";
	const pageTitle = "Verificación de Empresa Colombiana en la DIAN";
	const pageDescription =
		"Verifica el estado DIAN (autoridad tributaria de Colombia) de una empresa. Valida si una empresa colombiana está activa y tiene vigentes sus responsabilidades fiscales ante la DIAN mediante la API de Verifik.";
	const baseUrl = "https://docs.verifik.co";

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					history.push(redirectUrl);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [history, redirectUrl]);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "APIReference",
		name: pageTitle,
		description: pageDescription,
		url: `${baseUrl}${redirectUrl}`,
		provider: {
			"@type": "Organization",
			name: "Verifik",
			url: "https://verifik.co",
		},
		applicationCategory: "BusinessApplication",
		operatingSystem: "Web API",
	};

	const styles = {
		container: { padding: "2rem", maxWidth: "1200px", margin: "0 auto" },
		warningBox: {
			padding: "1.5rem",
			backgroundColor: "#fff3cd",
			border: "1px solid #ffc107",
			borderRadius: "8px",
			marginBottom: "2rem",
			textAlign: "center",
		},
		button: {
			display: "inline-block",
			padding: "12px 24px",
			backgroundColor: "#2563eb",
			color: "white",
			textDecoration: "none",
			borderRadius: "6px",
			fontWeight: "bold",
			transition: "background-color 0.2s",
		},
		infoBox: {
			marginTop: "3rem",
			padding: "1.5rem",
			backgroundColor: "#e7f3ff",
			border: "1px solid #2563eb",
			borderRadius: "8px",
			textAlign: "center",
		},
		table: {
			width: "100%",
			borderCollapse: "collapse",
			marginBottom: "1.5rem",
		},
		tableHeader: {
			backgroundColor: "#f5f5f5",
			padding: "0.75rem",
			border: "1px solid #ddd",
			textAlign: "left",
		},
		tableCell: {
			padding: "0.75rem",
			border: "1px solid #ddd",
		},
		codeBlock: {
			backgroundColor: "#f5f5f5",
			padding: "1rem",
			borderRadius: "4px",
			overflow: "auto",
		},
	};

	return (
		<>
			<Head>
				<title>{pageTitle} | Verifik Documentation</title>
				<meta name="description" content={pageDescription} />
				<link rel="canonical" href={`${baseUrl}${redirectUrl}`} />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="article" />
				<meta property="og:url" content={`${baseUrl}${redirectUrl}`} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:site_name" content="Verifik Documentation" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content={`${baseUrl}${redirectUrl}`} />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={pageDescription} />

				{/* JSON-LD Structured Data */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Head>
			<Layout title={pageTitle} description={pageDescription}>
				<div style={styles.container}>
					<div style={styles.warningBox}>
						<h2 style={{ marginTop: 0 }}>⚠️ Esta página ha sido movida</h2>
						<p>Esta URL pertenecía a la documentación antigua de GitBook y ahora se encuentra en una nueva ubicación.</p>
						<p>
							<strong>Nueva URL:</strong> <a href={redirectUrl}>{redirectUrl}</a>
						</p>
						<p>
							Serás redirigido automáticamente en <strong>{countdown}</strong> segundos...
						</p>
						<p>
							<a
								href={redirectUrl}
								style={styles.button}
								onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
								onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
							>
								Ir a la Nueva Documentación
							</a>
						</p>
					</div>

					<div style={{ marginTop: "2rem" }}>
						<h1>Verificación de Empresa Colombiana en la DIAN</h1>

						<h3>Endpoint</h3>
						<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
							<code>https://api.verifik.co/v2/co/company/dian</code>
						</pre>

						<p>
							Valida el estado DIAN (autoridad tributaria de Colombia) de una empresa. Este servicio permite verificar si una empresa
							colombiana está activa y tiene vigentes sus responsabilidades fiscales ante la DIAN.
						</p>

						<h3>Headers</h3>
						<table style={styles.table}>
							<thead>
								<tr style={{ backgroundColor: "#f5f5f5" }}>
									<th style={styles.tableHeader}>Name</th>
									<th style={styles.tableHeader}>Value</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={styles.tableCell}>Accept</td>
									<td style={styles.tableCell}>
										<code>application/json</code>
									</td>
								</tr>
								<tr>
									<td style={styles.tableCell}>Authorization</td>
									<td style={styles.tableCell}>
										<code>Bearer {"<token>"}</code>
									</td>
								</tr>
							</tbody>
						</table>

						<h3>Parámetros</h3>
						<table style={styles.table}>
							<thead>
								<tr style={{ backgroundColor: "#f5f5f5" }}>
									<th style={styles.tableHeader}>Name</th>
									<th style={styles.tableHeader}>Type</th>
									<th style={styles.tableHeader}>Required</th>
									<th style={styles.tableHeader}>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={styles.tableCell}>
										<code>documentType</code>
									</td>
									<td style={styles.tableCell}>string</td>
									<td style={styles.tableCell}>Yes</td>
									<td style={styles.tableCell}>
										Tipo de documento. Parámetro permitido: <code>NIT</code>.
									</td>
								</tr>
								<tr>
									<td style={styles.tableCell}>
										<code>documentNumber</code>
									</td>
									<td style={styles.tableCell}>string</td>
									<td style={styles.tableCell}>Yes</td>
									<td style={styles.tableCell}>NIT (con o sin dígito de verificación).</td>
								</tr>
							</tbody>
						</table>

						<h3>Solicitud</h3>
						<Tabs>
							<TabItem value="node" label="Node.js">
								<pre style={styles.codeBlock}>
									<code>{`import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\` },
});
console.log(data);`}</code>
								</pre>
							</TabItem>
							<TabItem value="python" label="Python">
								<pre style={styles.codeBlock}>
									<code>{`import os, requests

url = "https://api.verifik.co/v2/co/company/dian"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "NIT", "documentNumber": "901708460"}
r = requests.get(url, headers=headers, params=params)
print(r.json())`}</code>
								</pre>
							</TabItem>
						</Tabs>

						<h3>Respuesta</h3>
						<Tabs>
							<TabItem value="200" label="200">
								<pre style={{ ...styles.codeBlock, maxHeight: "400px" }}>
									<code>{`{
  "data": {
    "date": "2025-10-10T16:49:00Z",
    "descripcion": "Los datos de la persona estan activos, es decir tiene vigentes sus responsabilidades ",
    "estado": "REGISTRO ACTIVO",
    "nombreRazon": "SAY SHANNON COLOMBIA SAS",
    "nit": "901708460"
  },
  "signature": {
    "dateTime": "October 10, 2025 4:49 PM",
    "message": "Certified by Verifik.co"
  },
  "id": "5RCBO"
}`}</code>
								</pre>
							</TabItem>
							<TabItem value="404" label="404">
								<pre style={styles.codeBlock}>
									<code>{`{
    "code": "NotFound",
    "message": "Record not found."
}`}</code>
								</pre>
							</TabItem>
						</Tabs>

						<h3>Notas</h3>
						<ul>
							<li>Usa entrada de NIT limpia; el servicio considera el dígito de verificación.</li>
						</ul>

						<div style={styles.infoBox}>
							<p style={{ margin: 0, fontWeight: "bold" }}>
								Para ver la documentación completa y actualizada, visita:{" "}
								<a href={redirectUrl} style={{ color: "#2563eb" }}>
									{redirectUrl}
								</a>
							</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
