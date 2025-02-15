import BenefitMobileSection from '../components/benefitMobileSection'
import dog from '../assets/great-dane-2973438_1280.jpg'
import politechnika from '../assets/politechnika-min.png'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwindcss-mark.d52e9897.svg'

function Home() {
	return (
		<div>
			<header className='relative container mb-40 lg:flex mt-25 px-6 md:px-12 xl:px-18'>
				<div className='lg:flex lg:flex-col lg:w-4/5 xl:w-1/2'>
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
					<div className='container section-padding mb-40'>
						<h2 className='sectionHeading text-center text-main-color mb-15'>About us</h2>
						<div className='lg:flex'>
							<div className=''>
								<img src={dog} alt='Nasze grupowe zdjecie' className='mb-[2em] w-full max-w-screen md:mb-[3em]' />
							</div>
							<div className='max-w-prose w-4/5 lg:ml-5 lg:text-lg'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis aliquam inventore, eaque
									eveniet assumenda sunt asperiores a cupiditate beatae, tempore recusandae, molestias ex molestiae
									alias aspernatur officia ab libero?
								</p>
								<h3 className='mt-5 mb-2.5 font-bold'>Technologies:</h3>
								<div className='flex items-center justify-evenly w-full h-[50px]'>
									<img src={reactIcon} alt='react icon' className='w-full h-[40px]' />
									<img src={tailwindIcon} alt='tailwindcss icon' className='w-full h-[40px]' />
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center flex-col'>
							<h3 className='sectionHeading text-main-color my-15'>Our sponsor:</h3>
							<a href='https://pm.szczecin.pl/pl/' className='cursor-pointer'>
								<img src={politechnika} alt='Politechnika Morska' className='bg-white p-5' />
							</a>
						</div>
					</div>
					<div className='block-indentation--green bg-bg-color'></div>
				</section>

				<section className='collar section-padding relative'>
					<div className='container flex flex-col items-center lg:text-lg'>
						<div className='flex flex-col items-center mb-10'>
							<p className='subHeading top-[35px]'>project</p>
							<h2 className='sectionHeading'>About the collar</h2>
						</div>
						<div className='max-w-prose'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores nobis quos dolorum? Tempora
								accusamus quos autem cum ipsum porro illum nisi eum perferendis asperiores dolores numquam tenetur,
								quaerat eius animi at tempore totam. Minima omnis dolor quaerat amet perspiciatis, odit repellendus nemo
								sunt animi quidem repellat, delectus hic laboriosam labore fugit quam quisquam asperiores nobis ea ullam
								facilis ipsa accusamus! Fugit quisquam expedita laudantium perferendis odio, aut suscipit aliquam a fuga
								numquam, dolor explicabo tenetur vitae voluptas ex modi autem voluptatibus magnam eum delectus minus.
								Impedit, in veritatis harum, neque quo quis optio id nisi dolore laborum, corrupti possimus.
							</p>

							<p className='font-bold mt-8 lg:mt-16'>Benefits:</p>
							<ul className='list-disc pl-4 mb-5 marker:text-black lg:mb-10'>
								<li>lorem 1</li>
								<li>lorem 2</li>
								<li>lorem 3</li>
								<li>lorem 4</li>
								<li>lorem 5</li>
							</ul>
							<div className='space-y-5 lg:space-y-8'>
								<div>
									<p className='font-bold'>Benefit 1</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea vero ex voluptatibus obcaecati,
										modi vel facilis. Quidem perspiciatis cupiditate natus sed assumenda corrupti sint! Ut
										exercitationem at rerum amet.
									</p>
								</div>
								<div>
									<p className='font-bold'>Benefit 1</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea vero ex voluptatibus obcaecati,
										modi vel facilis. Quidem perspiciatis cupiditate natus sed assumenda corrupti sint! Ut
										exercitationem at rerum amet.
									</p>
								</div>
								<div>
									<p className='font-bold'>Benefit 1</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea vero ex voluptatibus obcaecati,
										modi vel facilis. Quidem perspiciatis cupiditate natus sed assumenda corrupti sint! Ut
										exercitationem at rerum amet.
									</p>
								</div>
								<div>
									<p className='font-bold'>Benefit 1</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea vero ex voluptatibus obcaecati,
										modi vel facilis. Quidem perspiciatis cupiditate natus sed assumenda corrupti sint! Ut
										exercitationem at rerum amet.
									</p>
								</div>
								<div>
									<p className='font-bold'>Benefit 1</p>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea vero ex voluptatibus obcaecati,
										modi vel facilis. Quidem perspiciatis cupiditate natus sed assumenda corrupti sint! Ut
										exercitationem at rerum amet.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='testimonials section-padding relative'>
					<div className='container'>
						<div className='flex flex-col items-center mb-10'>
							<p className='subHeading top-[32.5px]'>testimonials</p>
							<h2 className='sectionHeading text-center'>Read what other have to say</h2>
							<div className='mt-25 lg:flex justify-evenly space-x-8'>
								<div className='relative flex flex-col items-center p-10 bg-gray-400 w-full max-w-[400px] rounded-lg'>
									<img
										src={dog}
										alt='pies'
										className='absolute top-[-45px] rounded-full size-[150px] bg-cover bg-center'
									/>
									<h3 className='mt-22.5 mb-2.5 text-[1.5rem] uppercase tracking-testimonials-names'>John Doe</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quia eum sit accusantium! Odio
										cupiditate laboriosam inventore eveniet dicta. Natus sapiente, accusamus ipsa illo accusantium porro
										quisquam tempore ad debitis!
									</p>
								</div>
								<div className='hidden relative  flex-col items-center p-10 bg-gray-400 w-full max-w-[400px] rounded-lg lg:flex'>
									<img
										src={dog}
										alt='pies'
										className='absolute top-[-45px] rounded-full size-[150px] bg-cover bg-center'
									/>
									<h3 className='mt-22.5 mb-2.5 text-[1.5rem] uppercase tracking-testimonials-names'>John Doe</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quia eum sit accusantium! Odio
										cupiditate laboriosam inventore eveniet dicta. Natus sapiente, accusamus ipsa illo accusantium porro
										quisquam tempore ad debitis!
									</p>
								</div>
								<div className='hidden relative flex-col items-center p-10 bg-gray-400 w-full max-w-[400px] rounded-lg lg:flex'>
									<img
										src={dog}
										alt='pies'
										className='absolute top-[-45px] rounded-full size-[150px] bg-cover bg-center'
									/>
									<h3 className='mt-22.5 mb-2.5 text-[1.5rem] uppercase tracking-testimonials-names'>John Doe</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quia eum sit accusantium! Odio
										cupiditate laboriosam inventore eveniet dicta. Natus sapiente, accusamus ipsa illo accusantium porro
										quisquam tempore ad debitis!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='specification section-padding'>
					<div className='container xl:text-[1.25rem]'>
						<h2 className='mb-5 text-[1.25rem] text-main-color uppercase tracking-five-proc lg:text-[2.2rem] text-center '>
							testimonials
						</h2>
						<div className='lg:flex'>
							<div className='lg:size-1/2'>
								<img src={dog} alt='collar' className='size-full' />
							</div>
							<div className='p-5 text-black lg:size-1/2 lg:pt-0 lg:ml-10'>
								<h4 className='text-[1.25rem] text-main-color uppercase tracking-five-proc lg:text-[1.6rem]'>
									Smart Collar
								</h4>
								<p>$$$ PLN</p>
								<p>
									kolor: <span className='text-white'>beżowy</span>
								</p>
								<div className='flex flex-col items-start'>
									<button className='bg-main-color rounded-full px-[2em] py-[1em] mt-15 mb-1 w-1/2 text-black cursor-pointer xl:text-[1.25rem]'>
										Buy now
									</button>
									<p className='text-sm text-center w-1/2'>free return within 14 days</p>
								</div>
							</div>
						</div>
						<div>
							<ul className='list-disc pl-10 mt-15 marker:text-black text-white'>
								<li>lorem 1</li>
								<li>lorem 2</li>
								<li>lorem 3</li>
								<li>lorem 4</li>
								<li>lorem 5</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='contact section-padding'>
					{/* <div className='block-indentation'></div> */}
					<div className='container'></div>
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
				</section>
			</main>
		</div>
	)
}

export default Home
