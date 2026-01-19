import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/verifik-es/validacion-vehiculos/colombia/registros-vehiculos-por-vin-runt";

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
			title="Información de Vehículo por Número de VIN RUNT"
			description="Consulta información completa de vehículos en Colombia mediante VIN"
		>
			<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
				{/* Redirect Warning */}
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

				{/* Content with synonyms */}
				<div style={{ marginTop: "2rem" }}>
					<h1>Información de Vehículo por Número de VIN RUNT</h1>

					<h3>Endpoint</h3>
					<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>https://api.verifik.co/v2/co/runt/vehicle-by-vin</code>
					</pre>

					<p>
						El servicio de Consulta de Vehículos te permite obtener datos completos sobre un automotor inscrito en Colombia utilizando su
						VIN (Número de Identificación del Vehículo). Este servicio ofrece información exhaustiva incluyendo el estado del automotor,
						tipo de servicio, clase, marca, modelo, color y especificaciones técnicas como peso y capacidad de asientos.
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
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Type</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Required</th>
								<th style={{ padding: "0.75rem", border: "1px solid #ddd", textAlign: "left" }}>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>vin</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									VIN del automotor del que deseas consultar información.
								</td>
							</tr>
						</tbody>
					</table>

					<h3>Solicitud</h3>
					<Tabs>
						<TabItem value="node" label="Node.js">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from "axios";

const { data } = await axios.get("https://api.verifik.co/v2/co/runt/vehicle-by-vin", {
  params: { vin: "3MVDM2WLAML234946" },
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

url = "https://api.verifik.co/v2/co/runt/vehicle-by-vin"
headers = {"Accept": "application/json", "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"}
params = {"vin": "3MVDM2WLAML234946"}
r = requests.get(url, headers=headers, params=params)
print(r.json())`}</code>
							</pre>
						</TabItem>
						<TabItem value="php" label="PHP">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.verifik.co/v2/co/runt/vehicle-by-vin?vin=3MVDM2WLAML234946');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer <tu_token>'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
?>`}</code>
							</pre>
						</TabItem>
					</Tabs>

					<h3>Respuesta</h3>
					<p>
						La respuesta incluye información exhaustiva del vehículo, incluyendo datos técnicos, información general, estado del
						automotor, pólizas de responsabilidad civil, seguros SOAT, solicitudes, tarjeta de operación y revisiones técnico-mecánicas.
					</p>
					<Tabs>
						<TabItem value="200" label="200">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto", maxHeight: "400px" }}>
								<code>{`{
  "data": {
    "datosTecnicos": {
      "noEjes": "2",
      "pasajerosSentados": "7",
      "pesoBrutoVehicular": "2990"
    },
    "informacionGeneral": {
      "cilindraje": "2982",
      "claseVehiculo": "CAMPERO",
      "color": "PLATA METALICO",
      "estadoDelVehiculo": "ACTIVO",
      "fechaMatricula": "07/03/2013",
      "linea": "PRADO",
      "marca": "TOYOTA",
      "modelo": "2013",
      "noPlaca": "NET603",
      "tipoServicio": "Particular"
    },
    "soat": [...],
    "tecnoMecanica": [...]
  },
  "signature": {
    "dateTime": "October 10, 2025 8:12 PM",
    "message": "Certified by Verifik.co"
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
						<TabItem value="409" label="409">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`{
  "code": "MissingParameter",
  "message": "missing vin"
}`}</code>
							</pre>
						</TabItem>
					</Tabs>

					<h3>Notas</h3>
					<ul>
						<li>VIN (Número de Identificación del Vehículo) es un identificador único de 17 caracteres para automotores.</li>
						<li>Este servicio ofrece la misma información exhaustiva que el servicio basado en placa.</li>
						<li>El estado del vehículo "ACTIVO" indica que el automotor está actualmente inscrito y operativo.</li>
						<li>Los datos del seguro SOAT se incluyen cuando están disponibles.</li>
					</ul>

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
