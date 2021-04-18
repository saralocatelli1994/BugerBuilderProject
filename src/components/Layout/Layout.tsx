import React, { FC, ReactNode, useState } from "react";

import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import { Content } from "./components";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);
  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerOpenHandler} />
      <SideDrawer isOpen={showSideDrawer} onClose={sideDrawerCloseHandler} />
      <Content>{props.children}</Content>
    </>
  );
};

export default Layout;
