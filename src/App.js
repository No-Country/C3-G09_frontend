import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import React, {useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserDate from "./pages/UserDate";






function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        }, 2500);},[])

  return (
    <div>

      <Restriction/>
      <Loading className={ loading ? "loading" : "loading active"}/>
        
        <div className="app">
        
            {/* <Login/> */}

            {/*  <Pay/>  */ }
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/userdate' element={<UserDate/>}/>

            </Routes>
        </BrowserRouter>
            </div>

    </div>
  );
}

export default App;
