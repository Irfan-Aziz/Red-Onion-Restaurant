import React, { useState } from 'react';
import './SubMenu.css'
import fakeData from '../../hot-onion-restaurent-resources-master/fakeData'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';



const SubMenu = (props) => {
    return (
        <div className="container checkout">
            <div className="row">
                {
                    props.foodMenu.map(item=>{
                        return <Item
                        item={item}
                        handleItem={props.handleItem}
                        ></Item>
                    })
                }
            </div>
            <br />
            
            <Link to='/signup'>
            <button
            className="btn btn-danger "
            disabled={props.emptyCart}
            onClick={props.handleOrder}
            >Checkout Your Food</button>
            
            </Link>
            
        </div>
    );
};

export default SubMenu;