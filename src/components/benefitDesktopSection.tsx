import React, { useState } from 'react'
import useMedia from 'use-media'

function BenefitMobileSection() {
	return (
		<section className='benefits section-padding'>
			<div className='container mx-auto flex flex-col items-center'>
				<div className='offer__box text-white'>
					<p className='subHeading'>Benefits</p>
					<h3 className='text-[1.8rem] mt-10'>Accurate tracking of your pet within a radius of 4 kilometers!</h3>
					<p>It will work even in a forest full of obstacles</p>
					<button className='bg-main-color rounded-full px-[2em] py-[1em] w-full mb-5 mt-15 text-black cursor-pointer'>
						View our pricing!
					</button>
				</div>
				<div className='offer__box text-white'>
					<p className='subHeading'>Benefits</p>
					<h3 className='text-[1.8rem] mt-10'>A large and durable battery resistant to external factors</h3>
					<p>Fast charging time</p>
					<button className='bg-main-color rounded-full px-[2em] py-[1em] w-full mb-5 mt-15 text-black cursor-pointer'>
						View our pricing!
					</button>
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
