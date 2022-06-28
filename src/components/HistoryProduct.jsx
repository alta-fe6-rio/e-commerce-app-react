

const HistoryProduct = ({ item, img, price, name, total, qty }) => {
    return (
        <div>
            <div className="ml-44 pt-10">
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
                    <div className="flex ml-auto  mr-3 justify-center items-center w-1/4 bg-white rounded-lg border-2 border-gray-300">
                        {qty}
                    </div>
                    <h1 className='font-bold ml-auto mr-3'>{total}</h1>
                    <div className="text-white">
                        <button className="bg-[#4ADE80] px-2 py-1 m-1 rounded-sm">Order Success</button>
                        <button className="bg-[#F87171] px-2 py-1 m-1 rounded-sm">Order Canceled</button>
                    </div>
                </div>
            </div>
            <div>
                <hr className="h-1 bg-black/5 mb-5" />
            </div>
        </div>
    )
}

export default HistoryProduct