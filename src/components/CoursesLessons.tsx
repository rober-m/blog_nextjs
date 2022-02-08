import React from 'react';
import { PostContent } from '../lib/posts';
import { TagContent } from '../lib/tags';
import PostItem from './PostItem';

type Props = {
	posts: PostContent[];
	tag: TagContent;
};

export default function TagPostList({ posts, tag }: Props) {
	return (
		<div className={'container w-full max-w-5xl mx-auto px-6 flex flex-col'}>
			<h1 className=' text-4xl lg:text-5xl capitalize mb-8 text-center text-violet-700'>
				<span>{tag.name} Lessons</span>
			</h1>
			<ul>
				{posts.map((it, i) => (
					<li
						key={i}
						className=' border rounded p-2 border-violet-300 shadow bg-violet-50 mb-4'
					>
						<PostItem post={it} />
					</li>
				))}
			</ul>
		</div>
	);
}
