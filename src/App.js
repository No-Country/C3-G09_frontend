import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import React, {useEffect, useState, useReducer } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserDate from "./pages/UserDate";
import Pay from "./pages/Pay";
import Politicas from "./pages/politicas";
import { authReducer } from './auth/authReducer';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        }, 1500);},[])
   
        const init = ()=> {
          return  JSON.parse(localStorage.getItem('user')) || {logged:false}
      }
  
      
      const [user, dispatch] = useReducer(authReducer, {}, init)
  
      useEffect(() => {
          localStorage.setItem('user', JSON.stringify(user))
      }, [user])


  return (
    <div>

      <Restriction/>
      <Loading className={ loading ? "loading" : "loading active"}/>
        
        <div className="app">
        
          
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/userdate' element={<UserDate/>}/>
            <Route path='/pay' element={<Pay/>} />
            <Route path='/politicas' element={<Politicas/>} />
            

            </Routes>
        </BrowserRouter>
            </div>

    </div>
  );
}

export default App;
