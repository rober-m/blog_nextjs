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
		contentSpace &&
			setHeight(
				active ? '0px' : `${contentSpace.current.scrollHeight}px`
			);
		setRotate(
			active
				? 'transform duration-500 ease'
				: 'transform duration-500 ease rotate-180'
		);
	}

	return (
		<div className='flex flex-col my-2 mx-1 border border-solid border-violet-800 shadow rounded '>
			<button
				className={`rounded-t bg-violet-200 py-2  cursor-pointer focus:outline-none flex flex-row items-center ${
					active ? '' : 'rounded-b'
				}`}
				onClick={toggleAccordion}
			>
				<p className='my-0 ml-3 mr-auto font-medium text-left'>
					{title}
				</p>
				<img
					id='do-not-zoom'
					src='/images/chevron-up.svg'
					alt='Chevron icon'
					className={`${rotate} w-6 mx-6`}
				/>
			</button>
			<div
				ref={contentSpace}
				style={{ maxHeight: `${height}` }}
				className=' rounded-b overflow-y-hidden transition-max-height duration-700 ease-in-out bg-violet-100'
			>
				<div className='px-4 pb-3'>{content}</div>
			</div>
		</div>
	);
};
