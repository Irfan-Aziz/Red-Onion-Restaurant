import React, { useState } from 'react';
import fakeData from '../../resources/fakeData';
import MenuBar from '../MenuBar/MenuBar';
import SubMenu from '../SubMenu/SubMenu';
import ItemDetail from '../ItemDetail/ItemDetail';


const Menu = () => {
    const [foodCategory,setFoodCategory]=useState('lunch');
    const [foodItem,setFoodItem]=useState(null);
    const [foodMenu,setFoodMenu]=useState(
        fakeData.filter(item=>{
            return item.type===foodCategory;
        })
    )
    const [cart,setCart]=useState(
        sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart')):[]
    )
    const handleMenu=category=>{
        setFoodCategory(category);
        setFoodMenu(fakeData.filter(item=>{
           return item.type===category
        }))
        setFoodItem(null);
    }
    const handleItem=item=>{
        setFoodItem(item);
        setFoodCategory('');
    }
    const handleCart=(item,quantity)=>{
        const newCart=cart.filter(ob=>ob.title!==item.title);
        setCart([...newCart,{
            title:item.title,
            image:item.image,
            price:item.price,
            quantity:quantity
        }])
        setFoodItem(null);
        setFoodCategory(item.type);
    }
    const handleOrder=()=>{
        sessionStorage.setItem('cart',JSON.stringify(cart))
    }
    return (
        <div>
            <MenuBar
            handleMenu={handleMenu}
            foodCategory={foodCategory}
            ></MenuBar>
            {
                foodItem?
                <ItemDetail item={foodItem}
                handleCart={handleCart}
                ></ItemDetail>:
            <SubMenu
            foodMenu={foodMenu}
            handleItem={handleItem}
            handleOrder={handleOrder}
            emptyCart={!cart.length}

            ></SubMenu>    
            }
            
        </div>

    );
};


export default Menu;