import React from 'react';

interface IProps {
	questions: string[];
	correct: number;
}

export const MultipleChoice: React.FC<IProps> = ({ questions, correct }) => {
	const onButtonClick = (index: number) => {
		if (index === correct) {
			//TODO: correct animation
		} else {
			//TODO: incorrect animation (turn red and shake left and right?)
		}
	};

	return (
		<div>
			{questions.map((q, i) => {
				<button key={i} type='button' onClick={() => onButtonClick(i)}>
					{q}
				</button>;
			})}
		</div>
	);
};
