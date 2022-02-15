import React from 'react';

interface IProps {
	url: string;
}

export const Giff = ({ url }: IProps) => {
	return (
		<div
			style={{
				margin: '1rem 0',
				width: '100%',
				height: '0',
				paddingBottom: '56%',
				position: 'relative',
			}}
		>
			<iframe
				src={url}
				width='100%'
				height='100%'
				style={{ position: 'absolute' }}
				frameBorder='0'
				className='giphy-embed'
				allowFullScreen
			></iframe>
		</div>
	);
};
