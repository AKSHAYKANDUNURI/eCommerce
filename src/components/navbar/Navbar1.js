import React, { useState } from 'react';
import logo from '../assests/logo.png';
import cart_icon from '../assests/cart_icon.png';
import './Navbar1.css';
import { NavLink } from 'react-router-dom';

const Navbar1 = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=""></img>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><NavLink to='/' style={{textDecoration :'none'}}>Shop</NavLink>{menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("men")}><NavLink to='/men'  style={{textDecoration :'none'}}>Men</NavLink> {menu === "men" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("women")}> <NavLink to='/women'  style={{textDecoration :'none'}}>Women</NavLink> {menu === "women" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("kids")}><NavLink to='/kids'  style={{textDecoration :'none'}}>Kids</NavLink>{menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <NavLink to='/login'>  <button>Login</button> </NavLink>
                <NavLink to='/cart'><img src={cart_icon} alt='' /></NavLink>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    );
};

export default Navbar1;
