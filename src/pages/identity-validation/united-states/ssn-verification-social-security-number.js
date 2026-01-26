import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/identity/united-states";

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
			title="SSN Verification - Social Security Number"
			description="Social Security Number verification service for United States identity validation"
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
					<h1>🇺🇸 United States - SSN Verification</h1>

					<p>
						The SSN Verification Service is a robust tool designed to verify Social Security Numbers (SSN) issued in the United States. This service allows users to quickly validate an SSN by providing details such as the issuing state and the first year of issuance. The response includes the SSN itself, the year it was first issued, the issuing state, and the validity status of the SSN. This tool is essential for ensuring the accuracy and authenticity of Social Security Numbers.
					</p>

					<h3>Endpoint</h3>
					<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
						<code>GET https://api.verifik.co/v2/usa/ssn</code>
					</pre>

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

					<h3>Parameters</h3>
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
									<code>documentNumber</code>
								</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>string</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>Yes</td>
								<td style={{ padding: "0.75rem", border: "1px solid #ddd" }}>
									SSN to be queried, it must be written exactly as it appears on the document. Example: <code>123-45-678</code>
								</td>
							</tr>
						</tbody>
					</table>

					<h3>Request</h3>
					<Tabs>
						<TabItem value="javascript" label="JavaScript">
							<pre style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflow: "auto" }}>
								<code>{`import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.verifik.co/v2/usa/ssn',
  params: {
    documentNumber: '123-45-678'
  },
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer <tu_token>'
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
payload = ''
headers = {}
conn.request("GET", "/v2/usa/ssn?documentNumber=123-45-678", payload, headers)
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
