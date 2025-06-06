import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('https://tour-mania-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted]);
    //delete method 
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://tour-mania-server.vercel.app/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result.deletedCount)
                if (result.deletedCount) {
                    setIsDeleted(true)
                }
                else {
                    setIsDeleted(false)
                }
            });
        alert('Are You sure to DELETE?');
    };
    return (
        <div className='container my-4'>
            <h3 className="text-center mb-4 fw-bold"> Total Event Booked : {orders.length}</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Payment By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            <td>{pd?.place}</td>
                            <td align="center"> <button onClick={() => handleDelete(pd?._id)} className="btn btn-danger px-2"><i class="far fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default Orders;