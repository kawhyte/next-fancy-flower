/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
	{
		name: "Birthday",
		href: "/hotel",
		icon: "/icons/nav-birthday.svg",
		text: "Hotel icon",
		current: false,
	},
	{
		name: "Anniversary/Wedding",
		href: "/food",
		icon: "/icons/nav-cake.svg",
		text: "Plane icon",
		current: false,
	},
	{
		name: "Graduation",
		href: "/day-trip",
		icon: "/icons/nav-graduation.svg",
		text: "Walking icon",
		current: false,
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Nav({ color }) {
	let col = color ? " text-white" : " text-white";
	return (
		<Disclosure
			as='nav'
			className='sticky top-0 z-30 mx-auto h-[72px] bg-white backdrop-filter backdrop-blur max-w-8xl xl:px-8 firefox:bg-opacity-90   '>
			{({ open }) => (
				<>
					<div className='max-w-8xl  container mx-auto cursor-pointer'>
						<div className='relative flex items-center justify-between h-16'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<Link href='/' className='cursor-pointer'>
									<div className='flex-shrink-0 flex items-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-11 w-11 md:h-8 md:w-8 md:mr-2 fill-current text-yellow-500'
											fill='none'
											height='512pt'
											viewBox='0 -21 512 512'
											width='512pt'>
											<path d='M0 455c0 8.281 6.715 15 15 15h482c8.281 0 15-6.719 15-15v-35H0zm0 0M0 340h512v50H0zm0 0M0 260h512v50H0zm0 0M15 230h482c6.695 0 12.582-4.441 14.422-10.879s-.813-13.316-6.496-16.855l-73.496-45.743C415.992 188.156 383.5 210 346 210c-52.383 0-95-42.617-95-95 0-21.957 7.492-42.195 20.047-58.3l-7.121-4.434c-4.852-3.02-11-3.02-15.852 0l-241 150c-5.683 3.539-8.336 10.418-6.496 16.855S8.305 230 15 230zm0 0' />
											<path d='M346 180c35.84 0 65-29.16 65-65 0-29.828-20.203-55.008-47.633-62.625C368.441 39.301 381.152 30 396 30c8.281 0 15-6.715 15-15s-6.719-15-15-15c-31.191 0-57.309 22.086-63.566 51.434C303.086 57.69 281 83.813 281 115c0 35.84 29.16 65 65 65zm0 0' />
										</svg>

										<p
											className={
												"hidden text-gray-900 font-righteous text-lg  leading-relaxed md:inline-block mr-4 py-2 whitespace-nowrap   " +
												col
											}>
											Fancyflower Cakes
										</p>
									</div>
								</Link>
								<div className='hidden sm:block sm:ml-6'>
									<div className='flex flex-row align-middle justify-center items-center  space-x-4'>
										{navigation.map((item) => (
											<Link href={item.href} key={item.name}>
												<div className='flex flex-row justify-center align-bottom items-center'>
													<button
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? "bg-gray-900 text-white"
																: "text-gray-500  hover:text-white",
															"px-2 py-2 rounded-md text-base font-medium flex flex-row justify-center align-middle items-center hover:bg-yellow-500 "
														)}>
														<Image
															className='hidden '
															src={item.icon}
															alt={item.text}
															width={25}
															height={25}
														/>
														<span className='mx-2  '>{item.name}</span>
													</button>
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>

							<div className='absolute hidden inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<button className='bg-gray-500 p-2 rounded-full text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
							
									<span className='mx-2  '>Our Story</span>
								</button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}>
									{item.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
