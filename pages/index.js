import Head from "next/head";
import Layout from "../components/Layout";
import Offer from "../components/OfferSection";
import Hero from "@components/Hero";
import CustomizationOffer from "@components/CustomizationOffer";
import OurStory from "@components/OurStory";
import Categories from "@components/Categories";

export default function Home() {
	return (
		<Layout color={false}>
			<Head>
				<title>Home | Fancyflower Cakes</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<Offer />
			<div className='bg-yellow-50  py-0.5 '>
				<Categories />
			</div>
			<CustomizationOffer />
			<OurStory />
		</Layout>
	);
}
