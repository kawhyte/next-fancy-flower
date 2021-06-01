import React from "react";
import Image from "next/image";

const section = [

	{
		name: "Custom Cakes",
		description:"Send us a photo and we will create what you need.",
		icon: "/icons/cake.svg",
		text: "Cake icon",
	},
	{
		name: "Cupcakes",
		description:"With buttercream frosting with or without custom cake toppers",
		icon: "/icons/cupcake.svg",
		text: "Muffin icon",
	},
	{
		name: "Special occasion cakes",
		description:"Covered with buttercream, ganache or fondant.",
		icon: "/icons/cakewithcherry.svg",
		text: "Cake icon",
	},

];

function OfferSection() {
	return (
		<div className='m-4 mt-10 mb-10  sm:p-10 flex flex-col'>
			<div className='flex justify-center'>
				<p className='p-2 mb-8 text-xl font-extrabold tracking-tight text-center text-black  leading-8 sm:text-4xl sm:leading-10'>
					What We Offer
					<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-yellow-500 gradient  sm:w-72'></div>
				</p>
			</div>

			
				<dl class='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 mx-auto'>
					{section.map((item) => (
						<>
							<div class='flex flex-col items-center'>
								<div class='flex-shrink-0'>
									<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
										<Image
											className=''
											src={item.icon}
											alt={item.text}
											width={65}
											height={65}
										/>
									</div>
								</div>
								<div class=''>
									<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
										{item.name}
									</dt>
									<dd class='mt-2 text-base text-center text-gray-600'>
										{item.description}
									</dd>
								</div>
							</div>
						</>
					))}

					{/*<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='cake'
									className='container left-0 right-0 z-10 object-cover w-full h-full mb-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
								Delivery options
							</dt>
							<dd class='mt-2 text-base text-center text-gray-500'>
								Made locally in Toronto. Only available for pick-up.
							</dd>
						</div>
	</div>*/}
				</dl>
		
		</div>
	);
}

export default OfferSection;
