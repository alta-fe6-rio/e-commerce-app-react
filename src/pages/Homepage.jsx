/** @format */

import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import Layout from '../components/Layout';

const Homepage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProduct();
	}, []);

	const getProduct = () => {
		axios({
			method: 'get',
			url: 'http://34.68.188.197:80/products',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Layout>
			<div className='flex justify-center items-center'>
				<div className='bg-slate-100 h-auto p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
					<CardProduct key={products.users_id} img={products.image} price={products.price} name={products.name} />
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
