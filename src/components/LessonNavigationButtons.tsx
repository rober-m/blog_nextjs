import Link from 'next/link';
import React from 'react';

interface IProps {
	nextLesson: string;
}

export const LessonNavigationButtons: React.FC<IProps> = ({ nextLesson }) => {
	return (
		<div className='flex flex-row justify-end mt-6'>
			<Link href='/courses/haskell-course'>
				<a
					style={{ textDecoration: 'none' }}
					className='p-2 mx-2 border border-gray-400 rounded-md shadow hover:bg-violet-100 hover:scale-103 transition-transform active:shadow-none active:scale-100'
				>
					Course Page
				</a>
			</Link>
			{nextLesson && (
				<Link href={`/posts/${nextLesson}`}>
					<a
						style={{ textDecoration: 'none' }}
						className='p-2 mx-2 border border-gray-400 rounded-md shadow hover:bg-violet-100 hover:scale-103 transition-transform active:shadow-none active:scale-100'
					>
						Next Lesson
					</a>
				</Link>
			)}
		</div>
	);
};
