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
		<nav className='h-[80px]'>
			<div className='container'>
				<div>
					<a href='#'>About us</a>
					<a href='#'>About the collar</a>
					<a href='#'>Opinions</a>
					<a href='#'>Specification</a>
					<a href='#'>Log in</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBarDesktop
