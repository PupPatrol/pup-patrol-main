import React from 'react'
import useMedia from 'use-media'

function NavBarDesktop() {
	let docString
	if (useMedia({ minWidth: '768px' })) {
		docString = 'Documentation'
	} else {
		docString = 'Docs'
	}

	return (
		<nav>
			<div className='h-12 grid grid-cols-8 grid-rows-1 sm:h-14 md:h-18 items-center text-sm sm:text-base md:text-xl'>
            <button className=" bg-gray-400 col-start-1 w-14 h-7 ml-2 sm:h-9 sm:w-18 md:ml-0 md:justify-self-end md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-2 2xl:justify-self-center">
                <span>Logo</span>
            </button>
            <button className="w-14 h-7 col-start-3 sm:h-9 sm:w-18 md:h-11 md:w-22 lg:h-13 lg:w-26 lg:justify-self-end xl:justify-self-center">
                <span>Documentation</span>
            </button>
            <button className="w-14 h-7 col-start-5 text-nowrap sm:h-9 sm:w-18 md:col-start-5 md:h-11 md:w-22 lg:h-13 lg:w-26 xl:col-start-4">
                <span>About us</span>
            </button>
            <button className="rounded-full col-start-8 justify-self-end mr-2 bg-gray-200 w-14 h-7 sm:h-9 sm:w-18 md:mr-0 md:justify-self-start md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-7 2xl:justify-self-center">
                <span className="text-sm sm:text-base md:text-xl">Login</span>
            </button>
           
        </div>
		</nav>
	)
}

export default NavBarDesktop
