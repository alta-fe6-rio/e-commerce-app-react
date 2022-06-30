/** @format */

import Layout from '../components/Layout';
import DetailProduct from '../components/DetailProduct';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
	const params = useParams();
	const [product, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getDetail();
	}, []);

	const getDetail = () => {
		const { detail_id } = params;
		axios({
			method: 'get',
			url: `http://34.68.188.197:80/products/${detail_id}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
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
				<div className='bg-white lg:w-[95%] sm:w-full m-auto h-full'>
					<DetailProduct key={product.id} img={product.image} price={product.price} name={product.name} desc={product.desc} />
				</div>
			</Layout>
		);
	}
};

export default Detail;
