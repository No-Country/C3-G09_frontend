import React from "react";
import { Banner } from "../components/elements";
import { Bienvenida } from "../components/elements";
import { Button } from "../components/elements";
import { Saldo } from "../components/elements";
import { Padre } from "../components/elements";
import { Footer } from "../components/elements";
import { FaDollarSign } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';




const Home = () => {
  return (
    <div>
      <Banner>
        <h1>Park App </h1>
      </Banner>

      <Bienvenida>
        <p>Bienvenido al Sistema de Estacionamiento Inteligente</p>
      </Bienvenida>

      <Saldo>
        <p>TU SALDO PARA ESTACIONAR ES:</p>
      </Saldo>
      <Padre>
        <Button> Estacionar<br></br> <FaCarSide size={"5vw"}/> </Button>
        <Button>Carga de saldo <br></br><FaDollarSign size={"5vw"}/> </Button>
        <Button>Perfil <br></br><FaUserAlt size={"5vw"}/></Button>
        <Button>Informacion Útil <br></br> <FaInfo size={"5vw"} /></Button>
      </Padre>
<Footer>

  <p>
   \ •  Grupo n° 9 • /
  </p>

</Footer>

    </div>
  );
};

export default Home;
