import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminPanel from './pages/AdminPanel';
import MyNavbar from './components/MyNavbar';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import MainProvider from './context/MainProvider';
import ButtonBot from './components/ButtonBot';
import FavoritePage from './pages/FavoritePage';
import Footer from './components/Footer';
import Zajazy from './pages/Zajazy';


const MyRoutes = () => {
    return (
        <MainProvider>
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
                <Route path="/zakaz" element={<Zajazy/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </AuthProvider>
        </MainProvider>
    );
};

export default MyRoutes;