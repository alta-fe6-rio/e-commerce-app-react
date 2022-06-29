/** @format */

import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='gradient-b-light dark:gradient-b-dark w-full h-screen flex flex-col justify-center items-center'>
			<div>
				<h1 className='font-courgette font-bold lg:text-5xl md:text-4xl text-4xl text-white'>Sepatuku</h1>
			</div>
			<div className='bg-white lg:w-[30%] md:w-[50%] w-[80%] lg:h-[80%] md:h-[70%] h-[60%] mt-16 lg:px-12 md:px-8 px-6 rounded-lg shadow-lg shadow-gray-400/50'>
				<div className="flex flex-col justify-center mt-20 pt-10">
					<form method='post' className='flex flex-col lg:space-y-4 md:space-y-3 space-y-2'>
						<div className="text-2xl font-bold mb-8">Login</div>
						<div>
							<input className='input-form' type='email' placeholder='Email' />
						</div>
						<div>
							<input className='input-form' type='password' placeholder='Password' />
						</div>
					</form>
					<Link to='/'>
						<button className='button-form gradient-b-dark mt-8'>Login</button>
					</Link>
				</div>
				<div className=' lg:flex-row md:flex-row flex flex-col justify-center items-center pt-4'>
					<span className=''>don't have account?</span>
					<Link to='/signup'><button className="text-blue-500 ml-2">Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
