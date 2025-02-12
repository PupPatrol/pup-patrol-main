import React, { useState } from 'react'
import useMedia from 'use-media'
import dogImage from '../assets/great-dane-2973438_1280.jpg'

function BenefitMobileSection() {
	return (
		<section className='benefits section-padding '>
			<div className='flex flex-col items-center justify-center  lg:mx-5 w-full'>
				<div className='offer__box text-white lg:h-full lg:flex'>
					{/* <img src='../assets/great-dane-2973438_1280.jpg' alt='dog in the forest' className='offer__img' /> */}
					<div className='offer__img lg:max-w-[400px]'>
						<div className='offer__img-shadow'></div>
					</div>
					<div className='lg:px-10 lg:flex lg:flex-col lg:flex-1'>
						<p className='subHeading top-[455px] lg:top-[40px]'>Benefits</p>
						<h3 className='text-[1.8rem] mt-10'>Accurate tracking of your pet within a radius of 4 kilometers!</h3>
						<p>It will work even in a forest full of obstacles</p>
						<button className='bg-main-color rounded-full px-[2em] py-[1em] w-full mt-15 lg:mt-auto mb-5 text-black cursor-pointer'>
							View our pricing!
						</button>
					</div>
				</div>

				<div className='offer__box text-white lg:h-full lg:flex'>
					{/* <img src='../assets/great-dane-2973438_1280.jpg' alt='dog in the forest' className='offer__img' /> */}
					<div className='offer__img lg:max-w-[400px] lg:order-1'>
						<div className='offer__img-shadow'></div>
					</div>
					<div className='lg:px-10 lg:flex lg:flex-col lg:flex-1'>
						<p className='subHeading top-[455px] lg:top-[40px]'>Benefits</p>
						<h3 className='text-[1.8rem] mt-10'>A large and durable battery resistant to external factors</h3>
						<p>Fast charging time</p>
						<button className='bg-main-color rounded-full px-[2em] py-[1em] w-full mt-15 lg:mt-auto mb-5 text-black cursor-pointer'>
							View our pricing!
						</button>
					</div>
				</div>

				<div className='flex mt-10'>
					<a href='#' className='mr-1 text-[1.25rem]'>
						Learn more
					</a>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3' />
					</svg>
				</div>
			</div>
		</section>
	)
}

export default BenefitMobileSection
