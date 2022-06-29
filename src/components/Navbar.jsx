/** @format */

/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ThemeContext } from '../utils/context';
import Swal from 'sweetalert2';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = (mode) => {
		setTheme(mode);
		localStorage.setItem('theme', mode);
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.href = '/';
		Swal.fire({
			icon: 'success',
			title: 'Logged out',
		});
	};
	return (
		<Disclosure as='nav' className='gradient-t-dark'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div>
						<Link to='/'>
							<h1 className='font-courgette font-bold text-2xl text-white'>Sepatuku</h1>
						</Link>
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<button className='transition duration-500 text-white hover:text-cyan-300 text-xl'>{theme === 'dark' ? <BsSun onClick={() => handleThemeChange('light')} /> : <BsMoonStars onClick={() => handleThemeChange('dark')} />}</button>
						{/* Cart dropdown */}
						<Menu as='div' className='ml-3 relative'>
							<div>
								<Menu.Button className='flex text-sm rounded-full focus:outline-none'>
									<span className='sr-only'>Open cart menu</span>
									<FaShoppingCart className='text-white text-xl' />
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-100'
								enterFrom='transform opacity-0 scale-95'
								enterTo='transform opacity-100 scale-100'
								leave='transition ease-in duration-75'
								leaveFrom='transform opacity-100 scale-100'
								leaveTo='transform opacity-0 scale-95'>
								<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<Menu.Item>
										{({ active }) => (
											<Link to='/cart' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												Cart
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link to='/history' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												Checkout
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link to='/order' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												Order
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link to='/add-product' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												add product
											</Link>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>
						{/* Profile dropdown */}
						<Menu as='div' className='ml-3 relative'>
							<div>
								<Menu.Button className='flex text-sm rounded-full'>
									<span className='sr-only'>Open user menu</span>
									<CgProfile className='text-white text-xl' />
								</Menu.Button>
							</div>
							<Transition
								as={Fragment}
								enter='transition ease-out duration-100'
								enterFrom='transform opacity-0 scale-95'
								enterTo='transform opacity-100 scale-100'
								leave='transition ease-in duration-75'
								leaveFrom='transform opacity-100 scale-100'
								leaveTo='transform opacity-0 scale-95'>
								<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
									<Menu.Item>
										{({ active }) => (
											<Link to='/profile' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												Profile
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link to='/add-product' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
												Add Product
											</Link>
										)}
									</Menu.Item>
									{localStorage.getItem('token') ? (
										<div className='hidden'></div>
									) : (
										<Menu.Item>
											{({ active }) => (
												<Link to='/signup' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
													Sign Up
												</Link>
											)}
										</Menu.Item>
									)}
									{localStorage.getItem('token') ? (
										<div className='hidden'></div>
									) : (
										<Menu.Item>
											{({ active }) => (
												<Link to='/login' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
													Login
												</Link>
											)}
										</Menu.Item>
									)}
									{localStorage.getItem('token') && (
										<Menu.Item>
											{({ active }) => (
												<Link to='/' onClick={() => handleLogout()} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
													Sign Out
												</Link>
											)}
										</Menu.Item>
									)}
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</Disclosure>
	);
}
