

import Layout from '../components/Layout';
import CartProduct from '../components/CartProduct';

const Cart = () => {
	const state = {
		carts: [
			{
				id: 1,
				item: 'Product 1',
				img: 'https://media.istockphoto.com/photos/bigeyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-picture-id1199279669?b=1&k=20&m=1199279669&s=170667a&w=0&h=munUsqGIlDAmKK0ouS12nHCuzDdoDfvNalw_hHvh6Ls=',
				name: 'Product Name',
				price: 1000000,
				total: 2000000,
				qty: 2,
			},
			{
				id: 2,
				item: 'Product 2',
				img: 'https://media.istockphoto.com/photos/bigeyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-picture-id1199279669?b=1&k=20&m=1199279669&s=170667a&w=0&h=munUsqGIlDAmKK0ouS12nHCuzDdoDfvNalw_hHvh6Ls=',
				name: 'Product Name',
				price: 1000000,
				total: 1000000,
				qty: 1,
			},
			{
				id: 3,
				item: 'Product 3',
				img: 'https://media.istockphoto.com/photos/bigeyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-picture-id1199279669?b=1&k=20&m=1199279669&s=170667a&w=0&h=munUsqGIlDAmKK0ouS12nHCuzDdoDfvNalw_hHvh6Ls=',
				name: 'Product Name',
				price: 1000000,
				total: 1000000,
				qty: 1,
			},
		],
	};





	return (
		<Layout>
			<div className='w-full'>
				<div>
					{state.carts.map((cart) => {
						return <CartProduct key={cart.id} item={cart.item} img={cart.img} price={cart.price} name={cart.name} total={cart.total} qty={cart.qty} />;
					})}
				</div>
				<div className='flex justify-center'>
					<div className="fixed bg-[#F1F1F1/80] backdrop-blur-md w-[80%] h-32 bottom-4 rounded-xl border border-white shadow-md shadow-gray-400">
						<div className='flex mx-16 '>
							<div className='mt-8'>
								<p>Total Barang:</p>
								<p className='font-bold mt-2'>Total Harga:</p>
							</div>
							<div className=' ml-auto mt-10'>
								<button className=' bg-gradient-to-b from-slate-300 to-slate-800 w-56 h-12 text-white border-1 border-white shadow-md shadow-gray-500 rounded-lg'>
									<p>Checkout</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Cart;
