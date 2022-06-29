/** @format */
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import Layout from '../components/Layout';

const AddProduct = () => {
	const [products, setProducts] = useState([]);
	const [qty, setQty] = useState();
	const [category, setCategory] = useState();
	const [price, setPrice] = useState();
	const [desc, setDesc] = useState();

	const addProduct = () => {
		axios({
			method: 'post',
			url: 'http://34.68.188.197:80/products',
			data: {
				name: products,
				qty: qty,
				price: price,
				desc: desc,
			},
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((res) => {
				console.log(res);
				localStorage.setItem('product', JSON.stringify(res.config.data));
				Swal.fire({
					icon: 'success',
					title: 'sucess add product',
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

	return (
		<Layout>
			<div className='bg-white p-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div>
						<label for='image-upload'></label>
						<input type='file' multiple name='image' id='image' />
					</div>
					<div className='col-span-2'>
						<form className='space-y-4'>
							<input type='text' placeholder='Product Name' name='name' className='input-form' onChange={(e) => setProducts(e.target.value)} />
							<input type='text' placeholder='Qty' name='qty' className='input-form' onChange={(e) => setQty(e.target.value)} />
							<select className='input-form' onChange={(e) => console.log(e)}>
								<option value='0'>Select</option>
								<option value='1'>Sepatu Casual</option>
								<option value='2'>Sepatu Sport</option>
							</select>
							<input type='text' placeholder='Price' name='price' className='input-form' onChange={(e) => setPrice(e.target.value)} />
							<textarea rows='7' placeholder='Add description of your product' name='desc' className='input-form resize-none' onChange={(e) => setDesc(e.target.value)}></textarea>
						</form>
						<button className='button-form gradient-b-dark' onClick={() => addProduct()}>
							Sell
						</button>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AddProduct;
