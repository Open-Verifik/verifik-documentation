import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Card.module.css";

export function Card({ title, description, image, link }) {
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.cardContent}>
				<h3 className={styles.cardTitle}>{title}</h3>
				<p className={styles.cardDescription}>{description}</p>
				<Link to={link} className={styles.cardLink}>
					Learn More →
				</Link>
			</div>
		</div>
	);
}
