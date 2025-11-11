import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(60);
	const history = useHistory();
	const redirectUrl = "/driver-validation/british-columbia-driver-license";

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
			title="British Columbia Driver License"
			description="Verify British Columbia driver licenses"
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
					<h1>British Columbia Driver License</h1>

					<p>
						The British Columbia Driver License verification service allows you to validate driver's licenses issued in British Columbia, Canada. This service provides comprehensive information about the license holder including status, restrictions, and validity.
					</p>

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
