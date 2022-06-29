/** @format */

import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [address, setAddress] = useState('');
	const [date, setDate] = useState();

	const signUp = () => {
		axios({
			method: 'post',
			url: 'http://34.68.188.197:80/users',
			data: {
				name: name,
				email: email,
				password: password,
				phone: phoneNumber,
				birth: date,
				address: address,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				Swal.fire({
					icon: 'success',
					title: 'sucess created account',
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: `${err.response.data.message}`,
				});
			});
	};

	return (
		<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex flex-col justify-center items-center'>
			<div className='mb-12 mt-28'>
				<h1 className='font-courgette font-bold text-5xl text-white'>Sepatuku</h1>
			</div>
			<div className='bg-white max-w-md px-6 py-12 rounded-md'>
				<form className='flex flex-col space-y-6'>
					<input className='input-form' type='text' placeholder='Masukkan Nama' name='name' onChange={(e) => setName(e.target.value)} />
					<div>
						<input className='input-form' type='email' placeholder='Masukkan Email' name='email' onChange={(e) => setEmail(e.target.value)} />
					</div>
					<input className='input-form' type='password' placeholder='Masukkan Password' name='password' onChange={(e) => setPassword(e.target.value)} />
					<input className='input-form' type='tel' placeholder='Masukkan No.telp' name='phone' onChange={(e) => setPhoneNumber(e.target.value)} />
					<input className='input-form' type='date' name='date' onChange={(e) => setDate(e.target.value)} />
					<input className='input-form' type='text' placeholder='Masukkan Alamat' name='adress' onChange={(e) => setAddress(e.target.value)} />
					<div className='flex'>
						<input type='checkbox' className='mt-2' />
						<span className='pl-3'>dengan anda klik setuju, anda telah menyetujui syarat dan ketentuan yang berlaku.</span>
					</div>
				</form>
				<button className='button-form gradient-b-dark mt-4' onClick={() => signUp()}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Signup;
