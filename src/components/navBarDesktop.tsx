import instagramIcon from '../assets/svg/instagram.svg'
import twitterIcon from '../assets/svg/twitter.svg'
import facebookIcon from '../assets/svg/facebook.svg'
import mailIcon from '../assets/svg/mail.svg'
import { useState, useEffect } from 'react'

function NavBarDesktop() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-[height] duration-300 ${
				isScrolled ? 'h-[60px]' : 'h-[100px]'
			}`}>
			<div
				className={`nav__desktop-bg transition-[height, opacity] duration-300 ${
					isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
				}`}>
				<div className='container'>
					<div className='flex items-center justify-center text-base h-[40px]'>
						<a href='mailto:kontakt@PupPatrol.com' className='mr-auto leading-[40px]'>
							<img src={mailIcon} className='inline mr-2' alt='mail' />
							kontakt@PupPatrol.com
						</a>
						<a href='#'>
							<img src={instagramIcon} alt='instagram icon' />
						</a>
						<a href='#'>
							<img src={twitterIcon} alt='twitter icon' className='mx-5' />
						</a>
						<a href='#'>
							<img src={facebookIcon} alt='facebook icon' />
						</a>
					</div>
				</div>
			</div>
			<div className={`transition-colors duration-300 ${isScrolled ? 'translate-y-[-40px] bg-[#567a51]' : ''}`}>
				<div className='container'>
					<div className='w-full flex items-center justify-between text-lg text-secondary-color py-2'>
						<a href='#' className='nav__desktop-item'>
							Logo
						</a>
						<a href='#' className='nav__desktop-item'>
							About the collar
						</a>
						<a href='#' className='nav__desktop-item'>
							About us
						</a>
						<a href='#' className='nav__desktop-item'>
							Specification
						</a>
						<a href='#' className='nav__desktop-item'>
							Doc
						</a>
						<div className='relative flex w-1/5 items-center justify-end'>
							<button className='absolute left-[18px] px-[0.25em] py-[0.5em] w-[50%] xl:w-[40%] h-[99%] rounded-l-full border border-main-color cursor-pointer text-white'>
								Sign in
							</button>
							<button className='px-[0.25em] py-[0.5em] w-[50%] xl:w-[60%] h-full rounded-full bg-main-color text-black cursor-pointer'>
								Log in
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBarDesktop
