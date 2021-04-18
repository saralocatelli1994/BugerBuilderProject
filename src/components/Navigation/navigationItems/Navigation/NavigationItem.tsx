import React, { FC, ReactNode } from "react";

import { NavigationA, NavigationItemStyled } from "./navigationitem.components";

interface Props {
  children: ReactNode;
  link: string;
  active?: boolean;
}

const NavigationItem: FC<Props> = (props: Props) => (
  <NavigationItemStyled>
    <NavigationA href={props.link} active={props.active}>
      {props.children}
    </NavigationA>
  </NavigationItemStyled>
);

export default NavigationItem;
