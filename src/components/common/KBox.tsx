import { Box, CSSObject } from "@chakra-ui/react";

export enum BoxCase {
  big,
  small,
}

interface WhiteBox {
  children: JSX.Element;
  type?: BoxCase;
  width?: string;
}

const KBox = (props: WhiteBox) => {
  const sideBodyStyle: CSSObject = {
    bg: "#fff",
    h: props.type === BoxCase.small ? "auto" : "100%",
    w: props.type === BoxCase.small ? props.width : "100%",
    borderRadius: props.type === BoxCase.small ? "20px" : "60px 0 0 60px",
    padding: props.type === BoxCase.small ? "15px" : "30px",
  };
  return <Box sx={sideBodyStyle}>{props.children}</Box>;
};
KBox.defaultProps = {
  type: BoxCase.big,
};
export default KBox;
