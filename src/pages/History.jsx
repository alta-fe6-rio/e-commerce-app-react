import Layout from "../components/Layout";
import HistoryProduct from "../components/HistoryProduct";


const History = () => {
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
            <div className='bg-white lg:w-[95%] md:w-[95%] sm:w-[100%] m-auto h-full'>
                <div>
                    {state.carts.map((cart) => {
                        return <HistoryProduct key={cart.id} item={cart.item} img={cart.img} price={cart.price} name={cart.name} total={cart.total} qty={cart.qty} />
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default History