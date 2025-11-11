import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/business-validation/rues-complete-v3";

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
			title="Colombian Business Information RUES"
			description="Retrieve complete Colombian business information from RUES registry"
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
					<h1>RUES Business Validation</h1>

					<h3>Endpoint</h3>
					<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>https://api.verifik.co/v3/co/rues-complete</code>
					</pre>

					<p>
						Retrieves complete business information from Colombia's RUES registry. This service provides comprehensive data about Colombian businesses including commercial registry details, legal representatives, organization type, enrollment information, and more.
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

					<h3>Params</h3>
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
									<code>category</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									One of: <code>"RM"</code>, <code>"PROP"</code>, <code>"RUNEOL"</code>, <code>"RNT"</code>, <code>"ESAL"</code>, <code>"RESAL"</code>, <code>"JUEGOS"</code>, <code>"EXTRANJERAS"</code>.
								</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>documentNumber</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									Legal business ID (e.g., <code>1121329661</code>).
								</td>
							</tr>
							<tr>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									<code>documentType</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									Company document type. For Colombia use <code>NIT</code>.
								</td>
							</tr>
						</tbody>
					</table>

					<h3>Request</h3>
					<Tabs>
						<TabItem value="node" label="Node.js">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from "axios";

const { data } = await axios.get(
  "https://api.verifik.co/v3/co/rues-complete",
  {
    params: { category: "RM", documentNumber: "1121329661", documentType: "NIT" },
    headers: { Accept: "application/json", Authorization: \`Bearer \${process.env.VERIFIK_TOKEN}\` },
  }
);
console.log(data);`}</code>
							</pre>
						</TabItem>
						<TabItem value="python" label="Python">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import os, requests

url = "https://api.verifik.co/v3/co/rues-complete"
headers = {
    "Accept": "application/json",
    "Authorization": f"Bearer {os.getenv('VERIFIK_TOKEN')}"
}
params = {"category": "RM", "documentNumber": "1121329661", "documentType": "NIT"}
r = requests.get(url, headers=headers, params=params)
print(r.json())`}</code>
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
							For complete and updated documentation, visit:{" "}
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
