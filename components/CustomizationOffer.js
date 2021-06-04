import React from "react";

const caketype = [
	{ id: 1, name: "Carrot Cake" },
	{ id: 2, name: "Coconut Cake" },
	{ id: 3, name: "Chocolate Cake" },
	{ id: 4, name: "Jamaican Black (Rum) Cake" },
	{ id: 5, name: "Pound Cake" },
	{ id: 6, name: "Red Velvet Cake" },
	{ id: 7, name: "Triple Lemon Cake" },
	{ id: 8, name: "Vanilla Cake" },
];
const frostingtype = [
	{ id: 9, name: "Italian Buttercream" },
	{ id: 10, name: "American Buttercream" },
	{ id: 11, name: "Chocolate ganache frosting" },
	{ id: 12, name: "Coconut Buttercream/Coconut Custard" },
	{ id: 13, name: "Cream Cheese Frosting" },
	{ id: 14, name: "Ermine frosting" },
	{ id: 15, name: "Lemon custard/Lemon Buttercream" },
	{ id: 16, name: "White chocolate whipped cream" },
	{ id: 17, name: "Whipped Topping" },
];

function CustomizationOffer() {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col'>
					<div className='h-1 bg-gray-200 rounded overflow-hidden'>
						<div className='w-24 h-full bg-yellow-200'></div>
					</div>
					<div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
						<h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
							Cake Customization Options
						</h1>
					</div>
				</div>
				<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
					<div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
						<div className='rounded-lg h-64 overflow-hidden'>
							<img
								alt='content'
								className='object-cover object-center h-full w-full'
								src='https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
							/>
						</div>
						<h2 className='text-xl font-medium title-font text-gray-900 my-5'>
							Cake Type
						</h2>

						{caketype.map((item) => (
							<p key={item.id} className='flex items-center text-gray-600 mb-4'>
								<span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-200 text-yellow-900 rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2.5'
										className='w-3 h-3 '
										viewBox='0 0 24 24'>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
								{item.name}
							</p>
						))}
					</div>
					<div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
						<div className='rounded-lg h-64 overflow-hidden'>
							<img
								alt='content'
								className='object-cover object-center h-full w-full'
								src='https://images.unsplash.com/photo-1551404973-761c83cd8339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80'
							/>
						</div>
						<h2 className='text-xl font-medium title-font text-gray-900 my-5'>
							Frosting Type
						</h2>
						{frostingtype.map((item) => (
							<p key={item.id} className='flex items-center text-gray-600 mb-4'>
								<span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-black text-white rounded-full flex-shrink-0'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2.5'
										className='w-3 h-3'
										viewBox='0 0 24 24'>
										<path d='M20 6L9 17l-5-5'></path>
									</svg>
								</span>
								{item.name}
							</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CustomizationOffer;
