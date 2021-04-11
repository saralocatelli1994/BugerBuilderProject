import React, { FC, useState } from "react";

import Burger from "../../components/Burger/Burger";
import { IngredientChoice } from "../definitions";

const BurgerBuilder: FC = () => {
  const [ingredients, setIngredients] = useState<IngredientChoice>({
    bacon: 1,
    salad: 1,
    meat: 2,
    cheese: 1,
  });
  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Builder</div>
    </>
  );
};

export default BurgerBuilder;
