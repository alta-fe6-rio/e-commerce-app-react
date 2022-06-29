import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const DetailProduct = ({ img, price, name, desc }) => {
    const handleAddCart = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to Cart',
        })
    }


    return (
        <div className='w-full h-full'>
            <div className='mt-6'>
                <div className='lg:flex-row md:flex-col flex flex-col lg:py-32 md:py-20 py-10 lg:mx-12 md:mx-10 mx-2'>
                    <div className=''>
                        <img src={img} alt={img} width={800} height={850} />
                    </div>
                    <div className='lg:ml-16 md:ml-0 ml-0 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 md:mt-8 mt-5'>
                        <h3 className='font-bold text-xl'>{name}</h3>
                        <h3 className='font-bold text-xl'>{price}</h3>
                        <button className='flex items-center lg:mt-10 md:mt-8 mt-3 justify-center w-1/2 gradient-b-dark py-2 rounded-md text-white' onClick={() => handleAddCart()}>
                            <span>
                                <FaCartPlus />
                            </span>
                            <span>Add to Cart</span>
                        </button>
                        <p className='font-semibold text-lg mt-5 mb-2'>Product Description</p>
                        <h3>{desc}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct