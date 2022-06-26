/** @format */

const Signup = () => {
	return (
		<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex justify-center items-center'>
			<div className='bg-white max-w-md px-6 py-12 rounded-md'>
				<form action='post' className='flex flex-col space-y-6'>
					<input className='input-form' type='text' placeholder='Masukkan Nama' />
					<input className='input-form' type='email' placeholder='Masukkan Email' />
					<input className='input-form' type='password' placeholder='Masukkan Password' />
					<input className='input-form' type='tel' placeholder='Masukkan No.telp' />
					<div className='flex'>
						<input type='checkbox' className='mt-2' />
						<span className='pl-3'>dengan anda klik setuju, anda telah menyetujui syarat dan ketentuan yang berlaku.</span>
					</div>
					<button className='button-form gradient-b-dark'>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
