import React, { useState } from 'react';

interface IProps {
	content: React.ReactNode;
	children: React.ReactNode;
	color?: string;
}

export const SideNote = ({ content, children, color }: IProps) => {
	//TODO: load SideNote content from a file
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={'group inline lg:relative '}>
			<div
				onClick={() => setIsOpen(true)}
				style={{
					margin: '0 -0.4em',
					padding: '0.1em 0.4em',
					borderRadius: '0.8em 0.3em',
					background: 'transparent',
					backgroundImage:
						'linear-gradient( to right, rgba(255, 225, 0, 0.1), rgba(170, 150, 243, 0.7) 4%, rgba(126, 95, 236, 0.3))',
					WebkitBoxDecorationBreak: 'clone',
					boxDecorationBreak: 'clone',
				}}
				className='inline cursor-pointer'
			>
				{children}
			</div>
			<div
				className={`z-20 absolute left-6 mt-7 mr-6 p-3 sm:left-20 sm:mr-20 md:left-40 md:min-w-[350px] md:mr-40 lg:-left-48 lg:w-96 bg-gray-50 border border-black rounded-md shadow-md shadow-violet-400 max-h-60 overflow-y-auto
				${isOpen ? ' inline-block' : 'hidden'}`}
			>
				<img
					id='do-not-zoom'
					className='ml-auto w-6 mb-1 cursor-pointer sticky top-0 right-0 hover:sticky'
					src='/images/close.svg'
					onClick={() => setIsOpen(false)}
				/>
				<div>{content}</div>
				<div />
			</div>
		</div>
	);
};
