import { Button, CSSObject } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export const GraphBtn = (props: { text?: string; Icon?: JSX.Element; onClick?: MouseEventHandler<HTMLButtonElement> }) => {
  const BtnStyle: CSSObject = {
    color: "#5CBEC7",
    padding: "0px",
    height: "30px",
    minWidth: "30px",
    fontSize: "12px",
  };
  return (
    <Button sx={BtnStyle} onClick={props.onClick} w="auth">
      {props.Icon}
      {props.text}
    </Button>
  );
};
