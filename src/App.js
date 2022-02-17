import React, { Fragment as div, useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Login from "./pages/Login";
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
            <Login/>
        </div>
    </div>
  );
}

export default App;
