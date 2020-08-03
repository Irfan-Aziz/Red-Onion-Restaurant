import React from 'react';
import SubMenu from '../SubMenu/SubMenu';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import Detail from '../Details/Detail';
import Header from '../../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
            <Detail></Detail>
        </div>
    );
};

export default Home;