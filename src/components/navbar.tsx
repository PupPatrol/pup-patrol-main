<<<<<<< HEAD
import React from 'react';
import useMedia from 'use-media';


function Navbar() {


    let docString;
    if(useMedia({minWidth: '768px'})){
        docString = "Documentation"
    }
    else{
        docString = "Docs"
    }

    return(
        <div className='h-12 grid grid-cols-8 grid-rows-1 sm:h-14 md:h-18 items-center text-sm sm:text-base md:text-xl'>
            <button className=" bg-gray-400 col-start-1 w-14 h-7 ml-2 sm:h-9 sm:w-18 md:ml-0 md:justify-self-end md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-2 2xl:justify-self-center">
                <span>Logo</span>
            </button>
            <button className="w-14 h-7 col-start-3 sm:h-9 sm:w-18 md:h-11 md:w-22 lg:h-13 lg:w-26 lg:justify-self-end xl:justify-self-center">
                <span>{docString}</span>
            </button>
            <button className="w-14 h-7 col-start-5 text-nowrap sm:h-9 sm:w-18 md:col-start-5 md:h-11 md:w-22 lg:h-13 lg:w-26 xl:col-start-4">
                <span>About us</span>
            </button>
            <button className="rounded-full col-start-8 justify-self-end mr-2 bg-gray-200 w-14 h-7 sm:h-9 sm:w-18 md:mr-0 md:justify-self-start md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-7 2xl:justify-self-center">
                <span className="text-sm sm:text-base md:text-xl">Login</span>
            </button>
           
        </div>
    )
}


export default Navbar;
=======
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
>>>>>>> 503b20e (finished nav mobile)
