import React, { ReactNode } from 'react'
import { Link, LinkProps } from 'react-scroll'

interface NavLinkProps extends Partial<LinkProps> {
	to: string
	children: ReactNode
}

const NavLinkDesktop: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
	return (
		<Link
			to={to}
			smooth='easeInOutQuad'
			duration={500}
			offset={-20}
			className='nav__desktop-item'
			spy={true}
			activeClass='nav__desktop-item--active'
			{...props}>
			{children}
		</Link>
	)
}

export default NavLinkDesktop
