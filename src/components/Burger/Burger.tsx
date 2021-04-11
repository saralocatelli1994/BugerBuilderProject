import React, { FC } from "react";

import { BurgerStyle } from "./burger.components";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger: FC = () => {
  return (
    <BurgerStyle>
      <BurgerIngredient type={"bread-top"} />
      <BurgerIngredient type={"cheese"} />
      <BurgerIngredient type={"meat"} />
      <BurgerIngredient type={"bread-bottom"} />
    </BurgerStyle>
  );
};

export default Burger;
