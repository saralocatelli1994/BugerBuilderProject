import _ from "lodash";
import React, { FC } from "react";

import { IngredientChoice } from "../../../containers/definitions";
import { Danger, Success } from "../../UI/Button/button.component";

interface Props {
  ingredients: IngredientChoice;
  purchaseCanceled: () => void;
  purchaseContinued: () => void;
  price: number;
}

const OrderSummary: FC<Props> = (props: Props) => {
  const values = _.values(props.ingredients);
  const ingredientSummary = _.keys(props.ingredients).map((key, idx) => {
    return (
      <li key={idx}>
        <span style={{ transform: "capitalize" }}>{key}</span>:{values[idx]}
      </li>
    );
  });
  return (
    <>
      <h3>Il tuo ordine</h3>
      <p>Hai scelto i seguenti ingredienti:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <b>Prezzo totale: {props.price} euro</b>
      </p>
      <p>Proseguire?</p>
      <Danger onClick={props.purchaseCanceled}>Annulla</Danger>
      <Success onClick={props.purchaseContinued}>Continua</Success>
    </>
  );
};

export default OrderSummary;
