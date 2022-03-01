import React from 'react'
import { ContainerLogin, ButtonsBox, CloseSesion } from '../components/elements'
import { Link } from 'react-router-dom'
import {MdChevronRight, MdLogout} from 'react-icons/md'
import HeadProfil from '../components/HeadProfil'

const Profile = () => {
  return (
    <ContainerLogin>
        <HeadProfil/>     
        <ButtonsBox>
            <ul>
                <li>Datos de usuario <Link to='/userdate'><span><MdChevronRight/></span></Link> </li>
                <li>Vehículos asociados <span><MdChevronRight/></span></li>
                <li>Estacionamientos históricos <span><MdChevronRight/></span></li>
                <li>Seguridad <span><MdChevronRight/></span></li>
                <li>Necesito ayuda <span><MdChevronRight/></span></li>
            </ul>
        </ButtonsBox>
         <CloseSesion>
           <span><MdLogout/></span><a>Cerrar sesión</a> 
        </CloseSesion>
    </ContainerLogin>
  )
}

export default Profile