import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'
import BurgerMenu from './BurgerMenu';

import { AuthContext } from '../context/AuthProvider';
import Cart from './Cart';

const MyNavbar = () => {
    const {user, logout} = React.useContext(AuthContext)
    return (
        <div className='navbar'>
            <Container>
              <div className="nav">
                  <div className="logo">
                    <Link to="/">
                       <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <div className="nav-left">
                    {
                      user?(
                        <Link className='podat' to="/admin">
                          <p>Подать обьявления</p>
                        </Link>
                      ):(
                        <Link className='podat' to="/login">
                          <p>Подать обьявления</p>
                        </Link>
                      )
                    }
                  {
                      user?(
                   <div onClick={logout} className='regstr' >
                       <p>Выйти</p>
                    </div>
                      ):(
                        <Link  className='regstr' to="/login">
                        <p>Войти</p>
                     </Link>
                      )
                  }
                    <Link className='cart' to="/cart">
                       <Cart/>
                    </Link>
                    <BurgerMenu className="burger"/>
                   
                  </div>
              </div>
            </Container>
            
        </div>
    );
};

export default MyNavbar;