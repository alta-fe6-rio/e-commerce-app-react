/** @format */
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import Layout from '../components/Layout';

const AddProduct = () => {
	const [products, setProducts] = useState([]);
	const [qty, setQty] = useState();
	// const [category, setCategory] = useState();
	const [price, setPrice] = useState();
	const [desc, setDesc] = useState();

	const handleProduct = (e) => {
		setProducts(e.target.value);
	};

	const handleQty = (e) => {
		setQty(e.target.value);
	};

	// const handleCategory = (e) => {
	// 	setCategory(e.target.value);
	// }

	const handlePrice = (e) => {
		setPrice(e.target.value);
	};

	const handleDesc = (e) => {
		setDesc(e.target.value);
	};

	const addProduct = () => {
		axios({
			method: 'post',
			url: 'https://virtserver.swaggerhub.com/MULYANURDIN10_1/Ecommerce/1.0.2/products',
			data: {
				name: products,
				qty: qty,
				price: price,
				desc: desc,
			},
			headers: {
				'Content-Type': 'application/json',
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
							<input type='text' placeholder='Product Name' name='name' className='input-form' onChange={handleProduct} />
							<input type='text' placeholder='Qty' name='qty' className='input-form' onChange={handleQty} />
							<select className='input-form'>
								<option value='0'>Select</option>
								<option value='1'>Sepatu Casual</option>
								<option value='2'>Sepatu Sport</option>
							</select>
							<input type='text' placeholder='Price' name='price' className='input-form' onChange={handlePrice} />
							<input type='text' placeholder='Adress' className='input-form' />
							<textarea rows='7' placeholder='Add description of your product' name='desc' className='input-form resize-none' onChange={handleDesc}></textarea>
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
