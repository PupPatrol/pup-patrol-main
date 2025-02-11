import React from 'react'

function NavBarDesktop() {

	return (
		<nav>
			<div className='h-12 grid grid-cols-8 grid-rows-1 md:h-18 items-center text-sm sm:text-base md:text-xl text-center align-middle'>
            <a className=" bg-gray-400 col-start-1 md:ml-0 md:justify-self-end md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-2 2xl:justify-self-center flex items-center justify-center">
                <span>Logo</span>
            </a>
            <a className="md:col-start-3 md:h-11 md:w-22 lg:h-13 lg:w-26 xl:justify-self-center flex-col flex items-center justify-center">
                Documentation
            </a>
            <a className="md:col-start-4 md:h-11 md:w-22 lg:h-13 lg:w-26 xl:justify-self-center text-nowrap flex items-center justify-center">
                About the collar
            </a>
			<a className="md:h-11 md:w-22 md:col-start-5 xl:justify-self-center flex items-center justify-center ">
				Opinions
			</a>
            <a className="rounded-full col-start-8 justify-self-end bg-gray-200 md:mr-0 md:justify-self-start md:h-11 md:w-22 lg:h-13 lg:w-26 2xl:col-start-7 2xl:justify-self-center flex items-center justify-center">
               Login
            </a>
           
        </div>
		</nav>
	)
}

export default NavBarDesktop
