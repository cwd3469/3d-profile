import { Box, Button, CSSObject } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import React from 'react';

export const GraphBtn = (props: {
  text?: string;
  Icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}) => {
  const BtnStyle: CSSObject = {
    color: props.active ? '#edf2f7' : '#5CBEC7',
    bg: props.active ? '#5CBEC7' : '#edf2f7',
    padding: '0px',
    height: '30px',
    minWidth: '30px',
    fontSize: '12px',
  };
  return (
    <Button sx={BtnStyle} onClick={props.onClick} w="auth">
      {props.Icon}
      {props.text}
    </Button>
  );
};
GraphBtn.defaultProps = {
  active: false,
};

interface GraphButton {
  text?: string;
  Icon?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  big?: boolean;
}

export const RoundBtn = (props: GraphButton) => {
  const BtnStyle: CSSObject = {
    color: '#5CBEC7',
    padding: '0px',
    height: props.big ? '70px' : '30px',
    width: props.big ? '70px' : '30px',
    minWidth: '30px',
    fontSize: props.big ? '20px' : '12px',
    borderRadius: '100%',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <Button sx={BtnStyle} onClick={props.onClick}>
      {props.Icon}
      {props.text}
    </Button>
  );
};

RoundBtn.defaultProps = {
  big: false,
};
