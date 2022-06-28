/** @format */

import Layout from '../components/Layout';
import { CgProfile } from 'react-icons/cg';

const Profile = () => {
	return (
		<Layout>
			<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex justify-center items-center'>
				<div className='bg-white w-[80%] h-[90%] px-14 rounded-lg shadow-lg shadow-gray-400/50'>
					<div className=" flex flex-col justify-center">
						<form method='post' className='flex flex-col '>
							<div className='mb-5 mt-6'>
								<div className="text-2xl font-bold ml-12 mb-1">Profile</div>
								<p className='ml-12 text-black/60'>Manage Your Information</p>
							</div>
							<hr className="h-1 bg-black/5 mb-12" />
							<div className='flex'>
								<div className='w-[60%] space-y-4 ml-12'>
									<input className='input-form' type='name' placeholder='Name' />
									<input className='input-form' type='email' placeholder='Email' />
									<input className='input-form' type='phone' placeholder='Phone' />
									<input className='input-form text-gray-400' type='date' placeholder='Date of birth' />
									<input className='input-form' type='address' placeholder='Address' />
									<button className='button-form w-1/2 gradient-b-dark'>Confirm</button>
								</div>
								<div className='w-[40%] flex flex-col items-end'>
									<div className='mr-32 mt-10 mb-6'>
										<CgProfile className='text-slate-300 text-9xl' />
									</div>
									<div className='ml-auto'>
										<label for='image-upload'></label>
										<input type='file' multiple name='image-upload' id='img-upload' />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Profile;
