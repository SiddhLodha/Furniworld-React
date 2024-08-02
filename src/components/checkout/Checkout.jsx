// Checkout.js
import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { getTotalCartAmount, all_product, cartItems, clearCart } = useContext(ShopContext);
    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        contact: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setShippingInfo({
            ...shippingInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.contact) {
            alert('Please fill in all fields');
            return;
        }

        const orderNumber = Math.floor(Math.random() * 1000000);
        clearCart(); // Clear the cart
        navigate('/confirmation', { state: { orderNumber } });
    };

    return (
        <div className='checkout'>
            <div className='order-summary'>
                <h1>Order Summary</h1>
                <div className="order-summary-headers">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        const itemTotal = parseFloat(e.new_price) * cartItems[e.id];
                        return (
                            <div key={e.id}>
                                <div className='order-item'>
                                    <img src={e.image} alt="" className='order-item-image' />
                                    <p>{e.p_name}</p>
                                    <p>₹{parseFloat(e.new_price).toFixed(2)}</p>
                                    <p>{cartItems[e.id]}</p>
                                    <p>₹{itemTotal.toFixed(2)}</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <h2>Total: ₹{getTotalCartAmount().toFixed(2)}</h2>
            </div>
            <div className='shipping-info'>
                <h1>Shipping Information</h1>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={shippingInfo.name}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='address'
                    placeholder='Address'
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name='contact'
                    placeholder='Contact Number'
                    value={shippingInfo.contact}
                    onChange={handleInputChange}
                />
                <Link to = '/confirmation'><button onClick={handleSubmit}>Proceed to Confirmation</button></Link>
            </div>
        </div>
    );
};

export default Checkout;
