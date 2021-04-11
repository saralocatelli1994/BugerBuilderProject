import React, { FC, ReactNode } from "react";

import { Content } from "./components";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, BAckdrop</div>
      <Content>{props.children}</Content>
    </>
  );
};

export default Layout;
