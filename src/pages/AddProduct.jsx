/** @format */
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import Layout from '../components/Layout';

const AddProduct = () => {
	const [products, setProducts] = useState('');
	const [qty, setQty] = useState('');
	const [category, setCategory] = useState();
	const [price, setPrice] = useState('');
	const [desc, setDesc] = useState('');
	const [img, setImg] = useState('');

	const addProduct = () => {
		axios({
			method: 'post',
			url: 'http://34.68.188.197:80/products',
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
					title: 'sucess add product',
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: `${err.response.data.message}`,
				});
			});
	};

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
					<button className='button-form gradient-b-dark' onClick={() => addProduct()}>
						Sell
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default AddProduct;
