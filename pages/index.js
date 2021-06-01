import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
//import { fetchEntries } from './util/contenfulPosts'
//import Post from 'components/Posts'

import { createClient } from "contentful";

export default function Home({ posts }) {
	// console.log("Post ", posts);

	return (
		<div className='container'>
			<Head>
				<title>Next.js Starter!</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{posts.map((item) => (
				<div key={item.sys.id} className='bg-red-200'>
					{item.fields.name}
				</div>
			))}

			<div className='posts'> </div>

			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const client = createClient({
		space: space,
		accessToken: accessToken,
	});

	const res = await client.getEntries({ content_type: "portfolio" });

	//const res = await fetchEntries()

	console.log("RES ", res);
	// const posts = await res.map((p) => {
	//   return p.fields
	// })

	return {
		props: {
			posts: res.items,
		},
	};
}
