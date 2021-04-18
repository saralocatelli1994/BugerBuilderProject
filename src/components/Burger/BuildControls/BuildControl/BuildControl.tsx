import React, { FC } from "react";

import { Ingredient } from "../../../../containers/definitions";
import {
  BuildControlStyle,
  Label,
  Less,
  More,
} from "./BuildControl.components";

interface Props {
  label: Ingredient;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

const BuildControl: FC<Props> = (props: Props) => (
  <BuildControlStyle>
    <Label>{props.label}</Label>
    <Less onClick={props.removed} disabled={props.disabled}>
      Less
    </Less>
    <More onClick={props.added}>More</More>
  </BuildControlStyle>
);

export default BuildControl;
