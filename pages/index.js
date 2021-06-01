import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import Layout from "../components/Layout";
import Offer from "../components/OfferSection";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
//import { fetchEntries } from './util/contenfulPosts'
//import Post from 'components/Posts'

import { createClient } from "contentful";
import Hero from "@components/Hero";
import CustomizationOffer from "@components/CustomizationOffer";
import OurStory from "@components/OurStory";

export default function Home({ posts }) {
	// console.log("Post ", posts);

	return (


    <Layout color={false}> 
	
			<Head>
				<title>Next.js Starter!</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Hero />
	  <Offer />	<CustomizationOffer />

	  <OurStory />

			{posts.map((item) => (
				<div key={item.sys.id} className='bg-red-200'>
					{item.fields.name}
				</div>
			))}

			<div className='posts'> </div>

	
	

    </Layout>
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
