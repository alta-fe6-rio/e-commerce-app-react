

const HistoryProduct = ({ item, img, price, name, total, qty }) => {
    return (
        <div>
            <div className="lg:ml-32 md:ml-16 ml-8 pt-10">
                <h1>{item}</h1>
            </div>
            <div className='flex lg:flex-row md:flex-row flex-col lg:mx-36 md:mx-16 mx-4 my-8'>
                <div className='flex lg:justify-start md:justify-start justify-center'>
                    <img src={img} alt={img} width={250} height={300} />
                </div>
                <div className="lg:ml-12 md:ml-6 ml-3 mt-5">
                    <h3 className='font-bold mb-1'>{name}</h3>
                    <h3>{price}</h3>
                </div>
                <div className="lg:ml-auto md:ml-auto ml-0 mt-5 flex lg:flex-col md:flex-col flex-row justify-evenly">
                    <div className="flex lg:ml-auto md:ml-auto ml-0 lg:mr-3 md:mr-3 mr-0 justify-center items-center lg:w-1/2 md:w-1/2 w-1/6 bg-white rounded-lg border-2 border-gray-300">
                        {qty}
                    </div>
                    <h1 className='font-bold lg:ml-auto md:ml-auto ml-0 lg:mr-3 md:mr-3 mr-0'>Total Price: {total}</h1>
                    <button className="bg-[#4ADE80] px-2 py-1 m-1 rounded-sm text-sm text-white">Success</button>
                    <button className="bg-[#F87171] px-2 py-1 m-1 rounded-sm text-sm text-white">Canceled</button>
                </div>
            </div>
            <div>
                <hr className="h-1 bg-black/5 mb-5" />
            </div>
        </div>
    )
}

export default HistoryProduct