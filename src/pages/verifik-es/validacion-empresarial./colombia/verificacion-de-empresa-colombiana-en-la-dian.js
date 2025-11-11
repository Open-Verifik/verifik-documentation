import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/docs-es/validacion-empresarial/colombia-verificacion-dian";

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
		<Layout title="Verificación de Empresa Colombiana en la DIAN" description="Verificar estado DIAN para empresas colombianas">
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				<div style={{ 
					padding: "1.5rem", 
					backgroundColor: "#fff3cd", 
					border: "1px solid #ffc107", 
					borderRadius: "8px", 
					marginBottom: "2rem",
					textAlign: "center"
				}}>
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
						Valida el estado DIAN (autoridad tributaria de Colombia) de una empresa. Este servicio permite verificar si una empresa colombiana está activa y tiene vigentes sus responsabilidades fiscales ante la DIAN.
					</p>

					<h3>Headers</h3>
					<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
						<thead>
							<tr style={{ backgroundColor: "#f5f5f5" }}>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Value</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Accept</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><code>application/json</code></td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Authorization</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><code>Bearer {'<token>'}</code></td>
							</tr>
						</tbody>
					</table>

					<h3>Parámetros</h3>
					<table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
						<thead>
							<tr style={{ backgroundColor: "#f5f5f5" }}>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Type</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Required</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><code>documentType</code></td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Tipo de documento. Parámetro permitido: <code>NIT</code>.</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><code>documentNumber</code></td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>NIT (con o sin dígito de verificación).</td>
							</tr>
						</tbody>
					</table>

					<h3>Solicitud</h3>
					<Tabs>
						<TabItem value="node" label="Node.js">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/company/dian", {
  params: { documentType: "NIT", documentNumber: "901708460" },
  headers: { Accept: "application/json", Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\` },
});
console.log(data);`}</code>
							</pre>
						</TabItem>
						<TabItem value="python" label="Python">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
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
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto", maxHeight: "400px" }}>
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
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
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

					<div style={{ 
						marginTop: "3rem", 
						padding: "1.5rem", 
						backgroundColor: "#e7f3ff", 
						border: "1px solid #2563eb", 
						borderRadius: "8px",
						textAlign: "center"
					}}>
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
