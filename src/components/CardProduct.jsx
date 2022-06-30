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
		<div className='bg-white border p-4 transition ease-linear duration-500 space-y-4'>
			<div className='flex justify-center'>
				<img src={img} alt={img} width={300} height={350} />
			</div>
			<div>
				<h3 className='cursor-pointer' onClick={onClickItem}>
					{name}
				</h3>
				<h1 className='font-bold'>{price}</h1>
			</div>
			<button className='flex items-center space-x-4 justify-center w-full gradient-b-dark py-2 rounded-md text-white' onClick={() => addToCart()}>
				<span>
					<FaCartPlus />
				</span>
				<span>Add to Cart</span>
			</button>
		</div>
	);
};

export default CardProduct;
