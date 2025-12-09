import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/legal/health";

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

	return (
		<Layout
			title="Colombian RETHUS Verification Data"
			description="Verify Colombian health professional data and affiliations from RETHUS"
		>
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<div
					style={{
						padding: "1.5rem",
						backgroundColor: "#fff3cd",
						border: "1px solid #ffc107",
						borderRadius: "8px",
						marginBottom: "2rem",
						textAlign: "center",
					}}
				>
					<h2 style={{ marginTop: 0 }}>⚠️ This page has been moved</h2>
					<p>This URL belonged to the old GitBook documentation and is now in a new location.</p>
					<p>
						<strong>New URL:</strong> <a href={redirectUrl}>{redirectUrl}</a>
					</p>
					<p>
						You will be automatically redirected in <strong>{countdown}</strong> seconds...
					</p>
					<p>
						<a
							href={redirectUrl}
							style={{
								display: "inline-block",
								padding: "12px 24px",
								backgroundColor: "#2563eb",
								color: "white",
								textDecoration: "none",
								borderRadius: "6px",
								fontWeight: "bold",
							}}
						>
							Go to New Documentation
						</a>
					</p>
				</div>

				<div style={{ marginTop: "2rem" }}>
					<h1>Datos de Verificación RETHUS Colombiano</h1>

					<h3>Endpoint</h3>
					<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>https://api.verifik.co/v2/co/cedula/rethus</code>
					</pre>

					<p>
						Este servicio permite verificar la autenticidad de una cédula colombiana y acceder a información del Registro Único Nacional de Talento Humano en Salud (RETHUS). Al proporcionar el tipo y número de documento, puedes recuperar detalles como el nombre completo del individuo, estado RETHUS, y sus datos académicos y de Seguridad Social. Los datos RETHUS incluyen información sobre los títulos académicos del profesional de la salud y afiliación a Seguridad Social, incluyendo beneficios y modalidades.
					</p>

					<h3>Headers</h3>
					<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
						<thead>
							<tr style={{ backgroundColor: "#f5f5f5" }}>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Nombre</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Valor</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Content-Type</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>application/json</code>
								</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Authorization</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>Bearer {"<token>"}</code>
								</td>
							</tr>
						</tbody>
					</table>

					<h3>Parámetros</h3>
					<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
						<thead>
							<tr style={{ backgroundColor: "#f5f5f5" }}>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Nombre</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Tipo</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Requerido</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Descripción</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>documentType</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Sí</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									Tipo de documento. Parámetro válido: <code>CC</code>.
								</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>documentNumber</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Sí</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									Número de documento de la persona a consultar, sin espacios ni puntos.
								</td>
							</tr>
						</tbody>
					</table>

					<h3>Solicitud</h3>
					<Tabs>
						<TabItem value="javascript" label="JavaScript">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/co/cedula/rethus',
  params: {
    documentType: 'CC',
    documentNumber: '123456789'
  },
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer <tu_token>'
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}`}</code>
							</pre>
						</TabItem>
						<TabItem value="python" label="Python">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import http.client

conn = http.client.HTTPSConnection("api.verifik.co")

headers = {
    'Accept': "application/json",
    'Authorization': "Bearer <token>"
}

conn.request("GET", "/v2/co/cedula/rethus?documentType=CC&documentNumber=123456789", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))`}</code>
							</pre>
						</TabItem>
					</Tabs>

					<div
						style={{
							marginTop: "3rem",
							padding: "1.5rem",
							backgroundColor: "#e7f3ff",
							border: "1px solid #2563eb",
							borderRadius: "8px",
							textAlign: "center",
						}}
					>
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
	);
}
