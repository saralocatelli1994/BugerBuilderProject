import React, { FC } from "react";

import { Ingredient, IngredientChoice } from "../../../containers/definitions";
import BuildControl from "./BuildControl/BuildControl";
import { BuildControlsStyle, OrderButton } from "./buildcontrols.components";

interface Labels {
  label: string;
  type: Ingredient;
  //ingredients: IngredientChoice;
}

const controls: Labels[] = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

interface Props {
  ingredientAdded: (type: Ingredient) => void;
  ingredientRemoved: (type: Ingredient) => void;
  ingredients: IngredientChoice;
  price: number;
  purchasable: boolean;
  onPurchase: () => void;
}

const BuildControls: FC<Props> = (props: Props) => (
  <BuildControlsStyle>
    <p>
      Total price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((item: Labels, i) => {
      const disabled = props.ingredients[item.type];
      return (
        <BuildControl
          key={i}
          label={item.type}
          added={() => props.ingredientAdded(item.type)}
          removed={() => props.ingredientRemoved(item.type)}
          disabled={disabled !== undefined && disabled === 0}
        />
      );
    })}
    <OrderButton disabled={!props.purchasable} onClick={props.onPurchase}>
      ORDINA
    </OrderButton>
  </BuildControlsStyle>
);

export default BuildControls;
