/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

import Layout from '../components/Layout';
import Swal from 'sweetalert2';

const UserProduct = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getMyProduct();
	}, []);

	const getMyProduct = () => {
		axios({
			method: 'get',
			url: 'http://34.68.188.197:80/products/user',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data);
				setProducts(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	const handleDeleteProduct = (id) => {
		axios({
			method: 'delete',
			url: `http://34.68.188.197:80/products/${id}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data);
				getMyProduct();
				Swal.fire({
					icon: 'success',
					title: 'Success Delete Product',
				});
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	if (loading) {
		return <div className='h-screen flex justify-center items-center text-3xl font-courgette font-bold'>Loading...</div>;
	} else {
		return (
			<Layout>
				<div className='flex justify-center items-center'>
					<div className='bg-slate-100 h-auto p-6 w-full '>
						{products.map((product) => {
							return (
								<div key={product.id} className='grid grid-cols-1 sm:grid-cols-3 my-5 bg-slate-200 p-4'>
									<div>
										<img src={product.image} alt={product.name} />
									</div>
									<div className='col-span-2 px-4'>
										<div className='grid grid-cols-2'>
											<div>
												<h1 className='text-xl font-inter'>{product.name}</h1>
												<p>Rp. {product.price}</p>
												<p className='py-6'>Deskripsi : {product.desc}</p>
												<div className='flex items-center'>
													<div className='flex flex-col space-y-5 text-white'>
														<button className='bg-sky-500 flex justify-center space-x-4 px-8 py-2 rounded-sm' onClick={() => navigate(`/edit-product/${product.id}`)}>
															<FaEdit />
															<span>Edit</span>
														</button>
														<button className='bg-red-500 flex justify-center space-x-4 px-8 py-2 rounded-sm' onClick={() => handleDeleteProduct(product.id)}>
															<FaTrash />
															<span>Delete</span>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Layout>
		);
	}
};

export default UserProduct;
