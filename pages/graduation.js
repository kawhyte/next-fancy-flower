import Head from "next/head";
import Layout from "../components/Layout";
import Pages from "@components/Pages";
import { fetchEntries } from "utils/getContentfulPosts";

function Graduation({ posts }) {
	
	return (
		<Layout color={false}>
			<Head>
				<title>Graduation Cakes | Fancyflower</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Pages posts={posts} heading={"Graduation"} />
		</Layout>
	);
}

export default Graduation;

export async function getStaticProps() {
	const res = await fetchEntries();

	let result = res.filter(function (item) {
		return item.fields.category === "Graduation";
	});

	return {
		props: {
			posts: result,
		},
	};
}
