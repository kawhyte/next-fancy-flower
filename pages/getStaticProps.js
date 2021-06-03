import { createClient } from "contentful";
export const space = process.env.CONTENTFUL_SPACE_ID;
export const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

export async function getStaticProps() {
	const client = createClient({
		space: space,
		accessToken: accessToken,
	});

	const res = await client.getEntries({ content_type: "portfolio" });
	let result = res.items.filter(function (item) {
		return item.fields.category === "Birthday";
	});

	return {
		props: {
			posts: result,
		},
	};
}
