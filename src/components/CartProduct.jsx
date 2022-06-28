
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

const CartProduct = ({ item, img, price, name, total, qty }) => {
    const [newQty, setNewQty] = useState(qty);
    const [newTotal, setNewTotal] = useState(total);

    const handlerAddQty = () => {
        setNewQty(newQty + 1)
        setNewTotal(newTotal + price)
    }
    const handlerMinQty = () => {
        setNewQty(newQty - 1)
        setNewTotal(newTotal - price)
    }


    return (
        <div>
            <div className="ml-44">
                <h1>{item}</h1>
            </div>
            <div className='flex mx-48 my-8'>
                <div className=''>
                    <img src={img} alt={img} width={250} height={300} />
                </div>
                <div className="ml-12 mt-5">
                    <h3 className='font-bold mb-1'>{name}</h3>
                    <h3>{price}</h3>
                </div>
                <div className="ml-auto mt-5 flex flex-col justify-evenly">
                    <div className="flex items-center px-2 bg-white rounded-lg border-2 border-gray-300">
                        <div>
                            {newQty}
                        </div>
                        <div className="flex flex-col ml-auto py-1">
                            <button onClick={() => handlerAddQty()}>
                                <MdArrowDropUp />
                            </button>
                            <button onClick={() => handlerMinQty()}>
                                <MdArrowDropDown />
                            </button>
                        </div>
                    </div>
                    <h1 className='font-bold'>{newTotal}</h1>
                    <FaRegTrashAlt className="text-gray-500" />
                </div>
            </div>
            <div>
                <hr className="h-1 bg-black/5 mb-5" />
            </div>
        </div>
    );
};

export default CartProduct