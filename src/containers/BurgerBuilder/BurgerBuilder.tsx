import React, { FC } from "react";

import Burger from "../../components/Burger/Burger";

const BurgerBuilder: FC = () => {
  return (
    <>
      <Burger />
      <div>Builder</div>
    </>
  );
};

export default BurgerBuilder;
