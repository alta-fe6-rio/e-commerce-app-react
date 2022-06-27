/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { ThemeContext } from '../utils/context';
import EditProduct from '../pages/EditProduct';
import AddProduct from '../pages/AddProduct';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Order from '../pages/Order';
import Cart from '../pages/Cart';

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
					<Route path='/detail' element={<Detail />} />
					<Route path='/order' element={<Order />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/add-product' element={<AddProduct />} />
					<Route path='/edit-product' element={<EditProduct />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default App;
