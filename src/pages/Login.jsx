/** @format */

import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const auth = () => {
		axios({
			method: 'post',
			url: 'http://34.68.188.197:80/auth',
			data: {
				email: email,
				password: password,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				Swal.fire({
					icon: 'success',
					title: 'success logged in',
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: `${err.response.data.message}`,
				});
			});
	};

	const handleLogin = (e) => {
		if (e.keyCode === 13) {
			axios({
				method: 'post',
				url: 'http://34.68.188.197:80/auth',
				data: {
					email: email,
					password: password,
				},
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			})
				.then((res) => {
					console.log(res);
					localStorage.setItem('token', res.data.token);
					Swal.fire({
						icon: 'success',
						title: 'success logged in',
					});
				})
				.catch((err) => {
					Swal.fire({
						icon: 'error',
						title: `${err.response.data.message}`,
					});
				});
		}
	}


	return (
		<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex flex-col justify-center items-center'>
			<div>
				<h1 className='font-courgette font-bold lg:text-5xl md:text-4xl text-4xl text-white'>Sepatuku</h1>
			</div>
			<div className='bg-white lg:w-[30%] md:w-[50%] w-[80%] lg:h-[80%] md:h-[70%] h-[60%] mt-16 lg:px-12 md:px-8 px-6 rounded-lg shadow-lg shadow-gray-400/50'>
				<div className='flex flex-col justify-center lg:mt-20 md:mt-10 mt-4 pt-10'>
					<form method='post' className='flex flex-col lg:space-y-4 md:space-y-3 space-y-2'>
						<div className='text-2xl font-bold mb-8'>Login</div>
						<div>
							<input name='email' className='input-form' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div>
							<input onKeyDown={(e) => handleLogin(e)} name='password' className='input-form' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
						</div>
					</form>
					<Link to='/'>
						<button onClick={() => auth()} className='button-form gradient-b-dark mt-8'>
							Login
						</button>
					</Link>
				</div>
				<div className=' lg:flex-row md:flex-row flex flex-col justify-center items-center pt-4'>
					<span className=''>don't have account?</span>
					<Link to='/signup'>
						<button className='text-blue-500 ml-2'>Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;