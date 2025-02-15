import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'
import facebookIcon from '../assets/facebook.svg'
import mailIcon from '../assets/mail.svg'

function NavBarDesktop() {
	return (
		<nav className='fixed test top-0 left-0 h-[60px] w-full z-1001'>
			<div className='bg-amber-500'>
				<div className='container'>
					<div className='flex items-center justify-center text-base h-[40px]'>
						<a href='mailto:kontakt@PupPatrol.com' className='mr-auto leading-[40px]'>
							<img src={mailIcon} className='inline mr-2' />
							kontakt@PupPatrol.com
						</a>
						<a href='#'>
							<img src={instagramIcon} alt='instagram icon' />
						</a>
						<a href='#'>
							<img src={twitterIcon} alt='instagram icon' className='mx-5' />
						</a>
						<a href='#'>
							<img src={facebookIcon} alt='instagram icon' />
						</a>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='w-full flex items-center justify-between text-lg text-[#212121]'>
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
						<button className='absolute left-[18px] px-[0.25em] py-[0.5em] w-[50%] xl:w-[40%] h-[99%] rounded-l-full border border-main-color cursor-pointer'>
							Sign in
						</button>
						<button className='px-[0.25em] py-[0.5em] w-[50%] xl:w-[60%] h-full rounded-full bg-main-color cursor-pointer'>
							Log in
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBarDesktop
