import React from "react";

import {
  AgregarDinero,
  HeaderAdd,
  Hr,
  FormularioAddMoney,
  InputAddMoney,
  Confirmar,
  IngresarPago,
} from "../components/elements";

const AddMoney = () => {
  return (
    <div>
      <AgregarDinero>
        <HeaderAdd>
          <p> Agregar Dinero </p>
        </HeaderAdd>

        <FormularioAddMoney>
          <h3>Importe a acreditar</h3>

          <InputAddMoney>
            <span>
              <input type="number" placeholder="$" />
            </span>

           
            <p>Forma de pago</p>
            <span>
              <label for=""></label>
              <select id="" name="">
                <option value="Nueva tarjeta">Nueva tarjeta</option>
              </select>
            </span>

            <span>
              <label for=""></label>
              <select id="" name="">
              <option value="Banco">Visa</option>
                <option value="Banco">Amex</option>
                <option value="Banco">Dinners</option>
                <option value="Banco">Cabal</option>
                <option value="Banco">Maestro</option>
                <option value="Banco">Mastercard</option>
              </select>
            </span>

            <span>
              <label for=""></label>
              <select id="" name="">
              <option value="Banco">Banco Macro</option>
              <option value="Banco">HSBC Bank Argentina</option>
              <option value="Banco">Santander Rio</option>
              <option value="Banco">ISBC Banck</option>
              <option value="Banco">Galicia</option>
              <option value="Banco">Banco Nacion</option>

              </select>
            </span>
            <br /><br /><br />

            <p>Datos tarjeta</p>
            <span>
              <input type="number" placeholder="Numero de tarjeta (18 digitos)" />
          
            
          
              <input type="number" placeholder="Vencimiento" />
          
            
            
              <input type="number" placeholder="Codigo de seguridad (3 digitos)" />
            </span>

           

          </InputAddMoney>
          <br />
          <label>
            <input type="checkbox" />
            <span classname="checkmark">
              Recordar tarjeta para futuras recargas de saldo
            </span>
          </label>
        </FormularioAddMoney>
       

        <Confirmar>pagar</Confirmar>
      </AgregarDinero>
    </div>
  );
};

export default AddMoney;
