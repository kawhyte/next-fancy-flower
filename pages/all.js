import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import Layout from "../components/Layout";
import Offer from "../components/OfferSection";
import Image from "next/image";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

import { createClient } from "contentful";
import Hero from "@components/Hero";
import CustomizationOffer from "@components/CustomizationOffer";
import OurStory from "@components/OurStory";
import Categories from "@components/Categories";

function AllCakes({ posts }) {
	console.log(posts);

	return (
		<Layout color={false}>
			<Head>
				<title>Birthday Cakes | Fancyflower</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

		
			<section class='text-gray-600 body-font'>
				<div class='container px-5 py-24 mx-auto'>
					<div class='flex flex-col text-center w-full mb-20'>

          <div className='flex justify-center'>
          <p className='p-2 mb-8 text-xl font-extrabold tracking-tight text-center text-black  leading-8 sm:text-4xl sm:leading-10'>
            All Cakes
            <div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-yellow-500 gradient  sm:w-72'></div>
          </p>
        </div>
  
	
			
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-cols-min '>
						{posts.map((item) => (
							<>
								<div className=''>
									<div class='   '>
										<Image
											class=' object-cover shadow-lg rounded-3xl '
											src={"https:" + item.fields.thumbnail.fields.file.url}
											width={
												item.fields.thumbnail.fields.file.details.image.width
											}
											height={
												item.fields.thumbnail.fields.file.details.image.height
											}
										/>
									</div>

									<h1 class='title-font text-sm lg:text-lg font-medium text-black bg-white pl-3  '>
										{item.fields.name} 1
									</h1>
								</div>
							</>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default AllCakes;

export async function getStaticProps() {
	const client = createClient({
		space: space,
		accessToken: accessToken,
	});

	const res = await client.getEntries({ content_type: "portfolio" });

	//const res = await fetchEntries()

	//console.log("RES ", res);
	// const posts = await res.map((p) => {
	//   return p.fields
	// })

	return {
		props: {
			posts: res.items,
		},
	};
}

