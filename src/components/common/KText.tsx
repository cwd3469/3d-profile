import { CSSObject, Heading } from '@chakra-ui/react';

export const GrayDate = (props: { date: string }) => {
  const afterLine: CSSObject = {
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '50%',
      height: '2px',
      backgroundColor: '#E2EDEE',
    },
  };
  return (
    <Heading fontSize="m" color="#969CA4" sx={afterLine}>
      {props.date}
    </Heading>
  );
};
