import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/navbar'
import useMedia from 'use-media'
import NavBarDesktop from './components/navBarDesktop'

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
				<div className='mt-25 px-6 text-white'>
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
				{/* <div className='block-indentation'></div> */}
			</header>
			<main>
				<section className='benefits section-padding'>
					<div className='container mx-auto'>
						<div className='offer__box'>
							<p className='subHeading'>Benefits</p>
							<h3>Accurate tracking of your pet within a radius of 4 kilometers!</h3>
							<p>It will work even in a forest full of obstacles</p>
							<button className=''>View our pricing!</button>
						</div>
						<div className='offer__box'>
							<p className='subHeading text-[1.25rem]'>Benefits</p>
							<h3>A large and durable battery resistant to external factors</h3>
							<p>Fast charging time</p>
							<button>View our pricing!</button>
						</div>
						<div>
							<p>learn more</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default App
