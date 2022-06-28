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
            <div className='mx-14 mt-6'>
                <div className='flex py-32 mx-28'>
                    <div className='mr-20'>
                        <img src={img} alt={img} width={800} height={850} />
                    </div>
                    <div>
                        <h3 className='font-bold text-xl'>{name}</h3>
                        <h3 className='font-bold text-xl'>{price}</h3>
                        <button className='flex items-center mt-10 justify-center w-1/2 gradient-b-dark py-2 rounded-md text-white' onClick={() => handleAddCart()}>
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