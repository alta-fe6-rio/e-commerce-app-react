/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../utils/context';
import Homepage from '../pages/Homepage';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import Order from '../pages/Order';
import Detail from '../pages/Detail';
import AddProduct from '../pages/AddProduct';

const App = () => {
	const [theme, setTheme] = useState('light');
	const background = useMemo(() => ({ theme, setTheme }), [theme]);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	return (
		<ThemeContext.Provider value={background}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<Order />} />
					<Route path='/detail' element={<Detail />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/add-product' element={<AddProduct />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default App;
