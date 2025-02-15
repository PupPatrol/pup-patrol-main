import React, { useState } from 'react'
import arrowDownIcon from '../assets/arrow-down.svg'

function Accordion() {
	const [isOpen1, setIsOpen1] = useState(false)
	const [isOpen2, setIsOpen2] = useState(false)

	return (
		<div className='w-full my-10 lg:my-16'>
			<div>
				<hr />
				<button
					onClick={() => setIsOpen1(!isOpen1)}
					className='p-4 w-full text-lg flex items-center justify-between transition-colors cursor-pointer hover:bg-gray-500 focus-visible:outline-2 text-left'>
					Technical data
					<img
						src={arrowDownIcon}
						alt='arrow down'
						className={`size-[15px] transition-transform duration-300 ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}
					/>
				</button>
				<hr className={`${isOpen1 ? 'opacity-0' : 'opacity-100'}`} />

				{isOpen1 && (
					<div className='max-w-purse'>
						<ul className='list-disc pl-4 mb-5 marker:text-black lg:mb-10'>
							<li>lorem 1</li>
							<li>lorem 2</li>
							<li>lorem 3</li>
							<li>lorem 4</li>
							<li>lorem 5</li>
						</ul>
					</div>
				)}
			</div>
			<div className='mb-6'>
				<button
					onClick={() => setIsOpen2(!isOpen2)}
					className='p-4 w-full text-lg flex items-center justify-between transition-colors cursor-pointer hover:bg-gray-500 focus-visible:outline-2 text-left'>
					Manufacturer information
					<img
						src={arrowDownIcon}
						alt='arrow down'
						className={`size-[15px] transition-transform duration-300 ${isOpen2 ? 'rotate-180' : 'rotate-0'}`}
					/>
				</button>
				<hr className={`${isOpen2 ? 'opacity-0' : 'opacity-100'}`} />

				{isOpen2 && (
					<div className='max-w-purse'>
						<ul className='list-disc pl-4 mb-5 marker:text-black lg:mb-10'>
							<li>lorem 1</li>
							<li>lorem 2</li>
							<li>lorem 3</li>
							<li>lorem 4</li>
							<li>lorem 5</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Accordion
