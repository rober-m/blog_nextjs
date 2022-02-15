import Link from 'next/link';
import { TagContent } from '../lib/tags';

type Props = {
	tag: TagContent;
};
export default function TagButton({ tag }: Props) {
	return (
		<>
			<Link href={'/posts/tags/[[...slug]]'} as={`/posts/tags/${tag.slug}`}>
				<a className='inline-block rounded mt-2 py-1 px-2 text-violet-600 hover:text-violet-600 active:text-violet-600 bg-violet-200 hover:bg-violet-300 active:bg-violet-300'>
					{tag.name}
				</a>
			</Link>
			<style jsx>{`
				a {
					transition: background-color 0.3s ease;
				}
			`}</style>
		</>
	);
}
