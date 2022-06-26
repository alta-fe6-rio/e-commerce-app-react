/** @format */
import { useContext } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../utils/context';

import Navbar from './Navbar';

const Layout = ({ children }) => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = (mode) => {
		setTheme(mode);
		localStorage.setItem('theme', mode);
	};

	return (
		<div className='w-full h-screen relative'>
			<Navbar />
			<button className='fixed top-16 right-3 bg-[#A1BBD0]/50 p-3 rounded-full hover:bg-[#A1BBD0] transition duration-500 text-white hover:text-cyan-300 text-xl'>
				{theme === 'dark' ? <BsSun onClick={() => handleThemeChange('light')} /> : <BsMoonStars onClick={() => handleThemeChange('dark')} />}
			</button>
			<div className='gradient-b-light dark:gradient-b-dark h-auto p-8 text-black'>{children}</div>
		</div>
	);
};

export default Layout;
