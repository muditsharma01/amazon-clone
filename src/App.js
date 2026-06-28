import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration
} from "react-router-dom";
import { productsData } from './api/api';
import Signin from './components/Signin';
import Cart from './pages/Cart';
import FooterTop from './components/Footer/FooterTop';
import ProductCard from './components/Home/ProductCard';
import PaymentInput from './pages/PaymentInput';
import Register from './components/Registration';

const Layout=()=>{
  return (
    <div>
      <Header title={"example"}/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements
    (
      <>
    <Route path="/" element={<Layout/>} >
      <Route index element={<><Home/> <FooterTop/></>} loader={productsData}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/payment" element={<PaymentInput/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    

    </>
    ));
   
  return (
    <>
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}>
        </RouterProvider>
    </div>
    
    </>
  );
}

export default App;
