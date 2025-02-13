import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/navbar'
import useMedia from 'use-media'
import NavBarDesktop from './components/navBarDesktop'
import BenefitMobileSection from './components/BenefitMobileSection'

function App() {
	let isMobile: Boolean = false

	if (useMedia({ minWidth: '768px' })) {
		isMobile = false
	} else {
		isMobile = true
	}

	return (
		<div>
			{isMobile ? <Navbar /> : <NavBarDesktop />}
			<header className='relative container mb-40 lg:flex mt-25 px-6 md:px-12 xl:px-24'>
				<div className='lg:flex lg:flex-col lg:w-3/5 xl:w-1/2 text-white '>
					<h1 className='text-[2.4rem] tracking-main-header w-[75%] lg:text-[3rem]'>
						Ever tought of tracking your pet’s fittness?{' '}
					</h1>
					<p className='text-base mt-1 mb-8 w-[80%] lg:text-[1.25rem]'>
						take care of your pet and satisfy your curiosity
					</p>
					<div className='flex flex-col items-start lg:flex-row xl:mt-5 lg:text-[1.25rem]'>
						<button className='bg-main-color rounded-full px-[2em] py-[1em] w-[90%] mb-5 text-black cursor-pointer lg:w-full lg:mr-5'>
							Get a smart collar!
						</button>
						<button className='rounded-full bg-transparent px-[2em] py-[1em] border border-main-color cursor-pointer lg:w-full'>
							Design your own!
						</button>
					</div>
				</div>
				<div className='hidden lg:block'>
					<img src='./assets/great-dane-2973438_1280.jpg' alt='dog' />
					<img src='./assets/great-dane-2973438_1280.jpg' alt='dog' />
				</div>
				<br />
				<br />
			</header>
			<main>
				<BenefitMobileSection />
				<section className='about bg-bg-about overflow-hidden mb-30'>
					<div className='block-indentation mb-40'></div>
					<div className='container section-padding mb-40'>
						<h3>About us</h3>
						<div>
							<div>
								<img src='' alt='' />
							</div>
							<div>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis aliquam inventore, eaque
									eveniet assumenda sunt asperiores a cupiditate beatae, tempore recusandae, molestias ex molestiae
									alias aspernatur officia ab libero?
								</p>
								<h4>Technologies:</h4>
								<div className='w-full h-[50px] bg-gray-500'></div>
							</div>
						</div>
						<div>
							<h3>Our sponsor:</h3>
							<img src='' alt='Politechnika Morska' />
						</div>
					</div>
					<div className='block-indentation--green bg-bg-color'></div>
				</section>

				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</main>
		</div>
	)
}

export default App
