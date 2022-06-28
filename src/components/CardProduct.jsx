/** @format */

import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CardProduct = ({ img, price, name }) => {
	const handleAddCart = () => {
		Swal.fire({
			icon: 'success',
			title: 'Added to Cart',
		});
	};

	return (
		<div className='bg-white border p-4 transition ease-linear duration-500 space-y-4'>
			<div className='flex justify-center'>
				<img src={img} alt={img} width={300} height={350} />
			</div>
			<div>
				<h3>{name}</h3>
				<h1 className='font-bold'>{price}</h1>
			</div>
			<button className='flex items-center space-x-4 justify-center w-full gradient-b-dark py-2 rounded-md text-white' onClick={() => handleAddCart()}>
				<span>
					<FaCartPlus />
				</span>
				<span>Add to Cart</span>
			</button>
		</div>
	);
};

export default CardProduct;
