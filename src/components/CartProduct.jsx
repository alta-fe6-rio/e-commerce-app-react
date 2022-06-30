
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";


const CartProduct = ({ item, image, price, name, total, qty, onClick }) => {
    const numQty = +qty;
    const numTotal = +total;
    const numPrice = +price;
    const [newQty, setNewQty] = useState(numQty);
    const [newTotal, setNewTotal] = useState(numTotal);

    const handlerAddQty = () => {
        setNewQty(newQty + 1)
        setNewTotal(newTotal + numPrice)
    }
    const handlerMinQty = () => {
        setNewQty(newQty - 1)
        setNewTotal(newTotal - numPrice)
    }

    return (
        <div className="w-full">
            <div className="lg:ml-44 md:ml-12">
                <h1>{item}</h1>
            </div>
            <div className='flex lg:mx-48 md:mx-30 sm:mx-2 my-8'>
                <div className=''>
                    <img src={image} alt={image} width={250} height={300} />
                </div>
                <div className="lg:ml-12 md:ml-12 ml-2 lg:mt-5 md:mt-4 mt-2">
                    <h3 className='font-bold mb-1'>{name}</h3>
                    <h3>{numPrice}</h3>
                </div>
                <div className="ml-auto flex flex-col justify-evenly ">
                    <div className="flex items-center px-2 bg-white rounded-lg border-2 border-gray-300">
                        <div>
                            {newQty}
                            {console.log(newQty)}
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
                    <h1 className='font-bold'>{total}</h1>
                    {console.log(total)}
                    <FaRegTrashAlt onClick={() => onClick()} className="text-gray-500 ml-auto" />
                </div>
            </div>
            <div>
                <hr className="h-1 bg-black/5 mb-5" />
            </div>
        </div>
    );
};

export default CartProduct