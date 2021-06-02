import React from "react";

function OurStory() {
	return (
		<div className='text-gray-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='https://images.pexels.com/photos/6578868/pexels-photo-6578868.jpeg?cs=srgb&dl=pexels-andres-ayrton-6578868.jpg&fm=jpg'
					/>
				</div>
				<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Our Story
					</h1>
					<p className='mb-8 leading-loose'>
						For as long as I remember, I always enjoyed cooking and baking but
						decorating cakes was something else. I remember the first time I
						observed my cousin’s wife making a wedding cake. I was fascinated
						and said to myself “I would love to do this one day.” I was just a
						teenager. She taught me to make basic roses for a cake she was doing
						and I was hooked. I continued baking basic recipes over the years
						just for family and friends who encouraged me to take this further.
						I decided to take their advice and completed cake decorating courses
						and before you know it, ‘fancyflowercakes’ was born.
						<br />
					</p>{" "}
					<span className='mb-8'> We are happy to hear from you:</span>
					<div className='flex justify-center'>
						<a href='mailto:fancyflowerrprs@gmail.com'>
							<button className='inline-flex text-black bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg'>
								Send us an email
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurStory;
