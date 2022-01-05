import React from 'react';
import { PostContent } from '../lib/posts';
import PostItem from './PostItem';
import TagLink from './TagLink';
import Pagination from './Pagination';
import { TagContent } from '../lib/tags';

type Props = {
	posts: PostContent[];
	tags: TagContent[];
	pagination: {
		current: number;
		pages: number;
	};
};
export default function PostList({ posts, tags, pagination }: Props) {
	return (
		<div className={' max-w-5xl flex mx-auto w-full px-6'}>
			<div className='flex flex-col w-full '>
				<ul className={'block lg:hidden my-4'}>
					{tags.map((it, i) => (
						<li key={i} className=' inline-block mx-2'>
							<TagLink tag={it} />
						</li>
					))}
				</ul>
				<hr className=' block lg:hidden  text-gray-300 mb-4' />
				<div className={'w-full flex flex-col'}>
					<ul className={''}>
						{posts.map((it, i) => (
							<li key={i} className='mb-6'>
								<PostItem post={it} />
							</li>
						))}
					</ul>
					<Pagination
						current={pagination.current}
						pages={pagination.pages}
						link={{
							href: (page) => (page === 1 ? '/posts' : '/posts/page/[page]'),
							as: (page) => (page === 1 ? null : '/posts/page/' + page),
						}}
					/>
				</div>
			</div>
			<ul className={' ml-6 hidden lg:block'}>
				{tags.map((it, i) => (
					<li key={i}>
						<TagLink tag={it} />
					</li>
				))}
			</ul>
		</div>
	);
}
