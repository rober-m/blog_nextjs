import React from 'react';

interface IProps {
	url?: string;
}

export const PaizaEmbed = ({ url }: IProps) => {
	return (
		<div className='relative' style={{ height: '500px' }}>
			<div
				className='absolute bottom-0 right-0 w-56 bg-white'
				style={{
					height: '50px',
					zIndex: 20000000,
					transform: 'rotate(180deg)',
				}}
			></div>
			<iframe
				src={
					url
						? url
						: 'https://paiza.io/projects/e/CxQc3DfsNaRLIiKyNNQTKg?theme=twilight'
				}
				width='100%'
				height='100%'
				scrolling='no'
				seamless
			></iframe>
		</div>
	);
};
