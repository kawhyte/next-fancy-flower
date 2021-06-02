import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import Layout from "../components/Layout";
import Offer from "../components/OfferSection";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

import { createClient } from "contentful";
import Hero from "@components/Hero";
import CustomizationOffer from "@components/CustomizationOffer";
import OurStory from "@components/OurStory";
import Categories from "@components/Categories";

function Birthday({ posts }) {
	console.loh;

	return (
		<Layout color={false}>
			<Head>
				<title>Fancyflower Cakes</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Offer />

			{posts.map((item) => (
				<div key={item.sys.id} className='bg-red-200'>
					{item.fields.name}
				</div>
			))}

		
		</Layout>
	);
}

export default Birthday;

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
