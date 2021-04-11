import _ from "lodash";
import React, { FC } from "react";

import { Ingredient, IngredientChoice } from "../../containers/definitions";
import { BurgerStyle } from "./burger.components";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Props {
  ingredients: IngredientChoice;
}

const Burger: FC<Props> = (props: Props) => {
  const tranformedIngredients: Ingredient[] = [];
  _.keys(props.ingredients).forEach((key) => {
    if (
      key === "cheese" ||
      key === "meat" ||
      key === "bacon" ||
      key === "salad"
    ) {
      const v: number | undefined = props.ingredients[key];
      if (v) {
        for (let i = 0; i < v; i++) {
          tranformedIngredients.push(key);
        }
      }
    }
  });

  return (
    <BurgerStyle>
      <BurgerIngredient type={"bread-top"} />
      {tranformedIngredients.map((ingr, i) => {
        return <BurgerIngredient key={i} type={ingr} />;
      })}
      <BurgerIngredient type={"bread-bottom"} />
    </BurgerStyle>
  );
};

export default Burger;
