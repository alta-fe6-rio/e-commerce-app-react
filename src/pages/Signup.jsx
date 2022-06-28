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

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handlePhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleAdress = (e) => {
		setAddress(e.target.value);
	};

	const addUser = () => {
		axios({
			method: 'post',
			url: 'https://virtserver.swaggerhub.com/MULYANURDIN10_1/Ecommerce/1.0.2/users/',
			data: {
				name: name,
				email: email,
				password: password,
				phoneNumber: phoneNumber,
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
					title: 'failed created account',
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
					<input className='input-form' type='text' placeholder='Masukkan Nama' name='name' onChange={handleName} />
					<div>
						<input className='input-form' type='email' placeholder='Masukkan Email' name='email' onChange={handleEmail} />
					</div>
					<input className='input-form' type='password' placeholder='Masukkan Password' name='password' onChange={handlePassword} />
					<input className='input-form' type='tel' placeholder='Masukkan No.telp' name='phone' onChange={handlePhoneNumber} />
					<input className='input-form' type='text' placeholder='Masukkan Alamat' name='adress' onChange={handleAdress} />
					<div className='flex'>
						<input type='checkbox' className='mt-2' />
						<span className='pl-3'>dengan anda klik setuju, anda telah menyetujui syarat dan ketentuan yang berlaku.</span>
					</div>
				</form>
				<button className='button-form gradient-b-dark mt-4' onClick={() => addUser()}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Signup;
