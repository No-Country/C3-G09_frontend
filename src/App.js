import React, {useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import Restriction from "./pages/Restriction";
import './app.css'
import Pay from "./pages/Pay";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm"
import AddMoney from "./pages/AddMoney";

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
          
            {/* <Home/> */} 

          {/*   <Confirm/> */} 

             <AddMoney/>


        </div>
    </div>
  );
}

export default App;
