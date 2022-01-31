import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminPanel from './pages/AdminPanel';
import MyNavbar from './components/MyNavbar';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import ButtonBot from './components/ButtonBot';
import FavoritePage from './pages/FavoritePage';


const MyRoutes = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
            <MyNavbar/>
            <ButtonBot/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/like" element={<FavoritePage/>}/>
            </Routes>
            </BrowserRouter>
        </AuthProvider>

    );
};

export default MyRoutes;