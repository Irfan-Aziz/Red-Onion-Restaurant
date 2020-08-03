import React from 'react';
import './MenuBar.css';

const MenuBar = (props) => {
    return (
        <div className="bar">
            <button onClick={()=>props.handleMenu('breakfast')}
            className={`menu-toggle ${props.foodCategory==='breakfast'?'text-danger':''}`}
            >Breakfast</button>
            <button onClick={()=>props.handleMenu('lunch')}
            className={`menu-toggle ${props.foodCategory==='lunch'?'text-danger':''}`}
            >Lunch</button>
            <button onClick={()=>props.handleMenu('dinner')}
            className={`menu-toggle ${props.foodCategory==='dinner'?'text-danger':''}`}
            >Dinner</button>
        </div>
    );
};

export default MenuBar;