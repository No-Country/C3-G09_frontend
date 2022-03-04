import React from "react";

import {
  AgregarDinero,
  HeaderPago,
  Hr,
  FormularioAddMoney,
  InputAddMoney,
} from "../components/elements";

const AddMoney = () => {
  return (
    <div>
      <AgregarDinero>
        <HeaderPago>
          <p> Agregar Dinero </p>
        </HeaderPago>

        <FormularioAddMoney>
          <h3>Importe a acreditar</h3>
          <InputAddMoney>
            <span>
              <input type="number" />
            </span>
          </InputAddMoney>
          <Hr></Hr>
          <h3>Forma de pago</h3>
          <label for="Pago">Tarjeta de Pago</label> <br />
          <select id="pago" classname="formadepago">
            <br />
            <option value="Nueva tarjeta">Nueva tarjeta</option>
            <option value="Amex">MercadoPago</option>
          </select>
          <Hr></Hr>
          <label for="Pago">Forma de Pago</label> <br />
          <select id="pago" classname="formadepago">
            <br />
            <option value="Visa">Visa</option>
            <option value="Amex">Amex</option>
            <option value="Dinners">Dinners</option>
            <option value="Cabal">Cabal</option>
            <option value="Maestro">Maestro</option>
            <option value="Mastercard">Mastercard</option>
          </select>
          <Hr></Hr>
          <p>Datos de tarjeta </p>
          <input type="number" placeholder="Número de tarjeta (16 digitos)" />
          <br />
          <input type="date" placeholder="Vencimiento" /> <br />
          <input
            type="number"
            placeholder="Código de seguridad (3 digitos)"
          />{" "}
          <br />
          <label>
            <input type="checkbox" />
            <span classname="checkmark">
              Recordar tarjeta para futuras recargas de saldo
            </span>
          </label>
        </FormularioAddMoney>
        <Hr></Hr>
      </AgregarDinero>
    </div>
  );
};

export default AddMoney;
