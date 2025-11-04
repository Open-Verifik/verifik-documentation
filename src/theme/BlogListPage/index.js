import React from "react";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import BlogPostItems from "@theme/BlogPostItems";
import SearchMetadata from "@theme/SearchMetadata";
import { PageMetadata } from "@docusaurus/theme-common";
import { translate } from "@docusaurus/Translate";

export default function BlogListPage(props) {
	const { metadata, items } = props;
	const { blogTitle, blogDescription } = metadata;

	return (
		<BlogLayout>
			<PageMetadata title={blogTitle} description={blogDescription} />
			<SearchMetadata tag="blog_posts_list" />

			<div className="blog-hero">
				<div className="container">
					<h1 className="blog-hero__title">
						{translate({
							id: "theme.blog.title",
							message: "Verifik Blog",
							description: "The title of the blog",
						})}
					</h1>
					<p className="blog-hero__subtitle">
						{translate({
							id: "theme.blog.description",
							message: "Zero Knowledge Face Proofs and Digital Identity Insights",
							description: "The subtitle of the blog",
						})}
					</p>
				</div>
			</div>

			<div className="container margin-vert--lg">
				<div className="blog-cards-grid">
					<BlogPostItems items={items} />
				</div>
				<BlogListPaginator metadata={metadata} />
			</div>
		</BlogLayout>
	);
}
