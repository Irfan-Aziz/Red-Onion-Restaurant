import React from 'react';
import './Rider.css';
import { useAuth } from '../useAuth/useAuth';
import bike from '../../resources/Image/Group1151.png'
import helmet from '../../resources/Image/Group1152.png'
const Rider = () => {
    const auth=useAuth();
    return (
        <div className="rider-desc">
            <img className="w-25" src={bike} alt=""/>
            <div className="greetings">
                <p>Hello, <strong>{auth.user.name}</strong>!</p>
                <p>I'm on my way! Start setting your table.</p>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-3">
                    <img className="w-100" src={helmet} alt=""/>
                </div>
                <div className="col-6 text-left">
                    Your Rider
                    01700000000
                </div>
            </div>
            <div className="btn btn-danger">Contact</div>
            
        </div>
    );
};

export default Rider;