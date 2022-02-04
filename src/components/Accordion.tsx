import React, { useRef, useState } from 'react';

interface AccordionProps {
	title: React.ReactNode;
	content: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
	const [active, setActive] = useState(false);
	const [height, setHeight] = useState('0px');
	const [rotate, setRotate] = useState('transform duration-700 ease');

	const contentSpace = useRef(null);

	function toggleAccordion() {
		setActive((prevState) => !prevState);
		// @ts-ignore
		setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
		setRotate(
			active
				? 'transform duration-700 ease'
				: 'transform duration-700 ease rotate-180'
		);
	}

	return (
		<div className='flex flex-col my-4 mx-1 border border-solid border-black rounded '>
			<button
				className=' bg-violet-300 py-2  cursor-pointer focus:outline-none flex flex-row items-center '
				onClick={toggleAccordion}
			>
				<p className='my-0 ml-3 mr-auto font-medium text-left'>{title}</p>
				<img
					src='/img/chevron-up.svg'
					alt='Chevron icon'
					className={`${rotate} w-6 mr-4`}
				/>
			</button>
			<div
				ref={contentSpace}
				style={{ maxHeight: `${height}` }}
				className='overflow-y-hidden transition-max-height duration-700 ease-in-out bg-violet-100'
			>
				<div className='p-0'>{content}</div>
			</div>
		</div>
	);
};
