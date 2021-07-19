import Head from "next/head";
import Layout from "../components/Layout";
import Pages from "@components/Pages";
import { fetchEntries } from "utils/getContentfulPosts";

function Baby({ posts }) {
	
	return (
		<Layout color={false}>
			<Head>
				<title>Baby Cakes | Fancyflower</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Pages posts={posts} heading={"Baby"} />
		</Layout>
	);
}

export default Baby;

export async function getStaticProps() {
	const res = await fetchEntries();

	let result = res.filter(function (item) {
		return item.fields.category === "Baby";
	});

	return {
		props: {
			posts: result,
		},
		revalidate: 1
	};
}
