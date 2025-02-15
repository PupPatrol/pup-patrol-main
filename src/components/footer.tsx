import { useState } from 'react'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import facebookIcon from '../assets/facebook.svg'

function Footer() {
	return (
		<footer className='footer'>
			<div className='container section-padding flex flex-col'>
				<div className='flex justify-center items-center'>
					<a href='#'>
						<img src={instagramIcon} alt='Tu bedzie nasze logo' className='size-[50px]' />
					</a>
					<h3 className='text-3xl ml-5'>PupPatrol</h3>
				</div>
				<div className='flex justify-evenly size-full mt-5 max-w-1000px'>
					<a href='#'>
						<img src={instagramIcon} alt='istagram icon' className='size-[45px]' />
					</a>
					<a href='#'>
						<img src={twitterIcon} alt='twitter icon' className='size-[45px]' />
					</a>
					<a href='#'>
						<img src={facebookIcon} alt='facebook icon' className='size-[45px]' />
					</a>
				</div>
			</div>
			<hr />
			<div className='py-2.5 bg-bg-about text-center'>
				<p>
					{'\u00A9'}
					<span className='footer__year'></span> Copyright 2025 Oskar Kownacki / Franciszek Rubinowicz
				</p>
			</div>
		</footer>
	)
}

export default Footer
