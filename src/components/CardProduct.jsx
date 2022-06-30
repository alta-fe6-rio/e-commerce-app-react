/** @format */

import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CardProduct = ({ img, price, name, id, onClickItem }) => {
	const addToCart = () => {
		axios({
			method: 'post',
			url: 'http://34.68.188.197:80/carts',
			data: {
				products_id: id,
				qty: '1',
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					icon: 'success',
					title: 'Added to Cart',
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='container grow flex flex-col bg-white border p-4'>
			<img src={img} alt={img} />
			<div className='my-3 space-y-3'>
				<h1 className='sm:text-xl font-inter pt-4 cursor-pointer' onClick={onClickItem}>
					{name}
				</h1>
				<h1 className='font-inter font-bold'>Rp. {price}</h1>
			</div>
			<button className='mt-auto flex items-center space-x-4 justify-center w-full gradient-b-dark py-2 rounded-md text-white' onClick={() => addToCart()}>
				<FaCartPlus />
				<p>Add to Cart</p>
			</button>
		</div>
		// <div className='bg-white border p-4 transition ease-linear duration-500'>
		// 	<div className='flex justify-center'>
		// 		<img src={img} alt={img} />
		// 	</div>
		// 	<div>
		// 		<h3 className='cursor-pointer' onClick={onClickItem}>
		// 			{name}
		// 		</h3>
		// 		<h1 className='font-bold'>{price}</h1>
		// 	</div>
		// 	<button className='flex items-center space-x-4 justify-center w-full gradient-b-dark py-2 rounded-md text-white' onClick={() => addToCart()}>
		// 		<span>
		// 			<FaCartPlus />
		// 		</span>
		// 		<span>Add to Cart</span>
		// 	</button>
		// </div>
	);
};

export default CardProduct;
