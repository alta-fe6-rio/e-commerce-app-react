/** @format */

import Layout from '../components/Layout';

const Order = () => {
	const state = {
		products: [
			{
				id: 1,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
		],
	};

	return (
		<Layout>
			<div className='p-4 bg-white shadow-sm'>
				<h1 className='text-center text-2xl font-inter font-bold'>Confirm your order</h1>
				<div className='grid grid-cols-1 sm:grid-cols-3'>
					<div className='p-4'>
						<img src={state.products[0].img} alt={state.products.name} />
						<div className='space-y-2 pt-2'>
							<h1>{state.products[0].name}</h1>
							<h1>Total : 1</h1>
							<h1>Total price : {state.products[0].price}</h1>
						</div>
					</div>
					<div className='p-4 col-span-2'>
						<form method='post' className='space-y-4'>
							<input type='text' placeholder='Adress' className='input-form' />
							<input type='text' placeholder='city' className='input-form' />
							<input type='text' placeholder='zip code' className='input-form' />
							<input type='text' placeholder='shipping method' className='input-form' />
							<button className='button-form gradient-b-dark'>Confirm</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Order;
