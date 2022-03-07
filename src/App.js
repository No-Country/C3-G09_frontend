import React, {useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
        <div className="app">
            <Loading className={ loading ? "loading" : "loading active"}/>
            {/* <Login/> */}

            {/*  <Pay/>  */ }
            <Route path='/home' element={<Home/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/userdate' element={<UserDate/>}/>
            </div>

    </div>
  );
}

export default App;
