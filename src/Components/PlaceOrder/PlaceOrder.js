import React from 'react';
import { useState } from 'react';
import Address from '../Address/Address';
import Cart from '../Cart/Cart';

const PlaceOrder = () => {
    const [formComplete,setFormComplete]=useState(false);
    const handleForm=e=>{
        setFormComplete(true)
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <Address handleForm={handleForm}></Address>
                </div>
                <div className="col-md-5">
                    <Cart formComplete={formComplete}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default PlaceOrder;