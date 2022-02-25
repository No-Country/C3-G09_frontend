import React from "react";
import { Logo, Listo, ListoDiv, Confirmar } from "../components/elements";

import { Ellipse } from "../global/imges/images";

const Confirm = () => {
  return (
    <div>
      <ListoDiv>
        <br />
        <br />
        <br />
        <br />
        <Logo>
          <img src={Ellipse} alt="imagen" />
        </Logo>
        <br />
        <br />
        <Listo>
          <h3>
            ¡LISTO! <br />
            SE ACREDITÓ TU PAGO
            </h3>
          <p>Operación N° xxxxxxxx</p>
        </Listo>

        <br />
        <br />
        <br />
        <br />
        <Confirmar>Finalizar</Confirmar>
      </ListoDiv>
    </div>
  );
};

export default Confirm;
