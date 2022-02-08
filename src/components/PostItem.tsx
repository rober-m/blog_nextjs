import { PostContent } from '../lib/posts';
import Date from './Date';
import Link from 'next/link';
import { parseISO } from 'date-fns';

type Props = {
	post: PostContent;
	isLesson?: boolean;
};
export default function PostItem({ post, isLesson }: Props) {
	return (
		<Link href={'/posts/' + post.slug}>
			<a
				className={
					isLesson
						? 'w-full border rounded p-2 border-violet-300 shadow bg-violet-50 mb-4'
						: ''
				}
			>
				<Date date={parseISO(post.date)} />
				<h2>{post.title}</h2>
				<style jsx>
					{`
						a {
							color: #222;
							display: inline-block;
						}
						h2 {
							margin: 0;
							font-weight: 500;
						}
						h2:before {
							display: none;
						}
					`}
				</style>
			</a>
		</Link>
	);
}
