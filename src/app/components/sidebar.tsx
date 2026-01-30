import Image from 'next/image';

import {
	IoBrowsersOutline,
	IoCalculatorOutline,
	IoLogoReact,
} from 'react-icons/io5';
import { SidebarMenuItem } from './sidebar-menu-item';

const menuItems = [
	{
		path: '/dashboard/main',
		icon: IoBrowsersOutline,
		title: 'Dashboard',
		subtitle: 'Data Overview',
	},
	{
		path: '/dashboard/counter',
		icon: IoCalculatorOutline,
		title: 'Counter',
		subtitle: 'Estado Local',
	},
];

export const Sidebar = () => {
	return (
		<div
			id='menu'
			style={{ width: '400px' }}
			className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll'
		>
			<div id='logo' className='my-4 px-6'>
				<h1 className='text-lg md:text-2xl font-bold text-white flex gap-2 items-center'>
					<IoLogoReact />
					<span>Dash</span>
				</h1>
			</div>

			<div id='profile' className='px-6 py-10'>
				<p className='text-slate-500'>Welcome back,</p>
				<a href='#' className='inline-flex space-x-2 items-center'>
					<span>
						<Image
							src={
								'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80'
							}
							alt='profile'
							width={32}
							height={32}
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>Edward Tompson</span>
				</a>
			</div>

			<div id='nav' className='w-full px-6'>
				{menuItems.map((item) => (
					<SidebarMenuItem
						key={item.path}
						path={item.path}
						icon={<item.icon className='w-6 h-6' />}
						title={item.title}
						subtitle={item.subtitle}
					/>
				))}
			</div>
		</div>
	);
};
