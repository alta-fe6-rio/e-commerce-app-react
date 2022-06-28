/** @format */

const Login = () => {
	return (
		<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex flex-col justify-center items-center'>
			<div>
				<h1 className='font-courgette font-bold text-5xl text-white'>Sepatuku</h1>
			</div>
			<div className='bg-white w-[30%] h-[70%] mt-16 px-14 rounded-lg shadow-lg shadow-gray-400/50'>
				<div className="h-[90%] flex flex-col justify-center">
					<form method='post' className='flex flex-col space-y-4'>
						<div className="text-2xl font-bold mb-8">Login</div>
						<div>
							<input className='input-form' type='email' placeholder='Email' />
						</div>
						<input className='input-form' type='password' placeholder='Password' />
					</form>
					<button className='button-form gradient-b-dark mt-8'>Login</button>
				</div>
				<div className='flex mt-15 justify-center'>
					<span className=''>don't have an account?</span><button className="text-blue-500 ml-2">Sign Up</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
