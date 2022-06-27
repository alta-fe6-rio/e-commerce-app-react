/** @format */

import Layout from '../components/Layout';
import CardProduct from '../components/CardProduct';

const Homepage = () => {
	const state = {
		products: [
			{
				id: 1,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
			{
				id: 2,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
			{
				id: 3,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
			{
				id: 4,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
			{
				id: 5,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
			{
				id: 6,
				img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
				name: 'Product Name',
				price: 'Rp. 100.000',
			},
		],
	};

	return (
		<Layout>
			<div className='flex justify-center items-center'>
				<div className='bg-slate-100 h-auto p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{state.products.map((product) => {
						return <CardProduct key={product.id} img={product.img} price={product.price} name={product.name} />;
					})}
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
