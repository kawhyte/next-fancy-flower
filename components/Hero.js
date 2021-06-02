import React from "react";

function Hero() {
	return (
		<div>
			<div className='bg-white relative overflow-hidden h-5/6 lg:flex justify-center items-center'>
				<img
					src='https://res.cloudinary.com/babyhulk/image/upload/v1622337990/fancy-flower/pexels-daria-shevtsova-1070850.webp'
					className=' block absolute lg:hidden h-full w-full object-cover'
					aria-label='Justify'
				/>

				<video
					autoPlay
					loop
					muted
					className='hidden lg:block w-full h-full absolute object-cover '>
					<source
						src='https://res.cloudinary.com/babyhulk/video/upload/v1622337926/Video/video.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
					<source
						src='https://petermedina.com/video/beach.webm'
						type='video/webm'
					/>
					Your browser does not support the video tag.
				</video>

				<div className='inset-0 bg-black opacity-40  absolute '></div>
				<header className='absolute top-0 left-0 right-0 z-20'></header>
				<div className='flex relative z-20 items-center'>
					<div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
						<div className='flex flex-col my-20'>
							<h2 className='max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-white text-center py-2'>
								Cakes for all your special occasions.
							</h2>
							<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-yellow-300  mb-6 gradient sm:w-96 '></div>

							<p className='text-lg text-center text-white'>
								Available for pick-up. Contact us to discuss.
							</p>

							<div className='flex items-center justify-center mx-auto my-12'>
							<a href='https://forms.gle/pRAKJqZhX6RQNZUKA' target="_blank" rel="noopener noreferrer" >
								<button
									type='button'
									className='py-2 px-4 uppercase flex justify-center items-center  bg-yellow-300 hover:bg-yellow-400 focus:ring-yellow-400 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 mr-2'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
											d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
										/>
									</svg>
									Fill out Order Form
								</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
