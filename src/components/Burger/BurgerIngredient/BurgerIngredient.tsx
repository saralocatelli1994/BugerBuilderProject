import PropTypes from "prop-types";
import React, { FC } from "react";

import {
  Bacon,
  BreadBottom,
  BreadTop,
  Cheese,
  Meat,
  Salad,
  Seeds1,
  Seeds2,
} from "./BurgerIngredient.components";

interface Props {
  type:
    | "bread-bottom"
    | "bread-top"
    | "seeds1"
    | "seeds2"
    | "meat"
    | "cheese"
    | "salad"
    | "bacon";
}

const Map = {
  "bread-bottom": <BreadBottom />,
  "bread-top": (
    <>
      <BreadTop>
        <Seeds1 />
        <Seeds2 />
      </BreadTop>
    </>
  ),
  seeds1: <Seeds1 />,
  seeds2: <Seeds2 />,
  meat: <Meat />,
  cheese: <Cheese />,
  salad: <Salad />,
  bacon: <Bacon />,
};

const BurgerIngredient: FC<Props> = (props: Props) => {
  const ingredient = Map[props.type];

  return <>{ingredient}</>;
};

export default BurgerIngredient;
