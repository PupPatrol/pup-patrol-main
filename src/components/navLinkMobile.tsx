import React, { ReactNode } from 'react'
import { Link, LinkProps } from 'react-scroll'

interface NavLinkProps extends Partial<LinkProps> {
	to: string
	children: ReactNode
	onClick?: () => void
}

const NavLinkMobile: React.FC<NavLinkProps> = ({ to, children, onClick, ...props }) => {
	return (
		<Link
			to={to}
			smooth='easeInOutQuad'
			duration={500}
			offset={-20}
			className='nav__item'
			spy={true}
			activeClass='nav__item--active'
			onClick={onClick}
			{...props}>
			{children}
		</Link>
	)
}

export default NavLinkMobile
