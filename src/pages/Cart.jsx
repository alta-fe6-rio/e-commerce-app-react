
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Cart = () => {
	const [carts, setCarts] = useState([]);
	const checkUser = () => {
		localStorage.getItem('token')
			? Swal.fire({
				icon: 'success',
				title: 'Checkout Success',
			})
			: Swal.fire({
				icon: 'info',
				title: 'No Product on Cart',
			});
	};

	useEffect(() => {
		getCart();
	}, []);

	const getCart = () => {
		axios({
			method: 'get',
			url: 'http://34.68.188.197:80/carts',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data.data);
				setCarts(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};


	return (
		<Layout>
			<div className='w-full'>
				<div>
					{carts.map((cart) => {
						return <CartProduct key={cart.id} qty={cart.qty} item={cart.item} img={cart.img} price={cart.price} name={cart.name} total={cart.total} />
					})}
				</div>
				<div className='flex justify-center'>
					<div className="fixed bg-[#F1F1F1/80] backdrop-blur-md lg:w-[80%] md:w-[80%] w-[100%] lg:h-32 md:h-32 h-42 bottom-4 rounded-xl border border-white shadow-md shadow-gray-400">
						<div className='flex lg:flex-row md:flex-row flex-col mx-16 '>
							<div className='mt-8'>
								<p>Total Barang:</p>
								<p className='font-bold mt-2'>Total Harga:</p>
							</div>
							<div className='ml-auto lg:mt-10 md:mt-10 mt-2 lg:mb-0 md:mb-0 mb-5 lg:p-0 md:p-0 p-5'>
								<Link to='/order'>
									<button onClick={() => checkUser()} className='bg-gradient-to-b from-slate-300 to-slate-800 w-56 h-12 text-white border-1 border-white shadow-md shadow-gray-500 rounded-lg'>
										<p>Checkout</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Cart;
