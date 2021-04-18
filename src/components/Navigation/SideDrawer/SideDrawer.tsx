import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../navigationItems/navigationItems";
import { LogoWarpper, StyledDrawer } from "./sidedrawer.components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: FC<Props> = (props: Props) => {
  return (
    <>
      <Backdrop clicked={props.onClose} show={props.isOpen} />
      <StyledDrawer open={props.isOpen}>
        <LogoWarpper>
          <Logo />
        </LogoWarpper>
        <NavigationItems />
      </StyledDrawer>
    </>
  );
};

export default SideDrawer;
