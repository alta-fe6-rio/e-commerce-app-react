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
                <div className='lg:flex-row md:flex-col flex flex-col lg:py-32 md:py-20 py-10 lg:mx-28 md:mx-24 mx-5'>
                    <div className='flex md:justify-center sm:justify-center'>
                        <img src={img} alt={img} width={550} height={600} />
                    </div>
                    <div className='lg:w-[50%] md:w-[90%] w-[90%] lg:ml-14 md:ml-18 ml-0 lg:mt-2 md:mt-8 mt-5'>
                        <h3 className='font-bold lg:text-2xl md:text-xl text-lg mb-2'>{name}</h3>
                        <h3 className='font-semibold lg:text-2xl md:text-xl text-lg'>{price}</h3>
                        <button className='flex items-center lg:mt-10 md:mt-8 mt-3 mb-10 justify-center w-1/2 gradient-b-dark py-2 rounded-md text-white' onClick={() => handleAddCart()}>
                            <span>
                                <FaCartPlus />
                            </span>
                            <span>Add to Cart</span>
                        </button>
                        <p className='font-semibold lg:text-lg md:text-lg text-md mt-5'>Product Description</p>
                        <h3 className='ml-2'>{desc}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct