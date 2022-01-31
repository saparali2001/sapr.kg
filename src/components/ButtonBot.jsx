import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Cart from '../img/grocery-store.png'
import Home from '../img/home.png'
import Like from '../img/like.png'
import Plus from '../img/plus.png'

const ButtonBot = () => {
    const {user} = React.useContext(AuthContext)
    return (
        <div className="bottom-btn container">
            <Link onClick={() => (window.scroll(0, 0))} to="/">
               <img src={Home} alt="" />
            </Link>
            <Link className='cart-bot' to="/cart">
                       <img src={Cart} alt="cart" />
                    </Link>
                    {
                      user?(
                        <Link className='bo-btn' to="/admin">
                          <p>+</p>
                          <div className="top">

                          </div>
                        </Link>
                      ):(
                        <Link className='bo-btn' to="/login">
                          <img src={Plus} alt="" />
                        </Link>
                      )
                    }
                    <Link to="/like">
                      <img src={Like} alt="" />
                    </Link>
                  
        </div>
    );
};

export default ButtonBot;