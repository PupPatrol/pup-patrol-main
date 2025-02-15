import { useState } from 'react'

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleBurgerClick = () => {
		setMenuOpen(prevState => !prevState)
	}

	return (
		<nav className='fixed top-0 bottom-0 text-[1.8rem] h-[60px] w-full z-1000 bg-bg-about text-[#212121]'>
			<div className='container'>
				<div className='flex items-center h-[60px]'>
					<a href='#' className='mr-auto cursor-pointer'>
						PupPatrol
					</a>
					<button className={`burgerBtn ${menuOpen ? 'burgerBtn--active' : ''}`} onClick={handleBurgerClick}>
						<div
							style={{
								transform: menuOpen ? 'scale(0)' : 'scale(1)',
								transition: 'transform 0.3s ease',
							}}></div>
					</button>

					<div
						className={`${
							menuOpen ? '' : 'hidden'
						} fixed top-0 left-0 h-screen w-full transition-transform z-1000 bg-white`}>
						<div className='flex justify-center items-center h-screen flex-col'>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								About us
							</a>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								About the collar
							</a>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								Opinions
							</a>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								Specification
							</a>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								Doc
							</a>
							<a href='#' className={`nav__item ${menuOpen ? 'nav__item--active' : ''}`}>
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
