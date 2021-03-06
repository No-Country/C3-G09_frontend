import React, {useEffect} from 'react'
import { useState } from 'react'
import '../index.css'

const Restriction = () => {
const [wScreen, setWscreen] = useState(window.innerWidth)
const changeWidth =()=>{
    setWscreen(window.innerWidth)
}

    useEffect(() => {
        window.addEventListener('resize', changeWidth) 
        
        return ()=>{
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    
  return (
    <div className='restriction'>
       <h3>Por ahora solo puedes utilizar ParkApp desde dispositivos moviles</h3> 
       <h6>reduce el ancho de tu pantalla a  720px para utilizarlo desde tu PC</h6>
       <h3>El ancho de tu pantalla es:</h3>
       <h1>{wScreen}px</h1>
    </div>
  )
}

export default Restriction