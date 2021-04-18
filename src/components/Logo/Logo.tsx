import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import { BurgerLogo, Image } from "./logo.components";
const Logo = () => (
  <BurgerLogo>
    <Image src={burgerLogo} alt={"MyBugere"} />
  </BurgerLogo>
);

export default Logo;
