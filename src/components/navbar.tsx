import React, { useState } from 'react'
import useMedia from 'use-media'

function Navbar() {
	let docString
	if (useMedia({ minWidth: '768px' })) {
		docString = 'Documentation'
	} else {
		docString = 'Docs'
	}

	const [menuOpen, setMenuOpen] = useState(false)

	const handleBurgerClick = () => {
		setMenuOpen(prevState => !prevState)
	}

	return (
		<nav className='h-[50px] fixed top-0 bottom-0 flex items-center justify-end py-[2em] w-full z-1000 text-[2.2rem]'>
			<a href='#' className='mr-auto px-[0.5em] py-[1em] cursor-pointer'>
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
						Log in
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
