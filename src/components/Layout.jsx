/** @format */

import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='w-full h-screen'>
			<Navbar />
			<div className='gradient-b-light dark:gradient-b-dark h-auto p-8 text-black'>{children}</div>
		</div>
	);
};

export default Layout;
