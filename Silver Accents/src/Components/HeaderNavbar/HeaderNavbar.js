import React from 'react';
import {signIn} from '../Actions/actions';
const HeaderNavbar = () => {
    return (
        <div className = 'headerNavbar'>
            <div className = "accountCartBlcok">
                <i className="fa fa-user" onClick = { signIn }><span>My Account</span></i>
                <i className="fa fa-heart"><span>Saved Items</span></i>
                <i className="fa fa-shopping-cart"><span>Cart</span></i>
            </div>
            <div className = 'logo'></div>
            
            <div className = 'navBar'>
                <nav>
                    <ul>
                        <a><li className = 'effect-box'>HOME</li></a>
                        <a><li className = 'effect-box'>NECKLACES</li></a>
                        <a><li className = 'effect-box'>RINGS</li></a>
                        <a><li className = 'effect-box'>EARRINGS</li></a>
                        <a><li className = 'effect-box'>BRACELETS</li></a>
                    </ul>
                </nav>
            </div>
            <div className = 'hr' ></div>
        </div> );
}
export default HeaderNavbar;