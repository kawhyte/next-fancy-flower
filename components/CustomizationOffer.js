import React from "react";

const caketype = [
    "Carrot Cake",
    "Coconut Cake",
    "Chocolate Cake",
    "Jamaican Black (Rum) Cake",
    "Pound Cake",
    "Red Velvet Cake",
    "Triple Lemon Cake",
    "Vanilla Cake",
];
const frostingtype = [
	"Italian Buttercream",
	"American Buttercream",
	"Chocolate ganache frosting",
	"Coconut Buttercream/Coconut Custard",
	"Cream Cheese Frosting",
	"Ermine frosting",
	"Lemon custard/Lemon Buttercream",
	"White chocolate whipped cream",
	"Whipped Topping",
];

function CustomizationOffer() {
	return (
		<section class='text-gray-600 body-font'>
			<div class='container px-5 py-24 mx-auto'>
				<div class='flex flex-col'>
					<div class='h-1 bg-gray-200 rounded overflow-hidden'>
						<div class='w-24 h-full bg-yellow-500'></div>
					</div>
					<div class='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
						<h1 class='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
							Cake Custimization Options
						</h1>
					</div>
				</div>
				<div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
					<div class='p-4 md:w-1/2 sm:mb-0 mb-6'>
						<div class='rounded-lg h-64 overflow-hidden'>
							<img
								alt='content'
								class='object-cover object-center h-full w-full'
								src='https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
							/>
						</div>
						<h2 class='text-xl font-medium title-font text-gray-900 my-5'>
							Cake Type
						</h2>

						{caketype.map((item) => (
							<p class='flex items-center text-gray-600 mb-4'>
								<span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-400 text-white rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2.5'
										class='w-3 h-3 '
										viewBox='0 0 24 24'>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
								{item}
							</p>
						))}
					</div>
					<div class='p-4 md:w-1/2 sm:mb-0 mb-6'>
						<div class='rounded-lg h-64 overflow-hidden'>
							<img
								alt='content'
								class='object-cover object-center h-full w-full'
								src='https://images.unsplash.com/photo-1551404973-761c83cd8339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80'
							/>
						</div>
						<h2 class='text-xl font-medium title-font text-gray-900 my-5'>
							Frosting Type
						</h2>
						{frostingtype.map((item) => (
							<p class='flex items-center text-gray-600 mb-4'>
								<span class='w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2.5'
										class='w-3 h-3'
										viewBox='0 0 24 24'>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
								{item}
							</p>
						))}
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default CustomizationOffer;
