import React, { FC } from "react";

import { BackdropStyle } from "./backdrop.components";

interface Props {
  show: boolean;
  clicked: () => void;
}
const Backdrop: FC<Props> = (props: Props) => (
  <>
    {props.show && <BackdropStyle show={props.show} onClick={props.clicked} />}
  </>
);

export default Backdrop;
