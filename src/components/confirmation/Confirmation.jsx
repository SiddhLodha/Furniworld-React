// Confirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './Confirmation.css';

const Confirmation = () => {
    const location = useLocation(); 
    const { orderNumber } = location.state || {}; 

    return (
        <div className='order-confirmation'>
            <h1>Thank You for Your Order!</h1>
            <p>Your order has been successfully placed.</p>
            <h2>Order Number: {orderNumber || 'N/A'}</h2>
            <p>Status: Processing</p>
        </div>
    );
};

export default Confirmation;
