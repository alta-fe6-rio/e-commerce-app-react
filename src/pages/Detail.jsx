/** @format */

import Layout from '../components/Layout';
import DetailProduct from '../components/DetailProduct';

const Detail = () => {
	const state = {
		id: 1,
		img: 'https://media.istockphoto.com/photos/bigeyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-picture-id1199279669?b=1&k=20&m=1199279669&s=170667a&w=0&h=munUsqGIlDAmKK0ouS12nHCuzDdoDfvNalw_hHvh6Ls=',
		name: 'Product Name',
		price: 'Rp. 1000.000',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab labore autem esse perferendis, nemo id ut sint voluptatem libero in quas quaerat voluptas reprehenderit maxime, dolor temporibus sunt explicabo!'
	}



	return (
		<Layout>
			<div className='bg-white w-[95%] m-auto h-full'>
				<DetailProduct key={state.id} img={state.img} price={state.price} name={state.name} desc={state.desc} />
			</div>
		</Layout >
	);
};

export default Detail;
