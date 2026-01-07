import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: <Translate id="homepage.features.easyToUse.title">Easy to Use</Translate>,
		Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<Translate id="homepage.features.easyToUse.description">
				Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
			</Translate>
		),
	},
	{
		title: <Translate id="homepage.features.focusOnWhatMatters.title">Focus on What Matters</Translate>,
		Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<Translate id="homepage.features.focusOnWhatMatters.description">
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the <code>docs</code>{" "}
				directory.
			</Translate>
		),
	},
	{
		title: <Translate id="homepage.features.poweredByReact.title">Powered by React</Translate>,
		Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<Translate id="homepage.features.poweredByReact.description">
				Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.
			</Translate>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
