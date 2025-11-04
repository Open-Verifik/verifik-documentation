import React from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { usePluralForm } from "@docusaurus/theme-common";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import TagsListInline from "@theme/TagsListInline";
import Link from "@docusaurus/Link";

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
	const { selectMessage } = usePluralForm();
	return (readingTimeFloat) => {
		const readingTime = Math.ceil(readingTimeFloat);
		return selectMessage(
			readingTime,
			translate(
				{
					id: "theme.blog.post.readingTime.plurals",
					message: "One min read|{readingTime} min read",
					description:
						'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
				},
				{ readingTime }
			)
		);
	};
}

function BlogPostCard({ children }) {
	const { metadata } = useBlogPost();
	const { title, permalink, editUrl, date, formattedDate, readingTime, authors, tags } = metadata;
	const readingTimePlural = useReadingTimePlural();

	return (
		<article className="blog-card">
			<div className="blog-card__content">
				<div className="blog-card__header">
					<h2 className="blog-card__title">
						<Link to={permalink} className="blog-card__title-link">
							{title}
						</Link>
					</h2>
					<div className="blog-card__meta">
						<time className="blog-card__date" dateTime={date}>
							{formattedDate}
						</time>
						<span className="blog-card__reading-time">{readingTimePlural(readingTime)}</span>
					</div>
				</div>

				<div className="blog-card__body">
					<div className="blog-card__excerpt">{children}</div>
				</div>

				<div className="blog-card__footer">
					{authors && authors.length > 0 && (
						<div className="blog-card__author">
							<span className="blog-card__author-name">{authors[0].name}</span>
							{authors[0].title && <span className="blog-card__author-title">{authors[0].title}</span>}
						</div>
					)}
					{tags.length > 0 && (
						<div className="blog-card__tags">
							<TagsListInline tags={tags} />
						</div>
					)}
				</div>
			</div>
		</article>
	);
}

export default function BlogPostItem({ children, className }) {
	return <BlogPostCard className={className}>{children}</BlogPostCard>;
}
