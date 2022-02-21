import React, { Fragment as div, useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        }, 2500);},[])

  return (
    <div>
      <Router>
        <Restriction/>
          <div className="app">         
              <Loading className={ loading ? "loading" : "loading active"}/>              
          </div>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
