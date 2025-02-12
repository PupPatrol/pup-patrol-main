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
			<header className='relative container'>
				<div className='mt-25 px-6 text-white '>
					<h1 className='text-[2.4rem] tracking-main-header w-[75%]'>Ever tought of tracking your pet’s fittness? </h1>
					<p className='text-base mt-1 mb-8 w-[80%]'>take care of your pet and satisfy your curiosity</p>
					<div className='flex flex-col items-start'>
						<button className='bg-main-color rounded-full px-[2em] py-[1em] w-[90%] mb-5 text-black cursor-pointer'>
							Get a smart collar!
						</button>
						<button className='rounded-full bg-transparent px-[2em] py-[1em] border border-main-color cursor-pointer'>
							Design your own!
						</button>
					</div>
				</div>
				<br />
				<br />
			</header>
			<main>
				<BenefitMobileSection />
				{/* {isMobile ? <BenefitMobileSection /> : ''} */}
				<div className='block-indentation'></div>
			</main>
		</div>
	)
}

export default App
