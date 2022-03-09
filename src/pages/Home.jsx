import React from "react";
import { Link} from 'react-router-dom'
import { Bienvenida, ContainerHome,} from "../components/elements";
import { Button, ImgBannerHome, SupDiv } from "../components/elements";
import { Saldo } from "../components/elements";
import { Padre } from "../components/elements";
import { FaDollarSign } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import {Portada1} from '../global/img/images';




const Home = () => {
  return (
    <ContainerHome>

      <ImgBannerHome>
                <img src={Portada1} alt=""/>
      </ImgBannerHome>

      <Bienvenida>
        Bienvenido al Sistema de Estacionamiento <br /> Inteligente
      </Bienvenida>

      <Saldo>
        <p>TU SALDO PARA ESTACIONAR ES:</p>
      </Saldo>
      <br></br>
      <Padre>
        <Link to='/profile'><Button><FaCarSide /> Estacionar  </Button></Link> 
        <Link to='/profile'><Button><FaDollarSign /> Carga de saldo </Button></Link> 
        <Link to='/profile'><Button><FaUserAlt /> Perfil </Button></Link> 
        <Link to='/profile'><Button><FaInfo />Informacion Útil </Button></Link> 
      </Padre>


      </ContainerHome>
  );
};

export default Home;
