/* eslint-disable react-hooks/exhaustive-deps */
/** @format */

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const Profile = () => {
	const params = useParams();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [profile, setProfile] = useState({});
	// const [image, setImage] = useState();

	useEffect(() => {
		getProfile();
	}, []);

	const getProfile = () => {
		const { user_id } = params;
		axios({
			method: 'get',
			url: `http://34.68.188.197:80/users/${user_id}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				setProfile(res.data.data);
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					icon: 'error',
					title: 'failed update',
				});
			});
	};

	const handleUpdate = () => {
		const { user_id } = params;
		axios({
			method: 'put',
			url: `http://34.68.188.197:80/users/${user_id}`,
			data: {
				name: name,
				email: email,
				phone: phone,
				address: address,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				setProfile(res.data.data);
				console.log(res.data.data);
				localStorage.setItem('product', JSON.stringify(res.config.data));
				Swal.fire({
					icon: 'success',
					title: 'update profile sucess',
				});
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					icon: 'error',
					title: 'failed update',
				});
			});
	};

	return (
		<Layout>
			<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex justify-center items-center'>
				<div className='bg-white lg:w-[80%] md:w-full w-full lg:h-[90%] md:h-[90%] h-full lg:px-14 md:px-0 px-0 rounded-lg shadow-lg shadow-gray-400/50'>
					<div className=" flex flex-col justify-center">
						<div className='mb-5 mt-6'>
							<div className="text-2xl font-bold ml-12 mb-1">Profile</div>
							<p className='ml-12 text-black/60'>Manage Your Information</p>
						</div>
						<hr className="h-1 bg-black/5 mb-12" />
						<div className='flex lg:flex-row md:flex-row flex-col lg:mx-16 md:mx-16 mx-6'>
							<div className='lg:w-[40%] md:w-[40%] w-full flex flex-col lg:items-baseline md:items-baseline items-center lg:mt-10 md:mt-8 mt-3 mb-6'>
								<div className=' md:ml-14 '>
									<CgProfile className=' text-slate-300 text-9xl' />
								</div>
								<div className=''>
									<label for='image-upload'></label>
									<input type='file' multiple name='image-upload' id='img-upload' />
								</div>
							</div>
							<div className='lg:w-[60%] md:w-[60%] w-[95%] '>
								<form className='flex flex-col space-y-4 lg:ml-12 md:ml-12 ml-2'>
									<input className='input-form' type='name' placeholder={profile.name} onChange={(e) => setName(e.target.value)} />
									<input className='input-form' type='email' placeholder={profile.email} onChange={(e) => setEmail(e.target.value)} />
									<input className='input-form' type='phone' placeholder={profile.phone} onChange={(e) => setPhone(e.target.value)} />
									<input className='input-form' type='address' placeholder={profile.address} onChange={(e) => setAddress(e.target.value)} />
									<button className='button-form w-1/2 gradient-b-dark lg:m-0 md:m-0 m-auto' onClick={() => handleUpdate()}>Confirm</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
