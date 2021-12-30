import { format, formatISO } from 'date-fns';

type Props = {
	date: Date;
};
export default function Date({ date }: Props) {
	return (
		<time className='text-gray-500' dateTime={formatISO(date)}>
			<span>Last update: {format(date, 'LLLL d, yyyy')}</span>
			<style jsx>
				{`
					span {
						color: #9b9b9b;
					}
				`}
			</style>
		</time>
	);
}
