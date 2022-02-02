import React, { useEffect, useReducer, useState } from 'react';
import {onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, firestore} from '../firebase';

import {addDoc, collection, doc, getDocs, query, where, setDoc,deleteDoc} from 'firebase/firestore'



export const AuthContext = React.createContext();



const INIT_STATE = {
    user: null,
    products: null,
    zakaz: null,
}

const reducer = (state, action) => {
   switch(action.type){

    case "CHECK_USER":
        return {...state, user: action.payload};
    case "GET_PRODUCTS":
        return { ...state, products: action.payload}      
    default:
        return state;    
   }
} 
const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const checkUser = () => {
        onAuthStateChanged(auth,(user) => {
            let action = {
                type: "CHECK_USER",
                payload: user,
            };
            dispatch(action)
        })


    }
    const googleProvider = new GoogleAuthProvider()
    
    const loginGoogle = async () => {
        try{
          await signInWithPopup(auth, googleProvider)
          checkUser()
        } catch(error){
            console.log(error)
        }
    }
    const logout = async () => {
        try{
            await signOut(auth)
        } catch(error){
            console.log(error)
        }
      }

      const signUp = async (email, password) => {
        try{
          await createUserWithEmailAndPassword(auth, email, password)
          checkUser()
        } catch(error){
            switch (error.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailError(error.message);
                  break;
                case "auth/weak-password":
                  setPasswordError(error.message);
                  break;
                  default:
                      console.log(error)
              }
        }
    }

    const signIn = async (email, password) => {
        try{
          await signInWithEmailAndPassword(auth, email, password)
          checkUser()
        } catch(error){
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError("Не правилный email");
                  break;
                case "auth/wrong-password":
                  setPasswordError("Не правилный пароль");
                  break;
                  default:
                      console.log(error)
              }
        }
    }

    const addProductsCart = async (newProduct) => {
        try{
            // console.log(state.user.uid)
           await setDoc(doc( firestore, "users", `${state.user.uid}`), {
               products: {
                [newProduct.docId]:newProduct
               }
               
           }, {merge:true})
        } catch(error){
            console.log(error)
        }
    }

    const addProduct = async (newProduct) => {
        try{
            // console.log(state.user.uid)
            await addDoc(collection( firestore, "products"), {
                userId: state.user.uid,
                ...newProduct
            })
        } catch(error){
            console.log(error)
        }
    }

    const addZakaz = async (newZakaz) => {
        try{
            // console.log(state.user.uid)
            await addDoc(collection( firestore, "zakaz"), {
                userId: state.zakaz.uid,
                ...newZakaz
            })
        } catch(error){
            console.log(error)
        }
    }
    
    const addProductZakaz = async (newZakaz) => {
        try{
            // console.log(state.user.uid)
           await setDoc(doc( firestore, "zakaz", `${state.user.uid}`), {
               products: {
                [newZakaz.docId]:newZakaz
               }
               
           }, {merge:true})
        } catch(error){
            console.log(error)
        }
    }

    const getProducts = async () => {
        try{
            if(state.user){
            const data = await getDocs(query(collection(firestore, "products")))
            const products = [];
            data.forEach((doc) => {
                products.push({...doc.data(), docId: doc.id})
            })
            let action = {
                type: "GET_PRODUCTS",
                payload: products,
            }
            dispatch(action)
        }
        } catch(error){
            console.log(error)
        }
    }
    const handleDelete = async(id) => {
        await deleteDoc(doc(firestore, "products", id))
    }



    
    const saveEditProduct = async(product) => {
        const cityRef = doc(firestore, 'products', product.docId);
        await setDoc(cityRef, product).then(()=>{console.log("Updated!")}).catch((err)=>console.log(err));
    }


    useEffect(() => {
        checkUser()
    },[])

    

    return (
        <AuthContext.Provider value={{
            user: state.user,
            logout,
            loginGoogle,
            signUp,
            signIn,
            passwordError,
            emailError,
            addProduct,
            getProducts,
            saveEditProduct,
            products: state.products,
            addProductsCart,
            handleDelete,
            addZakaz,
            addProductZakaz
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;