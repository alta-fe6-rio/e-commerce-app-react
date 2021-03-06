/** @format */

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Layout from '../components/Layout';

const EditProduct = () => {
	const params = useParams();
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState({});
	const [qty, setQty] = useState();
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [desc, setDesc] = useState('');
	const [img, setImg] = useState('');

	const getProduct = () => {
		const { product_id } = params;
		axios({
			method: 'get',
			url: `http://34.68.188.197:80/products/${product_id}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => setLoading(false));
	};

	const editProduct = () => {
		const { product_id } = params;
		axios({
			method: 'put',
			url: `http://34.68.188.197:80/products/${product_id}`,
			data: {
				image: img,
				name: products,
				qty: qty,
				price: price,
				desc: desc,
				categorys_id: +category,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res);
				Swal.fire({
					icon: 'success',
					title: 'sucess update product',
				});
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					icon: 'error',
					title: 'failed add product',
				});
			});
	};

	useEffect(() => {
		getProduct();
	}, []);

	if (loading) {
		return <div className='h-screen flex justify-center items-center text-3xl font-courgette font-bold'>Loading...</div>;
	} else {
		return (
			<Layout>
				<div className='flex justify-center items-center'>
					<div className='bg-white p-4 max-w-4xl'>
						<form className='space-y-4'>
							<input type='text' name='image' placeholder='Add url img' className='input-form' onChange={(e) => setImg(e.target.value)} />
							<input type='text' placeholder='Product Name' name='name' className='input-form' onChange={(e) => setProducts(e.target.value)} />
							<input type='text' placeholder='Qty' name='qty' className='input-form' onChange={(e) => setQty(e.target.value)} />
							<select name='category' className='input-form peer' onChange={(e) => setCategory(e.target.value)}>
								<option value='0'>Select</option>
								<option value='1'>Sepatu</option>
								<option value='2'>T-shirt</option>
							</select>
							<input type='text' placeholder='Price' name='price' className='input-form' onChange={(e) => setPrice(e.target.value)} />
							<textarea rows='7' placeholder='Add description of your product' name='desc' className='input-form resize-none' onChange={(e) => setDesc(e.target.value)} />
						</form>
						<button className='button-form gradient-b-dark' onClick={() => editProduct()}>
							Confirm
						</button>
					</div>
				</div>
			</Layout>
		);
	}
};

export default EditProduct;
