import Head from "next/head";
import Layout from "../components/Layout";
import Pages from "@components/Pages";
import { fetchEntries } from "utils/getContentfulPosts";

function Anniversary({ posts }) {
	
	return (
		<Layout color={false}>
			<Head>
				<title>Anniversary/Wedding Cakes | Fancyflower</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Pages posts={posts} heading={"Anniversary/Wedding"} />
		</Layout>
	);
}

export default Anniversary;

export async function getStaticProps() {
	const res = await fetchEntries();

	let result = res.filter(function (item) {
		return item.fields.category === "Wedding";
	});

	return {
		props: {
			posts: result,
		},
		revalidate: 1
	};
}
