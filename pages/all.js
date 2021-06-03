import Head from "next/head";
import Layout from "../components/Layout";
import { fetchEntries } from "utils/getContentfulPosts";
import Pages from "@components/Pages";



function AllCakes({ posts }) {

	return (
		<Layout color={false}>
			<Head>
				<title>All Cakes | Fancyflower</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Pages posts={posts} />
			
		</Layout>
	);
}

export default AllCakes;

export async function getStaticProps() {
	const result = await fetchEntries();

	return {
		props: {
			posts: result,
		},
	};
}

