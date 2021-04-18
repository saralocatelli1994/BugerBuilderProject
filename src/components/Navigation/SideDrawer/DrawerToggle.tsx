import React, { FC } from "react";

import { DrawerToggleStyled, SingleMenuLine } from "./sidedrawer.components";

interface Props {
  clicked: () => void;
}
const DrawerToggle: FC<Props> = (props: Props) => (
  <DrawerToggleStyled onClick={props.clicked}>
    <SingleMenuLine></SingleMenuLine>
    <SingleMenuLine></SingleMenuLine>
    <SingleMenuLine></SingleMenuLine>
  </DrawerToggleStyled>
);

export default DrawerToggle;
