import React from 'react';
import './Header.css'
import logo from '../hot-onion-restaurent-resources-master/screenshots/logo2.png'
import Auth from '../Components/useAuth/useAuth';
const Header = () => {
    
    return (
        
        <div className="cover">
            <h1>Best Food Waiting for Your Belly</h1>
            <form action="">
            <input type="text" class="search-bar" placeholder="search..."/>
            <input type="submit" value="search" className="search-btn"/>
            </form>
            
        </div>
        
    );
};

export default Header;