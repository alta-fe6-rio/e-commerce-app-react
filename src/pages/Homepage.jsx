/** @format */

import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/Layout';

const Homepage = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProduct();
		if (!localStorage.getItem('token')) {
			navigate('/login');
		}
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
				setProducts(res.data.data);
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
					<div className='bg-slate-100 h-auto p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
						{products.map((product) => {
							return <CardProduct key={product.id} img={product.image} price={product.price} name={product.name} id={product.id} onClickItem={() => navigate(`detail/${product.id}`)} />;
						})}
					</div>
				</div>
			</Layout>
		);
	}
};

export default Homepage;
