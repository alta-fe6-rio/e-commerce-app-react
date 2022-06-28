/** @format */
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
	return (
		<nav className='sticky top-0 gradient-navbar flex py-3 px-6 text-white '>
			<div className='font-bold font-inter text-2xl'>
				<Link to='/'>Brand</Link>
			</div>
			<div className='flex ml-auto space-x-4 items-center text-2xl'>
				<Link to='/cart'>
					<FaShoppingCart />
				</Link>
				<Link to='/login'>
					<CgProfile />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
