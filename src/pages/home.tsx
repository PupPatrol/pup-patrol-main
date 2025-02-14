import BenefitMobileSection from '../components/benefitMobileSection'
import dog from '../assets/great-dane-2973438_1280.jpg'
import politechnika from '../assets/politechnika-min.png'

function Home() {
	return (
		<div>
			<header className='relative container mb-40 lg:flex mt-25 px-6 md:px-12 xl:px-18'>
				<div className='lg:flex lg:flex-col lg:w-4/5 xl:w-1/2 text-white '>
					<h1 className='text-[2.4rem] tracking-main-header w-[75%] lg:text-[3rem] xl:text-[3.2rem]'>
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
				<div className='hidden ml-10 lg:block lg:w-1/2 2xl:flex'>
					<img src={dog} alt='dog' className='ml-5 h-[500px] w-full w-max-[400px]' />
					<img src={dog} alt='dog' className='hidden h-[400px] w-full w-max-[350px] 2xl:block 2xl:ml-5' />
				</div>
				<br />
				<br />
			</header>
			<main>
				<BenefitMobileSection />
				<section className='about bg-bg-about overflow-hidden mb-30'>
					<div className='block-indentation mb-20'></div>
					<div className='container section-padding mb-40 text-white'>
						<h2 className='sectionHeading text-center text-main-color mb-15'>About us</h2>
						<div className='lg:flex'>
							<div className=''>
								<img
									src={dog}
									alt='Nasze grupowe zdjecie'
									className='mb-[2em] w-full h-auto max-w-screen md:mb-[3em]'
								/>
							</div>
							<div className='max-w-prose lg:ml-5'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis aliquam inventore, eaque
									eveniet assumenda sunt asperiores a cupiditate beatae, tempore recusandae, molestias ex molestiae
									alias aspernatur officia ab libero?
								</p>
								<h3 className='mt-5 mb-2.5 font-bold'>Technologies:</h3>
								<div className='w-full h-[50px] bg-gray-500'></div>
							</div>
						</div>
						<div className='flex items-center justify-center flex-col'>
							<h3 className='sectionHeading text-main-color my-15'>Our sponsor:</h3>
							<a href='https://pm.szczecin.pl/pl/'></a>
							<img src={politechnika} alt='Politechnika Morska' className='bg-white p-5' />
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

export default Home
