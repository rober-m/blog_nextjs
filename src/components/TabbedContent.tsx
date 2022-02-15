import React from 'react';
import { TabGroup } from '@statikly/funk';

interface IProps {
	tabs: { title: string; content: any }[];
}

export const TabbedContent = ({ tabs }: IProps) => {
	return (
		<div className='my-2 flex flex-col justify-center items-center bg-violet-50 border rounded-lg shadow'>
			<TabGroup numTabs={tabs.length} direction={TabGroup.direction.HORIZONTAL}>
				<TabGroup.TabList className='w-full flex border-b rounded-t-lg'>
					{tabs.map((tab, index) => {
						return (
							<TabGroup.Tab
								key={index}
								index={index}
								className=' first:rounded-tl-lg last:rounded-tr-lg flex-grow h-12 px-12 transition-colors duration-150'
								activeClassName=' bg-violet-500 text-white'
								inactiveClassName='bg-white text-black'
							>
								{tab.title}
							</TabGroup.Tab>
						);
					})}
				</TabGroup.TabList>
				{tabs.map((tab, index) => {
					return (
						<TabGroup.TabPanel
							key={index}
							index={index}
							className=' p-6 transition-all transform w-full max-w-lg'
							activeClassName='opacity-100 duration-500 translate-x-0'
							inactiveClassName='absolute opacity-0 -translate-x-2'
						>
							{tab.content}
						</TabGroup.TabPanel>
					);
				})}
			</TabGroup>
		</div>
	);
};
