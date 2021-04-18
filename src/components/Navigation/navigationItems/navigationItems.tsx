import React, { FC } from "react";

import NavigationItem from "./Navigation/NavigationItem";
import { NavigationItemsStyled } from "./navigationitems.components";

const NavigationItems: FC = () => (
  <NavigationItemsStyled>
    <NavigationItem link={"/"} active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link={"/"}>Checkout</NavigationItem>
  </NavigationItemsStyled>
);

export default NavigationItems;
