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
		<div
			className={'group inline-block relative cursor-pointer'}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={`z-20 absolute top-8 p-3  bg-gray-50 border border-black rounded-md shadow-md shadow-violet-400 w-96 max-h-60 overflow-y-auto
				${isOpen ? 'block' : 'hidden'}`}
			>
				{content}
				<div />
			</div>

			<div
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
				className={`inline-block`}
			>
				{children}
			</div>
		</div>
	);
};
