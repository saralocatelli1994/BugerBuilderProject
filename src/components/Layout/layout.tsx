import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => (
  <>
    <div />
    <main>{props.children}</main>
  </>
);

export default Layout;
