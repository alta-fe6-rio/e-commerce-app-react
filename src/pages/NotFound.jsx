/** @format */

import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center space-y-4'>
			<p className='text-xl font-inter space-x-4'>
				<span className='font-bold border-r-2 pr-4'>404</span>
				<span className='text-slate-500'>Page Not Found</span>
			</p>
			<Link to='/'>
				<h1 className='font-inter'>Back to Home</h1>
			</Link>
		</div>
	);
};

export default NotFound;
