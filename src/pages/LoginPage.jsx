import React, { useContext, useState } from 'react';
import { Button, Tab, Tabs} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import GoogleIcons from '../img/google.png'
import FicbookIcons from '../img/ficebook.png'
import WcontactIcons from '../img/wkontact.png'

import EmailIcon from '../img/email.png'
import PosswIcon from '../img/possw.png'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loginGoogle, user, signUp, signIn, passwordError, emailError} = useContext(AuthContext)
    
    const handleSignUp = async(e) =>{
        e.preventDefault()
        try{
            await signUp(email, password)
            // return <Navigate to="/" />
        }catch(error){
            console.log(error)
        }

    }

    const handleSignIn = async (e) => {
      e.preventDefault()
        try{
            await signIn(email,password)
        } catch(error){
            console.log(error)
        }
    }
    if(user){
        return <Navigate to="/"/>
    }

    return (
       <div className="login-back">
         

           <div className='reg-modal'>
               <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
               <Tab eventKey="home" title="Войти">
                   <div className="saits">
                       <div  className='m-2'><img src={FicbookIcons} alt="" /></div>
                       <div className='m-2' onClick={loginGoogle}><img src={GoogleIcons} alt="" /></div>
                       <div className='m-2'><img src={WcontactIcons} alt="" /></div>
                   </div>
                   <form className='login'>
                       <div className="inputs">
                            <img src={EmailIcon}/>   
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Введите email'/>
                       </div>
                       <div className="inputs">
                            <img src={PosswIcon }/>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Введите пороль'/>
                       </div>
                       <p className='error'>{passwordError}</p>
                       <p className='error'>{emailError}</p>
                       <button onClick={handleSignIn}>Войти</button>
                   </form>
               </Tab>
               <Tab  className='reg' eventKey="profile" title="Регистрация">
                   <div className="saits">
                       <div  className='m-2'><img src={FicbookIcons} alt="" /></div>
                       <div className='m-2' onClick={loginGoogle}><img src={GoogleIcons} alt="" /></div>
                       <div className='m-2'><img src={WcontactIcons} alt="" /></div>
                   </div>
                   <form className='login'>
                       <div className='inputs'> 
                            <img src={EmailIcon}/>
                            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Введите email'/>
                       </div>
                       <div className="inputs">
                            <img src={PosswIcon }/>
                            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Введите пороль'/>
                       </div>
                       <div className="inputs">
                       <img src={PosswIcon }/>
                           <input type="text" placeholder='Введите пороль повторно'/>
                       </div>
                       <button onClick={handleSignUp} >Зарегистрироваться</button>
                   </form>
               </Tab>
                   
               </Tabs>
           </div>
      
       </div>
    );
};

export default LoginPage;