import React from "react";
import { Logo, Listo, ListoDiv, Confirmar } from "../components/elements";

const Confirm = () => {
  return (
    <div>
      <ListoDiv>
        <br/>
        <br/>
        <br/>
        <br/>
        <Logo>
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
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
