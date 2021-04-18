import React, { FC } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../navigationItems/navigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import { DesktopyOnly } from "./toolbar.components";
import { ToolbarLogoWrapper, ToolbarStyled } from "./toolbar.components";

interface Props {
  drawerToggleClicked: () => void;
}

const Toolbar: FC<Props> = (props: Props) => (
  <ToolbarStyled>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <ToolbarLogoWrapper>
      <Logo />
    </ToolbarLogoWrapper>

    <DesktopyOnly>
      <NavigationItems />
    </DesktopyOnly>
  </ToolbarStyled>
);
export default Toolbar;
