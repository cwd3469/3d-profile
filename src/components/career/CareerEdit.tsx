import { Box, Button, Input, Flex, Text, Grid } from '@chakra-ui/react';
import { useState } from 'react';
interface CareerEdit {
  close: () => void;
}

interface CareerInput {
  type: string;
  label: string;
  outData?: () => void;
  inData: string;
  grow: string;
  placeholder: string;
}

const CareerEdit = (props: CareerEdit) => {
  const [projectTitle, setProjectTitle] = useState('');
  return (
    <Box border="1px solid #ddd" borderRadius="15px" p="14px">
      <Flex flexDirection="column" gap="15px">
        <Flex w="100%" gap="10px"></Flex>
        <Flex gap="10px" justifyContent="center">
          <Button bg="#fff" color="#089BAB" border="1px solid #089BAB" onClick={props.close}>
            취소
          </Button>
          <Button bg="#089BAB" color="#fff">
            저장
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

const CareerInput = (props: CareerInput) => {
  return (
    <Flex flexDirection="column">
      <Text>{props.label}</Text>
      <Input size="sm" placeholder={props.placeholder} />
    </Flex>
  );
};

export default CareerEdit;
