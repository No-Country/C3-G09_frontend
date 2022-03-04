import React from "react";

import {
   HeaderPago,
    Hr,
    Monto,
    ContainerPago,
    CircleDiv,
    DatosDiv,
    Logo,
    ConfirmarPago,
   } from "../components/elements";

import { Visadeb } from "../global/imges/images";
import { ellipse } from "../global/imges/images";



const Pay = () => {
  return (
    <div>
      <ContainerPago>

        <HeaderPago>
          <p>Confirmá tu compra </p>
        </HeaderPago>

       

        <Monto>
       
          <p>Monto</p>
          <p> $ 200</p>
         
        </Monto>

        <Hr></Hr>
        <Logo>
        <img src={Visadeb} alt="imagen" />
         
        </Logo>
       

        <CircleDiv> 
         <p> Visa Debito ****1711 <br/>
         <br />
          Pagás $200
          </p>
          <button>Modificar medio de pago</button>
         
        </CircleDiv>
        <Hr></Hr>

        <DatosDiv>
        <Logo>
        <img src={ellipse} alt="imagen" />
         
        </Logo>
          <p>
          Datos para factura<br />
          <br />
            Juan Perez DNI 34251256
            <br />
          </p>
          <button>Modificar</button>
        </DatosDiv>

        <ConfirmarPago>
          <p>Confirmar la carga</p>
        </ConfirmarPago>
        
      </ContainerPago>


    </div>
  );
};

export default Pay;
