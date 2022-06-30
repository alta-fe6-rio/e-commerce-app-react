import Layout from "../components/Layout";
import HistoryProduct from "../components/HistoryProduct";
import axios from 'axios';
import { useState, useEffect } from "react";


const History = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = () => {
        axios({
            method: 'get',
            url: 'http://34.68.188.197:80/order',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <Layout>
            <div className='bg-white lg:w-[95%] md:w-[95%] sm:w-[100%] m-auto h-full'>
                <div>
                    {orders.map((order) => {
                        return <HistoryProduct key={order.id} item={order.item} img={order.img} price={order.price} name={order.name} total={order.total} qty={order.qty} />
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default History