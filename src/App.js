import './App.css';
// import Thanks from './Pages/ThanksPage/Thanks';
// import Footer from './Components/Footer/Footer';
// import Search from './Pages/SearchPage/Search';
// import About from './Pages/AboutPage/About';
// import Register from './Pages/RegisterPage/Register';
// import Account from './Pages/Account/Account';
// import Payment from './Pages/Payment/Payment';
// import Checkout from './Pages/Checkout/Checkout';
// import Carousel from './Components/Carousel/Carousel';
// import Cart from './Pages/Cart/Cart';
// import Catalog from './Pages/Catalog/Catalog';
// import vector from './assets/vector.svg'
// import Product from './Pages/ProductPage/Product';
// import ProductItem from './Components/ProductItem/ProductItem';
// import Review from './Components/Review/Review';
// import Home from './Pages/Home/Home';
// import Panner from './Components/Panner/Panner';
// import AdminPanel from './Pages/AdminPanel/AdminPanel';
// import AdminPanelBoard from './Pages/AdminPanelBoard/AdminPanelBoard';
// import OrderPanelPage from './Pages/OrderPanelPage/OrderPanelPage';
// import UserPage from './Pages/UserPage/UserPage';
// import ContactUs from './Pages/ContactUs/ContactUs';
// import { useState , useEffect } from 'react';
// import axios from "axios"
import Test from './Pages/Catalog/Test';
// import {Routes , Route , Navigate} from "react-router-dom"
function App() {
  // const [user , setUser] = useState(null)
  // const getUser = async () =>{
  //   try{
  //     const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
  //     const {data} = await axios.get(url , {withCredentials:true})
  //     setUser(data.user._json)
  //   }catch(err){
  //       console.log(err)
  //   }
  // }
  // useEffect(()=>{
  //   getUser();
  // },[])
  return (
    <div className="App">
      <Test/>
      {/* <Footer/> */}
      {/* <Thanks/> */}
      {/* <Search/> */}
      {/* <About/> */}
      {/* <Register user={user}/> */}
      {/* <Account/> */}
      {/* <Payment /> */}
      {/* <Checkout /> */}
      {/* <Cart/> */}
      {/* <Catalog/> */}
  
      {/* <div className="box">
        <img className="vector" alt="Vector" src= {vector}/>
      </div> */}
      {/* <Product/> */}
      {/* <ProductItem/> */}
      {/* <Review/> */}
      {/* <Home/> */}
      {/* <Panner/> */}
      {/* <AdminPanel/> */}
      {/* <AdminPanelBoard/> */}
      {/* <OrderPanelPage/> */}
      {/* <UserPage/> */}
      {/* <ContactUs /> */}
      {/* <Routes > */}
        {/* <Route exact path="/" element={user ? <Home user={user}/> : <Navigate to= "/login"/>}/> */}
        {/* <Route exact path="/" element={user ? <Register user={user}/> : <Navigate to= "/login"/>}/> */}
        {/* <Route exact path="/" element={user ? <Home user={user}/> : <Navigate to= "/login"/>}/> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
