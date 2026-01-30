'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export const metadata: Metadata = {
	title: 'Counter Page',
	description: 'A simple counter page using React useState hook',
};

const CounterPage = () => {
	const [count, setCount] = useState(0);

	const onIncrement = () => {
		setCount(count + 1);
	};

	const onDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<span>Productos en el carrito</span>
			<span className='text-9xl'>{count}</span>

			<div className='flex gap-4'>
				<button
					onClick={onIncrement}
					className='bg-gray-900 text-white cursor-pointer p-8 rounded-xl'
				>
					+1
				</button>
				<button
					onClick={onDecrement}
					className='bg-gray-900 text-white cursor-pointer p-8 rounded-xl'
				>
					-1
				</button>
			</div>
		</div>
	);
};

export default CounterPage;
