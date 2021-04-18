import React, { FC, ReactNode } from "react";

import Backdrop from "../Backdrop/Backdrop";
import { ModalStyle } from "./modal.components";

interface Props {
  children: ReactNode;
  show: boolean;
  modalClosed: () => void;
}
const Modal: FC<Props> = (props: Props) => (
  <>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <ModalStyle show={props.show}>{props.children}</ModalStyle>
  </>
);

export default Modal;
