import React, { useState } from 'react';

interface IProps {
	content: React.ReactNode;
	children: React.ReactNode;
}

export const SideNote = ({ content, children }: IProps) => {
	//TODO: load SideNote content from a file
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className={`group inline-block relative cursor-pointer ${
				isOpen ? '' : ''
			}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={`z-20 absolute top-8 p-3 ${
					isOpen ? 'block' : 'hidden'
				} bg-gray-50 border border-black rounded-md w-96 max-h-60 overflow-y-auto`}
			>
				{content}
				<div />
			</div>

			<div className=' inline-block bg-yellow-300i font-'>{children}</div>
		</div>
	);
};
