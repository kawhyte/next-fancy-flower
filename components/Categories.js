import React from "react";
import Link from "next/link";

const category = [
	{
		name: "Birthday",
		href: "/hotel",
		icon: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2447&q=80",
		text: "Hotel icon",
		current: false,
	},
	{
		name: "Anniversary/Wedding",
		href: "/food",
		icon: "https://images.unsplash.com/photo-1564986021890-6f721f19c210?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
		text: "Plane icon",
		current: false,
	},
	{
		name: "Graduation",
		href: "/day-trip",
		icon: "https://images.unsplash.com/photo-1567517757338-47d461bb1dd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
		text: "Walking icon",
		current: false,
	},
	{
		name: "Baby Shower",
		href: "/day-trip",
		icon: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
		text: "Walking icon",
		current: false,
	},
];

function Categories() {
	return (
		<section class='container p-6 mx-auto   md:my-24  dark:bg-gray-800'>
			<h2 class='text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl mb-3'>
				Browse Cakes by Category
			</h2>

			<div class='flex items-center justify-center'>
				<div class='grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{category.map((item) => (
                        <Link href={item.href} > 
						<div class='w-full max-w-xs text-center cursor-pointer'>
							<img
								class='object-cover object-center w-full h-48 mx-auto rounded-lg'
								src={item.icon}
								alt={item.text}
							/>

							<div class='mt-2'>
								<h3 class='text-lg font-medium text-gray-700 dark:text-gray-200'>
									{item.name}
								</h3>
							</div>
						</div>
                        </Link>
					))}
				</div>
			</div>
		</section>
	);
}

export default Categories;