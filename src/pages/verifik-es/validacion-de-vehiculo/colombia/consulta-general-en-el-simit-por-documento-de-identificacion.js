import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/docs-es/validacion-vehiculos/colombia/consulta-general-por-documento-simit";

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
		<Layout title="Consulta General en el SIMIT por Documento de Identificación" description="Consulta información de comparendos y multas SIMIT por documento">
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
					<h1>Consulta General en el SIMIT por Documento de Identificación</h1>
					
					<h3>Endpoint</h3>
					<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>https://api.verifik.co/v2/co/simit/consultar</code>
					</pre>

					<p>
						El Servicio de Comparendos y Multas permite a los usuarios acceder a información exhaustiva sobre comparendos y sanciones vinculados con un número de documento determinado en Colombia. La respuesta ofrece información detallada sobre cada comparendo, como la clase de violación, el valor de la multa y el estado presente del comparendo.
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
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Tipo de documento. Parámetros válidos: <code>CC</code>, <code>PA</code>, <code>CE</code>, <code>TI</code>, <code>RC</code>, <code>NIT</code>.</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}><code>documentNumber</code></td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Número de documento a ser consultado, sin espacios ni puntos.</td>
							</tr>
						</tbody>
					</table>

					<h3>Solicitud</h3>
					<Tabs>
						<TabItem value="node" label="Node.js">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/simit/consultar", {
  params: { 
    documentType: "CC", 
    documentNumber: "123456789" 
  },
  headers: { 
    Accept: "application/json", 
    Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\` 
  },
});
console.log(data);`}</code>
							</pre>
						</TabItem>
						<TabItem value="python" label="Python">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import os, requests

url = "https://api.verifik.co/v2/co/simit/consultar"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"documentType": "CC", "documentNumber": "123456789"}
r = requests.get(url, headers=headers, params=params)
print(r.json())`}</code>
							</pre>
						</TabItem>
					</Tabs>

					<h3>Respuesta</h3>
					<p>
						La respuesta incluye información completa sobre sanciones, cursos de educación vial y acuerdos de pago asociados con el documento consultado.
					</p>
					<Tabs>
						<TabItem value="200" label="200">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto", maxHeight: "400px" }}>
								<code>{`{
  "value": {
    "value": {
      "data": {
        "multas": [
          {
            "infractor": {
              "tipoDocumento": "Cédula",
              "numeroDocumento": "123456789"
            },
            "valor": 344730,
            "estadoComparendo": "Pendiente"
          }
        ],
        "cursos": [...],
        "acuerdosPago": [...]
      }
    }
  }
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
						<li>Este servicio integral ofrece todos los datos SIMIT para una persona incluyendo sanciones, cursos y acuerdos de pago.</li>
						<li>"Multas" contiene información de violaciones de tráfico con códigos y descripciones de infracciones.</li>
						<li>"Cursos" muestra cursos de educación vial tomados por la persona.</li>
						<li>"AcuerdosPago" muestra acuerdos de pago para sanciones pendientes.</li>
						<li>Los valores se proporcionan en Pesos Colombianos (COP).</li>
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
