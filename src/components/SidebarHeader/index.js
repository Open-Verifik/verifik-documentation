import React from "react";
import Translate from "@docusaurus/Translate";
import "./styles.css";

export default function SidebarHeader() {
	return (
		<div className="sidebar-header">
			<div className="sidebar-header-content">
				<div className="sidebar-logo">
					<div className="logo-icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
					<span className="logo-text">ZELF</span>
				</div>
				<div className="sidebar-dropdown">
					<span className="dropdown-text">
						<Translate id="sidebar.header.documentation">Zelf Documentation</Translate>
					</span>
					<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
			</div>
		</div>
	);
}
