import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import Layout from "../components/Layout";
import Offer from "../components/OfferSection";
import Image from "next/image";
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

import { createClient } from "contentful";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
	default: 3,
	1100: 2,
	700: 1,
	500: 1,
};

function Birthday({ posts }) {
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
								Birthday Cakes
								<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-yellow-500 gradient  sm:w-72'></div>
							</p>
						</div>
					</div>
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className='my-masonry-grid'
						columnClassName='my-masonry-grid_column'>
						{posts.map((item) => (
							<>
								<div className='relative'>
									<span class='px-4 py-2 my-4 mx-4  text-base rounded-full text-black  bg-yellow-300  absolute z-10 '>
										Birthday - {item.fields.name}
									</span>

									<Image
										class=' object-cover shadow-lg rounded-3xl absolute'
										src={"https:" + item.fields.thumbnail.fields.file.url}
										width={
											item.fields.thumbnail.fields.file.details.image.width
										}
										height={
											item.fields.thumbnail.fields.file.details.image.height
										}
									/>
								</div>
							</>
						))}
					</Masonry>
				</div>
			</section>
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
