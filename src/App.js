import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Register from './component/Register/Register';
import SignIn from './component/SignIn';
import Cart from './component/Cart/Cart';
import Error from './component/Error/Error'
// import Footer from './common/Footer/Footer';
import NavBar from './common/NavBar/NavBar';
const App=()=>{

  return(
    <div>
           

      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>


      </Routes>
      </BrowserRouter>





      {/* <Product/>
      <Cart/>
      <SignIn/>
      <Register/> */}
      {/* <Footer/> */}
    </div>
  )
}
export default App;