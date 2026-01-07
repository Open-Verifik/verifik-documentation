import React from "react";
import Translate from "@docusaurus/Translate";
import "./styles.css";

export default function SidebarFooter() {
	return (
		<div className="sidebar-footer">
			<div className="footer-content">
				<div className="footer-icon">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<span className="footer-text">
					<Translate id="sidebar.footer.poweredBy">Powered by Docusaurus</Translate>
				</span>
			</div>
		</div>
	);
}
