/** @format */

import Layout from '../components/Layout';

const EditProduct = () => {
	return (
		<Layout>
			<div className='bg-white p-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<div>
						<label for='image-upload'></label>
						<input type='file' multiple name='image-upload' id='img-upload' />
					</div>
					<div className='col-span-2'>
						<form method='post' className='space-y-4'>
							<input type='text' placeholder='Product Name' className='input-form' />
							<select className='input-form'>
								<option value='0'>Select</option>
								<option value='1'>Sepatu Casual</option>
								<option value='2'>Sepatu Sport</option>
							</select>
							<input type='text' placeholder='Price' className='input-form' />
							<input type='text' placeholder='Adress' className='input-form' />
							<textarea rows='7' placeholder='Edit your product detail' className='input-form resize-none'></textarea>
							<button className='button-form gradient-b-dark'>Confirm</button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default EditProduct;
