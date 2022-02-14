import React, { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import './global/styles.css'
import { Button } from "./components/elements";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
        }, 2500);},[])

  return (
    <div> 
         <Loading className={ loading ? "loading" : "loading active"}/>
         <Button >boton vero</Button>
    </div>
  );
}

export default App;
